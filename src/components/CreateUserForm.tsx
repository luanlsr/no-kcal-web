import { UserService } from "@/services/userService";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import { closeModal } from '../redux/reducers/modalReducer';
import { useDispatch, useSelector } from "react-redux";

const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    birthday: new Date(),
    email: '',
    phone: '',
    sector: '',
    photo: '',
  });

  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.modal.isModalOpen);
  const isEditModalOpen = useSelector((state: any) => state.editModal.isEditModalOpen);

  const userService = new UserService()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await userService.create(formData);
    } catch (error) {
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Modal Modal
        size="sm"
        show={isModalOpen}
        onHide={handleCloseModal}
        scrollable={true}
        centered={true}
      >
        <div className="flex justify-center items-center h-screen">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <Modal.Header
              className="flex justify-center items-center pt-10"
              closeButton
              onClick={handleCloseModal}
            >
              <Modal.Title className="text-4xl p-10">Adicionar usuário</Modal.Title>
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
                  value={formData.name}
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
                  value={formData.lastname}
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
                  value={formData.birthday.toString()}
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
                  value={formData.email}
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
                  value={formData.phone}
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
                  value={formData.sector}
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
                  value={formData.photo}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3"
                  required
                />
              </div>
            </Modal.Body>
            {/* Adicione outros campos do formulário */}
            <Modal.Footer className="flex">
              <div>
                <Button variant="danger" onClick={handleCloseModal}>
                  Cancelar
                </Button>
              </div>
              <div className="ml-10">
                <Button
                  type="submit"
                  variant="primary"
                >
                  Adicionar
                </Button>
              </div>
            </Modal.Footer>
          </form>
        </div>


      </Modal>
    </div >
  );
};

export default CreateUserForm;
