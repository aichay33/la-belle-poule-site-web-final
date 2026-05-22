import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Comment aider le projet — La Belle Poule",
  description: "Aider La Belle Poule : proposer un terrain à acheter en Gironde, transmettre une mise en relation avec un propriétaire vendeur ou conseiller le projet.",
  path: "/comment-aider",
  keywords: ["aider projet agricole", "terrain agricole Gironde", "mise en relation agricole"],
});

const needs = [
  "Un terrain agricole en Gironde adapté à une petite ferme avicole.",
  "Une mise en relation avec un propriétaire, une commune, un agriculteur ou un acteur local.",
  "Des conseils agricoles, fonciers, techniques ou administratifs.",
  "Des contacts pour l’installation, l’eau, les clôtures, le poulailler ou la vente directe.",
  "Des conseils ou un accompagnement utile au projet.",
];

export default function CommentAiderPage() {
  return (
    <PageShell
      eyebrow="Comment aider"
      title="Chaque piste sérieuse peut aider La Belle Poule"
      intro="Le projet est en préparation. L’aide la plus importante aujourd’hui est la recherche d’un terrain agricole à acheter uniquement en Gironde, mais les mises en relation avec des propriétaires vendeurs et les conseils peuvent aussi faire avancer l’installation."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Les besoins actuels</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {needs.map((need) => (
              <li key={need} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {need}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous avez un terrain ?</h3>
            <p className="mt-3 leading-7">La recherche porte uniquement sur l’achat d’un terrain agricole en Gironde. Les mises en relation avec des propriétaires vendeurs sont les bienvenues.</p>
          </article>
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous connaissez quelqu’un ?</h3>
            <p className="mt-3 leading-7">Une simple mise en relation avec un propriétaire, une mairie ou une personne du monde agricole peut être très utile.</p>
          </article>
          <article className="rounded-[1.5rem] border border-green-deep/10 p-6">
            <h3 className="font-display text-2xl text-green-deep">Vous avez un conseil ?</h3>
            <p className="mt-3 leading-7">Conseil technique, administratif, foncier ou commercial : le projet avance étape par étape et reste ouvert aux échanges sérieux.</p>
          </article>
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Informations utiles à transmettre</h2>
          <p className="mt-4 leading-8">Pour proposer une piste, il est utile d’indiquer la commune, la surface, l’accès à l’eau, l’accès véhicule, le statut du terrain, le prix ou les conditions de vente et, si possible, quelques photos.</p>
        </section>
      </div>
    </PageShell>
  );
}
