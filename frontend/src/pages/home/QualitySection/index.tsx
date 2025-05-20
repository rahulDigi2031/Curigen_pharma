import Image from "next/image";

export default function PromiseSection() {
  return (
    <div className="w-full px-4">
      <div className="w-full md:w-4/5 bg-[#023350] rounded-[20px] p-6 md:p-10 my-12 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-5">
          {/* Promise Text */}
          <div className="text-white max-w-[280px] text-center md:text-left">
            <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
            <p className="text-base leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-[1px] h-20 bg-[#1E5C7B] mx-4" />

          {/* Quality */}
          <div className="text-white">
            <div className="flex items-center gap-4">
              <div className="bg-[#23A397] rounded-full p-4">
                <Image src="/quality.png" alt="Quality" width={40} height={40} />
              </div>
              <h3 className="text-lg font-semibold">Quality</h3>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-[1px] h-20 bg-[#1E5C7B] mx-4" />

          {/* Affordability */}
          <div className="text-white">
            <div className="flex items-center gap-4">
              <div className="bg-[#23A397] rounded-full p-4">
                <Image src="/affordability.png" alt="Affordability" width={40} height={40} />
              </div>
              <h3 className="text-lg font-semibold">Affordability</h3>
            </div>
          </div>

          {/* Divider - Hidden on mobile */}
          <div className="hidden md:block w-[1px] h-20 bg-[#1E5C7B] mx-4" />

          {/* Accessibility */}
          <div className="text-white">
            <div className="flex items-center gap-4">
              <div className="bg-[#23A397] rounded-full p-4 border-2 border-[#23A397]">
                <Image src="/accessibility.png" alt="Accessibility" width={40} height={40} />
              </div>
              <h3 className="text-lg font-semibold">Accessibility</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
