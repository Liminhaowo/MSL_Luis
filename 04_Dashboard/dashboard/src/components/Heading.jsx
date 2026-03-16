import styles from './Heading.module.css';

export function Heading({ children }) {
  let cor = styles.normal;

  if (typeof children === 'string') {
    if (children.includes('Lucro')) {
      cor = styles.lucro;
    } else if (children.includes('Prejuízo')) {
      cor = styles.prejuizo;
    }
  }

  return (
    <h1 className={`${styles.heading} ${cor}`}>
      {children}
    </h1>
  );
}