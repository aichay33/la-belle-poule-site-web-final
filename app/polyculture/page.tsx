import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Cultures futures — La Belle Poule",
  description: "Les cultures, céréales ou plantes utiles pourront être envisagées plus tard, après stabilisation de l’atelier œufs de La Belle Poule.",
  path: "/polyculture",
  keywords: ["cultures ferme avicole", "autonomie agricole", "projet agricole Gironde"],
});

export default function PolyculturePage() {
  return (
    <PageShell eyebrow="Évolution future" title="Des cultures possibles plus tard" intro="La priorité de La Belle Poule est l’installation de l’atelier œufs. Les cultures pourront être envisagées dans un second temps, selon le terrain et l’équilibre du projet.">
      <div className="grid gap-6 text-text-mid">
        <h2 className="font-display text-3xl text-green-deep">Une piste, pas le démarrage</h2>
        <p className="leading-8">Une petite production de céréales, de plantes utiles ou un potager pourront être étudiés après stabilisation de l’atelier poules pondeuses. L’objectif est de ne pas complexifier le projet trop vite.</p>
        <p className="leading-8">Le terrain choisi déterminera les possibilités : surface, sol, accès à l’eau, organisation des parcours et temps disponible.</p>
      </div>
    </PageShell>
  );
}
