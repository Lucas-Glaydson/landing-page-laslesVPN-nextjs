import Header from "@/components/header/Header";
import Features from "@/components/Main/features/Features";
import Infos from "@/components/Main/infos/Infos";
import Introduction from "@/components/Main/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-rubik">
      <header className="flex justify-between mx-6 my-4">
        <Header />
      </header>

      <main className="flex-grow flex-col">
        <Introduction/>
        <Infos />
        <Features />
      </main>

      <footer className="bg-grey text-black p-4 text-center">
        <h2>Footer</h2>
      </footer>
    </div>
  );
}
