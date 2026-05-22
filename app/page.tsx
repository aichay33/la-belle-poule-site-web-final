import { buildPageMetadata } from "../lib/seo";
import HomePage from "../components/HomePage";

export const metadata = buildPageMetadata({
  title: "La Belle Poule | Œufs plein air en verger en Gironde",
  description:
    "La Belle Poule est un projet de ferme avicole familiale en Gironde : 240 poules pondeuses maximum, élevées en plein air dans un système de paddocks en rotation et de verger.",
  path: "/",
  keywords: [
    "œufs plein air Gironde",
    "ferme avicole Gironde",
    "poules pondeuses plein air",
    "La Belle Poule",
  ],
});

export default function Page() {
  return <HomePage />;
}
