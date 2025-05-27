import Footer from "@/Components/footer";
import ContactSection from "./contactSection";
import HeaderContact from "./header";
export default function ContactPage(){

    return(
        <>
            <header>
                <HeaderContact/>
            </header>

            <main>
                <ContactSection/>
            </main>

            <footer>
                <Footer/>
            </footer>
        </>
    )
}