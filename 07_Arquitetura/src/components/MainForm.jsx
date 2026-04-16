export default function MainForm({ children }) {
  return (
    <div style={{
      maxWidth: '25rem',
      width: '100%',
      padding: '2.5rem',
      backgroundColor: 'var(--bg-card)',
      borderRadius: '0.75rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem'
    }}>
      {children}
    </div>
  );
}
