import Header from "@/components/header/Header";
import Features from "@/components/Main/features/Features";
import Infos from "@/components/Main/infos/Infos";
import Introduction from "@/components/Main/Introduction";
import Plan from "@/components/Main/plan/Plan";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between mx-6 my-4">
        <Header />
      </header>

      <main className="flex-grow flex-col font-rubik">
        <Introduction/>
        <Infos />
        <Features />
        <Plan />
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
