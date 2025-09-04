import PricingCard from "./Pricingcard";


const PricingSection = () => {
  const features = [
    "24/7 Support",
    "Instant Fund Transfer",
    "Seamless POS Integration",
    "Real-Time Transaction Monitoring",
  ];

  return (
    <div className="max-w-7xl mx-auto text-center mt-10 mb-12 px-4">
      <h2 className="text-3xl font-bold">
        Simple, Transparent <br /> Pricing — No Hidden Fees!
      </h2>
      <h4 className="text-sm mt-2 text-gray-600">
        Trusted by Thousands of Business Owners. See what our satisfied customers have to say about CASA.
      </h4>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch py-12">
        
        <PricingCard
          plan="Basic Plan"
          rate="2% discount rate"
          description="For businesses processing up to $10,000/month."
          features={features}
          className="flex-1 min-h-[450px]"
        />

        <PricingCard
          plan="Enterprise Plan"
          rate="Custom Rate"
          description="Tailored for high-volume businesses."
          features={features}
          className="flex-1 min-h-[450px] bg-green-600 text-white border-green-600"
        />

        <PricingCard
          plan="Growth Plan"
          rate="1.5% discount rate"
          description="For businesses processing up to $10,000 – $50,000/month."
          features={features}
          className="flex-1 min-h-[450px]"
        />
      </div>
    </div>
  );
};

export default PricingSection;
