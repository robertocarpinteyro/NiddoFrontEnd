import { Data } from "@/pages";
import React from "react";
import CardSlider from "./CardSlide";

type Props = {
  data: Data[];
};

function Slides({ data }: Props) {
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <CardSlider key={data.img} data={data} />;
      })}
    </div>
  );
}

export default Slides;
