import Layout from "@/components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col justify-between items-center h-[40vh]">
            <div className="hero-home">
                  <Image 
                  src="/globe.svg"
                  fill
                  alt="globe"
                  style={{objectFit: 'contain'}}
                  />
            </div>

    

    
      
            <h1 className="text-yellow-300">Detta är home sweet home</h1>
            <h2 className="text-green-100">Detta är home sweet home</h2>
          
     </div>
 
    </Layout>
  )
}

