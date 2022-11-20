import React from "react";

interface ICustomButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
  className?: string;
  iconLeft?: React.ReactNode;
}

const CustomButton: React.FC<ICustomButton> = ({
  text,
  className,
  iconLeft,
  ...props
}) => {
  return (
    <button
      type="button"
      className={
        className ??
        `bg-gradient-to-r from-[#D71C5D] to-[#FF9017] text-sm px-3 py-2 text-white rounded-[10px]`
      }
      {...props}
    >
      {iconLeft}
      {text}
    </button>
  );
};

export default CustomButton;
