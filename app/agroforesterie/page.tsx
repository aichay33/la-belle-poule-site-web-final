import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Arbres et haies — La Belle Poule",
  description: "Les arbres et les haies feront partie du parcours des poules : ombre, biodiversité, protection du vent, fruits et ambiance de ferme en verger.",
  path: "/agroforesterie",
  keywords: ["agroforesterie poules", "poules en verger", "haies ferme avicole"],
});

export default function AgroforesteriePage() {
  return (
    <PageShell eyebrow="Arbres et haies" title="Un parcours arboré pour les poules" intro="Les arbres et les haies sont un élément important du projet : ils rendent le lieu plus vivant, plus agréable et plus adapté au plein air.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Le rôle des arbres</h2>
        <p className="leading-8">Les arbres apporteront de l’ombre aux poules, une protection contre le vent, une meilleure intégration paysagère, des fruits tombés et un support pour la biodiversité.</p>
        <p className="leading-8">Cette page complète la page “Plein air en verger”, qui présente l’organisation générale du poulailler central et des quatre paddocks en rotation.</p>
      </div>
    </PageShell>
  );
}
