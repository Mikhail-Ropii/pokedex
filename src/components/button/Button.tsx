import css from "./styles.module.scss";

interface MainButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  disabled = false,
}: MainButtonProps) => {
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={onClick}
      className={css.btn}
    >
      {children}
    </button>
  );
};
