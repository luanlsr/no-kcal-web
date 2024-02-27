'use client'
import NavbarComponent from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<"home" | "ranking" | "users">("home");
  const handleMenuChange = (menu: "home" | "ranking" | "users") => {
    setActiveMenu(menu);
    // Adicione qualquer lógica adicional aqui, se necessário
  };
  return (
    <>
      <NavbarComponent activeMenu={activeMenu} onMenuChange={handleMenuChange} />
      <h1>HOME</h1>
      {/* <Button to="/ranking">Ranking</Button> */}
    </>
  )
}
