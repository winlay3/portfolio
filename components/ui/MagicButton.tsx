import React from "react";

type MagicButtonProps = {
  title: string; // Required
  handleClick?: () => void; // Optional
  otherClasses?: string; // Optional
};

const MagicButton = ({
  title,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  return (
    <button
      className={`relative inline-flex w-full h-12 overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60 md:mt-10 ${otherClasses}`}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {title}
      </span>
    </button>
  );
};

export default MagicButton;