import { PageBase } from "@/components";
import Hemocenter from "../../../../models/hemocenter";
import HemocenterCard from "@/components/HemocenterCard.component";

export default async function Hemocenters() {
  const regions = await Hemocenter.getAll();

  return (
    <PageBase>
      {regions.map((region, index) => (
        region.hemocenters.map(hemocenter => <HemocenterCard hemocenter={hemocenter}/>)
      ))}
    </PageBase>
  );
}
