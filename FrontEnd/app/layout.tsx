// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ChevronUp } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Udyam Registration Portal",
  description:
    "Ministry of Micro, Small & Medium Enterprises - Udyam Registration System",
  keywords: "Udyam, MSME, Registration, Government of India",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="max-w-full ">{children}</main>

          <footer className="bg-[#07154d] text-white ">
            <div className="pt-[60px] pb-7">
              <div className="flex flex-row  gap-8  mx-28 mb-8 justify-center">
                {/* Left Column - Contact Information */}
                <div className="p-2 w-[345px]">
                  <h3 className="text-3xl m-[0px 0px 30px 0px] py-0.5 font-medium">
                    UDYAM REGISTRATION
                  </h3>
                  <div className="space-y-2 footer-row">
                    <p className="text-gray-200 ">Ministry of MSME</p>
                    <p className="text-gray-200 ">Udyog bhawan - New Delhi</p>
                  </div>
                  <div className="mt-6 footer-row">
                    <p className="text-gray-200">
                      <span className="font-bold">Email:</span> champions@gov.in
                    </p>
                  </div>
                  <div className="mt-6 footer-row">
                    <p className="font-semibold text-gray-200">Contact Us</p>
                    <p className="text-gray-200">For Grievances / Problems</p>
                  </div>
                </div>

                {/* Middle Column - Our Services */}
                <div className="p-2 w-[345px]">
                  <h3 className="text-lg font-semibold mb-[12px] text-gray-200 text-[16px]">
                    Our Services
                  </h3>
                  <ul className="space-y-3 text-[14px] ">
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center hover:underline"
                      >
                        <span className="mr-2">›</span>
                        CHAMPIONS
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center hover:underline"
                      >
                        <span className="mr-2">›</span>
                        MSME Samadhaan
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center hover:underline"
                      >
                        <span className="mr-2">›</span>
                        MSME Sambandh
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center hover:underline"
                      >
                        <span className="mr-2">›</span>
                        MSME Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center hover:underline"
                      >
                        <span className="mr-2">›</span>
                        Entrepreneurship Skill Development Programme (ESDP)
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Right Column - Video */}
                <div className="p-2 w-[345px]">
                  <h3 className="text-lg font-semibold mb-6 text-gray-200">
                    Video
                  </h3>
                  <div className="relative">
                    <video
                      src="/udyam.mp4"
                      controls
                      // autoPlay
                      // muted
                      loop
                      className="w-full  shadow-lg"
                      preload="metadata"
                      height={194}
                      width={345}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Copyright and Social */}
              <div className="border-t border-blue-700 px-2 mx-[105px]">
                <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
                  <div className="text-sm text-gray-300 text-center lg:text-left">
                    <p>
                      © Copyright{" "}
                      <span className="font-semibold">Udyam Registration</span>.
                      All Rights Reserved, Website Content Managed by Ministry
                      of Micro Small and Medium Enterprises, GoI
                    </p>
                    <p className="mt-1">
                      Website hosted & managed by National Informatics Centre,
                      Ministry of Communications and IT, Government of India
                    </p>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex space-x-4">
                    <a
                      href="https://twitter.com/minmsme"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Follow us on Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        height="1em"
                        viewBox="0 0 300 300"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.facebook.com/minmsme"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Follow us on Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/minmsme/"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                      aria-label="Follow us on Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Scroll to Top Button */}
              <div className="absolute bottom-4 right-4 d-md-flex">
                <button
                  // onClick={() =>
                  //   window.scrollTo({ top: 0, behavior: "smooth" })
                  // }
                  className="bg-[#07174e] hover:bg-[#0056b3] text-white p-2 rounded-full transition-all duration-200"
                  aria-label="Scroll to top"
                >
                  <ChevronUp className="w-6 h-6" />
                </button>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
