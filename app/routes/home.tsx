import Input from "~/components/Input";
import type { Route } from "./+types/home";
import Button from "~/components/Button";
import heroImg from "../../public/heroImg.svg";
import snowFlake from "../../public/snowflake.svg";
import hues from "../../public/hues.svg";
import cactus from "../../public/Cactus.svg";
import vision from "../../public/vision.svg";
import greenish from "../../public/greenish.svg";
import cloud from "../../public/cloud.svg";
import proline from "../../public/ProLine.svg";
import leafe from "../../public/Leafe.svg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col  items-center mt-11">
      <section className="flex flex-col items-center justify-center w-[870px] h-[340px] text-center">
        <div className=" flex flex-col items-center text-center gap-8">
          <h1 className="font-bold text-7xl">
            Your new job, vacancies all over the world
          </h1>
          <p className="text-lg text-[#574F4A] w-[670px]">
            The best place to discover & apply to the coolest start up jobs.
            More than 672800 current vacancies from 17750 sites available to
            you.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Input />
            <Button title="Explore More" color="#FF9966" textColor="#110B08" />
          </div>
        </div>
      </section>
      <img src={heroImg} alt="" className="mt-11" />
      <div className="w-full h-[88px] flex items-center justify-between p-10 bg-[#FF9966]">
        <img src={snowFlake} alt="" />
        <img src={hues} alt="" />
        <img src={cactus} alt="" />
        <img src={vision} alt="" />
        <img src={greenish} alt="" />
        <img src={cloud} alt="" />
        <img src={proline} alt="" />
        <img src={leafe} alt="" />
      </div>

      <section></section>
    </main>
  );
}
