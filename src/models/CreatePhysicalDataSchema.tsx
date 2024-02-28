import * as Yup from 'yup';

export const CreatePhysicalDataSchema = Yup.object().shape({
  peso: Yup.number().required('Peso é obrigatório').positive('Peso deve ser um número positivo'),
  altura: Yup.number().required('Altura é obrigatória').positive('Altura deve ser um número positivo'),
  IMC: Yup.number().required('IMC é obrigatório').positive('IMC deve ser um número positivo'),
  gorduraPercentual: Yup.number().required('Gordura Percentual é obrigatória').positive('Gordura Percentual deve ser um número positivo'),
  pesoGordura: Yup.number().required('Peso Gordura é obrigatório').positive('Peso Gordura deve ser um número positivo'),
  percentualMassaMuscularEsquelatica: Yup.number().required('Percentual Massa Muscular Esquelética é obrigatório').positive('Percentual Massa Muscular Esquelética deve ser um número positivo'),
  registroMassaMuscular: Yup.number().required('Registro Massa Muscular é obrigatório').positive('Registro Massa Muscular deve ser um número positivo'),
  pesoMassaMuscular: Yup.number().required('Peso Massa Muscular é obrigatório').positive('Peso Massa Muscular deve ser um número positivo'),
  aguaPercentual: Yup.number().required('Água Percentual é obrigatória').positive('Água Percentual deve ser um número positivo'),
  pesoAgua: Yup.number().required('Peso Água é obrigatório').positive('Peso Água deve ser um número positivo'),
  gorduraVisceral: Yup.number().required('Gordura Visceral é obrigatória').positive('Gordura Visceral deve ser um número positivo'),
  ossos: Yup.number().required('Ossos é obrigatório').positive('Ossos deve ser um número positivo'),
  metabolismo: Yup.number().required('Metabolismo é obrigatório').positive('Metabolismo deve ser um número positivo'),
  proteinaPercentual: Yup.number().required('Proteína Percentual é obrigatória').positive('Proteína Percentual deve ser um número positivo'),
  obesidadePercentual: Yup.number().required('Obesidade Percentual é obrigatória').positive('Obesidade Percentual deve ser um número positivo'),
  idadeReal: Yup.number().required('Idade Real é obrigatória').positive('Idade Real deve ser um número positivo'),
  idadeCorporal: Yup.number().required('Idade Corporal é obrigatória').positive('Idade Corporal deve ser um número positivo'),
  LBM: Yup.number().required('LBM é obrigatório').positive('LBM deve ser um número positivo'),
});
