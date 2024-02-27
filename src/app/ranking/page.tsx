'use client'
import Button from "@/components/Button";
import NavbarComponent from "@/components/Navbar";
// import UserCard from "@/components/UserCard";
import { PhysicalData } from "@/models/physicalData";
import { RankingEntity } from "@/models/ranking";
import { RankingDetails } from "@/models/rankingDetails";
import { User } from "@/models/user";
import { PhysicalDataService } from "@/services/physicalDataService";
import { RankingDetailsService } from "@/services/rankingDetailsService";
import { RankingService } from "@/services/rankingService";
import { UserService } from "@/services/userService";
import { useEffect, useState } from "react";

export default function Ranking() {
  const physicalDataService = new PhysicalDataService()
  const rankingDetailsService = new RankingDetailsService()
  const [activeMenu, setActiveMenu] = useState<"home" | "ranking" | "users">("ranking");
  const handleMenuChange = (menu: "home" | "ranking" | "users") => {
    setActiveMenu(menu);
  };
  const [rankingDetails, setRankingDetails] = useState([] as RankingDetails[])

  const usersMap = rankingDetails
    ? rankingDetails.map((item) => item.users[0]).sort((a, b) => b.ranking.monthlyPoints - a.ranking.monthlyPoints)
    : []

  const getCardStyle = (index: any) => {
    if (index === 0) {
      return "bg-gradient-to-r from-yellow-300 to-yellow-500";
    } else if (index === 1) {
      return "bg-gradient-to-r from-gray-300 to-gray-500";
    } else if (index === 2) {
      return "bg-gradient-to-r from-orange-300 to-orange-500";
    } else {
      return "bg-white";
    }
  };

  const getTrophyIcon = (index: any) => {
    if (index === 0) {
      return "🥇";
    } else if (index === 1) {
      return "🥈";
    } else if (index === 2) {
      return "🥉";
    } else {
      return "🏆";
    }
  };

  useEffect(() => {
    rankingDetailsService.getAll()
      .then((res) => {
        setRankingDetails(res.data)
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  return (
    <>
      <NavbarComponent activeMenu={activeMenu} onMenuChange={handleMenuChange} />
      <div className="flex flex-col items-center justify-center h-screen mt-24 mb-24">
        <h1 className="text-4xl font-bold mb-4">RANKING</h1>
        {/* {rankingDetails.map((rankingDetail, index) => ( */}
        {usersMap
          .map((user, userIndex) => (
            <div className="max-w-5xl mx-auto mb-4 bg-white p-4 rounded-lg shadow-md h-56"> {/* Adicione classes Tailwind */}
              <div key={userIndex} className={`flex items-center justify-between mb-4 ${getCardStyle(userIndex)}`}>
                <img src={user.photo} alt={`${user.name} ${user.lastname}`} className="rounded-full w-40 h-40 mr-4" /> {/* Adicione classes Tailwind */}
                <div>
                  <div>
                    <strong>{`${user.name} ${user.lastname}`}</strong>
                  </div>
                  <div>{`Setor: ${user.sector}`}</div>
                  <div>{`Telefone: ${user.phone}`}</div>
                  <div className="w-80">Percentual de Gordura perdido: {user.ranking.monthlyPoints * 0.01}%</div>
                </div>
                <div className="ml-56 flex items-center flex-col">
                  <span className="mb-2">Pontos</span>
                  <div className="flex items-center">
                    <div className="border-2 border-gold rounded-full p-2 mr-2 bg-slate-50">
                      <span role="img" aria-label="Points" className="text-4xl">
                        {getTrophyIcon(userIndex)}
                      </span>
                    </div>
                    <span className="text-5xl bg-blue-500 text-white p-2 rounded mr-10">
                      {` ${user.ranking.totalPoints}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        <Button to="/" variant="danger" icon="bi bi-arrow-return-left">Voltar</Button>
      </div>
    </>
  );
}
