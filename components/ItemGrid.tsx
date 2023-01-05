import CheckboxFilter from "./CheckboxFilter";

export default function ItemGrid({ title }: any) {
  return (
    <div className=" bg-white">
      <div className="col-span-3 flex items-center justify-self-center bg-blue-600">
        <p className="text-4xl font-extrabold">{title}</p>

        <CheckboxFilter name="Disponibilité" className="bg-green-400" />
        <CheckboxFilter name="Date" />
      </div>
    </div>
  );
}
