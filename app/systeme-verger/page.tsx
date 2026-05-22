import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Plein air en verger — La Belle Poule",
  description: "Le système prévu pour La Belle Poule : 240 poules pondeuses maximum, poulailler central, quatre paddocks en rotation, arbres, haies et parcours vivant.",
  path: "/systeme-verger",
  keywords: ["poules plein air verger", "paddocks rotation", "poules pondeuses plein air", "ferme avicole verger"],
});

const cards = [
  ["Un poulailler central", "Le poulailler sera le point de repère des poules : abri, ponte, alimentation, eau et sécurité."],
  ["Quatre paddocks en rotation", "Les parcours seront alternés pour laisser les sols se reposer et limiter la pression sur l’herbe."],
  ["Des arbres et des haies", "Les arbres apporteront de l’ombre, de la protection, une belle image de ferme et de la biodiversité."],
  ["Un parcours vivant", "L’objectif est de proposer aux poules un environnement plus riche, plus agréable et plus naturel."],
];

export default function SystemeVergerPage() {
  return (
    <PageShell
      eyebrow="Plein air en verger"
      title="Un système de paddocks en rotation, avec arbres et haies"
      intro="Le projet repose sur une organisation simple : un poulailler central relié à quatre paddocks en rotation, dans un parcours arboré et vivant."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Le principe</h2>
          <p className="mt-4 leading-8">
            La Belle Poule prévoit un système plein air en verger. Les poules ne seront pas concentrées sur un seul parcours utilisé en permanence : les paddocks permettront une rotation pour préserver les sols, l’herbe et l’équilibre du lieu.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {cards.map(([title, text]) => (
            <article key={title} className="rounded-[1.5rem] border border-green-deep/10 bg-white p-6 shadow-[0_12px_40px_rgba(31,36,24,0.05)]">
              <h3 className="font-display text-2xl text-green-deep">{title}</h3>
              <p className="mt-3 leading-7">{text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Pourquoi un verger ?</h2>
          <p className="mt-4 leading-8">
            Les arbres fruitiers et les haies ont plusieurs rôles : apporter de l’ombre aux animaux, protéger du vent, accueillir les pollinisateurs, embellir le lieu, produire des fruits et créer une ambiance de ferme plus naturelle et familiale.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
