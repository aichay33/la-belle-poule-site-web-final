import Image from "next/image";
import Link from "next/link";
import { LeafIcon, LocationIcon, PeopleIcon, SproutIcon } from "./Icons";

const focusCards = [
  {
    href: "/projet",
    title: "Une ferme avicole familiale",
    text: "Un projet à taille humaine, pensé pour rester simple, organisé et réaliste.",
    icon: <LeafIcon className="h-7 w-7" />,
  },
  {
    href: "/recherche-terrain",
    title: "Recherche de terrain",
    text: "Recherche achat de terrain uniquement en Gironde pour installer le poulailler, les paddocks et l’accueil.",
    icon: <LocationIcon className="h-7 w-7" />,
  },
  {
    href: "/systeme-verger",
    title: "Plein air en verger",
    text: "240 poules maximum, un poulailler central et quatre paddocks en rotation.",
    icon: <SproutIcon className="h-7 w-7" />,
  },
  {
    href: "/vente-directe",
    title: "Vente directe",
    text: "Des œufs locaux vendus directement à la ferme, dans un lieu simple et accueillant.",
    icon: <PeopleIcon className="h-7 w-7" />,
  },
  {
    href: "/dossier-projet",
    title: "Dossier projet",
    text: "Une page claire pour présenter le projet à une mairie, un propriétaire ou un partenaire.",
    icon: <LeafIcon className="h-7 w-7" />,
  },
  {
    href: "/comment-aider",
    title: "Comment aider",
    text: "Achat de terrain uniquement, mise en relation avec un propriétaire vendeur ou conseil : chaque piste peut compter.",
    icon: <LocationIcon className="h-7 w-7" />,
  },
];

const highlights = ["Gironde", "240 poules maximum", "Achat de terrain uniquement", "Vente directe à la ferme"];

export default function HomePage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-white">
        <h1 className="sr-only">La Belle Poule — Future ferme en préparation en Gironde, recherche achat de terrain agricole</h1>
        <div className="mx-auto max-w-[1800px]">
          <Image
            src="/images/recherche-terrain-cover.png"
            alt="La Belle Poule, future ferme en préparation, recherche de terrain agricole en Gironde"
            width={1672}
            height={941}
            priority
            className="block h-auto w-full"
          />
        </div>
      </section>

      <section className="relative px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto -mt-6 max-w-6xl rounded-[2rem] border border-green-deep/10 bg-white p-5 shadow-[0_24px_70px_rgba(31,36,24,0.08)] md:-mt-8 md:p-7">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {highlights.map((item) => (
              <span key={item} className="rounded-full bg-cream-soft px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-green-deep">{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 md:px-8 md:py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Une ferme simple, locale et sérieuse</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-green-deep md:text-6xl">Une future ferme d’œufs plein air, pensée simplement</h2>
            <p className="mt-6 text-lg leading-8 text-text-mid">
              La Belle Poule est un projet de ferme avicole familiale en Gironde, spécialisée dans les œufs de poules pondeuses élevées en plein air, dans un système de paddocks en rotation et de verger.
            </p>
            <p className="mt-5 text-base leading-8 text-text-mid">
              Le projet est pensé pour rester à taille humaine : 240 poules pondeuses maximum, un poulailler central, quatre paddocks, des arbres, des haies, de l’ombre et une vente directe à la ferme.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/recherche-terrain" className="inline-flex justify-center rounded-full bg-green-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:-translate-y-0.5 hover:bg-terracotta">
                Proposer un terrain à acheter
              </Link>
              <Link href="/projet" className="inline-flex justify-center rounded-full border border-green-deep/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-green-deep transition hover:border-terracotta hover:text-terracotta">
                Découvrir le projet
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-[2rem] bg-[linear-gradient(135deg,#fffaf2_0%,#f8f0e2_100%)] p-6 shadow-[0_22px_80px_rgba(31,36,24,0.08)] md:p-8">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">L’essentiel</p>
              <ul className="mt-4 space-y-3 leading-7 text-text-mid">
                <li><strong className="text-green-deep">240 poules maximum</strong> pour garder une ferme simple et gérable.</li>
                <li><strong className="text-green-deep">4 paddocks en rotation</strong> pour préserver les parcours.</li>
                <li><strong className="text-green-deep">Verger et haies</strong> pour l’ombre, la biodiversité et l’ambiance du lieu.</li>
                <li><strong className="text-green-deep">Achat de terrain uniquement</strong> pour construire un projet stable dans le temps.</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">240</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Poules max</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">4</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Paddocks</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-5 text-center shadow-[0_10px_40px_rgba(31,36,24,0.05)]">
                <p className="font-display text-4xl text-green-deep">1</p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-text-mid">Objectif : terrain</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 pt-6 md:px-8 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Les repères du projet</p>
            <h2 className="mt-3 font-display text-4xl text-green-deep md:text-5xl">Les pages essentielles du projet</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {focusCards.map((card) => (
              <Link key={card.title} href={card.href} className="group rounded-[2rem] border border-green-deep/10 bg-white p-6 shadow-[0_18px_60px_rgba(31,36,24,0.06)] transition hover:-translate-y-1 hover:border-terracotta/30 hover:shadow-[0_25px_80px_rgba(31,36,24,0.09)]">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-soft text-green-deep ring-1 ring-green-deep/10 transition group-hover:bg-terracotta group-hover:text-white">
                  {card.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl text-green-deep">{card.title}</h3>
                <p className="mt-3 min-h-[5rem] text-[0.98rem] leading-7 text-text-mid">{card.text}</p>
                <span className="mt-6 inline-flex text-sm font-bold uppercase tracking-[0.18em] text-terracotta">Découvrir</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="overflow-hidden rounded-[2rem] border border-green-deep/10 bg-cream-soft shadow-[0_22px_80px_rgba(31,36,24,0.08)]">
            <Image src="/images/portrait-aicha.png" alt="Portrait d’Aïcha Yassine, porteuse du projet La Belle Poule" width={820} height={1100} className="h-full w-full object-cover" />
          </div>
          <div className="rounded-[2rem] border border-green-deep/10 bg-white p-7 shadow-[0_18px_60px_rgba(31,36,24,0.06)] md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">Porteuse du projet</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-green-deep md:text-5xl">Une vision portée par Aïcha</h2>
            <p className="mt-6 text-xl leading-9 text-text-dark">
              “Moi aussi, j’ai un rêve : donner vie à La Belle Poule.”
            </p>
            <p className="mt-6 leading-8 text-text-mid">
              Je m’appelle Aïcha Yassine. Je prépare La Belle Poule avec sérieux, motivation et une envie forte de créer une activité locale, utile, proche des animaux, de la nature et des gens.
            </p>
            <div className="mt-8 grid gap-3 text-sm font-bold uppercase tracking-[0.16em] text-green-deep sm:grid-cols-2">
              <span className="rounded-full bg-cream-soft px-5 py-3">Poules pondeuses</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Plein air</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Verger</span>
              <span className="rounded-full bg-cream-soft px-5 py-3">Vente directe</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
