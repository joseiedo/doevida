import { PageBase } from "@/components";
import Hemocenter from "../../../../models/hemocenter";
import HemocenterCard from "@/components/HemocenterCard.component";
import { IHemocenter } from "@/@types/Hemocenter";

export default async function Hemocenters() {
  const regions = await Hemocenter.getAll();

  return (
    <PageBase>
      <h1 className="text-center py-9  text-4xl font-bold text-gray-700">
        Hemocentros do país por região
      </h1>
      {regions.map(({ name, hemocenters }) => (
        <div className="max-w-3xl mx-auto py-8" key={name}>
          <h2 className="text-3xl font-bold text-gray-700 mb-5">{name}</h2>
          <ul className="flex flex-col gap-5">
            {renderHemocenters(hemocenters)}
          </ul>
        </div>
      ))}
    </PageBase>
  );
}

function renderHemocenters(hemocenters: IHemocenter[]) {
  return hemocenters.map((hemocenter, index) => (
    <HemocenterCard hemocenter={hemocenter} key={index} />
  ));
}
