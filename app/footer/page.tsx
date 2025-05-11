import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { IndianRupee, Handshake, Truck } from "lucide-react";

export default function FooterPage() {
  return (
    <div className="w-full h-[1156px] flex flex-col">
      {/* Top Half - 578px */}
      <div className="h-[578px] bg-white flex items-center justify-center">
        {/* Blue Banner - 1240px × 360px */}
        <div className="w-[1240px] h-[360px] bg-[#2e4bcc] rounded-xl overflow-hidden flex relative">
          {/* Left Content */}
          <div className="p-12 w-[620px]">
            <h2 className="h-[42.05px] w-[512.71px] text-4xl font-bold text-white mb-4">Ready to Ship Smarter?</h2>
            <div className="text-white text-lg mb-8">
           <p className="w-[693.34px] h-[73.01px]">
           You've seen the chaos. Now experience control ...
              <br/>
           Smarter shipping, fewer returns, happier customers.
           </p>
           {/* <p className="w-[693.34px] h-[73.01px] mt-2">
           
           </p> */}
         </div>


         <div className="flex flex-row gap-6 mb-8">
      <div className="flex items-center">
        <IndianRupee className="text-blue-200 mr-2 w-4 h-4" />
        <span className="text-white text-sm">No setup fees</span>
      </div>
      <div className="flex items-center">
        <Handshake className="text-blue-200 mr-2 w-4 h-4" />
        <span className="text-white text-sm">No commitments</span>
      </div>
      <div className="flex items-center">
        <Truck className="text-blue-200 mr-2 w-4 h-4" />
        <span className="text-white text-sm">Just better shipping.</span>
      </div>
    </div>

    <Link
      href="#"
      className="w-[324px] h-[48px] inline-flex items-center justify-center gap-2  border border-white px-6 py-3 text-sm font-medium text-blue-700 bg-white hover:bg-blue-50 transition"
    >
      Get Started with <span className="font-semibold">Logiance</span>
      <ArrowRight className="w-6 h-" />
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
      <footer className="w-full bg-[#F1F5F9] py-8 border-t border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="text-blue-600 font-medium">//shoot us an email</div>
            <div className="text-[#334155]">contact@logiance.com</div>
            
            <div className="mt-6 text-blue-600 font-medium">//located in India, working globally</div>
            <div className="text-[#334155]">
              123 Greenway Avenue, Ghaziabad,<br />
              Uttar Pradesh, India
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <div className="text-blue-600 font-medium">//navigation</div>
            <ul className="space-y-2 text-[#334155]">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/features" className="hover:text-blue-600">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-600">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
              <li><Link href="/connect" className="hover:text-blue-600">Connect +</Link></li>
              <li><Link href="/resources" className="hover:text-blue-600">Resources</Link></li>
              <li><Link href="/careers" className="hover:text-blue-600">Careers</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="text-blue-600 font-medium">//Socials</div>
            <ul className="space-y-2 text-[#334155]">
              <li><Link href="#" className="hover:text-blue-600">Twitter(X)</Link></li>
              <li><Link href="#" className="hover:text-blue-600">LinkedIn</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Discord</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Instagram</Link></li>
              <li><Link href="#" className="hover:text-blue-600">Facebook</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center pb-8 pt-6 border-t border-gray-200">
          {/* Logo with Gradient */}
          <h1 className="text-7xl font-bold bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text mb-8" style={{ width: '1038px', height: '125px', display: 'flex', alignItems: 'center' }}>
            Logiance Logistics
          </h1>

          {/* Copyright and Privacy */}
          <div className="flex flex-col md:flex-row justify-between w-full text-sm text-[#4653DC] mt-4">
            <div>© 2025 Logiance Logistics // ALL RIGHTS RESERVED</div>
            <div>
              We respect your PRIVACY
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}
