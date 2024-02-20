import Sidebar from "@/components/Sidebar";
import DataContainer from "../components/DataContainer";

export default function Home() {
  return (
    <main className="max-w-[1440px] max-h-[1024px] relative flex items-center space-x-[20px] p-[25px] bg-[#111729]">
      
      {/** left section */}
      <div className="w-[60px] h-[904px] mx-[15px] mt-[10px]">
        <Sidebar />
      </div>

      {/** right section */}
      <div className="w-[1250px] h-[974px]">
        <DataContainer />
      </div>
      
    </main>
  );
}
