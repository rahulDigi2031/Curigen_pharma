import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function ExperinceSection(){
    return(
        <Box className="2xl:mb-20  lg:mt-10  w-4/5 mx-auto flex flex-col md:flex-row items-center gap-4 py-10 mt-[250px] sm:mt-[240px] below-sm:mt-[250px]">
        <Box className="w-full md:w-1/2 pl-0 md:pl-5">
          <Image src="/group174.png" alt="" width={650} height={400} className="w-full h-auto"></Image>
        </Box>
        <Box className="w-full md:w-1/2 md:font-size-[20px]">
            <Box className="mb-2">
                <Typography variant="h5" className="text-[#23A397] font-bold-800">WEL-COME TO</Typography>
            </Box>
            <Box className="mb-2">
                <Typography variant="h5" className="font-bold-800"><span className="text-[#23A397]">Curigen</span> Pharmaceuticals</Typography>
                <Typography variant="h5" className="font-bold-800">Limited</Typography>
            </Box>
          <Typography className="w-full mb-6">
            Curigen Pharmaceutical has established itself as a renowned name in
            the pharmaceutical industry, recognized for its unwavering
            dedicationto delivering high-quality and effective pharmaceutical
            products. With years of experience
          </Typography>

          <Box className="flex flex-wrap gap-y-4 gap-x-8 items-center">
             <Box className="flex items-center gap-1">
             <Image src="/dot.png" alt="" width={30} height={30}/>
             <Typography className="font-bold">Streamlined Shipping Experience</Typography>
             </Box>

             <Box className="flex items-center gap-1">
             <Image src="/dot.png" alt="" width={30} height={30} />
             <Typography className="font-bold">Streamlined Shipping Experience</Typography>
             </Box>

             <Box className="flex items-center gap-1">
             <Image src="/dot.png" alt="" width={30} height={30}/>
             <Typography className="font-bold">Streamlined Shipping Experience</Typography>
             </Box>

             <Box className="flex items-center gap-1">
             <Image src="/dot.png" alt="" width={30} height={30} />
             <Typography className="font-bold">Streamlined Shipping Experience</Typography>
             </Box>
          </Box>
        </Box>
      </Box>
    )
}