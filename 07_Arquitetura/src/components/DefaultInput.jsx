import { Mail, Lock } from 'lucide-react';

export default function DefaultInput({ type, placeholder, icon }) {
  const Icon = icon === 'mail' ? Mail : Lock;

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      border: '0.0625rem solid var(--text-muted)',
      borderRadius: '0.5rem',
      padding: '0 0.75rem',
      height: '3rem'
    }}>
      <Icon size={20} />
      <input
        type={type}
        placeholder={placeholder}
        style={{
          flex: 1,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          marginLeft: '0.5rem',
          color: 'var(--text-main)'
        }}
      />
    </div>
  );
}