import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Approche permaculturelle — La Belle Poule",
  description: "La permaculture inspire La Belle Poule par l’observation du terrain, la biodiversité, les haies, la gestion de l’eau et l’installation progressive.",
  path: "/permaculture",
  keywords: ["permaculture Gironde", "ferme familiale", "biodiversité ferme"],
});

export default function PermaculturePage() {
  return (
    <PageShell eyebrow="Inspiration" title="Une approche inspirée par l’observation du vivant" intro="La Belle Poule ne cherche pas à multiplier les activités au démarrage, mais à créer une ferme simple, cohérente et attentive au terrain.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Observer avant d’aménager</h2>
        <p className="leading-8">La permaculture inspire surtout la manière de penser le lieu : observer le terrain, organiser les zones, préserver les sols, favoriser les haies, réfléchir à l’eau et avancer progressivement.</p>
        <p className="leading-8">Dans le projet, cette approche se traduit par les paddocks en rotation, les arbres, les haies, la biodiversité et une installation à taille humaine.</p>
      </div>
    </PageShell>
  );
}
