import type { ReactElement } from "react";

type Props = {
  label?: string;
  id: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function Input({ label, id, error, ...rest }: Props): ReactElement {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} {...rest} />
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </>
  );
}

export default Input;
