import { Separator } from "@/components/ui/separator";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[300px] bg-primary flex items-center justify-center"
           style={{
             backgroundImage: "url('/law-library.jpg')",
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80" />
        <h1 className="relative text-4xl md:text-5xl font-playfair font-bold text-white z-10">
          About Us
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Introduction */}
        <div className="prose max-w-none">
          <p className="text-lg font-medium text-primary mb-8">
            Özçelik & Abanoz Law Firm, with its expert attorneys and consultants, is an Ankara-based independent law firm providing high-quality services in various fields of law to its clients.
          </p>
          <p className="text-gray-600 mb-8">
            As Özçelik & Abanoz Law Firm, our ultimate goal is to provide the most effective legal services to our clients in a practical way and at the right time. To achieve our goal, we not only offer solutions to our clients' current legal problems but also present solutions that they may face in the future, prioritizing our clients' notification and confidentiality in all our services.
          </p>
        </div>

        {/* Service Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Understanding Business */}
          <div className="space-y-4">
            <div className="h-16 w-16 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M2 22h20" />
                <path d="M3 3v18" />
                <path d="M18 3v18" />
                <path d="M21 3v18" />
                <path d="M8 12l3-3 2 2 3-3" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary">
              Understanding Your Business
            </h3>
            <p className="text-gray-600">
              We understand that the service we will provide to our clients depends on their needs, sector dynamics, and business life requirements.
            </p>
          </div>

          {/* Practical Solutions */}
          <div className="space-y-4">
            <div className="h-16 w-16 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                <path d="M8 7h8" />
                <path d="M8 11h8" />
                <path d="M8 15h8" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary">
              Practical and Creative Solutions
            </h3>
            <p className="text-gray-600">
              We act with the awareness that our most important duty is to protect our clients' rights and provide them with the most practical and cost-effective solution.
            </p>
          </div>

          {/* Trust */}
          <div className="space-y-4">
            <div className="h-16 w-16 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h3 className="text-xl font-playfair font-semibold text-primary">
              Trust and Respect
            </h3>
            <p className="text-gray-600">
              We know that our clients' trust and respect are our most important assets. In our relationships with our clients, we prioritize mutual trust and respect at every stage.
            </p>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Contact Information */}
        <div className="bg-accent p-8 rounded-lg">
          <h2 className="text-2xl font-playfair font-semibold text-primary mb-6">
            Contact Us
          </h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Address:</strong> Mustafa Kemal District, C Block Floor 21
              No.4, Çankaya - Ankara, Turkey
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +90 312 511 05 35
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@ozeliklegal.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;