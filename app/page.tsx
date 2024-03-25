import About from "./components/about";
import Header from "./components/header";
import Profile from "./components/profile";

export default function Home() {
  return (
    <div>
      <Header />
      <Profile />
      <About />
    </div>
  );
}
