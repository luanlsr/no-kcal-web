'use client'
import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { RankingDetails } from "@/models/rankingDetails";
import { RankingDetailsService } from "@/services/rankingDetailsService";

export default function Ranking() {
  const rankingDetailsService = new RankingDetailsService();
  const [rankingDetails, setRankingDetails] = useState([] as RankingDetails[]);

  const usersMap = rankingDetails
    ? rankingDetails.map((item) => item.users[0]).sort((a, b) => b.ranking.monthlyPoints - a.ranking.monthlyPoints)
    : [];

  const getCardStyle = (index: number) => {
    const styles = ["bg-gradient-to-r from-yellow-300 to-yellow-500", "bg-gradient-to-r from-gray-300 to-gray-500", "bg-gradient-to-r from-orange-300 to-orange-500", "bg-white"];
    return index < styles.length ? styles[index] : styles[styles.length - 1];
  };

  const getTrophyIcon = (index: number) => {
    const icons = ["🥇", "🥈", "🥉", "🏆"];
    return index < icons.length ? icons[index] : icons[icons.length - 1];
  };

  useEffect(() => {
    rankingDetailsService.getAll()
      .then((res) => {
        setRankingDetails(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <NavbarComponent activeMenu={activeMenu} onMenuChange={(menu) => setActiveMenu(menu)} /> */}

      <div className="flex flex-col items-center justify-center mx-auto pt-8 pb-8">
        <h1 className="text-4xl font-bold mb-4">RANKING</h1>
        {usersMap.map((user, userIndex) => (
          <div key={userIndex} className={`max-w-5xl mx-auto mb-4 mt-4 p-4 rounded-lg shadow-md ${getCardStyle(userIndex)} lg:w-full`}>
            <div className="flex flex-col lg:flex-row items-center justify-between mb-4">
              <img src={user.photo} alt={`${user.name} ${user.lastname}`} className="rounded-full w-40 h-40 mb-4 lg:mr-4 lg:mb-0" />
              <div className="flex flex-col lg:flex-row items-center lg:justify-between flex-grow">
                <div className="lg:mr-8">
                  <div className="mb-2">
                    <strong>{`${user.name} ${user.lastname}`}</strong>
                  </div>
                  <div>{`Setor: ${user.sector}`}</div>
                  <div>{`Telefone: ${user.phone}`}</div>
                  <div className="lg:w-80">Percentual de Gordura perdido: {user.ranking.monthlyPoints * 0.01}%</div>
                </div>
                <div className="lg:ml-8 flex items-center flex-col mt-4 lg:mt-0">
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
          </div>
        ))}
      </div>
    </>
  );
}
