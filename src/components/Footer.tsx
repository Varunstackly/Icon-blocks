import React from 'react';
import Link from 'next/link';
import { Mail, Send, Globe } from 'lucide-react';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#051b3b] text-white py-12 shrink-0 w-full relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 lg:gap-8 mb-8 md:mb-12">
          {/* Column 1 */}
          <div className="flex flex-col gap-6 md:gap-6 sm:col-span-2 md:col-span-1">
            {/* FORM */}
            <form className="w-full flex items-center gap-2">
              {/* INPUT */}
              <div className="flex-grow relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white text-black text-sm outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* SEND BUTTON */}
              <button
                type="submit"
                className="text-white hover:text-blue-300 transition group cursor-pointer"
              >
                <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>

            {/* ADDRESS */}
            <div className="text-[13px] text-white/80 leading-relaxed space-y-1">
              <h4 className="font-bold text-white mb-3 text-[15px]">Headquarters</h4>
              <p>MMR COMPLEX, SALEM,</p>
              <p>Tamil Nadu 636008</p>
            </div>
          </div>

          {/* PRODUCT */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Product</h3>
            <div className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Features
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Templates
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Pricing
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Changelog
              </Link>
            </div>
          </div>

          {/* RESOURCES */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Resources</h3>
            <div className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Documentation
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                API Reference
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Blog
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Status
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-white text-[15px]">Company</h3>
            <div className="flex flex-col gap-3 text-[13px] text-white/70">
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                About
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Privacy Policy
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Terms of Service
              </Link>
              <Link href="/page-not-found" className="hover:text-white cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          {/* LOGO + ABOUT */}
          <div className="flex flex-col gap-5 items-start md:items-end text-left md:text-right sm:col-span-2 md:col-span-1 lg:col-span-1">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                className="flex h-10 w-fit items-center justify-center rounded-[50%] bg-white px-4 transition hover:scale-105"
              >
                <img src="/stackly-logo1.png" alt="Stackly logo" className="h-[18px] w-auto" />
              </Link>
            </div>

            <p className="text-[12px] text-white/70 max-w-[220px]">
              The <strong className="text-white">NO-CODE</strong> website builder for everyone. Powered by AWS infrastructure, built by The <strong className="text-white">Stackly</strong> team.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* UPDATED SOCIAL ICONS */}
          <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-4 text-[#051b3b]">
            <a
              href="https://www.facebook.com/thestackly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-600 transition"
            >
              <FaFacebook size={14} />
            </a>
            <a
              href="https://www.youtube.com/@TheStackly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-red-600 transition"
            >
              <FaYoutube size={14} />
            </a>
            <a
              href="https://www.instagram.com/the_stackly/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-pink-600 transition"
            >
              <FaInstagram size={14} />
            </a>
            <a
              href="https://x.com/the_stackly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-black transition"
            >
              <FaTwitter size={14} />
            </a>
            <a
              href="https://www.linkedin.com/company/the-stackly"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-blue-700 transition"
            >
              <FaLinkedin size={14} />
            </a>
            <a
              href="https://www.thestackly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 hover:text-green-600 transition"
            >
              <Globe size={14} />
            </a>
          </div>

          {/* COPYRIGHT */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-[12px] text-white/70 tracking-wide">
            <div className="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
              <span className="text-[14px] leading-none mb-0.5">•</span>
              <Link href="/page-not-found">Terms of use</Link>
            </div>
            <div className="flex items-center gap-1.5 hover:text-white transition cursor-pointer">
              <span className="text-[14px] leading-none mb-0.5">•</span>
              <Link href="/page-not-found">Privacy Policy</Link>
            </div>
            <span className="ml-1 md:ml-3">© 2018-2026 thestackly.com, Inc</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
