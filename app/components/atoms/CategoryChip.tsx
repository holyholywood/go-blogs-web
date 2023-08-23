import React from "react";
import { RiHashtag } from "react-icons/ri";

type CategoryChipProps = {
  category_name: string;
};

const CategoryChip = ({ category_name }: CategoryChipProps) => {
  return (
    <span className="text-xs px-2 py-1 bg-white border rounded-full inline-flex items-center  gap-2 text-dark-light">
      <RiHashtag /> {category_name}
    </span>
  );
};

export default CategoryChip;
