import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import ResumeInfo from "@/components/ResumeInfo";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <section className="relative w-full">
        <ScrollyCanvas />
        <Overlay />
      </section>
      <ResumeInfo />
    </main>
  );
}
