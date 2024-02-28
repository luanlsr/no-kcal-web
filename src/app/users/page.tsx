// 'use client'
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { BsPencilSquare } from "react-icons/bs";
// import { differenceInYears, format } from "date-fns";
// import CreateUserForm from "@/components/CreateUserForm";
// import UpdateUserForm from "@/components/UpdateUserForm";
// import { User } from "@/models/user";
// import { UserService } from "@/services/userService";
// import { openModal } from "@/redux/reducers/modalReducer";
// import { openEditModal } from "@/redux/reducers/modalEditReducer";

// export default function Users() {
//   const userService = new UserService();

//   const [activeMenu, setActiveMenu] = useState<"home" | "ranking" | "users">("users");
//   const [users, setUsers] = useState([] as User[]);
//   const dispatch = useDispatch();
//   const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);

//   const handleMenuChange = (menu: "home" | "ranking" | "users") => setActiveMenu(menu);
//   const handleOpenModal = () => dispatch(openModal());
//   const handleEditOpenModal = (user: User) => dispatch(openEditModal(user));

//   useEffect(() => {
//     userService.getAll().then((res) => {
//       setUsers(res.data);
//     });
//   }, [users]);

//   const calculateAge = (birthday: any) => {
//     const today = new Date();
//     const birthDate = new Date(birthday);
//     return differenceInYears(today, birthDate);
//   };

//   return (
//     <>
//       <div className="mt-8 flex justify-center items-center">
//         <button
//           disabled={false}
//           className="border p-4 rounded-md bg-blue-500 text-white mt-4"
//           onClick={handleOpenModal}
//         >
//           Adicionar Usuário
//         </button>
//       </div>
//       <div className="container mx-auto p-4 overflow-x-auto">
//         <table className="table-auto min-w-full">
//           <thead>
//             <tr className="bg-orange-300">
//               <th className="px-4 py-2 text-center">Name</th>
//               <th className="px-4 py-2 text-center">Telefone</th>
//               <th className="px-4 py-2 text-center">Idade</th>
//               <th className="px-4 py-2 text-center">Data de aniversário</th>
//               <th className="px-4 py-2 text-center">Setor</th>
//               <th className="px-4 py-2 text-center">Ações</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id}>
//                 <td className="border px-4 py-2 text-center">{user.name} {user.lastname}</td>
//                 <td className="border px-4 py-2 text-center">{user.phone}</td>
//                 <td className="border px-4 py-2 text-center">{calculateAge(user.birthday.toString())}</td>
//                 <td className="border px-4 py-2 text-center">{format(new Date(user.birthday), 'dd/MM')}</td>
//                 <td className="border px-4 py-2 text-center">{user.sector}</td>
//                 <td className="border px-4 py-2 text-center">
//                   <button
//                     className="bg-warning-500 text-white px-2 py-1 rounded hover:bg-warning-600 focus:outline-none focus:shadow-outline-blue"
//                     onClick={() => handleEditOpenModal(user)}
//                   >
//                     <BsPencilSquare />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <UpdateUserForm />
//       <CreateUserForm />
//     </>
//   );
// }


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

export default function Users() {
  const userService = new UserService();
  const [users, setUsers] = useState([] as User[]);

  const dispatch = useDispatch();

  const handleOpenModal = () => dispatch(openModal());
  const handleEditOpenModal = (user: User) => {
    console.log('user', user);

    dispatch(openEditModal(user))
  };

  useEffect(() => {
    userService.getAll().then((res) => {
      setUsers((prevUsers) => [...prevUsers, ...res.data]);
    });
  }, []);

  const calculateAge = (birthday: any) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    return differenceInYears(today, birthDate);
  };

  return (
    <>
      <div className="mt-8 flex justify-center items-center">
        <button
          disabled={false}
          className="border p-4 rounded-md bg-blue-500 text-white mt-4"
          onClick={handleOpenModal}
        >
          Adicionar Usuário
        </button>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 mt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {users.map((user) => (
          <div key={user.id} className="relative group mb-4 bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={user.photo}
              alt={`${user.name} ${user.lastname}`}
              className="w-full h-80 cursor-pointer rounded-t-lg object-cover"
              onClick={() => handleEditOpenModal(user)}
            />
            <div className="p-4 flex flex-col justify-center items-center">
              <p className="text-xl font-semibold mb-2">{`${user.name} ${user.lastname}`}</p>
              <p>{`Telefone: ${user.phone}`}</p>
              <p>{`Idade: ${calculateAge(user.birthday.toString())}`}</p>
              <p>{`Data de aniversário: ${format(new Date(user.birthday), 'dd/MM')}`}</p>
              <p>{`Setor: ${user.sector}`}</p>
            </div>
            <button
              className="absolute bottom-4 right-4 p-2 rounded-full bg-yellow-500 text-white"
              onClick={() => handleEditOpenModal(user)}
            >
              <BsPencilSquare />
            </button>
          </div>
        ))}
      </div>
      <UpdateUserForm />
      <CreateUserForm />
    </>
  );
}
