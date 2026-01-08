import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWorkshops from "./components/OurWorkshops";
import PreviousWorkshops from "./components/PreviousWorkshops";
import AboutTechForBharat from "./components/AboutTechForBharat";
import ByTheNumbers from "./components/ByTheNumbers";
import StudentVoices from "./components/StudentVoices";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurWorkshops />
        <PreviousWorkshops />
        <AboutTechForBharat />
        <ByTheNumbers />
        <StudentVoices />
        <Footer />
      </main>
    </>
  );
}
