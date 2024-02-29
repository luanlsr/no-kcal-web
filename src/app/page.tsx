'use client'
import { updatePathname } from "@/redux/reducers/routerReducer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePathname('/'))
  }, [])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo ao NO-KCAL</h1>
      <p className="text-lg mb-8">Esta é uma página inicial simples criada com Next.js, Tailwind CSS, Bootstrap, Nesj.js e MongoDb</p>
    </div>
  );
};

export default Home;
