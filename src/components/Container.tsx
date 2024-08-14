import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
    className={`container max-w-custom max-h-custom mx-auto xl:px-10 ${
      props.className ? props.className : ""
    }`}>
      {props.children}
    </div>
  );
}
