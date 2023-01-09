import Image from "next/image";

import ShopPayLogo from "/footer/shop-pay-logo.svg";

export default function ItemCard({ obj }: any) {
  return (
    <div className="mx-2 flex  flex-col text-white">
      <div className="my-6 text-center">
        {/* <Image
          src="/KimonoGin.jpg"
          alt="Amex Logo"
          className="invisble overflow-hidden rounded-xl object-fill"
          objectFit="cover"
          width="361"
          height="457"
        /> */}

        <img className="block h-96 w-full rounded-xl bg-[url('/KimonoGin.jpg')] bg-cover bg-center bg-no-repeat bg-origin-border object-fill transition-all duration-200 ease-in-out hover:bg-[url('/DosGin.jpg')] " />
        {/* <Image
          alt="Amex Logo"
          className=" overflow-hidden rounded-xl bg-[url('/KimonoGin.jpg')] object-fill"
          objectFit="cover"
          src={""}
        /> */}

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

      <button className="mt-10 w-full rounded-full py-3  text-white outline outline-1 hover:outline-2">
        Choisir sa taille
      </button>
    </div>
  );
}
