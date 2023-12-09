import { IBloodCenter } from "@/@types/BloodCenter";
import { IContact, IContactInfoType } from "@/@types/Contact";
import {
  AtSymbolIcon,
  GlobeAmericasIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import { ReactElement } from "react";

interface IBloodCenterCard {
  bloodCenter: IBloodCenter;
}

export default function BloodCenterCard({ bloodCenter }: IBloodCenterCard) {
  return (
    <div className="px-8 py-6 shadow-md rounded-sm h-fit">
      <h3 className="font-medium">{bloodCenter.name}</h3>
      <ul>{renderBloodCenterInfo(bloodCenter.contact)}</ul>
    </div>
  );
}

const defaultClass = "block h-6 w-6 text-rose-500";

const InfoIcons: { [key in IContactInfoType]: ReactElement } = {
  address: <MapPinIcon className={defaultClass} />,
  postalCode: <GlobeAmericasIcon className={defaultClass} />,
  phone: <PhoneIcon className={defaultClass} />,
  email: <AtSymbolIcon className={defaultClass} />,
};
function renderBloodCenterInfo(contact: IContact) {
  const fields: IContactInfoType[] = [
    "address",
    "postalCode",
    "phone",
    "email",
  ];

  return fields.map((type) => (
    <p key={type} className="flex items-start gap-1 break-words max-w-max">
      {InfoIcons[type]}
      {contact[type]}
    </p>
  ));
}
