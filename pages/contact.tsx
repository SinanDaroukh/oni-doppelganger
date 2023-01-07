import type { NextPage } from "next";

const Contact: NextPage = () => {
  return (
    <div className="mx-44 py-16 px-96 text-white">
      <p className="pb-16 text-5xl font-extrabold">Contact</p>
      <p className=" mb-5 w-full text-center text-lg font-medium">
        Le support SAV est ouvert du lundi au vendredi et de 9h à 17h. Nos
        délais de réponses sont de deux jours ouvrés maximum.
      </p>
      <div className="ga flex flex-col gap-4">
        <div className="flex justify-center gap-x-4">
          <input
            name="field_name"
            className="mx-1  grow rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2"
            type="text"
            placeholder="Nom *"
          />

          <input
            name="field_name"
            className="mx-1 grow rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2"
            type="text"
            placeholder="E-mail *"
          />
        </div>
        <input
          name="field_name"
          className="mx-1 grow rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2"
          type="text"
          placeholder="Numéro de téléphone *"
        />
        <textarea
          id="story"
          name="story"
          placeholder="Commentaires *"
          className="mx-1 h-36 grow rounded-3xl border-2 border-gray-500 bg-zinc-800 px-4 py-2 text-gray-500"
        ></textarea>
      </div>
      <button className="mt-4 rounded-full bg-white px-8 py-4  text-black">
        Envoyer
      </button>
    </div>
  );
};

export default Contact;
