import { TSaleItems } from "@/lib/data";
import Image from "next/image";

const SimpleCardM = ({
  item,
  discount,
}: {
  item: TSaleItems[0];
  discount: number;
}) => {
  return (
    <div>
      <Image src={item.image} alt={item.name} width={300} height={300} />
      <p className="font-semibold text-xs line-clamp-1 m-2">{item.name}</p>
    </div>
  );
};

export default SimpleCardM;
