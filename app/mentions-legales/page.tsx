import { buildPageMetadata } from "../../lib/seo";
import PageShell from "../../components/PageShell";

export const metadata = buildPageMetadata({
  title: "Mentions légales | La Belle Poule",
  description: "Mentions légales du site La Belle Poule, projet de future ferme avicole familiale en Gironde.",
  path: "/mentions-legales/",
  keywords: ["mentions légales La Belle Poule"],
});

export default function MentionsLegalesPage() {
  return (
    <PageShell
      eyebrow="Mentions légales"
      title="Mentions légales"
      intro="Informations légales relatives au site La Belle Poule."
    >
      <div className="space-y-8 leading-8 text-text-mid">
        <section>
          <h2 className="text-2xl font-black text-green-deep">Responsable du site</h2>
          <p className="mt-3">La Belle Poule est un projet agricole en préparation porté par Aïcha Yassine.</p>
          <p>Contact : <a className="font-bold text-green-deep hover:text-terracotta" href="mailto:labellepoule33@outlook.fr">labellepoule33@outlook.fr</a></p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-green-deep">Hébergement</h2>
          <p className="mt-3">Le site est hébergé par Vercel Inc.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-green-deep">Données personnelles</h2>
          <p className="mt-3">Le site ne propose pas de formulaire de contact. Les informations transmises volontairement par email ou téléphone servent uniquement à répondre aux demandes liées au projet.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black text-green-deep">Contenus</h2>
          <p className="mt-3">Les textes, images et éléments graphiques du site sont liés au projet La Belle Poule. Toute réutilisation doit faire l’objet d’une autorisation préalable.</p>
        </section>
      </div>
    </PageShell>
  );
}
