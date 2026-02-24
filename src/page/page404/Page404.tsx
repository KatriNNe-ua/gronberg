import type { ReactElement } from "react";

function Page404(): ReactElement {
  return (
    <section className="p404" data-testid="not-found">
      <h1 className="p404__title title">Page 404</h1>
    </section>
  );
}

export default Page404;
