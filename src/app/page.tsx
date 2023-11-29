import { Benefits } from "@/components/Benefits";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MyClients } from "@/components/MyClients";
import { Plans } from "@/components/Plans";
import { Slide } from "@/components/Slide";

export default function Home() {
  return (
    <div>
      <div className="bg-zinc-900">
        <Header />
      </div>
      <div>
        <Slide />
      </div>
      <div>
        <Benefits />
      </div>
      <div>
        <Plans />
      </div>
      <div>
        <MyClients />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}
