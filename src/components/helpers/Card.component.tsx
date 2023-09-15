import Image from "next/image";
import Link from "next/link";

interface ICard {
  imagePath: string;
  imageAlt: string;
  heading: string;
  description: string;
  link: ILink;
}

interface ILink {
  href: string;
  label: string;
}

export default function Card({ imagePath, imageAlt, heading, description, link }: ICard) {
  return (
    <div className="w-80 h-96 rounded-sm shadow-lg">
      <Image
        src={imagePath}
        width={337}
        height={196}
        alt={imageAlt}
      />
      <div className="p-6">
        <h3 className="text-gray-800 mb-2 font-medium">{heading}</h3>
        <p className="text-gray-500 text-sm mb-4">
          {description}
        </p>
        <Link href={link.href} className="text-red-800 font-medium">
          {link.label}
        </Link>
      </div>
    </div>
  )
}
