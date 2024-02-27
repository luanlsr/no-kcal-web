import { UserService } from "@/services/userService";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import { EditModalState, closeEditModal } from '../redux/reducers/modalEditReducer';
import { useDispatch, useSelector } from "react-redux";
import { User } from "@/models/user";

const UpdateUserForm = () => {
  const [formData, setFormData] = useState({} as User);

  const dispatch = useDispatch();
  const isEditModalOpen = useSelector((state: any) => state.editModal.isEditModalOpen);
  const editModalData = useSelector((state: { editModal: EditModalState }) => state.editModal?.userEditData);

  const userService = new UserService()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (editModalData)
      setFormData(editModalData)
  }, [editModalData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await userService.update(formData);
      handleCloseEditModal()
    } catch (error) {
    }
  };

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Modal Modal
        size="sm"
        show={isEditModalOpen}
        onHide={handleCloseEditModal}
        scrollable={true}
        centered={true}
      >
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <Modal.Header
              className="flex justify-center items-center pt-10"
              closeButton
              onClick={handleCloseEditModal}
            >
              <Modal.Title className="text-4xl">Editar Usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  // value={formData.name}
                  value={formData?.name}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Repita para os outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                  Sobrenome
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  // value={formData.lastname}
                  value={formData?.lastname}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Adicione outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  // value={formData.birthday.toString()}
                  // value={formData?.birthday.toString("yyyy-MM-dd")}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Adicione outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  // value={formData.email}
                  value={formData?.email}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Adicione outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Telefone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  // value={formData.phone}
                  value={formData?.phone}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Adicione outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sector">
                  Setor
                </label>
                <input
                  type="text"
                  id="sector"
                  name="sector"
                  // value={formData.sector}
                  value={formData?.sector}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
              {/* Adicione outros campos do formulário */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
                  Foto (URL)
                </label>
                <input
                  type="text"
                  id="photo"
                  name="photo"
                  // value={formData.photo}
                  value={formData?.photo}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
            </Modal.Body>
            {/* Adicione outros campos do formulário */}
            <Modal.Footer className="flex">
              <div>
                <Button variant="danger" onClick={handleCloseEditModal}>
                  Cancelar
                </Button>
              </div>
              <div className="ml-10">
                <Button
                  type="submit"
                  variant="primary"
                >
                  Atualizar
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </div >
  );
};

export default UpdateUserForm;
