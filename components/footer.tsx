import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function FooterPage() {
  return (
    <div className="w-full h-[1156px] flex flex-col">
      {/* Top Half - 578px */}
      <div className="h-[578px] bg-white flex items-center justify-center">
        {/* Blue Banner - 1240px × 360px */}
        <div className="w-[1240px] h-[360px] bg-[#2e4bcc] rounded-xl overflow-hidden flex relative">
          {/* Left Content */}
          <div className="p-12 w-[620px]">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Ship Smarter?</h2>
            <p className="text-white text-lg mb-8">
              You've seen the chaos. Now experience control ...
              <br />
              smarter shipping, fewer returns, happier customers.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                <span className="text-white text-sm">No setup fees</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                <span className="text-white text-sm">No commitments</span>
              </div>
              <div className="flex items-center">
                <span className="text-blue-200 mr-2">✓</span>
                <span className="text-white text-sm">Just better shipping.</span>
              </div>
            </div>

            <Link
              href="#"
              className="inline-flex items-center bg-white text-[#2e4bcc] px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              Get Started with Logiance <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="absolute right-0 top-0 h-full w-[620px]">
            <Image
              src="/truck-image.png"
              alt="Shipping truck"
              width={620}
              height={360}
              className="h-full w-full object-contain object-right"
            />
          </div>
        </div>
      </div>

      {/* Bottom Half - 578px */}
      <div className="h-[578px] bg-gray-100 pt-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-3 gap-12 mb-16">
            {/* Contact */}
            <div>
              <div className="mb-4 text-[#2e4bcc] text-sm font-medium">//shoot us an email</div>
              <a href="mailto:contact@logiance.com" className="text-gray-700 hover:text-[#2e4bcc]">
                contact@logiance.com
              </a>

              <div className="mt-8 mb-4 text-[#2e4bcc] text-sm font-medium">//located in India, working globally</div>
              <address className="not-italic text-gray-700">
                123 Greenway Avenue, Ghaziabad,
                <br />
                Uttar Pradesh, India
              </address>
            </div>

            {/* Navigation */}
            <div>
              <div className="mb-4 text-[#2e4bcc] text-sm font-medium">//navigation</div>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-700 hover:text-[#2e4bcc]">
                  Home
                </Link>
                <Link href="/features" className="text-gray-700 hover:text-[#2e4bcc]">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-700 hover:text-[#2e4bcc]">
                  Pricing
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-[#2e4bcc]">
                  About
                </Link>
                <Link href="/connect" className="text-gray-700 hover:text-[#2e4bcc]">
                  Connect +
                </Link>
                <Link href="/resources" className="text-gray-700 hover:text-[#2e4bcc]">
                  Resources
                </Link>
                <Link href="/careers" className="text-gray-700 hover:text-[#2e4bcc]">
                  Careers
                </Link>
              </nav>
            </div>

            {/* Social */}
            <div>
              <div className="mb-4 text-[#2e4bcc] text-sm font-medium">//Socials</div>
              <nav className="flex flex-col space-y-3">
                <Link href="#" className="text-gray-700 hover:text-[#2e4bcc]">
                  Twitter(X)
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#2e4bcc]">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#2e4bcc]">
                  Discord
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#2e4bcc]">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-700 hover:text-[#2e4bcc]">
                  Facebook
                </Link>
              </nav>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h2 className="text-6xl font-bold text-[#2e4bcc] mb-6 md:mb-0">Logiance Logistics</h2>
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="text-gray-600 text-sm">© 2025 Logiance Logistics // ALL RIGHTS RESERVED</div>
                <div className="text-gray-600 text-sm flex items-center">
                  We respect your{" "}
                  <Link href="/privacy" className="text-[#2e4bcc] ml-1 hover:underline">
                    PRIVACY
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
