import { StarFilledIcon } from "@radix-ui/react-icons";

interface ProductCardProps {
  name: string;
  creator: string;
  rating: number;
  price: number;
}

const ProductCard = ({ name, creator, rating, price }: ProductCardProps) => {
  return (
    <div>
      <div className="relative cursor-pointer bg-background-300 aspect-square rounded-xl mb-2 flex items-center justify-center">
        {name}
      </div>
      <p className="text-sm font-bold cursor-pointer">{name}</p>
      <p className="text-sm text-gray cursor-pointer">{creator}</p>
      <div className="flex items-center gap-1 cursor-pointer">
        <StarFilledIcon className="w-4 h-4" />
        <StarFilledIcon className="w-4 h-4" />
        <StarFilledIcon className="w-4 h-4" />
        <StarFilledIcon className="w-4 h-4" />
        <StarFilledIcon className="w-4 h-4" />
        <p className="text-sm">{rating}</p>
      </div>
      <p className="text-sm font-bold cursor-pointer">${price}</p>
    </div>
  );
};

export default ProductCard;
