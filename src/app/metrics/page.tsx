'use client'
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PhysicalDataService } from '@/services/physicalDataService';
import { useSelector } from 'react-redux';
import { useRouter } from "next/navigation";
import Button from '@/components/Button';


const MetricsForm = () => {

  const physicalDataService = new PhysicalDataService();
  const userId = useSelector((state: any) => state.createMetrics.userId);
  const router = useRouter();

  const handleSubmit = async (values: any, { setSubmitting }: any) => {
    try {
      console.log('values', values);
      await physicalDataService.create(values);
      router.push('/users');
    } catch (error) {
      // Lide com erros de submissão, se necessário
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container mt-4">
      <div className="card mx-auto p-50 w-full">
        <h1 className="text-center text-4xl mt-10">Formulário de Métricas</h1>

        <Formik
          initialValues={{
            userId,
            date: new Date(),
            peso: 0,
            altura: 0,
            IMC: 0,
            gorduraPercentual: 0,
            pesoGordura: 0,
            percentualMassaMuscularEsquelatica: 0,
            pesoMassaMuscularEsquelatica: 0,
            registroMassaMuscular: 0,
            pesoMassaMuscular: 0,
            aguaPercentual: 0,
            pesoAgua: 0,
            gorduraVisceral: 0,
            ossos: 0,
            metabolismo: 0,
            proteinaPercentual: 0,
            obesidadePercentual: 0,
            idadeReal: 0,
            idadeCorporal: 0,
            LBM: 0,
          }}
          // validationSchema={CreatePhysicalDataSchema}
          onSubmit={handleSubmit}
        >
          <Form className='p-10 mt-10'>
            <div className="row mb-3">
              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="peso">Peso</label>
                <Field type="number" name="peso" className="form-control" required />
                <ErrorMessage name="peso" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="altura">Altura</label>
                <Field type="number" name="altura" className="form-control" required />
                <ErrorMessage name="altura" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="IMC">IMC</label>
                <Field type="number" name="IMC" className="form-control" required />
                <ErrorMessage name="IMC" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="gorduraPercentual">Gordura (%)</label>
                <Field type="number" name="gorduraPercentual" className="form-control" required />
                <ErrorMessage name="gorduraPercentual" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="pesoGordura">Peso Gordura (kg)</label>
                <Field type="number" name="pesoGordura" className="form-control" required />
                <ErrorMessage name="pesoGordura" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="percentualMassaMuscularEsqueletica">Massa Muscular Esq. (%)</label>
                <Field type="number" name="percentualMassaMuscularEsqueletica" className="form-control" required />
                <ErrorMessage name="percentualMassaMuscularEsqueletica" component="div" className="text-danger" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="pesoMassaMuscularEsqueletica">Peso Massa Muscular Esq.(kg)</label>
                <Field type="number" name="pesoMassaMuscularEsqueletica" className="form-control" required />
                <ErrorMessage name="pesoMassaMuscularEsqueletica" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="registroMassaMuscular">Registro Massa Muscular (%)</label>
                <Field type="number" name="registroMassaMuscular" className="form-control" required />
                <ErrorMessage name="registroMassaMuscular" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="pesoMassaMuscular">Peso Massa Muscular (kg)</label>
                <Field type="number" name="pesoMassaMuscular" className="form-control" required />
                <ErrorMessage name="pesoMassaMuscular" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="aguaPercentual">Água (%)</label>
                <Field type="number" name="aguaPercentual" className="form-control" required />
                <ErrorMessage name="aguaPercentual" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="pesoAgua">Peso Água (kg)</label>
                <Field type="number" name="pesoAgua" className="form-control" required />
                <ErrorMessage name="pesoAgua" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="gorduraVisceral">Gordura Visceral (%)</label>
                <Field type="number" name="gorduraVisceral" className="form-control" required />
                <ErrorMessage name="gorduraVisceral" component="div" className="text-danger" />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="ossos">Ossos (%)</label>
                <Field type="number" name="ossos" className="form-control" required />
                <ErrorMessage name="ossos" component="div" className="text-danger" />
              </div>
              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="metabolismo">Metabolismo</label>
                <Field type="number" name="metabolismo" className="form-control" required />
                <ErrorMessage name="metabolismo" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="proteinaPercentual">Proteína (%)</label>
                <Field type="number" name="proteinaPercentual" className="form-control" required />
                <ErrorMessage name="proteinaPercentual" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="obesidadePercentual">Obesidade (%)</label>
                <Field type="number" name="obesidadePercentual" className="form-control" required />
                <ErrorMessage name="obesidadePercentual" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="idadeReal">Idade Real</label>
                <Field type="number" name="idadeReal" className="form-control" required />
                <ErrorMessage name="idadeReal" component="div" className="text-danger" />
              </div>

              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="idadeCorporal">Idade Corporal</label>
                <Field type="number" name="idadeCorporal" className="form-control" required />
                <ErrorMessage name="idadeCorporal" component="div" className="text-danger" />
              </div>

            </div>
            <div className="row mb-3">
              <div className="col-md-2 mt-4">
                <label className='mb-1' htmlFor="LBM">LBM (%)</label>
                <Field type="number" name="LBM" className="form-control" required />
                <ErrorMessage name="LBM" component="div" className="text-danger" />
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="primary">Adicionar</Button>
            </div>
          </Form>
        </Formik>
      </div>

    </div>
  );
};

export default MetricsForm;
