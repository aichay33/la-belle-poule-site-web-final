import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-green-deep/10 bg-cream-soft">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 md:grid-cols-[1fr_1.1fr_0.9fr] md:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image src="/images/logo-poule.png" alt="Logo La Belle Poule" width={92} height={92} className="h-16 w-16 object-contain" />
            <span className="font-display text-2xl text-green-deep">La Belle Poule</span>
          </Link>
          <p className="mt-4 text-sm leading-7 text-text-mid">Future ferme d’œufs de poules élevées en plein air, en verger, en Gironde.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Gironde</span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Achat terrain</span>
            <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-green-deep">Vente directe</span>
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-[0_15px_40px_rgba(31,36,24,0.05)] md:text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">Recherche de terrain</p>
          <p className="mt-3 font-display text-3xl leading-tight text-green-deep">Vous connaissez un terrain agricole à vendre ?</p>
          <p className="mt-3 text-sm leading-7 text-text-mid">La Belle Poule recherche uniquement un terrain agricole à acheter en Gironde. Une piste sérieuse ou une mise en relation avec un propriétaire vendeur peut faire avancer le projet.</p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link href="/recherche-terrain" className="rounded-full bg-green-deep px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-terracotta">Voir les critères</Link>
            <Link href="/contact" className="rounded-full border border-green-deep/15 px-5 py-3 text-sm font-bold uppercase tracking-[0.14em] text-green-deep transition hover:border-terracotta hover:text-terracotta">Contacter Aïcha</Link>
          </div>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-terracotta">Navigation</p>
          <div className="mt-4 grid gap-2 text-sm text-text-mid">
            <Link href="/projet" className="hover:text-terracotta">Projet</Link>
            <Link href="/recherche-terrain" className="hover:text-terracotta">Recherche terrain</Link>
            <Link href="/systeme-verger" className="hover:text-terracotta">Plein air en verger</Link>
            <Link href="/vente-directe" className="hover:text-terracotta">Vente directe</Link>
            <Link href="/dossier-projet" className="hover:text-terracotta">Dossier projet</Link>
            <Link href="/comment-aider" className="hover:text-terracotta">Comment aider</Link>
            <Link href="/mentions-legales" className="hover:text-terracotta">Mentions légales</Link>
            <a href="tel:+33629552838" className="mt-3 hover:text-terracotta">06 29 55 28 38</a>
            <a href="mailto:labellepoule33@outlook.fr" className="hover:text-terracotta">labellepoule33@outlook.fr</a>
          </div>
        </div>
      </div>
      <div className="border-t border-green-deep/10 py-5 text-center text-xs text-text-mid">© 2026 La Belle Poule — Projet de future ferme avicole en préparation</div>
    </footer>
  );
}
