import Link from "next/link"
import Image from "next/image"
import { Arrow } from "@/components/icons/delivery/Arrow";
import { IndianRupee } from "lucide-react";
import { Commitment } from "@/components/icons/delivery/Commitment";
import {Truck} from "@/components/icons/delivery/Truck";

export default function FooterPage() {
  return (
    <div className="w-full h-[1156px] flex flex-col">
      {/* Top Half - 578px */}
      <div className="h-[578px] bg-white flex items-center justify-center">
  {/* Blue Banner - 1240px × 360px */}
  <div
    className="w-[1200px] h-[360px] flex-shrink-0 rounded-2xl overflow-hidden flex relative"
    style={{
      background: "linear-gradient(98deg, #2A35A4 32.52%, #3E49B8 63.51%, #407FFF 94.49%)",
      borderRadius: "16px"
    }}
  >
    {/* Left Content - Added z-index to ensure text displays over image */}
  <div className="pt-4 pb-8 px-9 w-[620px] relative z-10 flex flex-col">
  <h2
    className="w-[512.71px] text-white mb-6 font-[Geist] leading-[130%] tracking-[-1.44px] pt-0"
    style={{
      fontFeatureSettings: "'liga' off, 'clig' off",
      fontWeight: 500, // Increased from 126 to 500 for bolder text
      fontSize: "48px",
      fontStyle: "normal"
    }}
  >
    Ready to Ship Smarter?
  </h2>
      <div className="mb-8">
  <p
    className="text-white font-[Satoshi] tracking-[-0.96px] leading-[130%] whitespace-nowrap"
    style={{
      fontFeatureSettings: "'liga' off, 'clig' off",
      fontSize: "32px",
      fontWeight: 500,
      fontStyle: "normal",
      alignSelf: "stretch",
      textShadow: "0px 0px 3px rgba(0,0,0,0.2)"
    }}
  >
    You've seen the chaos. Now experience control ...
  </p>
  <p
    className="text-white font-[Satoshi] tracking-[-0.96px] leading-[130%] mt-2 whitespace-nowrap"
    style={{
      fontFeatureSettings: "'liga' off, 'clig' off",
      fontSize: "32px",
      fontWeight: 500,
      fontStyle: "normal",
      alignSelf: "stretch",
      textShadow: "0px 0px 3px rgba(0,0,0,0.2)"
    }}
  >
    Smarter shipping, fewer returns, happier customers.
  </p>
</div>

     <div className="flex flex-row gap-6 mb-6">
  <div className="flex items-center">
    <IndianRupee className="text-blue-200 mr-2 w-5 h-5" />
    <span className="text-white font-[Satoshi] text-lg font-medium tracking-[-0.54px] leading-[130%]" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>No setup fees</span>
  </div>
  <div className="flex items-center">
  <div style={{ width: '20px', height: '20px' }} className="text-blue-200 mr-2">
    <Commitment className="w-full h-full" />
  </div>
  <span className="text-white font-[Satoshi] text-lg font-medium tracking-[-0.54px] leading-[130%]" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>No commitments</span>
</div>

<div className="flex items-center">
  <div style={{ width: '20px', height: '20px' }} className="text-blue-200 mr-2">
    <Truck className="w-full h-full" />
  </div>
  <span className="text-white font-[Satoshi] text-lg font-medium tracking-[-0.54px] leading-[130%]" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>Just better shipping.</span>
</div>
</div>

      <Link
        href="#"
        className="flex w-[324px] h-[48px] px-9 py-2 justify-center items-center gap-2 text-blue-700 bg-white hover:bg-blue-50 transition font-[Geist] text-base font-medium leading-[130%] rounded-xl"
        style={{
          fontFeatureSettings: "'liga' off, 'clig' off",
          border: '1.5px solid rgba(0, 0, 0, 0.09)',
          borderRadius: '12px'
        }}
      >
        Get Started with <span className="font-semibold">Logiance</span>
        <Arrow/>
      </Link>
    </div>
    
    {/* Right Image Container with overflow hidden - Added lower z-index */}
    <div className="absolute right-0 top-0 h-full overflow-hidden z-0">
      <Image
        src="/truck-image.png"
        alt="Delivery truck"
        width={780}
        height={578}
        className="h-full object-cover"
        style={{
          objectPosition: "right center",
          marginTop: "155px",
          transform: "translateY(-80px) scale(1.15)"
        }}
        priority
      />
    </div>
  </div>
</div>

      {/* Bottom Half - Footer */}
      <footer className="w-full bg-[#F1F5F9] py-8 border-t border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="text-[#4653DC] font-medium font-[Satoshi] text-lg leading-[130%] tracking-[-0.54px]">//shoot us an email</div>
              <div className="text-[#334155] font-[Satoshi] text-xl font-medium leading-[130%] tracking-[-0.6px]">contact@logiance.com</div>
              
              <div className="mt-6 text-[#4653DC] font-medium font-[Satoshi] text-lg leading-[130%] tracking-[-0.54px]">//located in India, working globally</div>
              <div className="text-[#334155] font-[Satoshi] text-xl font-medium leading-[130%] tracking-[-0.6px]">
                123 Greenway Avenue, Ghaziabad,<br />
                Uttar Pradesh, India
              </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <div className="text-[#4653DC] font-medium font-[Satoshi] text-lg leading-[130%] tracking-[-0.54px]">//navigation</div>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Home</Link></li>
                <li><Link href="/features" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Features</Link></li>
                <li><Link href="/pricing" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Pricing</Link></li>
                <li><Link href="/about" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">About</Link></li>
                <li><Link href="/connect" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Connect +</Link></li>
                <li><Link href="/resources" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Resources</Link></li>
                <li><Link href="/careers" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Careers</Link></li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <div className="text-[#4653DC] font-medium font-[Satoshi] text-lg leading-[130%] tracking-[-0.54px]">//Socials</div>
              <ul className="space-y-2">
                <li><Link href="#" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Twitter(X)</Link></li>
                <li><Link href="#" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">LinkedIn</Link></li>
                <li><Link href="#" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Discord</Link></li>
                <li><Link href="#" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Instagram</Link></li>
                <li><Link href="#" className="text-[#334155] font-[Satoshi] text-xl font-bold leading-[130%] tracking-[-0.72px] hover:text-[#4653DC]">Facebook</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center pb-8 pt-6 border-t border-gray-200">
            {/* Logo with Gradient */}
            <h1 
              className="text-8xl font-medium font-['Euclid_Circular_B'] leading-[130%] tracking-[-3.84px] bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-transparent bg-clip-text mb-8"
              style={{ width: '1038px', height: '125px', display: 'flex', alignItems: 'center' }}
            >
              Logiance Logistics
            </h1>

            {/* Copyright and Privacy */}
            <div className="flex flex-col md:flex-row justify-between w-full mt-4">
              <div className="text-[#4653DC] font-[Satoshi] text-lg font-medium leading-[130%] tracking-[-0.54px]">© 2025 Logiance Logistics // ALL RIGHTS RESERVED</div>
              <div className="text-[#4653DC] font-[Satoshi] text-lg font-medium leading-[130%] tracking-[-0.54px]">
                We respect your PRIVACY
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
