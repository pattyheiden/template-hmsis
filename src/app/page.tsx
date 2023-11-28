import { Benefits } from "@/components/Benefits";
import { Header } from "@/components/Header";
import { Plans } from "@/components/Plans";
import { Slide } from "@/components/Slide";

export default function Home() {
  return (
    <div>
      <div className="bg-blue">
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
    </div>
  )
}
