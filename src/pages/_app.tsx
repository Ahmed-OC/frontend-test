import type { AppProps } from "next/app";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import "../styles/globals.css";
import ErrorBoundary from "../components/ErrorBoundary";

// Default way to get a logged user
export const loggedUserId = getLoggedUserId();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary errorMessage="Sorry an error occured we are working on it.">
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
