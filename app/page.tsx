import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <>
      <div className="text-white text-2xl underline">
        <Button className="border border-red-400 font-bold rounded-full hover:bg-white hover:text-black">
          Home
        </Button>
      </div>
    </>
  );
}
