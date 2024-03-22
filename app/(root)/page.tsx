"use client";
import { Button } from "@/components/ui/button";
import { useData } from "@/hooks/use-data";
import Image from "next/image";

export default function SetUpPage() {
  const data = useData();
  console.log(data, "data");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data.text}
      <Button
        onClick={() => {
          data.setText(Math.random() * 10);
        }}
      >
        but
      </Button>
    </main>
  );
}
