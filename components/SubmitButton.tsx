import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
export interface SubmitButtonProps {
  children: React.ReactNode;
  isloading: boolean;
  className?: string;
}
const SubmitButton = ({
  children,
  isloading,
  className,
}: SubmitButtonProps) => {
  return (
    <Button
      type="submit"
      disabled={isloading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isloading ? (
        <div className="flex items-center gap-4">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            height={24}
            width={24}
            className="animate-spin"
          />
          loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
