import { Header } from "./Header.js";
import { Main } from "./Main.js";
import { Footer } from "./Footer.js";

export function Layout(props: { children: any }) {
  return (
    <div class="layout">
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </div>
  );
}
