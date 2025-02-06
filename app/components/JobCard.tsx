// import Button from "./Button";
import { MapPin, Clock4 } from "lucide-react";
import logotest from "app/assets/logoTest.png";
import pin from "app/assets/pin.svg";
import clock from "app/assets/Time Circle.svg";

interface JobCardProps {
  title: string;
  description: string;
  location: string;
  releaseTime: string;
  workType: string;
  jobType: string;
}

export default function JobCard({
  title,
  description,
  location,
  releaseTime,
  jobType,
  workType,
}: JobCardProps) {
  return (
    <div className="flex flex-col p-6 bg-white w-[1170px] h-[325px] rounded-xl gap-5">
      <div className=" flex flex-col gap-[30px]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className=" flex items-center justify-center w-16 h-16 bg-[#F5F3EA] rounded-md">
              <img className="w-9 h-9" src={logotest} alt="" />
            </div>
            <h3 className="font-bold text-[34px]">{title}</h3>
          </div>

          <div>
            {/* <Button
              title="Apply Now"
              textColor="#110B08"
              color="transparent"
              border="border"
              borderColor="border-black"
            /> */}
          </div>
        </div>
        <p className="text-[18px] text-[#574F4A] w-[840px]">{description}</p>
      </div>

      <hr className="bg-[#E5E5EC] w-[1110px] h-[1px]" />

      <div className="flex flex-col justify-center gap-5 mt-5">
        <div className="flex gap-5">
          <div className="w-[86px] h-8 bg-[#FFFBD6] flex items-center justify-center rounded text-sm text-[#110B08] font-semibold">
            {workType}
          </div>
          <div className="w-[86px] h-8 bg-[#FFFBD6] flex items-center justify-center rounded text-sm text-[#110B08] font-semibold">
            {jobType}
          </div>
        </div>

        <div className="flex gap-[30px]">
          <p className="flex items-center gap-[6px]">
            <img src={pin} className="w-4 h-4" alt="" />
            {location}
          </p>
          <p className="flex items-center gap-[6px] ">
            <img src={clock} className="w-4 h-4" alt="" />
            {releaseTime}
          </p>
        </div>
      </div>
    </div>
  );
}
