import PageShell from "../../components/PageShell";
import { buildPageMetadata } from "../../lib/seo";

export const metadata = buildPageMetadata({
  title: "Recherche achat de terrain uniquement en Gironde — La Belle Poule",
  description: "La Belle Poule recherche uniquement un terrain agricole à acheter en Gironde pour installer une ferme avicole familiale : poulailler central, 4 paddocks en rotation, verger, eau et vente directe.",
  path: "/recherche-terrain",
  keywords: ["recherche achat de terrain uniquement Gironde", "terrain agricole à acheter Gironde", "achat terrain agricole Gironde", "projet ferme avicole Gironde", "œufs plein air Gironde"],
});

const criteria = [
  "Terrain agricole ou compatible avec une activité agricole.",
  "Secteur : Gironde, avec ouverture selon les opportunités.",
  "Accès à l’eau indispensable ou possibilité réaliste d’en créer un.",
  "Accès véhicule pour l’installation, les livraisons et les clients.",
  "Possibilité d’installer un poulailler central et 4 paddocks en rotation.",
  "Espace possible pour des arbres, des haies et un parcours vivant.",
  "Possibilité d’un petit point de vente à la ferme et d’un accueil simple.",
];

const options = ["Achat uniquement", "Mise en relation avec un propriétaire vendeur"];

export default function RechercheTerrainPage() {
  return (
    <PageShell
      eyebrow="Recherche de terrain"
      title="Recherche achat de terrain uniquement en Gironde"
      intro="La Belle Poule recherche uniquement un terrain agricole à acheter en Gironde pour installer une future ferme avicole familiale spécialisée dans les œufs de poules élevées en plein air, en verger."
    >
      <div className="grid gap-10 text-text-mid">
        <section>
          <h2 className="font-display text-3xl text-green-deep">Le terrain recherché</h2>
          <p className="mt-4 leading-8">
            Le terrain recherché concerne uniquement un achat. Il doit permettre d’installer une activité simple et cohérente : un poulailler central, quatre paddocks en rotation, un parcours arboré, un accès à l’eau, un accès véhicule et un petit espace de vente directe.
          </p>
          <ul className="mt-5 grid gap-3 md:grid-cols-2">
            {criteria.map((item) => (
              <li key={item} className="rounded-2xl bg-cream-soft px-5 py-4 leading-7"><span className="font-bold text-terracotta">•</span> {item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Type de proposition recherché</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {options.map((option) => (
              <span key={option} className="rounded-full border border-green-deep/10 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.15em] text-green-deep shadow-[0_10px_30px_rgba(31,36,24,0.04)]">{option}</span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-cream-soft p-7 md:p-9">
          <h2 className="font-display text-3xl text-green-deep">Informations utiles à envoyer</h2>
          <p className="mt-4 leading-8">Pour proposer une piste, merci d’indiquer si possible :</p>
          <ul className="mt-4 grid gap-2 leading-8 md:grid-cols-2">
            <li>Commune ou secteur</li>
            <li>Surface approximative</li>
            <li>Accès à l’eau</li>
            <li>Accès véhicule</li>
            <li>Statut agricole du terrain</li>
            <li>Photos ou lien cadastral si disponible</li>
            <li>Prix ou conditions</li>
            <li>Coordonnées du propriétaire ou contact</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-3xl text-green-deep">Modèle de message</h2>
          <div className="mt-5 whitespace-pre-line rounded-[2rem] border border-green-deep/10 bg-white p-6 font-mono text-sm leading-7 text-text-mid shadow-[0_12px_40px_rgba(31,36,24,0.05)]">{`Objet : Proposition de terrain agricole — La Belle Poule

Bonjour Aïcha,

Je vous contacte au sujet d’un terrain situé à :
Commune :
Surface :
Accès à l’eau :
Accès véhicule :
Type de proposition : vente du terrain / mise en relation avec un propriétaire vendeur
Informations complémentaires :

Cordialement,`}</div>
        </section>
      </div>
    </PageShell>
  );
}
