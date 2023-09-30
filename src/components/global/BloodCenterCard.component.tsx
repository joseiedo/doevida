import {
  Contact,
  IBloodCenter,
  ContactInfoType,
  IContactInfo,
} from "@/@types/BloodCenter";
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
const InfoIcons: { [key in ContactInfoType]: ReactElement } = {
  ADDRESS: <MapPinIcon className={defaultClass} />,
  POSTALCODE: <GlobeAmericasIcon className={defaultClass} />,
  PHONE: <PhoneIcon className={defaultClass} />,
  EMAIL: <AtSymbolIcon className={defaultClass} />,
};

function renderBloodCenterInfo(contact: Contact) {
  return Object.values(contact).map(
    ({ type, content }: IContactInfo, index) => (
      <p key={index} className="flex items-start gap-1 break-words max-w-max">
        {InfoIcons[type]}
        {content}
      </p>
    ),
  );
}
