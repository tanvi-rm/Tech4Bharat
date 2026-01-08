import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWorkshops from "./components/OurWorkshops";
import PreviousWorkshops from "./components/PreviousWorkshops";
import AboutTechForBharat from "./components/AboutTechForBharat";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurWorkshops />
        <PreviousWorkshops />
        <AboutTechForBharat />
      </main>
    </>
  );
}
