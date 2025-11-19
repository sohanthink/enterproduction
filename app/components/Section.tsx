import React from "react";

interface SectionProps {
  children: React.ReactNode;
  bgColor?: "black" | "white";
  className?: string;
  id?: string;
}

export default function Section({
  children,
  bgColor = "black",
  className = "",
  id,
}: SectionProps) {
  const bgStyles =
    bgColor === "black" ? "bg-black text-white" : "bg-white text-black";

  return (
    <section
      id={id}
      className={`${bgStyles} py-20 md:py-32 px-4 md:px-6 ${className}`}
    >
      <div className="w-[85%] mx-auto">{children}</div>
    </section>
  );
}
