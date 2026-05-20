import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SSM Academy",
  description: "Training Packages for Security Systems Management Inc.",
};

export default function SSMAcademyPage() {
  return (
    <>
      <section className="relative bg-transparent backdrop-blur-sm py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-purple-main/5 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-primary-light/10 blur-[120px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold heading-premium mb-4 uppercase tracking-wider text-gradient-purple">
              SSM Academy
            </h1>
            <p className="text-xl text-muted font-light">
              Elevate your skills with our fully accredited security training programs.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-primary/20 min-h-[50vh]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect p-8 lg:p-12 rounded-2xl border border-border/50">
              <h2 className="text-2xl font-bold text-foreground heading-premium mb-6 border-b border-border pb-4 uppercase tracking-wider">
                Training Packages
              </h2>
              
              <ul className="space-y-6 text-muted font-light">
                <li className="flex items-start gap-4 bg-transparent backdrop-blur-sm/60 p-6 rounded-xl border border-border hover:border-purple-main/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-main/10 border border-purple-main/20 flex items-center justify-center font-bold text-purple-main shrink-0">
                    A
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg block mb-1">$97.00</span>
                    <span className="text-muted/80 block">Guard Card Training - Two Classes in one day</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-transparent backdrop-blur-sm/60 p-6 rounded-xl border border-border hover:border-purple-main/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-main/10 border border-purple-main/20 flex items-center justify-center font-bold text-purple-main shrink-0">
                    B
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg block mb-1">$50.00</span>
                    <span className="text-muted/80 block">Resume Creation, Interview Practice, Employment Readiness Workshop</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-transparent backdrop-blur-sm/60 p-6 rounded-xl border border-border hover:border-purple-main/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-main/10 border border-purple-main/20 flex items-center justify-center font-bold text-purple-main shrink-0">
                    C
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg block mb-1">Livescan Services</span>
                    <span className="text-gray-450 block mb-1">DOJ and FBI Fingerprinting and Background Check</span>
                    <span className="text-purple-main text-xs font-semibold italic block">($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)</span>
                  </div>
                </li>
                
                <li className="flex items-start gap-4 bg-transparent backdrop-blur-sm/60 p-6 rounded-xl border border-border hover:border-purple-main/20 transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-purple-main/10 border border-purple-main/20 flex items-center justify-center font-bold text-purple-main shrink-0">
                    D
                  </div>
                  <div>
                    <span className="font-bold text-foreground text-lg block mb-1">$25.00</span>
                    <span className="text-muted/80 block">Processing and mailing package for you</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-16 glass-effect p-8 lg:p-12 rounded-2xl border border-border/50 relative overflow-hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-main/5 blur-[100px]" />
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-6 border-b border-border pb-4 uppercase tracking-wider relative z-10">
                Schedule a Class
              </h2>
              
              <div className="bg-transparent backdrop-blur-sm/40 rounded-xl p-8 border border-border shadow-2xl relative z-10">
                <div className="mb-10 border-b border-white/15 pb-8">
                  <h3 className="text-3xl font-bold text-foreground heading-premium mb-2">SSM Academy</h3>
                  <p className="text-purple-main text-lg mb-8 uppercase tracking-widest font-semibold text-sm">Ã¢Ëœâ€¦ Guard Card Classes Ã¢Ëœâ€¦</p>
                  
                  <div className="space-y-4 font-light text-muted">
                    <p className="text-foreground font-semibold text-lg">Tell a Friend - Security Systems Management</p>
                    <p className="text-foreground font-semibold text-lg">A Quick Route To Success</p>
                    <p className="text-foreground font-semibold text-lg">510-363-9189</p>
                  </div>
                  
                  <div className="mt-8 space-y-2 text-muted/80 font-light text-sm">
                    <p>SSM Academy Campus</p>
                    <p>24301 Southland Drive, Suite B5</p>
                    <p>Hayward, CA, 94545</p>
                  </div>
                </div>

                <form className="space-y-8">
                  {/* Name */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground block">Name</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input type="text" id="firstName" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="firstName" className="text-xs text-gray-500 mt-1 block">First Name</label>
                      </div>
                      <div>
                        <input type="text" id="lastName" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="lastName" className="text-xs text-gray-500 mt-1 block">Last Name</label>
                      </div>
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground block">Phone Number</label>
                    <div className="flex gap-4">
                      <div className="w-24">
                        <input type="text" id="areaCode" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="areaCode" className="text-xs text-gray-500 mt-1 block">Area Code</label>
                      </div>
                      <div className="hidden sm:flex items-center text-gray-500">-</div>
                      <div className="flex-1">
                        <input type="text" id="phoneNumber" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="phoneNumber" className="text-xs text-gray-500 mt-1 block">Phone Number</label>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground block">Address</label>
                    <div className="space-y-4">
                      <div>
                        <input type="text" id="streetAddress" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="streetAddress" className="text-xs text-gray-500 mt-1 block">Street Address</label>
                      </div>
                      <div>
                        <input type="text" id="streetAddress2" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                        <label htmlFor="streetAddress2" className="text-xs text-gray-500 mt-1 block">Street Address Line 2</label>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input type="text" id="city" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                          <label htmlFor="city" className="text-xs text-gray-500 mt-1 block">City</label>
                        </div>
                        <div>
                          <input type="text" id="state" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                          <label htmlFor="state" className="text-xs text-gray-500 mt-1 block">State / Province</label>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <input type="text" id="zipCode" className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light" />
                          <label htmlFor="zipCode" className="text-xs text-gray-500 mt-1 block">Postal / Zip Code</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Note Section */}
                  <div className="py-6 space-y-3 text-muted/80 border-y border-border/50 my-6 font-light text-sm">
                    <h4 className="text-base font-semibold text-foreground">Class Policies:</h4>
                    <p>Ã¢â‚¬Â¢ Classes are capped at a maximum of 8 students to ensure high quality instruction.</p>
                    <p>Ã¢â‚¬Â¢ Pre-payment ensures that your preferred class will not fill up.</p>
                    <p className="italic text-purple-main">Ã¢â‚¬Â¢ Extra time is provided at the end of each class for test re-takes or questions.</p>
                  </div>

                  {/* Book A Class */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground block">
                      Book A Class <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full bg-primary/20 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all appearance-none" size={2}>
                      <option className="py-2 px-3 border-b border-border hover:bg-purple-main/10 hover:text-foreground">Monday @9:00 AM - 5:00 PM (February 17th)</option>
                      <option className="py-2 px-3 hover:bg-purple-main/10 hover:text-foreground">Monday @9:00 AM - 5:00 PM (March 16th)</option>
                    </select>
                  </div>

                  {/* Training Packages */}
                  <div className="space-y-3 pt-4">
                    <label className="text-sm font-semibold text-foreground block">Training Packages</label>
                    <div className="space-y-3 text-muted/80 text-sm font-light">
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> A - $97.00 Guard card Training - Two Classes in one day</label>
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> B - $50.00 Resume Creation, interview Practice, Employment Readiness Workshop</label>
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> C - DOJ and FBI Fingerprinting and background Check ($32 DOJ, $19 FBI, $35 Fingerprinting and Live-Scan)</label>
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> D - $25.00 Processing and mailing package for you</label>
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> E - Employee Orientation Training for New guards, how we do it at SSM</label>
                      <label className="flex items-start gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="mt-1 rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> FBI-DOJ Livescan $80</label>
                      <label className="flex items-center gap-3 cursor-pointer hover:text-foreground transition-colors"><input type="checkbox" className="rounded border-white/15 bg-primary/20 text-purple-main focus:ring-purple-main focus:ring-offset-[#030712] shrink-0" /> Other <input type="text" className="ml-2 bg-primary/20 border border-white/15 rounded-sm px-2 py-1 text-foreground focus:outline-none focus:border-purple-main focus:ring-1 focus:ring-purple-main w-full max-w-[200px]" /></label>
                    </div>
                  </div>

                  <div className="py-4 text-purple-main text-xs leading-relaxed border-y border-border/50 mt-8 font-medium">
                    * 10% Discount for new hire on one-year contract with SSM employee pay-as-you-go repayment plan. Note: Not every graduate can be placed at SSM; check post availability.
                  </div>

                  {/* Signature */}
                  <div className="space-y-3">
                    <label className="text-sm font-semibold text-foreground block">
                      Signature
                    </label>
                    <div className="max-w-md h-40 bg-primary/20 border border-white/15 rounded-sm relative flex items-center justify-center overflow-hidden">
                       <span className="text-gray-600/30 font-serif italic text-2xl transform -rotate-12 select-none pointer-events-none">Draw Signature Here</span>
                       <div className="absolute bottom-2 right-4 text-xs text-purple-main hover:text-foreground cursor-pointer transition-colors font-medium">Clear</div>
                    </div>
                  </div>

                  <div className="pt-8 flex justify-start">
                    <Button type="button" variant="primary" size="lg" className="px-10">
                      Submit Class Booking
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


