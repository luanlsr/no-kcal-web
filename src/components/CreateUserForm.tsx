import { UserService } from "@/services/userService";
import { useContext, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import { closeModal } from '../redux/reducers/modalReducer';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

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

  const initialValues = {
    name: '',
    lastname: '',
    birthday: new Date(),
    email: '',
    phone: '',
    sector: '',
    photo: '',
  };

  const validate = (values: any) => {
    // Adicione lógica de validação aqui, se necessário
    const errors: any = {};
    return errors;
  };

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

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      await userService.create(values);
      handleCloseModal();
    } catch (error) {
      // Lide com erros de submissão, se necessário
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 m-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 custom-modal">
      <Modal
        size="xl"
        show={isModalOpen}
        onHide={handleCloseModal}
        scrollable={true}
        centered={true}
        dialogClassName="custom-modal"
      >
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white p-2 rounded-lg shadow-md">
            <Modal.Header
              className="flex justify-center items-center"
              closeButton
              onClick={handleCloseModal}
            >
              <Modal.Title className="text-4xl p-10">Adicionar usuário</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome</label>
                  <Field type="text" id="name" name="name" className="border rounded-md py-2 px-3 w-full" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="lastname" className="block text-gray-700 text-sm font-bold mb-2">Sobrenome</label>
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
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                  <Field type="email" id="email" name="email" className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
                  <Field type="text" id="phone" name="phone" className="border rounded-md py-2 px-3 w-full" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="birthday" className="block text-gray-700 text-sm font-bold mb-2">Data de Nascimento</label>
                  <Field type="date" id="birthday" name="birthday" className="border rounded-md py-2 px-3 w-full" />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="sector" className="block text-gray-700 text-sm font-bold mb-2">Setor</label>
                  <Field type="text" id="sector" name="sector" className="border rounded-md py-2 px-3 w-full" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Foto (URL)</label>
                <Field type="text" id="photo" name="photo" className="border rounded-md py-2 px-3 w-full" />
              </div>
            </Modal.Body>
            <Modal.Footer className="flex">
              <div>
                <Button variant="danger" onClick={handleCloseModal}>Cancelar</Button>
              </div>
              <div className="ml-10">
                <Button type="submit" variant="primary">Adicionar</Button>
              </div>
            </Modal.Footer>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default CreateUserForm;
