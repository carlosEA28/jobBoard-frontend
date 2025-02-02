interface SocialButtonProps {
  logo: string;
  text: string;
}

export default function SocialButton({ logo, text }: SocialButtonProps) {
  return (
    <button className="w-[370px] h-[60px] bg-white rounded-md flex items-center justify-center gap-2 text-[#574F4A] text-base">
      <img src={logo} alt="" />
      {text}
    </button>
  );
}
