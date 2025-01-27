interface CardProps {
  img: string;
  title: string;
  text: string;
  color: string;
}

export default function Card({ img, text, title, color }: CardProps) {
  return (
    <div
      className={`w-[370px] h-[348px] p-5 rounded-xl ${color} flex flex-col items-center justify-center gap-[30px]`}
    >
      <img src={img} alt="" />
      <div className=" flex flex-col gap-[18px]">
        <h5 className="font-bold text-2xl">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
