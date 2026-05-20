import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Users, Car, Building2, Shield, HeartPulse, Target, ShieldAlert, Award, Phone, Mail, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-transparent pt-20">
        {/* Background glow effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-800/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-main/10 blur-[150px]" />
          <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-primary-light/20 blur-[100px]" />
          <div className="absolute inset-0 bg-transparent" />
        </div>
        
        <Container className="relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center rounded-full bg-purple-main/10 px-4 py-1.5 text-xs font-semibold text-purple-main ring-1 ring-inset ring-purple-main/20 uppercase tracking-widest">
                ★ Trusted Security Services Since 2013 ★
              </div>
              <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl heading-premium leading-[1.1] md:leading-[1.15]">
                To Protect with Courage, <br/>
                <span className="text-gradient-purple">To Serve with Compassion.</span>
              </h1>
              <p className="mb-10 text-lg leading-8 text-muted max-w-2xl font-light">
                SSM Inc. provides premium 24/7 armed and unarmed security guards, mobile patrol, and facilities management services for government, commercial, and residential properties.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button asChild size="lg" variant="primary">
                  <Link href="/contact">Request a Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>

            {/* Security Badge Design */}
            <div className="relative hidden lg:flex justify-center items-center w-full h-[500px] group perspective-[1000px]">
              {/* Background glowing orb for the shield */}
              <div className="absolute inset-0 m-auto w-64 h-64 bg-purple-main/20 dark:bg-purple-main/10 blur-[80px] rounded-full animate-pulse" />

              {/* Center Huge Shield Outline */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="w-96 h-96 text-primary/80 dark:text-purple-300/40 drop-shadow-xl dark:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-700 animate-[pulse_4s_ease-in-out_infinite]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
              
              {/* Top Right Floating Card */}
              <div className="absolute top-[20%] right-[2%] xl:right-[8%] glass-effect rounded-2xl p-4 pr-8 flex items-center gap-4 border border-purple-main/50 dark:border-purple-main/20 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] bg-surface/90 dark:bg-surface/80 backdrop-blur-xl z-10 animate-float hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center text-white shadow-lg shadow-purple-main/40">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-base leading-tight">Protected</p>
                  <p className="text-muted/90 text-sm font-light">24/7 Security</p>
                </div>
              </div>

              {/* Bottom Left Floating Card */}
              <div className="absolute bottom-[20%] left-[2%] xl:left-[8%] glass-effect rounded-2xl p-4 pr-8 flex items-center gap-4 border border-purple-main/50 dark:border-purple-main/20 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.3)] bg-surface/90 dark:bg-surface/80 backdrop-blur-xl z-10 animate-float-delayed hover:scale-105 transition-transform duration-300 cursor-default">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center text-white shadow-lg shadow-purple-main/40">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-base leading-tight">Always Available</p>
                  <p className="text-muted/90 text-sm font-light">Rapid Response</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUSTED AND RELIABLE SECTION */}
      <Section className="bg-transparent relative">
        <div className="absolute inset-0 bg-transparent pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center lg:text-left">
            <h2 className="text-3xl font-bold heading-premium mb-8 uppercase tracking-wider text-center">
              <span className="text-gradient-purple block md:inline">Trusted & Reliable Security Guard Services</span>
              <span className="text-foreground block text-2xl mt-2 font-medium">And Facilities Management Services</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-purple mx-auto mb-10 rounded-full" />
            <div className="space-y-6 text-muted leading-relaxed text-lg font-light text-justify">
              <p>
                The Security Systems Management (SSM) Inc.'s headquarters are in Hayward, California, United States of America. The SSM Inc. is expanding geographically to include office locations in the Washington D.C. metropolitan area. In addition to providing services in the United States of America, the SSM Inc. is positioned to provide services in multiple international locations. The SSM Inc.'s diversification of service offerings, coupled with its experience and expertise in delivering security services, excellent past performance history, and a dedicated management team and staff provide SSM Inc. with the platform to successfully deliver security services and facilities management and maintenance services to a wide range of clients worldwide.
              </p>
              <p>
                The SSM Inc. has been providing high quality security services and facilities management and maintenance services to government clients, and to commercial, industrial, and residential property clients since 2013. The SSM Inc. specializes in providing on-call unarmed security guards, and other services. The SSM Inc.'s management team and staff are dedicated and motivated to provide clients with the best security and facilities management services. The SSM Inc. team works with clients to develop and operationalize custom security and facilities management programs that are designed to meet all specifications and requirements of each client. The SSM Inc.'s team offers comprehensive services which are provided 24 hours a day, seven (7) days a week, with security guards, vehicle patrol, surveillance, tracking, training, and various other security and facilities services as required by each client.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* MISSION, VALUES, AND VISION */}
      <Section className="bg-primary/20 border-y border-border relative backdrop-blur-sm">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <div className="glass-effect premium-card p-10 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-main/5 rounded-full blur-3xl group-hover:bg-purple-main/10 transition-all duration-300" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-purple-main mb-6 border border-border/50 group-hover:border-purple-main/20 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-6">Our Mission</h2>
              <blockquote className="border-l-4 border-purple-main pl-4 italic text-xl text-gray-200 mb-6 font-serif">
                "To Protect with Courage, To Serve with Compassion"
              </blockquote>
              <p className="text-gray-350 leading-relaxed mb-4 font-light">
                The Security Systems Management (SSM) Inc.'s mission is to provide the best quality security and facilities management and maintenance services to its clients. The SSM Inc. does this by empowering employees to serve with compassion, and to protect with courage. 
              </p>
              <p className="text-gray-350 leading-relaxed font-light">
                The SSM Inc. aims to meet and surpass client expectations and fully meet all requirements. The SSM Inc.'s dedication to client relations has led the company to become one of the most trusted and fastest growing security companies.
              </p>
            </div>

            {/* Values & Vision */}
            <div className="glass-effect premium-card p-10 rounded-2xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/20 rounded-full blur-3xl group-hover:bg-primary-light/30 transition-all duration-300" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-purple-main mb-6 border border-border/50 group-hover:border-purple-main/20 transition-colors">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-6">Our Values & Vision</h2>
              <p className="text-gray-350 leading-relaxed mb-6 font-light">
                The SSM Inc. prides itself on doing business amiably and respectfully. The SSM Inc. provides clients with top quality customer service and professionalism.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-main rounded-full"></div> Values
                  </h3>
                  <p className="text-gray-350 leading-relaxed font-light">
                    The SSM Inc.'s values include providing a safe and professional work environment as the company aims to positively impact employees and the clients and communities it serves.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-main rounded-full"></div> Vision
                  </h3>
                  <p className="text-gray-350 leading-relaxed font-light">
                    The SSM Inc.'s vision is to become one of the top security guard and other supporting services, and facilities security services companies in the United States of America, and internationally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* PROFESSIONAL SECURITY GUARD SERVICES */}
      <Section className="bg-transparent relative overflow-hidden py-24">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-main/20 to-transparent"></div>
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-foreground heading-premium mb-6 uppercase tracking-wider">
              Expanding Globally & Serving Locally
            </h2>
            <div className="w-20 h-1 bg-gradient-purple mx-auto mb-8 rounded-full" />
            <p className="text-xl text-muted leading-relaxed font-light">
              With a start in providing services for the Northern California and the Greater Bay Area, the company is expanding to the Washington D.C. area and internationally to provide elite security and facilities management services.
            </p>
          </div>
        </Container>
      </Section>

      {/* COVID-19 SECURITY SOLUTIONS */}
      <Section className="bg-primary/20 border-t border-border backdrop-blur-sm">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Placeholder for Covid-19 Image */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-effect border border-border/50 flex items-center justify-center bg-surface/50 group">
              <div className="absolute inset-0 bg-primary/50 z-10" />
              <ShieldAlert className="w-32 h-32 text-purple-main/10 absolute z-0 transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-20 text-center p-6">
                <span className="bg-purple-main/10 border border-purple-main/20 text-purple-main px-4 py-2 rounded-full font-medium tracking-widest text-xs uppercase mb-4 inline-block">
                  Health & Safety
                </span>
                <p className="text-foreground text-lg font-medium tracking-wide heading-premium mt-2">COVID-19 Safety Solutions</p>
                <p className="text-muted/80 text-sm mt-1 max-w-xs mx-auto font-light">Comprehensive compliance & screening enforcement program</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-6 uppercase tracking-wide">
                COVID-19 Security Solutions
              </h2>
              <div className="w-20 h-1 bg-gradient-purple mb-8 rounded-full" />
              <div className="space-y-4 text-muted leading-relaxed font-light">
                <p>
                  The SSM Inc.'s management team and staff recognize the importance of following federal and state regulations pertaining to COVID-19 safety. We provide clients with various access control screening solutions to ensure maximum safety. 
                </p>
                <p>
                  We offer COVID-19 specific security service measures such as social distancing enforcement, face mask enforcement, maximum occupancy enforcement, and temperature screening, among other requirements.
                </p>
                <p>
                  Our security guards and private patrol ensure the highest level of protection. The SSM Inc. offers Raptor Technology and Lobby Guard Solutions to clients to assist in tracking, among other services.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CONTACT US */}
      <Section className="bg-transparent relative overflow-hidden py-24">
        {/* Background glow */}
        <div className="absolute bottom-[-20%] left-[10%] w-[40%] h-[40%] rounded-full bg-purple-main/5 blur-[120px]" />
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="glass-effect p-10 rounded-2xl border border-border/50 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-main/5 rounded-full blur-3xl" />
              <h2 className="text-3xl font-bold text-foreground heading-premium mb-8 uppercase tracking-wide">
                Get In Touch
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-primary/60 border border-border/50 rounded-md px-5 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all placeholder:text-gray-500 font-light shadow-inner"
                    placeholder="Your Name"
                  />
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-primary/60 border border-border/50 rounded-md px-5 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all placeholder:text-gray-500 font-light shadow-inner"
                    placeholder="Your Email*"
                    required
                  />
                </div>
                <textarea 
                  id="message" 
                  rows={5}
                  className="w-full bg-primary/60 border border-border/50 rounded-md px-5 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-purple-main focus:border-purple-main transition-all placeholder:text-gray-500 font-light shadow-inner"
                  placeholder="How can we help you?"
                ></textarea>
                <Button type="button" variant="primary" className="w-full text-base font-bold py-4">
                  SEND MESSAGE
                </Button>
                <p className="text-[11px] text-gray-500 text-center mt-4">
                  This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
              </form>
            </div>

            <div className="lg:pt-4">
              <h3 className="text-2xl font-bold text-foreground heading-premium mb-4">Visit Us In Person</h3>
              <p className="text-gray-350 leading-relaxed mb-10 font-light">
                We value open communication. Feel free to visit our headquarters or reach out via phone or email during normal business hours.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-main/10 flex items-center justify-center text-purple-main border border-purple-main/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Headquarters</h4>
                    <p className="text-muted/80 font-light leading-relaxed">350 Winton Avenue, Hayward, California 94544</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-main/10 flex items-center justify-center text-purple-main border border-purple-main/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted/80 font-light">
                      <a href="tel:5103639189" className="hover:text-purple-main transition-colors">(510) 363-9189</a> or <a href="tel:5107541245" className="hover:text-purple-main transition-colors">(510) 754-1245</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-main/10 flex items-center justify-center text-purple-main border border-purple-main/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Email Support</h4>
                    <p className="text-muted/80 font-light">
                      <a href="mailto:ssm@securitysystemsmanagement.us" className="hover:text-purple-main transition-colors break-all">ssm@securitysystemsmanagement.us</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-main/10 flex items-center justify-center text-purple-main border border-purple-main/20">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">Business Hours</h4>
                    <p className="text-muted/80 font-light">Open today: 09:00 am – 05:00 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* MAP EMBED (Fixed Google Maps Embed) */}
      <section className="w-full h-[450px] relative border-t border-border/50">
        <iframe 
          src="https://maps.google.com/maps?q=350%20Winton%20Avenue,%20Hayward,%20California%2094544&t=&z=14&ie=UTF8&iwloc=&output=embed" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale opacity-75 contrast-125 hover:opacity-90 transition-opacity duration-300"
        ></iframe>
      </section>
    </>
  );
}


