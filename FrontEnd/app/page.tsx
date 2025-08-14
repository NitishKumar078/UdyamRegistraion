export default function Home() {
  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-gray-100  p-4  flex justify-center ">
        <h2 className="text-lg md:text-2xl font-light text-gray-800 items-center px-28">
          UDYAM REGISTRATION FORM - For New Enterprise who are not Registered
          yet as MSME
        </h2>
      </section>

      {/* Inner Page */}
      <section className="py-4">
        <div className="max-w-6xl mx-auto  px-28">
          {/* Aadhaar Verification Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="bg-primary px-3 py-3">
              <h2 className="text-white ">Aadhaar Verification With OTP</h2>
            </div>

            <div className="p-6 space-y-6">
              {/* Aadhaar Number */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="aadhaarNo"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    1. Aadhaar Number / आधार संख्या
                  </label>
                  <input
                    id="aadhaarNo"
                    type="text"
                    maxLength={12}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#80bdff] focus:outline-none"
                    placeholder="Your Aadhaar No"
                  />
                  <p className="text-red-600 text-sm hidden">Required</p>
                </div>

                {/* Entrepreneur Name */}
                <div>
                  <label
                    htmlFor="ownerName"
                    className="block text-gray-700 font-medium mb-1"
                  >
                    2. Name of Entrepreneur / उद्यमी का नाम
                  </label>
                  <input
                    id="ownerName"
                    type="text"
                    maxLength={100}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#80bdff] focus:outline-none"
                    placeholder="Name as per Aadhaar"
                  />
                  <p className="text-red-600 text-sm hidden">Required</p>
                </div>
              </div>

              {/* Info List */}
              <ul className="list-disc pl-6 text-gray-700 space-y-2 text-[16px]">
                <li>
                  Aadhaar number shall be required for Udyam Registration.
                </li>
                <li>
                  The Aadhaar number shall be of the proprietor in the case of a
                  proprietorship firm, of the managing partner in the case of a
                  partnership firm and of a karta in the case of a Hindu
                  Undivided Family (HUF).
                </li>
                <li>
                  In case of a Company or a Limited Liability Partnership or a
                  Cooperative Society or a Society or a Trust, the organisation
                  or its authorised signatory shall provide its GSTIN(As per
                  applicablity of CGST Act 2017 and as notified by the ministry
                  of MSME
                  <span className="text-[#80bdff] hover:text-[#2956ba]">
                    {" "}
                    vide S.O. 1055(E) dated 05th March 2021
                  </span>
                  ) and PAN along with its Aadhaar number.
                </li>
              </ul>

              {/* Consent Checkbox */}
              <div className="flex items-start space-x-2">
                <input
                  id="declaration"
                  type="checkbox"
                  defaultChecked
                  className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label
                  htmlFor="declaration"
                  className="text-gray-700 text-[16px] leading-relaxed "
                >
                  I, the holder of the above Aadhaar, hereby give my consent to
                  Ministry of MSME, Government of India, for using my Aadhaar
                  number as alloted by UIDAI for Udyam Registration. NIC /
                  Ministry of MSME, Government of India, have informed me that
                  my aadhaar data will not be stored/shared. / मैं, आधार धारक,
                  इस प्रकार उद्यम पंजीकरण के लिए यूआईडीएआई के साथ अपने आधार
                  संख्या का उपयोग करने के लिए सू0ल0म0उ0 मंत्रालय, भारत सरकार को
                  अपनी सहमति देता हूं। एनआईसी / सू0ल0म0उ0 मंत्रालय, भारत सरकार
                  ने मुझे सूचित किया है कि मेरा आधार डेटा संग्रहीत / साझा नहीं
                  किया जाएगा।
                </label>
              </div>

              {/* Buttons */}
              <div>
                <button className="bg-primary hover:bg-[#0069d9] text-white font-medium px-5 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Validate & Generate OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marquee (CSS-based) */}
      <div className="mb-9 text-center">
        <div className="marquee-container">
          <div className="marquee-content">
            <a
              href="docs/OM_regarding_inclusion_of_Traders02072021.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-primary font-semibold "
            >
              Activities (NIC codes) not covered under MSMED Act, 2006 for Udyam
              Registration
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
