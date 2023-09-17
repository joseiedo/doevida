import { ReactNode } from "react";
import { Header, Footer } from "./"

interface IPageBase {
  children: ReactNode
}
export default function PageBase({ children }: IPageBase) {
  return <>
    <Header />
    {children}
    <Footer />
  </>
}
