import { ReactNode } from "react";

interface ISection {
  children: ReactNode
}

export default function Section({children}: ISection){
  return <section className="py-9">{children}</section>
}
