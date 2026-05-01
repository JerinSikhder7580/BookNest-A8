import Banner from "@/components/Banner";
import DigitalLibrary from "@/components/DigitalLibrary";
import ReaderNotes from "@/components/ReaderNotes";
import Image from "next/image";
import BookDetails from "./bookDetails/[id]/page";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <DigitalLibrary></DigitalLibrary>
      <ReaderNotes></ReaderNotes>
      
    </div>
  );
}
