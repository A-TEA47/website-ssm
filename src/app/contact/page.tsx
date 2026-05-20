import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SSM Inc. for a free security consultation. Contact us at (510) 363-9189 or visit our Hayward, CA office.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-transparent backdrop-blur-sm py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-purple-main/5 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-primary-light/10 blur-[120px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold heading-premium mb-4 uppercase tracking-wider text-gradient-purple">Contact Us</h1>
            <p className="text-xl text-muted font-light">
              Ready to secure your future? Reach out to our team for a free consultation.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-primary/20">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-gradient-purple mb-8 rounded-full" />
              <p className="text-muted leading-relaxed mb-10 font-light text-lg">
                We love our customers, so feel free to visit during normal business hours or contact us via phone or email for immediate assistance. Our 24/7 dispatch is always ready to respond.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-main/10 border border-purple-main/20 flex items-center justify-center text-purple-main">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 heading-premium">Phone</h3>
                    <p className="text-muted/80 font-light mb-1">Main: <a href="tel:5103639189" className="text-foreground hover:text-purple-main transition-colors font-medium">(510) 363-9189</a></p>
                    <p className="text-muted/80 font-light">Alt: <a href="tel:5107541245" className="text-foreground hover:text-purple-main transition-colors font-medium">(510) 754-1245</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-main/10 border border-purple-main/20 flex items-center justify-center text-purple-main">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 heading-premium">Email Support</h3>
                    <a href="mailto:ssm@securitysystemsmanagement.us" className="text-muted/80 font-light hover:text-purple-main transition-colors break-all">
                      ssm@securitysystemsmanagement.us
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-main/10 border border-purple-main/20 flex items-center justify-center text-purple-main">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 heading-premium">Headquarters</h3>
                    <p className="text-muted/80 font-light leading-relaxed">
                      Security Systems Management Inc.<br />
                      350 Winton Avenue<br />
                      Hayward, California 94544<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-main/10 border border-purple-main/20 flex items-center justify-center text-purple-main">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1 heading-premium">Business Hours</h3>
                    <div className="text-muted/80 font-light space-y-1 text-sm">
                      <p>Mon: 08:30 am Ã¢â‚¬â€œ 05:00 pm</p>
                      <p>Tue: 08:30 am Ã¢â‚¬â€œ 05:00 pm</p>
                      <p>Wed: 08:00 am Ã¢â‚¬â€œ 05:00 pm</p>
                      <p>Thu: 08:00 am Ã¢â‚¬â€œ 05:00 pm</p>
                      <p>Fri: 08:00 am Ã¢â‚¬â€œ 05:00 pm</p>
                      <p>Sat & Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-effect p-8 rounded-2xl border border-border/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-main/5 rounded-full blur-2xl" />
              <h2 className="text-2xl font-bold text-foreground heading-premium mb-6 uppercase tracking-wider">Request a Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-muted">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-muted">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-muted">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-muted">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-semibold text-muted">Service Needed</label>
                  <div className="relative">
                    <select 
                      id="service" 
                      className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all appearance-none"
                    >
                      <option value="" className="bg-primary/20">Select a service...</option>
                      <option value="unarmed" className="bg-primary/20">Unarmed Security Guards</option>
                      <option value="patrol" className="bg-primary/20">Mobile Patrol</option>
                      <option value="events" className="bg-primary/20">Event Security</option>
                      <option value="facilities" className="bg-primary/20">Facilities Management</option>
                      <option value="other" className="bg-primary/20">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-muted">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-transparent backdrop-blur-sm/60 border border-white/15 rounded-sm px-4 py-2.5 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all font-light"
                    placeholder="Tell us about your security needs..."
                  ></textarea>
                </div>

                <Button type="button" variant="primary" className="w-full font-bold py-3.5">
                  Send Message
                </Button>
                
                <div className="text-[10px] text-gray-500 text-center mt-4 space-y-2 leading-relaxed">
                  <p>
                    By texting Security Systems Management Inc at 510-363-9189, you agree to receive conversational & marketing notifications messages from Security Systems Management Inc. Reply STOP to opt-out; Reply HELP for support; Message & data rates may apply; Messaging frequency may vary. Visit Privacy Policy page to see our privacy policy and Terms of Service.
                  </p>
                  <p>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


