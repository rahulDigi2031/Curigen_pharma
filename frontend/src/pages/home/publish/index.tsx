import Image from "next/image";

export default function PublishContent() {
  const features = [
    "Government Recognised Export House",
    "Research based products",
    "Short Delivery Lead Time",
    "Modern Infrastructure",
    "Competitive Pricing",
    "Efficient Communication",
  ];

  const stats = [
    { value: "86+", label: "Countries" },
    { value: "250+", label: "International Clients" },
    { value: "600+", label: "Sterile Products" },
    { value: "900+", label: "Non - Sterile Products" },
  ];

  return (
    <div className="relative h-[838px] w-full bg-[url('/backgroundDoctor.png')] bg-cover bg-no-repeat">
      <div className="w-4/5 mx-auto flex justify-between pt-[150px] relative">
        {/* Left Content */}
        <div className="text-white flex-1">
          <h2 className="text-3xl font-bold pb-6">Why US?</h2>
          <p className="text-lg max-w-3xl pb-8">
            Curigen Pharmaceutical has established itself as a renowned name
            in the pharmaceutical industry, recognized for its unwavering
            dedication to delivering high-quality and effective pharmaceutical
            products. With years of experience
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[500px]">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 text-white bg-[#076776] rounded-full flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Image and Stats */}
        <div className="relative flex-1">
          <Image
            src="/Doctor.png"
            alt="Doctor"
            width={480}
            height={760}
            className="absolute right-[20%] left-[10%] -top-24 z-10"
          />

          {/* Stats Box */}
          <div className="absolute -bottom-[220px] right-[60%] z-20 bg-white rounded-[20px] p-6 shadow-lg w-[1080px] h-[120px] flex justify-between items-center">
            {stats.map((item, index) => (
              <div key={index} className="text-center min-w-[140px]">
                <h3 className="text-3xl font-bold text-[#002B5B]">{item.value}</h3>
                <p className="text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
