"use client";
import { useParams } from "next/navigation";

const Details = () => {
  const param = useParams();
  return <h1>Hello detail {param.id}</h1>;
};
export default Details;
