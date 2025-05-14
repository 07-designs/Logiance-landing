"use client"
import Link from "next/link"
import Image from "next/image"
import { Icon1 } from "@/components/icons/personna/d2c/Icon1"
import { Icon2 } from "@/components/icons/personna/d2c/Icon2"
import { Ghost } from "@/components/icons/personna/d2c/Ghost"
import { Laptop } from "@/components/icons/personna/d2c/Laptop"
import { Whatsapp } from "@/components/icons/personna/whatsapp/Whatsapp"
import { Instagram } from "@/components/icons/personna/whatsapp/Instagram"
import { Shop_1 } from "@/components/icons/personna/shop/Shop_1"
import { Trolley } from "@/components/icons/personna/shop/Trolley"
import { Neural } from "@/components/icons/personna/evreywhere/Neural"
import { People } from "@/components/icons/personna/evreywhere/People"
import { RightGhost } from "@/components/icons/personna/evreywhere/RightGhost"
import { useState } from "react"

export default function PersonaPage() {
  // State to track which persona is selected
  const [selectedPersona, setSelectedPersona] = useState("d2c")

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Built for sellers like you</h1>
          <p className="text-xl text-gray-600">
            From bedroom brands to big ops, if you're shipping ... you're one of us.
          </p>
        </div>

        {/* Persona Selection */}
        <div className="mb-16">
          <h2 className="text-xl text-gray-700 mb-6">Pick what sounds like you</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {/* D2C Brand */}
            <div
              className={`bg-[#F8FAFC] border ${
                selectedPersona === "d2c" ? "border-[#2A35A4] border-2" : "border-gray-200"
              } rounded-[16px] p-6 relative cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden`}
              onClick={() => setSelectedPersona("d2c")}
              style={{
                width: "298px",
                height: "160px",
                boxShadow:
                  selectedPersona === "d2c"
                    ? "-48px 109px 33px 0px rgba(50, 52, 134, 0.00), -31px 70px 30px 0px rgba(50, 52, 134, 0.01), -17px 39px 26px 0px rgba(50, 52, 134, 0.05), -8px 17px 19px 0px rgba(50, 52, 134, 0.09), -2px 4px 10px 0px rgba(50, 52, 134, 0.10)"
                    : "none",
              }}
            >
              <h3 className="mb-2">
                <span
                  style={{
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "120%",
                    letterSpacing: "-0.72px",
                    background:
                      "var(--blue-20, linear-gradient(98deg, #2A35A4 32.52%, #3E49B8 63.51%, #407FFF 94.49%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: selectedPersona === "d2c" ? "transparent" : "inherit",
                    color: selectedPersona === "d2c" ? "transparent" : "#1D1D1D",
                  }}
                >
                  I run a D2C brand
                </span>
              </h3>
              <p
                style={{
                  color: "var(--content-normal, #64748B)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "-0.48px",
                }}
                className="mb-8"
              >
                Orders flying in from your website? We'll help you deliver fast and look pro while doing it.
              </p>

              {/* Ghost Icon - D2C Card */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "d2c" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0"
                }`}
                style={{ 
                  bottom: "-24px", 
                  right: "30px", 
                  width: "20px", 
                  height: "46px", 
                  transform: "rotate(-10.289deg)"
                }}
              >
                <Ghost />
              </div>

              {/* Laptop Icon - D2C Card */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "d2c"
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0 delay-75"
                }`}
                style={{ 
                  bottom: "6px", 
                  right: "60px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Laptop />
              </div>

              {/* Icon2 (Stack) - D2C Card */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "d2c"
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0 delay-150"
                }`}
                style={{ 
                  bottom: "15px", 
                  right: "5px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Icon2 />
              </div>
            </div>

            {/* Instagram & WhatsApp */}
            <div
              className={`bg-[#F8FAFC] border ${
                selectedPersona === "whatsapp" ? "border-blue-600 border-2" : "border-gray-200"
              } rounded-xl p-6 relative cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden`}
              onClick={() => setSelectedPersona("whatsapp")}
              style={{
                width: "298px",
                height: "160px",
              }}
            >
              <h3 className="mb-2">
                <span
                  style={{
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "120%",
                    letterSpacing: "-0.72px",
                    background:
                      "var(--blue-20, linear-gradient(98deg, #2A35A4 32.52%, #3E49B8 63.51%, #407FFF 94.49%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: selectedPersona === "whatsapp" ? "transparent" : "inherit",
                    color: selectedPersona === "whatsapp" ? "transparent" : "#1D1D1D",
                  }}
                >
                  I sell on Insta & WhatsApp
                </span>
              </h3>
              <p
                style={{
                  color: "var(--content-normal, #64748B)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "-0.48px",
                }}
              >
                DMs, payment links, and now deliveries that actually show up. All without lifting a finger.
              </p>

              {/* Ghost Icon - WhatsApp Card */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "whatsapp" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0"
                }`}
                style={{ 
                  bottom: "-24px", 
                  right: "35px", 
                  width: "20px", 
                  height: "46px", 
                  transform: "rotate(6.375deg)",
                  flexShrink: 0
                }}
              >
                <Ghost />
              </div>

              {/* WhatsApp Icon - Left */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "whatsapp" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-[-24px] translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 delay-75"
                }`}
                style={{ 
                  bottom: "10px", 
                  right: "60px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Whatsapp />
              </div>

              {/* Instagram Icon - Right */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "whatsapp" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-24 translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 delay-150"
                }`}
                style={{ 
                  bottom: "15px", 
                  right: "5px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Instagram />
              </div>
            </div>

            {/* Shop */}             
            <div               
              className={`bg-[#F8FAFC] border ${selectedPersona === "shop" ? "border-blue-600 border-2" : "border-gray-200"} rounded-xl p-6 relative cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden`}               
              onClick={() => setSelectedPersona("shop")}               
              style={{                 
                width: "298px",                 
                height: "160px",               
              }}             
            >               
              <h3 className="mb-2">                 
                <span                   
                  style={{                     
                    fontFeatureSettings: "'liga' off, 'clig' off",                     
                    fontFamily: "Satoshi",                     
                    fontSize: "24px",                     
                    fontStyle: "normal",                     
                    fontWeight: 500,                     
                    lineHeight: "120%",                     
                    letterSpacing: "-0.72px",                     
                    background: "var(--blue-20, linear-gradient(98deg, #2A35A4 32.52%, #3E49B8 63.51%, #407FFF 94.49%))",                     
                    backgroundClip: "text",                     
                    WebkitBackgroundClip: "text",                     
                    WebkitTextFillColor: selectedPersona === "shop" ? "transparent" : "inherit",                     
                    color: selectedPersona === "shop" ? "transparent" : "#1D1D1D",                   
                  }}                 
                >                   
                  I sell from my shop                 
                </span>               
              </h3>               
              <p                 
                style={{                   
                  color: "var(--content-normal, #64748B)",                   
                  fontFeatureSettings: "'liga' off, 'clig' off",                   
                  fontFamily: "Satoshi",                   
                  fontSize: "16px",                   
                  fontStyle: "normal",                   
                  fontWeight: 400,                   
                  lineHeight: "120%",                   
                  letterSpacing: "-0.48px",                 
                }}               
              >                 
                Take your storefront national. Schedule pickups, track deliveries, and offer COD... without hiring a team.               
              </p>

              {/* Ghost Icon - Shop Card */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "shop" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0"
                }`}
                style={{ 
                  bottom: "-24px", 
                  right: "30px", 
                  width: "20px", 
                  height: "46px", 
                  transform: "rotate(6.375deg)",
                  flexShrink: 0
                }}
              >
                <Ghost />
              </div>

              {/* Shop_1 Icon - Left */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "shop" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-[-24px] translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 delay-75"
                }`}
                style={{ 
                  bottom: "10px", 
                  right: "54px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Shop_1 />
              </div>

              {/* Trolley Icon - Right */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "shop" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-36 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 delay-150"
                }`}
                style={{ 
                  bottom: "25px", 
                  right: "5px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Trolley />
              </div>
            </div>

            {/* Everywhere */}
            <div
              className={`bg-[#F8FAFC] border ${selectedPersona === "everywhere" ? "border-blue-600 border-2" : "border-gray-200"} rounded-xl p-6 relative cursor-pointer hover:shadow-lg transition-all duration-300 group overflow-hidden`}
              onClick={() => setSelectedPersona("everywhere")}
              style={{
                width: "298px",
                height: "160px",
              }}
            >
              <h3 className="mb-2">
                <span
                  style={{
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "120%",
                    letterSpacing: "-0.72px",
                    background:
                      "var(--blue-20, linear-gradient(98deg, #2A35A4 32.52%, #3E49B8 63.51%, #407FFF 94.49%))",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: selectedPersona === "everywhere" ? "transparent" : "inherit",
                    color: selectedPersona === "everywhere" ? "transparent" : "#1D1D1D",
                  }}
                >
                  I sell everywhere
                </span>
              </h3>
              <p
                style={{
                  color: "var(--content-normal, #64748B)",
                  fontFeatureSettings: "'liga' off, 'clig' off",
                  fontFamily: "Satoshi",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "120%",
                  letterSpacing: "-0.48px",
                }}
              >
                Flipkart, Insta, Offline popups, Shopify. Wherever your buyers are — we keep it stitched together.
              </p>
              
              {/* Ghost Icon 1 - Middle-left with exact specifications */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "everywhere" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0"
                }`}
                style={{ 
                  bottom: "-24px", 
                  right: "50px", 
                  width: "20px",
                  height: "46px",
                  transform: "rotate(8.418deg)",
                  flexShrink: 0
                }}
              >
                <Ghost />
              </div>
              
              {/* Ghost Icon 2 - Middle-right with exact specifications */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "everywhere" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-y-24 group-hover:translate-y-0 delay-75"
                }`}
                style={{ 
                  bottom: "-20px", 
                  right: "20px", 
                  width: "20px",
                  height: "46px",
                  transform: "rotate(-8.515deg)",
                  flexShrink: 0
                }}
              >
                <RightGhost />
              </div>

              {/* People Icon - Very left */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "everywhere" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-[-36px] translate-y-24 group-hover:translate-x-0 group-hover:translate-y-0 delay-100"
                }`}
                style={{ 
                  bottom: "15px", 
                  right: "80px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <People />
              </div>

              {/* Neural Icon - Very right, slides from right mid-wall */}
              <div
                className={`absolute transition-all duration-700 ease-out transform ${
                  selectedPersona === "everywhere" 
                    ? "opacity-100" 
                    : "opacity-0 group-hover:opacity-100 translate-x-48 group-hover:translate-x-0 delay-150"
                }`}
                style={{ 
                  bottom: "25px", 
                  right: "2px", 
                  width: "24px", 
                  height: "24px" 
                }}
              >
                <Neural />
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition - Dynamic content based on selected persona */}
        <div className="relative bg-[#F1F5F9] rounded-xl p-8 lg:p-12 mb-12 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image src="/persona_bg.png" alt="Background pattern" layout="fill" objectFit="cover" />
          </div>

          <div className="max-w-3xl relative z-10">
            {/* D2C Content */}
            {selectedPersona === "d2c" && (
              <>
                <h2
                  style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%",
                    letterSpacing: "-1.08px",
                  }}
                >
                  Selling online? We'll help you ship like a pro.
                </h2>
                <div className="border-l-4 border-blue-600 pl-4 mb-8">
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Orders are growing, but shipping is still messy?
                  </p>
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    We simplify everything ... from pickups to tracking to returns, so you can focus on your brand.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Too many things to manage?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        We{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          auto-handle
                        </span>{" "}
                        pickups, updates, and delays ... so your team isn't stuck doing everything.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Brand missing in delivery updates?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Give your customers a clean,{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          branded experience
                        </span>{" "}
                        ... with your logo, your tone, your touch.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Returns feel like a headache?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Let customers{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          raise return requests
                        </span>{" "}
                        themselves. You stay in charge ... no endless follow-ups.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* WhatsApp & Instagram Content */}
            {selectedPersona === "whatsapp" && (
              <>
                <h2
                  style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%",
                    letterSpacing: "-1.08px",
                  }}
                >
                  Selling through DMs? We'll help you deliver like a pro.
                </h2>
                <div className="border-l-4 border-blue-600 pl-4 mb-8">
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Orders coming in fast, but fulfillment's still all over the place?
                  </p>
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    We'll streamline your orders, from pickups to delivery updates.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Too much juggling?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Let us{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          auto-pick
                        </span>{" "}
                        and ship your orders so you're not manually tracking every message.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Customers keep asking for updates?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Automatically send{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          branded tracking updates
                        </span>{" "}
                        with your name and logo. Say goodbye to "Where's my order?" messages!
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Returns becoming a mess?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Let customers{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          raise return requests
                        </span>{" "}
                        themselves. You stay in charge ... no endless follow-ups.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Shop Content */}
            {selectedPersona === "shop" && (
              <>
                <h2
                  style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%",
                    letterSpacing: "-1.08px",
                  }}
                >
                  Running a shop? Let's help you go national.
                </h2>
                <div className="border-l-4 border-blue-600 pl-4 mb-8">
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    From store counter to doorstep ... we help you ship across India, without the chaos.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Still managing orders by hand?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Digitize pickups, deliveries, and CODs ... no staff needed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Only serving your area?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Offer{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          nationwide delivery
                        </span>{" "}
                        ... right from your storefront.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Too many calls for updates?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        Customers get{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          real-time tracking
                        </span>{" "}
                        on WhatsApp & SMS. You stay hands-free.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Everywhere Content */}
            {selectedPersona === "everywhere" && (
              <>
                <h2
                  style={{
                    color: "var(--content-muted, #334155)",
                    fontFeatureSettings: "'liga' off, 'clig' off",
                    fontFamily: "Satoshi",
                    fontSize: "36px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%",
                    letterSpacing: "-1.08px",
                  }}
                >
                  Selling everywhere? We'll keep it stitched together.
                </h2>
                <div className="border-l-4 border-blue-600 pl-4 mb-8">
                  <p
                    style={{
                      color: "var(--content-normal, #64748B)",
                      fontFeatureSettings: "'liga' off, 'clig' off",
                      fontFamily: "Satoshi",
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontWeight: 500,
                      lineHeight: "120%",
                      letterSpacing: "-0.72px",
                    }}
                  >
                    Online, offline, or both ... we bring all your orders under one roof.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Too many platforms to juggle?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          One dashboard
                        </span>{" "}
                        to manage Insta, Flipkart, Shopify, and more.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        COD here, UPI there?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        No stress ... we{" "}
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          sync payments
                        </span>{" "}
                        , pickups, and returns across the board.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Icon1 />
                    <div>
                      <h3
                        style={{
                          color: "var(--content-muted, #334155)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "24px",
                          fontStyle: "normal",
                          fontWeight: 500,
                          lineHeight: "120%",
                          letterSpacing: "-0.72px",
                        }}
                      >
                        Tired of tracking orders manually?
                      </h3>
                      <p
                        style={{
                          color: "var(--content-normal, #64748B)",
                          fontFeatureSettings: "'liga' off, 'clig' off",
                          fontFamily: "Satoshi",
                          fontSize: "20px",
                          fontStyle: "normal",
                          fontWeight: 400,
                          lineHeight: "120%",
                          letterSpacing: "-0.6px",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--Blue-Primary, #4653DC)",
                            fontFeatureSettings: "'liga' off, 'clig' off",
                            fontFamily: "Satoshi",
                            fontSize: "20px",
                            fontStyle: "normal",
                            fontWeight: 500,
                            lineHeight: "120%",
                            letterSpacing: "-0.6px",
                          }}
                        >
                          Auto-sync
                        </span>{" "}
                        updates across channels. No copy-pasting, no chaos.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Centered Button - Dynamic based on selected persona */}
        <div className="mt-10 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] text-white py-3 px-6 rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {selectedPersona === "d2c" && "See how it works for D2C"}
            {selectedPersona === "whatsapp" && "Ship from DMs"}
            {selectedPersona === "shop" && "Go beyond your shop"}
            {selectedPersona === "everywhere" && "See how it works"}
          </Link>
        </div>
      </div>
    </div>
  )
}