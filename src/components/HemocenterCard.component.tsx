import { Contact, Hemocenter } from "@/@types/Hemocenter";

interface IHemocenterCard {
  hemocenter: Hemocenter;
}

export default function HemocenterCard({ hemocenter }: IHemocenterCard) {
  return (
    <div>
      <h3>{hemocenter.name}</h3>
      <ul>
        {Object.entries(hemocenter.contact).map(([_, foo], index) => (
          <li key={index}>{foo.content}</li>
        ))}
      </ul>
    </div>
  );
}
