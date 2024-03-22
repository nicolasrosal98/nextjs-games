import Header from "./components/header";
import Profile from "./components/profile";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={poppins.className}>
      <Header />
      <Profile />
    </div>
  );
}
