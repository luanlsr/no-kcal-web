import { UserService } from "@/services/userService";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "./Button";
import { EditModalState, closeEditModal } from '../redux/reducers/modalEditReducer';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from "formik";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const isEditModalOpen = useSelector((state: any) => state.editModal.isEditModalOpen);
  const editModalData = useSelector((state: { editModal: EditModalState }) => state.editModal?.userEditData);

  const userService = new UserService()

  const validate = (values: any) => {
    const errors: any = {};
    return errors;
  };

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      await userService.update(values);
      handleCloseEditModal();
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  };

  const handleCloseEditModal = () => {
    dispatch(closeEditModal());
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <Modal
        size="xl"
        show={isEditModalOpen}
        onHide={handleCloseEditModal}
        scrollable={true}
        centered={true}
      >
        <Formik
          initialValues={editModalData}
          validate={validate}
          onSubmit={handleSubmit}
        >
          <Form className="bg-white p-8 rounded-lg shadow-md">
            <Modal.Header
              className="flex justify-center items-center pt-10"
              closeButton
              onClick={handleCloseEditModal}
            >
              <Modal.Title className="text-4xl">Editar Usuário</Modal.Title>
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
                  <Field type="text" id="lastname" name="lastname" className="border rounded-md py-2 px-3 w-full" />
                  <ErrorMessage name="lastname" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
                  <Field type="email" id="email" name="email" className="border rounded-md py-2 px-3 w-full" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Telefone</label>
                  <Field type="text" id="phone" name="phone" className="border rounded-md py-2 px-3 w-full" />
                  <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="birthday" className="block text-gray-700 text-sm font-bold mb-2">Data de Nascimento</label>
                  <Field
                    type="date"
                    id="birthday"
                    name="birthday"
                    render={({ field }: any) => (
                      <input
                        {...field}
                        className="border rounded-md py-2 px-3 w-full"
                        value={moment(field.value).format('YYYY-MM-DD')}
                      />
                    )}
                  />
                  <ErrorMessage name="birthday" component="div" className="text-red-500 text-sm mt-1" />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="sector" className="block text-gray-700 text-sm font-bold mb-2">Setor</label>
                  <Field type="text" id="sector" name="sector" className="border rounded-md py-2 px-3 w-full" />
                  <ErrorMessage name="sector" component="div" className="text-red-500 text-sm mt-1" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">Foto (URL)</label>
                <Field type="text" id="photo" name="photo" className="border rounded-md py-2 px-3 w-full" />
                <ErrorMessage name="photo" component="div" className="text-red-500 text-sm mt-1" />
              </div>
            </Modal.Body>
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
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default UpdateUserForm;
