import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ShieldCheck, Video, Car, Users, Building, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Services",
  description: "24/7 Unarmed & Armed Security Guards, Mobile Patrol, and Security Services at competitive rates in the Bay Area.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-transparent backdrop-blur-sm py-24 overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-purple-main/5 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[60%] rounded-full bg-primary-light/10 blur-[120px]" />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold heading-premium mb-4 uppercase tracking-wider text-gradient-purple">Our Security Services</h1>
            <p className="text-xl text-muted font-light">
              Providing 24/7 unarmed security guards, mobile patrols, and the latest security technology.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-primary/20">
        <Container>
          <div className="mb-16 max-w-3xl">
            <h2 className="text-3xl font-bold text-foreground heading-premium mb-6">Scope of SSM Inc.'s Security Services</h2>
            <div className="w-20 h-1 bg-gradient-purple mb-6 rounded-full" />
            <p className="text-muted leading-relaxed mb-4 font-light text-lg">
              The SSM Inc. has been providing personnel security and facilities management security services since 2013. Today, SSM Inc. is providing services throughout California. In addition, it is expanding its office locations to the Washington D.C. area, and internationally. 
            </p>
            <p className="text-muted leading-relaxed font-light text-lg">
              The SSM Inc. specializes in providing highly trained and qualified unarmed security guards, and undercover security officers. The SSM Inc. has offered the best in security services and consultants throughout the last more than 12 years. The SSM Inc.Ã¢â‚¬â„¢s management team and staff are a dedicated workforce, providing clients with the highest quality of security services.
            </p>
          </div>

          {/* Comprehensive Capabilities List */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-foreground heading-premium mb-6 uppercase tracking-wider">
              Comprehensive Capabilities
            </h3>
            <div className="w-16 h-0.5 bg-gradient-purple mb-8 rounded-full" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 text-muted font-light text-base">
              {[
                "Unarmed Security Officers",
                "Undercover Security Officers",
                "Bodyguard Services",
                "Patrol Services",
                "Bilingual Guards (multiple languages)",
                "Uniformed Officers",
                "Fully Accredited Security School",
                "Robust Training Program",
                "Government, Commercial, Industrial & Residential",
                "24 Hours / 7 Days a week Services",
                "Hourly, Daily, Weekly, Monthly, Yearly Contracts",
                "2-Way Radios",
                "Highly Trained Management team and staff",
                "Best Rate Guaranteed",
                "Full-Service Security Guards",
                "Private Investigation",
                "Surveillance and Tracking",
                "Employment Screenings",
                "Mandatory Drug Testing (and COVID-19 as applicable)",
                "Video Surveillance Specialists",
                "Fully Licensed and Insured"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-1 border-b border-border">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-main shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Service Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="glass-effect premium-card p-10 rounded-xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-main/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-foreground mb-4 heading-premium group-hover:text-purple-main transition-colors">Latest Security Technology</h3>
              <p className="text-gray-350 leading-relaxed font-light">
                The SSM Inc. provides clients the latest security technology and mobile patrols as well as creates custom programs designed to meet all client requirements. The SSM Inc. offers surveillance and tracking, as well as Detex technology to ensure that each client's property is protected.
              </p>
            </div>
            <div className="glass-effect premium-card p-10 rounded-xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-light/15 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-foreground mb-4 heading-premium group-hover:text-purple-main transition-colors">Highly Trained Staff</h3>
              <p className="text-gray-350 leading-relaxed font-light">
                Our security guards are trained to offer you the highest quality of service. We take great pride in our work and will ensure that all of your security needs are met. The SSM Inc.'s security guards and mobile patrols are trained to monitor all activities as applicable for each client.
              </p>
            </div>
          </div>

          <div className="glass-effect border border-border/50 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[30%] h-[40%] rounded-full bg-purple-main/5 blur-[100px]" />
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-foreground heading-premium mb-6">Professional Security Guard Services</h3>
                <ul className="space-y-4 text-muted font-light">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-main mt-2.5 shrink-0" />
                    <span>The SSM Inc. performs background checks on all security guards and officers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-main mt-2.5 shrink-0" />
                    <span>The SSM Inc. staff conduct required drug test screenings at all relevant locations including on post and upon hiring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-main mt-2.5 shrink-0" />
                    <span>The SSM Inc. offers all types of contracts depending on the clientsÃ¢â‚¬â„¢ needs (Hourly, Daily, Weekly, Monthly, and Yearly).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-main mt-2.5 shrink-0" />
                    <span>The SSM Inc. offers an unmatched "best rate guarantee" options for its clients.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-main mt-2.5 shrink-0" />
                    <span>The SSM Inc. provides 24- hour Dispatch with radio check every 30- minutes, or as required by each client.</span>
                  </li>
                </ul>
              </div>
              <div className="text-center p-8 bg-primary-light/20 rounded-xl border border-border">
                <h4 className="text-2xl font-bold text-foreground mb-3 heading-premium">Need a Custom Program?</h4>
                <p className="text-muted/80 mb-8 font-light">
                  We provide free consultations to understand your unique security challenges and design a system that works for you.
                </p>
                <Button asChild variant="primary" size="lg">
                  <Link href="/contact">Get a Free Consultation</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}


