'use client'
import { User } from "@/models/user";
import { UserService } from "@/services/userService";
import { useEffect, useState } from "react";
import moment from "moment";
import 'moment/locale/pt-br';
import { useDispatch } from "react-redux";
import { updatePathname } from "@/redux/reducers/routerReducer";

export default function BirthdayList() {
  const userService = new UserService();
  const [birthdayList, setBirthdayList] = useState({} as Record<string, User[]>);
  const dispatch = useDispatch();

  moment.locale('pt-br');

  useEffect(() => {
    dispatch(updatePathname('/birthdays'));
    const fetchData = async () => {
      try {
        const response = await userService.getAll();
        const users = response.data;

        // Agrupar usuários por mês
        const groupedByMonth = users.reduce((acc: any, user: any) => {
          const birthMonth = moment(user.birthday).format('MMMM')
          if (!acc[birthMonth]) {
            acc[birthMonth] = [];
          }
          acc[birthMonth].push(user);
          return acc;
        }, {} as Record<string, User[]>);

        setBirthdayList(groupedByMonth);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto pt-8 pb-8">
        <h1 className="text-4xl font-bold mb-4">🥳 ANIVERSARIANTES 🥳</h1>
        <div className="container mx-auto p-4 grid gap-4">
          {Object.entries(birthdayList).map(([month, users]) => (
            <div key={month} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 bg-blue-500 text-white font-bold text-3xl">
                Aniversariantes de {month}
              </div>
              <div className="flex flex-wrap">
                {users.map((user, index) => (
                  <div key={index} className="p-4 flex flex-col items-center">
                    <img
                      src={user.photo} // Certifique-se de que 'photo' é o campo correto na sua lista de usuários
                      alt={`${user.name} ${user.lastname}`}
                      className="rounded-full w-40 h-40 mb-4 object-cover"
                    />
                    <p className="text-xl font-semibold mb-2">{`${user.name} ${user.lastname}`}</p>
                    <p>{`Data de aniversário: ${moment(user.birthday).format('DD/MM')}`}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
