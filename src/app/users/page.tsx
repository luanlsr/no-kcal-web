'use client'
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilSquare } from "react-icons/bs";
import { differenceInYears, format } from "date-fns";
import CreateUserForm from "@/components/CreateUserForm";
import UpdateUserForm from "@/components/UpdateUserForm";
import { User } from "@/models/user";
import { UserService } from "@/services/userService";
import { openModal } from "@/redux/reducers/modalReducer";
import { openEditModal } from "@/redux/reducers/modalEditReducer";
// import Button from "@/components/Button";
import { setUserId } from "@/redux/reducers/createMetricsReducer";
import { useRouter } from "next/navigation";
import { updatePathname } from "@/redux/reducers/routerReducer";
import moment from 'moment-timezone';

export default function Users() {
  const userService = new UserService();
  const [users, setUsers] = useState([] as User[]);


  const router = useRouter();

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  const isEditModalOpen = useSelector((state: any) => state.editModal.isEditModalOpen);

  const handleOpenModal = () => dispatch(openModal());
  const handleEditOpenModal = (user: User) => {

    dispatch(openEditModal(user))
  };

  const handleSendUserId = (userId: any) => {
    dispatch(setUserId(userId));
    router.push('/metrics');
    // Aqui você pode navegar para a página de métricas ou fazer o que for necessário
  };

  useEffect(() => {
    dispatch(updatePathname('/users'));
    const fetchData = async () => {
      try {
        const response = await userService.getAll();
        setUsers(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };
    fetchData();
  }, [users]);


  const calculateAge = (birthday: any) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    return differenceInYears(today, birthDate);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto pt-8 pb-8">
        <h1 className="text-4xl font-bold mb-4">🧑🏽‍💻 USUÁRIOS 🧑🏽‍💻</h1>
        <div className="mt-8 flex justify-center items-center">
          <button
            disabled={false}
            className="btn btn-primary btn-lg"
            onClick={handleOpenModal}
          >
            Adicionar Usuário
          </button>
        </div>
        <div className="container mx-auto p-4 grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {users
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((user, index) => {
              const formattedBirthday = user.birthday.toString().slice(8, 10) + "/" + user.birthday.toString().slice(5, 7) + "/" + user.birthday.toString().slice(0, 4);
              return (
                <div key={index} className="relative group mb-4 bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={user.photo}
                    alt={`${user.name} ${user.lastname}`}
                    className="w-full h-80 cursor-pointer rounded-t-lg object-cover"
                    onClick={() => handleEditOpenModal(user)}
                  />
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-yellow-500 text-white"
                    onClick={() => handleEditOpenModal(user)}
                  >
                    <BsPencilSquare />
                  </button>
                  <div className="p-4 flex flex-col justify-center items-center text-center"> {/* Adicionadas as classes text-center e items-center */}
                    <p className="text-xl font-semibold mb-2">{`${user.name} ${user.lastname}`}</p>
                    <p>{`Telefone: ${user.phone}`}</p>
                    <p>{`Idade: ${calculateAge(user.birthday.toString())}`}</p>
                    <p>{`Data de aniversário: ${formattedBirthday}`}</p>
                    <p>{`Setor: ${user.sector}`}</p>
                  </div>
                  <button className="w-full btn btn-primary" onClick={() => handleSendUserId(user._id)}>
                    Adicionar métricas
                  </button>
                </div>
              );
            })}
        </div>
        {isModalOpen && (
          <>
            <CreateUserForm />
          </>
        )}
        {isEditModalOpen && (
          <>
            <UpdateUserForm />
          </>
        )}
      </div>
    </>
  );
}
