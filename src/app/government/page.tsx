import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FileText, Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Government Services",
  description: "Download SSM Inc. Government Brochures and Services.",
};

export default function GovernmentPage() {
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
              Government
            </h1>
            <p className="text-xl text-muted font-light">
              Official publications, capabilities statements, and corporate brochures.
            </p>
          </div>
        </Container>
      </section>

      <Section className="bg-primary/20 min-h-[50vh]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <a 
              href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/E6.%20Brochure_Security%20Systems%20Management%20Inc.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 glass-effect premium-card p-6 rounded-xl border border-border hover:border-purple-main/30 group"
            >
              <div className="bg-purple-main/10 border border-purple-main/20 p-4 rounded-lg text-purple-main group-hover:bg-gradient-purple group-hover:text-[#030712] group-hover:border-transparent transition-all duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors group-hover:text-purple-main heading-premium">E6. Brochure_Security Systems Management Inc.pdf</h3>
                <span className="text-purple-main text-sm font-semibold flex items-center gap-2 group-hover:text-foreground transition-colors">
                  <Download className="w-4 h-4" /> Download PDF
                </span>
              </div>
            </a>

            <a 
              href="https://img1.wsimg.com/blobby/go/94663fab-43bc-4548-8196-d416ddebf9fc/SSm2-0001.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-6 glass-effect premium-card p-6 rounded-xl border border-border hover:border-purple-main/30 group"
            >
              <div className="bg-purple-main/10 border border-purple-main/20 p-4 rounded-lg text-purple-main group-hover:bg-gradient-purple group-hover:text-[#030712] group-hover:border-transparent transition-all duration-300">
                <FileText className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1 transition-colors group-hover:text-purple-main heading-premium">SSm2-0001.pdf</h3>
                <span className="text-purple-main text-sm font-semibold flex items-center gap-2 group-hover:text-foreground transition-colors">
                  <Download className="w-4 h-4" /> Download PDF
                </span>
              </div>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}


