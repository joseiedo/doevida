import { PageBase } from "@/components";
import BloodCenter from "../../../../models/BloodCenter";
import BloodCenterCard from "@/components/BloodCenterCard.component";
import { IBloodCenter } from "@/@types/BloodCenter";

export default async function BloodCenters() {
  const regions = await BloodCenter.getAll();

  return (
    <PageBase>
      <h1 className="text-center py-9  text-4xl font-bold text-gray-700">
        Hemocentros do país por região
      </h1>
      {regions.map(({ name, bloodCenters }) => (
        <div className="max-w-3xl mx-auto py-8" key={name}>
          <h2 className="text-3xl font-bold text-gray-700 mb-5">{name}</h2>
          <ul className="flex flex-col gap-5">
            {renderBloodCenters(bloodCenters)}
          </ul>
        </div>
      ))}
    </PageBase>
  );
}

function renderBloodCenters(bloodCenters: IBloodCenter[]) {
  return bloodCenters.map((bloodCenter, index) => (
    <BloodCenterCard bloodCenter={bloodCenter} key={index} />
  ));
}
