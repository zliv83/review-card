import styles from './Avatar.module.scss';

export default function Avatar({ children, className, onClick, value, sx }) {
  return (
    <div
      onClick={onClick}
      value={value}
      className={`${styles.avatar} ${className}`}
      style={sx}
    >
      {children}
    </div>
  );
}
