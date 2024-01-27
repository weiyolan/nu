import Image from "next/image";

export default function Home() {
  return <Image src="/produit.png" alt="Nu: page Produit" className="w-screen" width={1280} height={5922} quality={100} priority />;
}
