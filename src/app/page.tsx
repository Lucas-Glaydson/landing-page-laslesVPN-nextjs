import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Customer from "@/components/Main/customer/Customer";
import Features from "@/components/Main/features/Features";
import Infos from "@/components/Main/infos/Infos";
import Introduction from "@/components/Main/Introduction";
import Networks from "@/components/Main/Networks";
import Plan from "@/components/Main/plan/Plan";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between mx-6 my-4">
        <Header />
      </header>

      <main className="flex-grow flex-col font-rubik space-y-10">
        <Introduction />
        <Infos />
        <Features />
        <Plan />
        <Networks />
        <Customer />
      </main>

      <Footer />
    </div>
  );
}
