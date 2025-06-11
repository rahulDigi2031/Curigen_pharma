import Footer from "@/Components/footer";
import BusinessVision from "./bussinessValue";
import Counter from "./counter";
import Experience from "./experince";
import HeaderAboutUs from "./Header";
import MissionVisionSection from "./mission";
import ManagementMessage from "./aboutgallery";

export default function AboutUs(){
    return(
        <>
            <header>
                <HeaderAboutUs/>
            </header>

            <main>  
                <Experience/>

                <Counter/>

                <MissionVisionSection/>
                
                <BusinessVision />

                <ManagementMessage />
            </main>

            <footer>    
                    <Footer/>
            </footer>

        </>
    )
}