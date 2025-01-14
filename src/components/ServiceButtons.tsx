const ServiceButtons = () => {
  const services = [
    { title: "About Us", href: "#about" },
    { title: "Practice Areas", href: "#practice" },
    { title: "Bulletin", href: "#bulletin" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="group bg-primary hover:bg-primary-light transition-colors rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-playfair text-white mb-4">
              {service.title}
            </h3>
            <div className="w-12 h-1 bg-secondary mx-auto transform group-hover:scale-x-150 transition-transform" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ServiceButtons;