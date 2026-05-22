import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Contact — La Belle Poule",
  description: "Contactez Aïcha Yassine pour proposer un terrain agricole à acheter uniquement en Gironde, transmettre une mise en relation avec un propriétaire vendeur ou échanger sur le projet La Belle Poule.",
  path: "/contact",
  keywords: ["contact La Belle Poule", "proposer terrain agricole Gironde", "Aïcha Yassine"],
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Contacter La Belle Poule"
      intro="Vous pouvez me contacter pour proposer un terrain à vendre, transmettre une mise en relation avec un propriétaire vendeur ou poser une question sur le projet."
    >
      <div className="grid gap-10 text-text-mid md:grid-cols-[0.95fr_1.05fr]">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Coordonnées</h2>
          <div className="mt-6 grid gap-4 text-lg">
            <a href="tel:+33629552838" className="rounded-2xl bg-cream-soft px-5 py-4 font-bold text-green-deep hover:text-terracotta">06 29 55 28 38</a>
            <a href="mailto:labellepoule33@outlook.fr" className="rounded-2xl bg-cream-soft px-5 py-4 font-bold text-green-deep hover:text-terracotta">labellepoule33@outlook.fr</a>
            <p className="rounded-2xl bg-cream-soft px-5 py-4">Gironde, France</p>
          </div>
        </section>

        <section className="rounded-[2rem] border border-green-deep/10 p-6">
          <h2 className="font-display text-3xl text-green-deep">Pour proposer un terrain à vendre</h2>
          <p className="mt-4 leading-8">Merci d’indiquer si possible la commune, la surface, l’accès à l’eau, l’accès véhicule, les conditions de vente et quelques photos ou informations utiles.</p>
          <div className="mt-6 whitespace-pre-line rounded-[1.5rem] bg-cream-soft p-5 font-mono text-sm leading-7">{`Objet : Proposition de terrain agricole — La Belle Poule

Bonjour Aïcha,

Je vous contacte au sujet d’un terrain situé à :
Commune :
Surface :
Accès à l’eau :
Accès véhicule :
Type de proposition : vente du terrain / mise en relation avec un propriétaire vendeur
Informations complémentaires :`}</div>
        </section>
      </div>
    </PageShell>
  );
}
