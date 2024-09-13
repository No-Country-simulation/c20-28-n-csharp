import { useRouteError } from "react-router-dom";

export default function ErrorPage({statusText}) {
  return (
    <div id="error-page" className="d-flex justify-content-center align-items-center flex-column vh-100">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{statusText || 'Error al cargar la página'}</i>
      </p>
    </div>
  );
}
