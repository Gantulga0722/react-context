import { QuestionProvider } from "@/context/QuestionContex";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Component {...pageProps} />;
    </QuestionProvider>
  );
}
