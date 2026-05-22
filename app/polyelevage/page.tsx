import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Poules pondeuses — La Belle Poule",
  description: "La Belle Poule se recentre sur les poules pondeuses : 240 poules maximum, plein air en verger, paddocks en rotation et vente directe d’œufs.",
  path: "/polyelevage",
  keywords: ["poules pondeuses", "élevage plein air", "œufs plein air Gironde"],
});

export default function PolyelevagePage() {
  return (
    <PageShell eyebrow="Poules pondeuses" title="Un atelier avicole unique au démarrage" intro="La Belle Poule démarre avec un atelier principal : les œufs de poules pondeuses élevées en plein air. Les autres animaux restent des pistes futures, non prévues au lancement.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Un choix volontaire</h2>
        <p className="leading-8">Le projet avait envisagé plusieurs espèces au départ, mais il est aujourd’hui recentré pour rester simple, réaliste et maîtrisable : 240 poules pondeuses maximum, un poulailler central, des paddocks en rotation et une vente directe d’œufs.</p>
        <p className="leading-8">Ce choix permet de concentrer l’énergie sur la qualité de l’installation, le bien-être des poules, l’organisation du travail et la construction d’une clientèle locale.</p>
      </div>
    </PageShell>
  );
}
