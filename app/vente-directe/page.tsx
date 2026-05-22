import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Vente directe d’œufs — La Belle Poule",
  description: "La Belle Poule prévoit la vente directe d’œufs à la ferme : retrait client, abonnements possibles, point de vente simple, parking et accueil familial.",
  path: "/vente-directe",
  keywords: ["vente directe œufs", "œufs Gironde", "œufs plein air vente directe", "ferme avicole vente directe"],
});

export default function VenteDirectePage() {
  return (
    <PageShell
      eyebrow="Vente directe"
      title="Des œufs locaux vendus directement à la ferme"
      intro="La vente directe est au cœur du projet La Belle Poule : créer un lien simple avec les clients et proposer des œufs issus d’une ferme à taille humaine."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Un point de vente simple</h2>
          <p className="mt-4 leading-8">
            L’objectif est de permettre aux clients de venir acheter leurs œufs directement à la ferme. Le point de vente sera simple, clair et pratique, adapté à une petite structure familiale.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Retrait à la ferme", "Abonnements possibles", "Parking simple", "Accueil familial"].map((item) => (
            <div key={item} className="rounded-[1.5rem] bg-cream-soft p-5 text-center font-bold text-green-deep">{item}</div>
          ))}
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Un lieu vivant</h2>
          <p className="mt-4 leading-8">
            Le projet prévoit aussi une petite zone pique-nique et une aire de jeux familiale, si le terrain le permet. L’idée n’est pas de créer un grand site touristique, mais un lieu agréable, local et accessible, où les familles peuvent venir chercher leurs œufs dans un cadre vivant.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
