import styles from "./AnimalCard.module.css";

type AnimalCardProps = {
  name: string;
  species: string;
  isDangerous: boolean;
};

export function AnimalCard({ name, species, isDangerous }: AnimalCardProps) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{species}</p>

      {isDangerous ? (
        <p className={styles.danger}>Status:Perigoso ai ai, Alerta Máximo</p>
      ) : (
        <p className={styles.safe}>Status: Tranquilo e Amigável</p>
      )}
    </div>
  );
}