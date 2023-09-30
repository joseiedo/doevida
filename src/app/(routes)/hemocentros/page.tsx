import {BloodCenter} from "@/models";
import BloodCenterCard from "@/components/global/BloodCenterCard.component";
import {IBloodCenter} from "@/@types/BloodCenter";

export default async function BloodCenters() {
  const regions = await BloodCenter.getAll();

  return (
    <>
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
    </>
  );
}

function renderBloodCenters(bloodCenters: IBloodCenter[]) {
  return bloodCenters.map((bloodCenter, index) => (
    <BloodCenterCard bloodCenter={bloodCenter} key={index} />
  ));
}
