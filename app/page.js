import Image from "next/image";
import Hero from "./components/Hero";
import Photos from "./photos/page";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Photos />
    </main>
  );
}
