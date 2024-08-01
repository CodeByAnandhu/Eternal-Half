import Navbar from "../HomeOfWeb/components/Navbar";
import Hero from "../HomeOfWeb/components/Hero";
import HowItsWorks from "../HomeOfWeb/components/HowItsWorks";
import BottomBar from "../HomeOfWeb/components/BottomBar";
export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <Hero/>
      <HowItsWorks/>
      <BottomBar/>
    </main>
  );
}

