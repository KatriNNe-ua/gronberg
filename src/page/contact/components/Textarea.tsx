import type { ReactElement } from "react";

type Props = {
  label?: string;
  id: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function Textarea({ label, id, error, ...rest }: Props): ReactElement {
  return (
	<>
	  {label && <label htmlFor={id}>{label}</label>}
	  <textarea id={id} {...rest} ></textarea>
	  {error && (
		<div className="error-message">
		  {error}
		</div>
	  )} 
	</>
  );
}

export default Textarea;
