import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="w-full min-h-screen bg-[#f1f5f9] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className=" text-4xl font-bold text-gray-900 mb-2">Simple pricing, no surprises.</h1>
          <p className="text-lg text-gray-600">Pay only for what you ship. No setup costs, no hidden fees.</p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button type="button" className="relative px-6 py-3 bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-white font-medium rounded-l-md">
              <span className="absolute -top-3 right-0 bg-yellow-400 text-xs font-semibold px-2 py-0.5 rounded-sm">
                Save 30%
              </span>
              Annual billing
            </button>
            <button type="button" className="px-6 py-3 bg-white text-gray-700 font-medium rounded-r-md">
              Monthly billing
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
            <div className="bg-[#f1f5f9] border border-blue-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lite</h2>
              <div className="mb-6">
                <p className="text-gray-600">Rates starting at</p>
                <p className="text-2xl font-semibold">Rs. 26/ 500 grams</p>
                <p className="text-gray-600 mt-2">Dynamic pricing for sellers who sell at multiple platforms.</p>
              </div>
              <Link
                href="#"
                className="flex justify-center items-center bg-[#3E49B8] text-white py-3 px-4 rounded-md font-medium mb-8 hover:bg-blue-700 transition-colors"
              >
                Create free account <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">1 ecommerce channel integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">Chat, call and email support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">Domestic shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">Automated channel order sync</span>
                </li>
              </ul>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] rounded-xl p-8 shadow-lg text-white">
              <h2 className="text-3xl font-bold mb-4">Professional</h2>
              <div className="mb-6">
                <p className="text-blue-100">Rates starting at</p>
                <p className="text-2xl font-semibold">Rs. 20/ 500 grams</p>
                <p className="text-blue-100 mt-2">Dynamic pricing for sellers who sell at multiple platforms.</p>
              </div>
              <Link
                href="#"
                className="flex justify-center items-center bg-white text-blue-600 py-3 px-4 rounded-md font-medium mb-8 hover:bg-gray-100 transition-colors"
              >
                Get started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Multiple ecommerce channel integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Priority support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Domestic shipping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Automated channel order sync</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Free NDR call center setup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 flex-shrink-0">✦</span>
                  <span>Multi channel pricing and inventory sync</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#f1f5f9] border border-blue-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise</h2>
              <div className="mb-6">
                <p className="text-gray-600">Customized</p>
                <p className="text-2xl font-semibold">Shipping solutions</p>
                <p className="text-gray-600 mt-2">Dynamic pricing for sellers who sell at multiple platforms.</p>
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
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2 flex-shrink-0">✦</span>
                  <span className="text-gray-600">Customized integrations</span>
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