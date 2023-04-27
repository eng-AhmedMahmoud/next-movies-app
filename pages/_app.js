import "@/styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MainNavigation from "../components/MainNavigation";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { useEffect } from "react";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  useEffect(() => {
    import("../node_modules/bootstrap/dist/js/bootstrap.min.js");
  }, []);

  let route = useRouter();
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <SessionProvider session={session}>
      <MainNavigation />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
