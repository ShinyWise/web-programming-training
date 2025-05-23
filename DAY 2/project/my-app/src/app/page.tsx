import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1 className="text-4x1 font-bold text-center">
      Welcome to <span className="text-blue-500">Sesi 2</span>
    </h1>
     <Button asChild variant="outline">
      <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">JANGAN DIPENCET PLS SERIUS!!!!!!</Link>
    </Button>
    </div>      
  );
}
