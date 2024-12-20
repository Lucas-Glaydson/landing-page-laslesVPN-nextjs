import Image from "next/image";
import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-grey text-black p-8 font-rubik">
      <section className="flex justify-between h-48 mb-11">
        <div className=" h-48">
          <h2 className="font-semibold mb-3">Product</h2>
          <ul className="flex flex-col justify-start space-y-3 h-48">
            <li><Link href="">Download</Link></li>
            <li><Link href="">Pricing</Link></li>
            <li><Link href="">Locations</Link></li>
            <li><Link href="">Server</Link></li>
            <li><Link href="">Countries</Link></li>
            <li><Link href="">Blog</Link></li>
          </ul>
        </div>
        <div  className=" h-48">
          <h2 className="font-semibold mb-3">Engage</h2>
          <ul className="flex flex-col justify-start space-y-3 h-48">
            <li><Link href="">LaslesVPN?</Link></li>
            <li><Link href="">FAQ</Link></li>
            <li><Link href="">Tutorials</Link></li>
            <li><Link href="">About us</Link></li>
            <li><Link href="">Privacy policy</Link></li>
            <li><Link href="">Terms of service</Link></li>
          </ul>
        </div>
        <div  className=" h-48">
          <h2 className="font-semibold mb-3">Earn money</h2>
          <ul className="flex flex-col justify-start space-y-3 h-48">
            <li><Link href="">Become partner</Link></li>
            <li><Link href="">Affilite</Link></li>
          </ul>
        </div>
      </section>
      <section className="mt-28 flex flex-col space-y-9">
        <div className="flex gap-3 text-[18px] justify-center">
          <Image src="/logo.svg" alt="page logo" width={30} height={30} />
          <h2>Lasles<span className="font-semibold">VPN</span></h2>
        </div>
        <p className="text-center text-[15px]">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
        <div className="flex justify-center gap-8">
          <Image src="/facebook.svg" alt="facebook photo" width={40} height={40} />
          <Image src="/whatsapp.svg" alt="whatsapp photo" width={40} height={40} />
          <Image src="/youtube.svg" alt="youtube photo" width={40} height={40} />
        </div>
      </section>
    </footer>
  )
}