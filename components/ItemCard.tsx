import Image from "next/image";

import ShopPayLogo from "/footer/shop-pay-logo.svg";

export default function ItemCard({ obj }: any) {
  return (
    <div className="mx-2 flex  flex-col text-white">
      <div className="my-6 text-center">
        <Image
          src="/KimonoGin.jpg"
          alt="Amex Logo"
          className="w-1/2 overflow-hidden rounded-xl object-fill"
          objectFit="cover"
          width="361"
          height="457"
        />

        {/* <img
          src="/KimonoGin.jpg"
          className="overflow-hidden rounded-xl object-fill"
        /> */}
      </div>

      {/* {obj.name}
      {obj.price}
      {obj.sizes} */}
      <div className="flex flex-col gap-2 text-center">
        <p className=" font-semibold">Techwear Kimono - Gin</p>
        <p className=" font-medium">€85,00</p>
        <div className="flex justify-center gap-6">
          <span>XS</span>
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
        </div>
      </div>

      <button className="mt-10 w-full rounded-full border py-3  text-white hover:border-2">
        Choisir sa taille
      </button>
    </div>
  );
}
