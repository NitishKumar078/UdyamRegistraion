// puppeteer-scrape-udyam.js
// Usage: node puppeteer-scrape-udyam.js
const fs = require('fs');
const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
  const page = await browser.newPage();
  await page.goto('https://udyamregistration.gov.in/UdyamRegistration.aspx', { waitUntil: 'networkidle2', timeout: 60000 });

  // Wait for the page to show the New Registration / Aadhaar dialog - adapt selector if needed
  // Many pages open a modal, so find the modal or the Aadhaar input
  //await page.waitForTimeout(2000);
//   await page.waitForNavigation(2000);
  // Attempt to locate inputs (a generic scan)
  const stagaeFirstFields = await page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input, select, textarea, button'));
    return inputs.map(el => {
      const tag = el.tagName.toLowerCase();
      const type = el.getAttribute('type') || (tag === 'select' ? 'select' : tag);
      const name = el.getAttribute('name') || el.id || null;
      const labelEl = (() => {
        // try label[for] then ancestor label then aria-label / placeholder
        const id = el.id;
        if (id) {
          const l = document.querySelector(`label[for="${id}"]`);
          if (l) return l.innerText.trim();
        }
        const ancestorLabel = el.closest('label');
        if (ancestorLabel) return ancestorLabel.innerText.trim();
        if (el.getAttribute('aria-label')) return el.getAttribute('aria-label');
        if (el.placeholder) return el.placeholder;
        return null;
      })();
      return {
        tag,
        type,
        name,
        id: el.id || null,
        label: labelEl,
        placeholder: el.placeholder || null,
        maxlength: el.maxLength > 0 ? el.maxLength : null,
        pattern: el.getAttribute('pattern') || null,
        required: el.required || el.hasAttribute('required'),
        disabled: el.disabled || false,
        dataset: {...el.dataset}
      };
    });
  });

  // (Optional) write out
  const out = { url: page.url(), timestamp: new Date().toISOString(), stagaeFirstFields};
  const filePath = path.join(__dirname, '../FrontEnd', 'udyam-step1-2-fields.json');
  fs.writeFileSync(filePath, JSON.stringify(out, null, 2), 'utf8');
  // console.log('Saved udyam-step1-2-fields.json with', stagaeFirstFields.length, 'items');
  await browser.close();
})();