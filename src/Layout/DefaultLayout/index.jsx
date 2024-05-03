import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export function DefaultLayout({}) {
  return (
    <div>
      <Header />
      <Sidebar />

      <Footer />
    </div>
  );
}
