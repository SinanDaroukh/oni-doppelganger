import Image from "next/image";
import OniLogo from "../public/footer/oni-logo-footer.png";
import VisaLogo from "../public/footer/visa-logo.svg";
import MastercardLogo from "../public/footer/mastercard-logo.svg";
import AppleLogo from "../public/footer/apple-pay-logo.svg";
import AmexLogo from "../public/footer/amex-logo.svg";

export default function Footer() {
  return (
    <div className="flex flex-col">
      <div
        id="firstRow"
        className="grid grid-cols-6 border-b border-zinc-700 py-16 px-96"
      >
        <div className="col-span-3 flex flex-col gap-3 justify-self-start text-slate-50">
          <h2 className="font-bold ">Informations</h2>
          <a className="">Conditions Générales de Vente</a>
          <a>Mentions légales</a>
          <a>Politique de confidentialité</a>
          <a>Contact</a>
          <a>Conditions d'utilisation</a>
          <a>Politique de remboursement</a>
        </div>
        <div className="col-span-3 justify-self-end">
          <Image src={OniLogo} alt="Website Footer Logo" />
        </div>
      </div>
      <div id="secondRow" className="grid grid-cols-6 py-16 px-96">
        <div className="col-span-3"></div>
        <div className="col-span-3 justify-self-end">
          <div className="flex gap-2 pb-4">
            <Image src={AmexLogo} alt="Amex Logo" />
            <Image src={AppleLogo} alt="Apple Pay Logo" />
            <Image src={MastercardLogo} alt="Mastercard Logo" />
            <Image src={VisaLogo} alt="Visa Logo" />
          </div>
          <p className="text-end text-xs text-slate-50">
            © 2022, ONI-DOPPELGANGER
          </p>
        </div>
      </div>
    </div>
  );
}
