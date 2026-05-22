import Link from "next/link";
import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Dossier du projet agricole — La Belle Poule",
  description: "Dossier de présentation de La Belle Poule : future ferme avicole familiale en Gironde, œufs plein air, paddocks en rotation, verger, vente directe et recherche de terrain.",
  path: "/dossier-projet",
  keywords: ["dossier projet agricole", "ferme avicole Gironde", "œufs plein air Gironde", "projet ferme familiale"],
});

const steps = [
  "Projet recentré sur un atelier principal : œufs de poules pondeuses plein air.",
  "Objectif de taille raisonnable : 240 poules pondeuses maximum.",
  "Organisation prévue : poulailler central, 4 paddocks en rotation, verger et haies.",
  "Stage réalisé en élevage de volailles et préparation active de l’installation.",
  "Business plan, charges, objectifs de vente et organisation en cours de préparation.",
  "Recherche de terrain agricole en Gironde.",
];

export default function DossierProjetPage() {
  return (
    <PageShell
      eyebrow="Dossier du projet"
      title="Une ferme avicole familiale, simple et crédible"
      intro="Cette page rassemble les informations essentielles pour comprendre le projet La Belle Poule et le présenter à un propriétaire, une commune, un partenaire, un financeur ou une structure d’accompagnement."
    >
      <div className="grid gap-10 text-text-mid">
        <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <div>
            <h2 className="font-display text-3xl text-green-deep">Résumé du projet</h2>
            <p className="mt-4 leading-8">
              La Belle Poule est un projet de ferme avicole familiale en Gironde, spécialisée dans les œufs de poules pondeuses élevées en plein air, dans un système de paddocks en rotation et de verger.
            </p>
            <p className="mt-4 leading-8">
              Le projet est pensé pour rester à taille humaine, simple à organiser et réaliste à gérer seule : 240 poules maximum, un poulailler central, quatre parcours en rotation, des arbres, des haies, un point de vente direct et un accueil familial.
            </p>
          </div>
          <div className="rounded-[2rem] bg-cream-soft p-6">
            <h3 className="font-display text-2xl text-green-deep">Fiche rapide</h3>
            <dl className="mt-5 grid gap-3 text-sm leading-7">
              <div><dt className="font-bold text-green-deep">Porteuse du projet</dt><dd>Aïcha Yassine</dd></div>
              <div><dt className="font-bold text-green-deep">Activité principale</dt><dd>Œufs de poules pondeuses élevées en plein air</dd></div>
              <div><dt className="font-bold text-green-deep">Taille visée</dt><dd>240 poules pondeuses maximum</dd></div>
              <div><dt className="font-bold text-green-deep">Lieu recherché</dt><dd>Gironde</dd></div>
              <div><dt className="font-bold text-green-deep">Mode de vente</dt><dd>Vente directe à la ferme, retraits et abonnements possibles</dd></div>
            </dl>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Pourquoi ce projet est cohérent</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {["Un atelier unique au démarrage", "Une taille volontairement limitée", "Une vente locale et directe"].map((title, index) => (
              <article key={title} className="rounded-[1.5rem] border border-green-deep/10 p-5">
                <h3 className="font-display text-2xl text-green-deep">{title}</h3>
                <p className="mt-3 leading-7">
                  {index === 0 && "Le projet ne cherche pas à tout faire dès le départ. Les chèvres, lapins, cultures et potager restent des pistes futures, après stabilisation de l’atelier œufs."}
                  {index === 1 && "La limite de 240 poules permet de rester dans une logique familiale, organisée et compatible avec une gestion progressive."}
                  {index === 2 && "La vente directe permet de créer un lien avec les clients, de mieux valoriser les œufs et de construire une clientèle locale."}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">État d’avancement</h2>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {steps.map((step) => (
              <li key={step} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7 text-text-mid"><span className="font-bold text-green-deep">✓</span> {step}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Prochaines étapes</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <p className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">1. Trouver le terrain</strong><br />Identifier une opportunité en Gironde avec accès à l’eau, accès véhicule et possibilité d’installer le poulailler et les parcours.</p>
            <p className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">2. Finaliser le montage</strong><br />Adapter le business plan, les aménagements et les démarches au terrain trouvé.</p>
            <p className="rounded-2xl bg-white p-5 leading-7 shadow-[0_12px_40px_rgba(31,36,24,0.05)]"><strong className="text-green-deep">3. Installer progressivement</strong><br />Mettre en place les clôtures, le poulailler, les paddocks, les arbres, puis organiser la vente directe.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-green-deep p-7 text-white md:p-9">
          <h2 className="font-display text-3xl">Dossier PDF à compléter</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/80">
            Un dossier PDF de présentation est inclus dans le projet comme base de travail. Il pourra être enrichi avec les chiffres définitifs, le terrain choisi et les éléments financiers.
          </p>
          <Link href="/dossier-la-belle-poule.pdf" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-green-deep">
            Télécharger le dossier PDF
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
