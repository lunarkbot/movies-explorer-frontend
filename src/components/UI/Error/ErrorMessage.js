import styles from './ErrorMessage.module.css';

export const ErrorMessage = ({ children }) => {
  return (
    <span className={styles.error}>{ children }</span>
  );
};
