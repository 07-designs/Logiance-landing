import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import {List} from "@/components/icons/pricing/List"


export default function PricingPage() {
  return (
    <div className="w-full min-h-screen bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 style={{
            color: "#1D1D1D",
            textAlign: "center",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "Geist",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: 500,  /* Reduced from 700 to 500 to make it less bold */
            lineHeight: "120%", /* 57.6px */
            letterSpacing: "-1.44px"
          }}>Simple pricing, no surprises.</h1>
          <p style={{
            color: "var(--content-normal, #64748B)",
            textAlign: "center",
            fontFeatureSettings: "'liga' off, 'clig' off",
            fontFamily: "Satoshi",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "120%", /* 24px */
            letterSpacing: "-0.6px",
            marginTop: "16px"
          }}>Pay only for what you ship. No setup costs, no hidden fees.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="relative px-6 py-3 bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] rounded-l-md">
              {/* Save 30% label positioned above Annual billing only */}
              <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black text-xs font-semibold px-2 py-0.5 rounded-sm">
                Save 30%
              </span>
              <span style={{
                color: "var(--bg-white, #FFF)",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Satoshi",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "130%", /* 26px */
                letterSpacing: "-0.6px"
              }}>Annual billing</span>
            </button>
            <button type="button" className="px-6 py-3 bg-white rounded-r-md">
              <span style={{
                color: "#64748B",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: "Satoshi",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "130%", /* 26px */
                letterSpacing: "-0.6px"
              }}>Monthly billing</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="relative">
          {/* Decorative curved line left */}
          <div className="hidden lg:block absolute top-32 left-[22%] w-24 h-24">
            <svg viewBox="0 0 100 100" className="text-blue-200">
              <path
                d="M 0,50 C 30,20 70,20 100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Lite Plan */}
            <div className="bg-[#f1f5f9] rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lite</h2>
              <div className="mb-6">
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px"
                }}>Rates starting at</p>
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.72px"
                }}>Rs. 26/ 500 grams</p>
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px",
                  marginTop: "8px"
                }}>Dynamic pricing for sellers who sell at multiple platforms.</p>
              </div>
              <Link
                href="#"
                className="flex justify-center items-center bg-[#3E49B8] text-white py-3 px-4 rounded-md font-medium mb-8 hover:bg-blue-700 transition-colors"
              >
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">
                    <List/>
                    </span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>1 ecommerce channel integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Chat, call and email support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Domestic shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Automated channel order sync</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan - Updated with specific gradient and border-radius */}
            <div className="rounded-[16px] p-8 shadow-lg text-white" style={{background: "linear-gradient(128deg, #2A35A4 58.43%, #3E49B8 78.39%, #407FFF 98.36%)"}}>
              <h2 className="text-3xl font-bold mb-4">Professional</h2>
              <div className="mb-6">
                <p style={{
                  color: "white", /* Keep text white for Professional card */
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px"
                }}>Rates starting at</p>
                <p style={{
                  color: "white", /* Keep text white for Professional card */
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.72px"
                }}>Rs. 20/ 500 grams</p>
                <p style={{
                  color: "white", /* Keep text white for Professional card */
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px",
                  marginTop: "8px"
                }}>Dynamic pricing for sellers who sell at multiple platforms.</p>
              </div>
              <Link
                href="#"
                className="flex justify-center items-center bg-white text-blue-600 py-3 px-4 rounded-md font-medium mb-8 hover:bg-gray-100 transition-colors"
              >
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Multiple ecommerce channel integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Domestic shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Automated channel order sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Free NDR call center setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "white", /* Keep text white for Professional card */
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Multi channel pricing and inventory sync</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#f1f5f9] rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise</h2>
              <div className="mb-6">
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px"
                }}>Customized</p>
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "24px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.72px"
                }}>Shipping solutions</p>
                <p style={{
                  color: "var(--content-muted, #334155)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "130%",
                  letterSpacing: "-0.6px",
                  marginTop: "8px"
                }}>Dynamic pricing for sellers who sell at multiple platforms.</p>
              </div>
              <Link
                href="#"
                className="flex justify-center items-center bg-[#3E49B8] text-white py-3 px-4 rounded-md font-medium mb-8 hover:bg-blue-700 transition-colors"
              >
                Let's talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="mb-4 font-medium">Everything in Professional +</div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0"><List/></span>
                  <span style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "130%",
                    letterSpacing: "-0.48px"
                  }}>Customized integrations</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Decorative curved line right */}
          <div className="hidden lg:block absolute bottom-12 right-[15%] w-24 h-24">
            <svg viewBox="0 0 100 100" className="text-blue-200">
              <path
                d="M 0,50 C 30,80 70,80 100,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}