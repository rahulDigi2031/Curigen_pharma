import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";

export default function Experience(){
    return(
        <Box sx={{width:{xs:"98%" , md:"80%"} , margin:{xs:"20px auto" , md:"2% auto"}}}>
        <Grid container spacing={2} alignItems="center">
            <Grid item lg={6} xs={12} md={6}>
                <Box
                    sx={{
                        width: "100%",
                        display: {lg: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        height: { xs: "auto", md: "100%" },
                    }}
                >
                    <Image
                        src="/Group174.png"
                        alt="Experience"
                        width={500}
                        height={425}
                        style={{
                            width: "100%",
                            height: "auto",
                            maxWidth: 550,
                            borderRadius: 20,
                            objectFit: "cover",
                        }}
                    />
                </Box>

            </Grid>

            <Grid item lg={6} xs={12} md={6}>
                <Box sx={{padding:{xs:"10px" , sm:"20px"} , marginTop:{xs:"10px" , md:"20px"}}}>
                    <Typography variant="h4" sx={{fontWeight:"bold" , color:"#23A397" , mb:3 , fontSize:{xs:"1.25rem" , sm:"2rem"}}}>Wel-come to <br /><span style={{color:"#23A397"}}>Curigen</span><span style={{color:"#023350"}}> Pharmaceuticals Limited</span></Typography>
                    <Box>
                        <Typography variant="body1" sx={{color:"#023350", mb:3}}>
                            CURIGEN PHARMA, based in Surat (Gujarat), India, is a well-established name in the field of Pharmaceutical & Healthcare Industry. We are a Global Pharmaceutical Manufacturing and Exporting company, renowned internationally for its quality standards and efficacy of the products
                        </Typography>
                        <Typography variant="body2" sx={{color:"#023350" , fontWeight:"bold" , mb:3}}>
                            CURIGEN PHARMA is a leading Manufacturer and Exporter of Pharmaceutical Finished Formulations such as Tablets, Capsules, Injections, Pre-filled Syringes, Inhalers/Respules, Nasal Sprays, Creams, Ointments, Eye/Ear Drops, Syrups, Suspensions, Suppositories/Pessaries, Sachets, Powders, Lozenges, Jelly & Lotions across the globe
                        </Typography>
                        <Typography sx={{color:"#023350" , mt:3}}>
                            We have State-of-the-Art manufacturing facilities with WHO-GMP, ISO 9001:2015 accreditations. All the facilities are equipped with ultramodern technology. We have a robust product portfolio comprising of Medicines spread over all the major therapeutic areas like Antibiotic, Antimalarial, Antiviral, Antifungal, Anticancer, Antihypertensive, Anticonvulsant, Antidepressants, NSAID, Painkiller, Anticoagulant, Antiprotozoal, Anesthetic, Antiallergic, Antidiabetic, Antacid, Antidiarrhoeal, Laxative, Antiasthmatic, Erectile Dysfunction, Contraceptive, Vitamins, Hormones, Skin care and many more. Currently, the company is into manufacturing and exporting of more than 1500 products worldwide.    
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        
        <Typography sx={{color:"#023350" , mb:3}}>One of our specializations is Contract Manufacturing and 3rd Party Manufacturing where we ensure we manufacture the required pharmaceutical drugs and make it easily accessible to the market. Whether our client would like us to modify or enhance an existing product, create a new drug or increase the present manufacturing capacity of particular medicine, our team of professionals combined with our infrastructure is always ready for it.</Typography>
        
        <Typography sx={{color:"#023350" , mb:3}}>
            Wellona Pharma is backed by a highly skilled team of Drug Regulatory Affairs (DRA) who are well versed with international regulatory policies and procedures. Our R&D capabilities include dossier development, chemical synthesis, process optimization, formulation development, analytical development and conducting stability studies. We are undoubtedly one of the premium names due to our hard-earned credibility of providing the best to medical practitioners and healthcare companies in the world.
        </Typography>

        <Typography sx={{color:"#023350" , mb:3}}>
           Quality has always been a strong part of Wellona Pharma – 'We always ensure a high level of quality in our healthcare products and related services'. Our organization has been committed to provide a wide range of quality and affordable Healthcare solutions to a large number of Healthcare Institutions, Governmental Institutions and Medical Facilities. We intend to be the ideal partner for our clients and our aim is to deliver a diverse array of quality healthcare supplies and Pharma Products.
        </Typography>

        <Typography sx={{color:"#023350" , mb:3}}>
           We have a team of dedicated professionals with years of industry experience to assure that all pharmaceuticals are stored, handled, and shipped according to the highest regulatory standards. We are well versed in handling temperature-controlled products, specific requests for various lot and expiry requests, and specialty medications.
        </Typography>

        <Typography sx={{color:"#023350" , mb:3}}>
          To accomplish Wellona Pharma's achievements in Pharmaceutical Exports, Ministry of Commerce & Industry has honoured us with badge of ONE STAR EXPORT HOUSE. We have earned accolades and recognition from customers in international market due to our indefatigable and determined commitment towards quality and customer satisfaction. Bringing all these factors together, Wellona Pharma has created a regular overseas presence in over 86 countries.
        </Typography>

        <Typography sx={{color:"#023350" , mb:3}}>
          Our Branded and Generic medicines enjoy steady demand in following countries:
        </Typography>

        <Typography sx={{color:"#023350" , mb:3 , fontWeight:"800"}}>
          Africa : <span style={{color:"#023350" , fontWeight:"200"}}>Algeria, Angola, Benin, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast (Cote D Ivoire), Somalia, Cameroon, Chad (Tchad), Burkina Faso, Burundi, Cape Verde, Central African Republic, Comoros, Congo DPR, Djibouti, Eritrea, Eswatini (Swaziland), Gabon, Guinea Republic, Guinea-Bissau, Equatorial Guinea, Lesotho, Liberia, Madagascar, Malawi, Mali, Mauritania, Mayotte, Mozambique, Namibia, Niger, Morocco, Rwanda, Saint Helena, Sao Tome and Príncipe, Senegal, Seychelles, Sierra Leone, South Sudan, Tanzania, Togo, Tunisia, Zambia</span>
        </Typography>

        <Typography sx={{color:"#023350" , mb:3 , fontWeight:"800"}}>
          North & South America : <span style={{color:"#023350" , fontWeight:"200"}}>Panama, Trinidad and Tobago, Costa Rica, Puerto Rico, Dominican Republic, Argentina, Guatemala, Guyana, Peru, Bolivia, Venezuela, Bahamas, Ecuador, American Samoa, Anguilla, Antigua, Aruba, Barbados, Belize, Bermuda, Bonaire, Cayman Islands, Chile, Colombia, Cuba, Curacao, Dominica, El Salvador, Falkland Islands, French Guyana, Grenada, Guadeloupe, Haiti, Honduras, Jamaica, Martinique, Nicaragua, Paraguay, St Barthelemy, St Eustatius, St Kitts, St Lucia, St Maarten, St Vincent, Suriname, Tahiti, Turks & Caicos, Uruguay, British Virgin Islands, US Virgin Islands</span>
        </Typography>

        <Typography sx={{color:"#023350" , mb:3 , fontWeight:"800"}}>
          OCEANIA : <span style={{color:"#023350" , fontWeight:"200"}}>Fiji, Papua New Guinea, Micronesia, Cook Islands, Guam, Kiribati, Mariana Islands, Marshall Islands, Nauru, Niue, Palau, Samoa, Solomon Islands, Tonga, Tuvalu, Vanuatu</span>
        </Typography>

        <Typography sx={{color:"#023350" , mb:3 , fontWeight:"800"}}>
          Asia : <span style={{color:"#023350" , fontWeight:"200"}}>Afghanistan, Bahrain, Bhutan, Brunei, Cambodia, Israel, Jordan, Russia, Kazakhstan, Qatar, Saudi Arabia, Syria, Turkey, Turkmenistan, Uzbekistan, Indonesia, Malaysia, Iran, Iraq, Tajikistan, Timor Leste, Kuwait, Kyrgyzstan, Laos, Lebanon, Macau, Maldives, Mongolia, Myanmar, Oman, Taiwan, Thailand</span>
        </Typography>

        <Typography sx={{color:"#023350" , mb:3 , fontWeight:"800"}}>
          Europe : <span style={{color:"#023350" , fontWeight:"200"}}> Austria, Georgia, Poland, Ukraine, Latvia, Bosnia and Herzegovina, Bulgaria, Canary Islands, Croatia, Estonia, Faroe Islands, Guernsey, Jersey, Kosovo, Lithuania, Malta, Moldova, Monaco, Montenegro, North Macedonia, Romania, San Marino, Serbia, Slovakia, Slovenia, Vatican City</span>
        </Typography>
    </Box>
    )
}