"use client";
import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "@/components/ui/textHoverEffect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import Link from "next/link";
export default function About() {
  return (
    <div className="min-h-screen bg-black p-8 text-white"> 
      <h1 className="text-4xl font-bold mb-4 text-yellow-400">OMG THIS IS YOUR ABOUT PAGE</h1>
      <Button asChild variant="outline">
      <Link href="/index">Go Home PLS JELEK BANGET</Link>
    </Button>
      
      <div className="w-full h-[300px] mt-12 flex items-center justify-center">
        <TextHoverEffect 
          text="  Welcome..." 
          duration={0.15} 
        />
      </div>
      <div>

      </div>
    </div>
  );
}