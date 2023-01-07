import CheckboxFilter from "./CheckboxFilter";
import ItemCard from "./ItemCard";
import PriceFilter from "./PriceFilter";
import SortByFilter from "./SortByFilter";

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

  const sortByFilters = [
    { value: "manual", text: "En vedette" },
    { value: "best-selling", text: "Meilleures Ventes" },
    { value: "title-ascending", text: "Alphabétique, de A à Z" },
    { value: "title-descending", text: "Alphabétique, de Z à A" },
    { value: "price-ascending", text: "Prix: faible à élevé" },
    { value: "price-descending", text: "Prix: élevé à faible" },
    {
      value: "created-ascending",
      text: "Date, de la plus ancienne à la plus récente",
    },
    {
      value: "created-descending",
      text: "Date, de la plus récente à la plus ancienne",
    },
  ];

  return (
    <div className="py-16 px-96 text-white">
      <p className="pb-20 text-5xl font-extrabold">{title}</p>
      <div className="flex items-center justify-between text-sm font-medium text-gray-400">
        <div className="flex">
          <p>Filtre :</p>
          <CheckboxFilter name="Disponibilité" filters={stockFilters} />
          <CheckboxFilter name="Taille" filters={sizeFilters} />
          <PriceFilter name="Prix" />
        </div>
        <div className="flex gap-4">
          <p>Trier par :</p>
          <SortByFilter filters={sortByFilters} />
          <p>6 produits</p>
        </div>
      </div>
      <div className="grid  grid-cols-3 gap-6">
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  );
}
