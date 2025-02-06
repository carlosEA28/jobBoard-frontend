import Input from "~/components/Input";
import type { Route } from "./+types/home";
// import Button from "~/components/Button";
import heroImg from "../../app/assets/heroImg.svg";
import snowFlake from "../../app/assets/snowflake.svg";
import hues from "../../app/assets/hues.svg";
import cactus from "../../app/assets/Cactus.svg";
import vision from "../../app/assets/vision.svg";
import greenish from "../../app/assets/greenish.svg";
import cloud from "../../app/assets/cloud.svg";
import proline from "../../app/assets/ProLine.svg";
import leafe from "../../app/assets/Leafe.svg";
import Card from "~/components/Card";
import imgCard1 from "app/assets/imgCard1.svg";
import imgCard2 from "app/assets/imgCard2.svg";
import imgCard3 from "app/assets/imgCard3.svg";
import JobCard from "~/components/JobCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="flex flex-col  items-center mt-11  pb-20">
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
            {/* <Button
              title="Explore More"
              color="bg-[#FF9966]"
              textColor="text-[#110B08]"
              border="border-none"
            /> */}
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

      <section className="flex flex-col items-center">
        <div className="flex flex-col mt-[150px] justify-center text-center w-[1170px] h-[542px] gap-[30px]">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[52px] w-[570px] text-left">
              The fast track to your next job
            </h2>
            <p className="text-lg text-[#574F4A] text-left w-[470px]">
              We ensure your next step is a step forward. That's why we built a
              jobs marketplace that serves all kind of professionals first.
            </p>
          </div>

          <div className="flex flex-row gap-[30px] ">
            <Card
              title="Create one profile"
              text="Build your reputation with a universal profile that works across hundreds of different kind of employers."
              img={imgCard1}
              color="bg-[#EDA6E6]"
            />
            <Card
              title="Explore your options"
              text="Select your preferences (shift details, salary, location, etc.) and discover jobs most relevant to you."
              img={imgCard2}
              color="bg-[#FFF480]"
            />
            <Card
              title="Talk on your terms"
              text="Message multiple employers while keeping all communication in one, convenient place. It’s so much easy."
              img={imgCard3}
              color="bg-[#A8EBFF]"
            />
          </div>

          <div className="flex justify-center items-center w-[1170px] h-[192px] bg-[#66CCA0] rounded-xl p-9 gap-28">
            <div className="flex flex-col text-center gap-1">
              <h2 className="font-bold text-7xl">500k+</h2>
              <p className="text-lg">Messages from recruiters</p>
            </div>

            <div className="flex flex-col text-center gap-1">
              <h2 className="font-bold text-7xl">40k</h2> {/* fazer dinamico */}
              <p className="text-lg">Job oportunities</p>
            </div>

            <div className="flex flex-col text-center gap-1">
              <h2 className="font-bold text-7xl">17k</h2>
              <p className="text-lg">Offers made</p>
            </div>

            <div className="flex flex-col text-center gap-1">
              <h2 className="font-bold text-7xl">97%</h2>
              <p className="text-lg">Hire Sucess Rate</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-[570px] h-[401px] gap-[79px] mt-[212px] ">
          <div className="flex flex-col  gap-[18px]">
            <h2 className="font-bold text-[52px]">
              Find your dream jobs in the best companies
            </h2>
            <p className=" w-[470px] text-left text-[#574F4A]">
              We don’t believe that we’ve found the holy grail of tech
              combinations. Instead, we believe that you should always explore
              better and new tech. We challenge you to bring new ideas to the
              board.
            </p>
          </div>
          {/* <Button
            title="Sign Up Now"
            color="bg-[#FF9966]"
            textColor="bg-[#110B08]"
          /> */}
        </div>

        <div className="w-[1170px] h-[1715px]  flex flex-col items-center justify-center ">
          <div className="flex flex-col items-center mb-[70px] mt-48 gap-[18px]">
            <h2 className="font-bold text-[52px]">Latest featured jobs</h2>
            <p className="text-lg text-[#574F4A] w-[470px] text-center">
              Search and find your dream job is now easier than ever. Just
              browse a job and apply if you need to.
            </p>
          </div>

          <div className=" flex flex-col items-center gap-[30px] mt-8">
            <JobCard
              title="Lead Product Designer"
              description="We are looking for a lead product designer. A good suitable professional person for this very important role. Anyone can apply for this..."
              jobType="Fulltime"
              location="Worldwide"
              releaseTime="5 days ago"
              workType="Remote"
            />
            <JobCard
              title="Lead Product Designer"
              description="We are looking for a lead product designer. A good suitable professional person for this very important role. Anyone can apply for this..."
              jobType="Fulltime"
              location="Worldwide"
              releaseTime="5 days ago"
              workType="Remote"
            />
            <JobCard
              title="Lead Product Designer"
              description="We are looking for a lead product designer. A good suitable professional person for this very important role. Anyone can apply for this..."
              jobType="Fulltime"
              location="Worldwide"
              releaseTime="5 days ago"
              workType="Remote"
            />
            <JobCard
              title="Lead Product Designer"
              description="We are looking for a lead product designer. A good suitable professional person for this very important role. Anyone can apply for this..."
              jobType="Fulltime"
              location="Worldwide"
              releaseTime="5 days ago"
              workType="Remote"
            />
            {/* <Button
              title="Browse All Jobs"
              color="bg-[#FF9966]"
              textColor="bg-[#110B08]"
            /> */}
          </div>
        </div>
      </section>
    </main>
  );
}
