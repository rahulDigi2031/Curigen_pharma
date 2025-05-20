import Image from "next/image";

const services = [
  { icon: "/icon.png", title: "Impeccable Quality" },
  { icon: "/icon1.png", title: "Affordable Medicines" },
  { icon: "/icon2.png", title: "Research and Development" },
  { icon: "/icon3.png", title: "Business Responsibility" },
];

interface ServiceCardProps {
  icon: string;
  title: string;
}

const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div className="bg-white rounded-[30%_30%_30%_0%] p-4 text-center shadow-md h-40 transition-all duration-300 hover:border-3 hover:border-dashed hover:border-[#002B5B]">
    <div className="flex justify-center mb-2">
      <div className="bg-[#00A99D] rounded-[50%_50%_50%_0] w-20 h-[70px] flex items-center justify-center">
        <Image src={icon} alt={title} width={250} height={250} />
      </div>
    </div>
    <h3 className="font-bold text-[#002B5B]">{title}</h3>
    <p className="text-sm text-gray-600">
      Lorem Ipsum is simply dummy text of the
    </p>
  </div>
);

export default function ServiceComponent() {
  return (
    <div className="bg-[#F5F7FA] py-12 px-4 w-full">
      <div className="w-4/5 mx-auto">
        <div className="flex items-center gap-8 flex-wrap mb-10">
          <div className="overflow-hidden w-[500px] h-[250px] flex-shrink-0">
            <Image 
              src="/image3.png" 
              alt="Service Image" 
              width={450} 
              height={180} 
              className="rounded-[80px] object-cover" 
            />
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#002B5B]">Our Services</h2>
            <p className="text-gray-600">
              One of our specializations is Contract Manufacturing and...
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} icon={s.icon} title={s.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
