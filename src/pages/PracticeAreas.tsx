import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Building2, 
  Scale, 
  Briefcase, 
  Shield, 
  GraduationCap,
  Globe,
  Gavel,
  Building,
  Network,
  HeartPulse,
  Wifi,
  BadgeDollarSign
} from "lucide-react";

const PracticeAreas = () => {
  const practices = [
    {
      title: "Anti-Corruption/White Collar Practices",
      icon: Shield,
      description: "We provide comprehensive legal counsel on anti-corruption compliance, internal investigations, and defense against white-collar criminal charges. Our team has extensive experience in FCPA compliance and enforcement actions."
    },
    {
      title: "Banking and Finance Law",
      icon: BadgeDollarSign,
      description: "Our banking and finance practice advises financial institutions, lenders, and borrowers on complex financial transactions, regulatory compliance, and restructuring matters."
    },
    {
      title: "Data Protection and Privacy Law",
      icon: Network,
      description: "We help organizations navigate the complex landscape of data protection regulations, including GDPR compliance, privacy policies, and data breach response strategies."
    },
    {
      title: "Employment Law Practices",
      icon: Briefcase,
      description: "Our employment law team provides guidance on workplace policies, employment contracts, discrimination claims, and labor relations matters."
    },
    {
      title: "Intellectual Property Practices",
      icon: GraduationCap,
      description: "We protect and enforce intellectual property rights through patent, trademark, and copyright registration, licensing agreements, and litigation when necessary."
    },
    {
      title: "Litigation & Arbitration",
      icon: Scale,
      description: "Our litigation team represents clients in complex commercial disputes, international arbitration, and alternative dispute resolution proceedings."
    },
    {
      title: "Pharmaceutical and Healthcare",
      icon: HeartPulse,
      description: "We provide specialized legal services to healthcare providers, pharmaceutical companies, and medical device manufacturers on regulatory compliance and litigation matters."
    },
    {
      title: "Competition Law Practices",
      icon: Gavel,
      description: "Our competition law practice advises on merger control, antitrust compliance, and represents clients in investigations and enforcement proceedings."
    },
    {
      title: "EC Law and Regulation",
      icon: Globe,
      description: "We guide clients through European Commission regulations, compliance requirements, and representation before EU institutions."
    },
    {
      title: "General Corporate / Contracts",
      icon: Building2,
      description: "Our corporate team handles mergers and acquisitions, corporate governance, commercial contracts, and general business law matters."
    },
    {
      title: "Real Estate Law Practices",
      icon: Building,
      description: "We assist clients with real estate transactions, development projects, leasing, and property-related dispute resolution."
    },
    {
      title: "Technology & Telecommunications",
      icon: Wifi,
      description: "Our technology practice advises on software licensing, IT contracts, telecommunications regulations, and emerging technology matters."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div 
        className="h-[200px] relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("/law-library.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-white">
            Practice Areas
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair text-primary text-center mb-4">
            A diverse range of expertise
          </h2>
          <p className="text-gray-600 text-center">
            Our firm provides comprehensive legal services across a wide range of practice areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-accent overflow-hidden">
              <Accordion type="single" collapsible>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="w-full">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="bg-primary rounded-full p-3 text-white">
                        <practice.icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-playfair text-primary group-hover:text-primary-light transition-colors text-left">
                        {practice.title}
                      </h3>
                    </CardContent>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <p className="text-gray-600">{practice.description}</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;