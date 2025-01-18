import { Card, CardContent } from "@/components/ui/card";
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
    },
    {
      title: "Banking and Finance Law",
      icon: BadgeDollarSign,
    },
    {
      title: "Data Protection and Privacy Law",
      icon: Network,
    },
    {
      title: "Employment Law Practices",
      icon: Briefcase,
    },
    {
      title: "Intellectual Property Practices",
      icon: GraduationCap,
    },
    {
      title: "Litigation & Arbitration",
      icon: Scale,
    },
    {
      title: "Pharmaceutical and Healthcare",
      icon: HeartPulse,
    },
    {
      title: "Competition Law Practices",
      icon: Gavel,
    },
    {
      title: "EC Law and Regulation",
      icon: Globe,
    },
    {
      title: "General Corporate / Contracts",
      icon: Building2,
    },
    {
      title: "Real Estate Law Practices",
      icon: Building,
    },
    {
      title: "Technology & Telecommunications",
      icon: Wifi,
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
            <Card 
              key={index}
              className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer bg-accent"
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-primary rounded-full p-3 text-white">
                  <practice.icon className="w-6 h-6" />
                </div>
                <h3 className="font-playfair text-primary group-hover:text-primary-light transition-colors">
                  {practice.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;