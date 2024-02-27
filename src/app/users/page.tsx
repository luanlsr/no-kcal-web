'use client'
import CreateUserForm from "@/components/CreateUserForm";
import NavbarComponent from "@/components/Navbar"
import { PhysicalData } from "@/models/physicalData";
import { User } from "@/models/user";
import { openModal } from "@/redux/reducers/modalReducer";
import { openEditModal } from "@/redux/reducers/modalEditReducer";
import { PhysicalDataService } from "@/services/physicalDataService";
import { UserService } from "@/services/userService";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPencilSquare } from "react-icons/bs";
import { differenceInYears, format } from "date-fns";
import UpdateUserForm from "@/components/UpdateUserForm";

export default function Users() {
  const userService = new UserService()
  const physicalDataService = new PhysicalDataService()

  const [activeMenu, setActiveMenu] = useState<"home" | "ranking" | "users">("users");
  const [users, setUsers] = useState([] as User[])
  const [physicalData, setPhysicalData] = useState([] as PhysicalData[])


  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  // console.log('isOpen', isModalOpen);

  const handleMenuChange = (menu: "home" | "ranking" | "users") => setActiveMenu(menu);
  const handleOpenModal = (): any => {
    console.log('cliquei');

    dispatch(openModal())
  }
  const handleEditOpenModal = (user: User): any => dispatch(openEditModal(user))

  useEffect(() => {
    userService.getAll()
      .then((res) => {
        setUsers(res.data)
      })
  }, [users])

  const calculateAge = (birthday: any) => {
    const today = new Date();
    const birthDate = new Date(birthday);
    return differenceInYears(today, birthDate);
  };

  return (
    <>
      <NavbarComponent activeMenu={activeMenu} onMenuChange={handleMenuChange} />
      <div className="flex justify-center items-center">
        <button disabled={false} className="border p-4 rounded-md bg-blue-500 text-white mt-4" onClick={handleOpenModal}>
          Adicionar Usuário
        </button>
      </div>
      <div className="container mx-auto p-4">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-orange-300">
              <th className="px-4 py-2 text-center">Name</th>
              {/* <th className="px-4 py-2 text-center">Email</th> */}
              <th className="px-4 py-2 text-center">Telefone</th>
              <th className="px-4 py-2 text-center">Idade</th>
              <th className="px-4 py-2 text-center">Data de aniversário</th>
              <th className="px-4 py-2 text-center">Setor</th>
              <th className="px-4 py-2 text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border px-4 py-2 text-center">{user.name} {user.lastname}</td>
                {/* <td className="border px-4 py-2 text-center">{user.email}</td> */}
                <td className="border px-4 py-2 text-center">{user.phone}</td>
                <td className="border px-4 py-2 text-center">{calculateAge(user.birthday.toString())}</td>
                <td className="border px-4 py-2 text-center">{format(new Date(user.birthday), 'dd/MM')}</td>
                <td className="border px-4 py-2 text-center">{user.sector}</td>
                <td className="border px-4 py-2 text-center">
                  <button
                    className="bg-warning-500 text-white px-2 py-1 rounded hover:bg-warning-600 focus:outline-none focus:shadow-outline-blue"
                    onClick={() => handleEditOpenModal(user)}
                  >
                    <BsPencilSquare />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <UpdateUserForm />
      <CreateUserForm />
    </>
  )
}
