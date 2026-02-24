import type { ReactElement } from "react";
import type { FallbackProps } from "react-error-boundary";

function ErrorFallback({ resetErrorBoundary }: FallbackProps): ReactElement {
  return (
    <div className="fallback">
      <div className="fallback__container">
        <h1 className="fallback__title">
          Unexpected error — please refresh the page.
        </h1>
        <button className="fallback__btn btn" onClick={resetErrorBoundary}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default ErrorFallback;