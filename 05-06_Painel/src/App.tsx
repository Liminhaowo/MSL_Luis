import './styles/theme.css'
import './styles/global.css'
import { AnimalCard } from "./component/AnimalCard.tsx";

export function App() {
  return (
    <div style={{ color: "white"}}>
      <AnimalCard
        name="Kid Bengala"
        species="Panthera tigris tigris"
        isDangerous={true}
      />

      <AnimalCard
        name="Lontra"
        species="Lontra longicaudis"
        isDangerous={false}
      />

      <AnimalCard
        name="Capivara"
        species="Hydrochoerus hydrochaeris"
        isDangerous={false}
      />
    </div>
  );
}
