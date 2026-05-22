import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Le projet — La Belle Poule",
  description: "Découvrez La Belle Poule, projet de ferme avicole familiale en Gironde : 240 poules pondeuses maximum, plein air en verger, paddocks en rotation et vente directe.",
  path: "/projet",
  keywords: ["La Belle Poule", "ferme avicole Gironde", "œufs plein air", "poules pondeuses Gironde"],
});

const progress = [
  "Projet en préparation et en recherche de terrain.",
  "Stage réalisé dans une ferme d’élevage de volailles.",
  "Réflexion avancée sur le poulailler central, les paddocks, l’eau, l’alimentation et la vente directe.",
  "Business plan, prévisions de charges et organisation progressive en cours de préparation.",
  "Accompagnement et démarches avec la Chambre d’agriculture / PAIT.",
];

export default function ProjetPage() {
  return (
    <PageShell
      eyebrow="Le projet"
      title="La Belle Poule, une future ferme avicole familiale"
      intro="La Belle Poule est un projet de ferme à taille humaine en Gironde, centré sur la production d’œufs de poules pondeuses élevées en plein air, dans un système de paddocks en rotation et de verger."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
          <div>
            <h2 className="font-display text-3xl text-green-deep">Une activité simple, claire et réaliste</h2>
            <p className="mt-4 leading-8">
              Le projet sera centré sur 240 poules pondeuses maximum. Cette taille volontairement limitée permet de garder une ferme simple, bien organisée et compatible avec une gestion progressive.
            </p>
            <p className="mt-4 leading-8">
              Les poules évolueront autour d’un poulailler central relié à quatre paddocks en rotation. Le parcours sera arboré, avec des arbres, des haies, de l’ombre et un environnement vivant.
            </p>
          </div>
          <div className="rounded-[2rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Pourquoi ce choix ?</h3>
            <p className="mt-4 leading-8">
              Les chèvres, les lapins, le potager ou les cultures pourront exister plus tard, mais ils ne font pas partie du démarrage. Le choix du projet est de commencer par un atelier principal solide : les œufs plein air en vente directe.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">La vision</h2>
          <p className="mt-4 leading-8">
            L’objectif est de créer une ferme locale, accueillante, respectueuse des animaux et rentable sans devenir trop grande ni trop compliquée. La Belle Poule veut rester un lieu à taille humaine : une ferme bien pensée, utile au territoire, proche des clients et cohérente avec le vivant.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Aïcha, porteuse du projet</h2>
          <p className="mt-4 leading-8">
            Je m’appelle Aïcha Yassine. Je prépare La Belle Poule avec motivation, sérieux et détermination. Ce projet est un rêve personnel, mais aussi une démarche concrète pour créer mon propre travail, produire une alimentation locale de qualité et construire un lieu simple, familial et vivant.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">État d’avancement</h2>
          <ul className="mt-5 grid gap-3">
            {progress.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-green-deep">✓</span> {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
}
