import CheckboxFilter from "./CheckboxFilter";
import PriceFilter from "./PriceFilter";

export default function ItemGrid({ title }: any) {
  const sizeFilters = [
    { value: "XS", text: "XS (16)" },
    { value: "S", text: "S (16)" },
    { value: "M", text: "M (16)" },
    { value: "L", text: "L (16)" },
    { value: "XL", text: "XL (16)" },
    { value: "XXL", text: "XXL (10)" },
  ];

  const stockFilters = [
    { value: "available", text: "En stock (14)" },
    { value: "nonAvailable", text: "En rupture de stock (16)" },
  ];

  return (
    <div className="py-16 px-96 text-white">
      <p className="pb-20 text-5xl font-extrabold">{title}</p>
      <div className="flex text-sm font-medium text-gray-400">
        <p>Filtre :</p>
        <CheckboxFilter name="Disponibilité" filters={stockFilters} />
        <CheckboxFilter name="Taille" filters={sizeFilters} />
        <PriceFilter name="Prix" />
      </div>
    </div>
  );
}
