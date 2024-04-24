"use client"

import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const SignUpFormSchema = z.object({
  name: z.string().min(2, 'Mínimo 2 letras').max(20, 'Máximo 20 letras'),
  lastName: z.string().min(2, 'Mínimo 2 letras').optional(),
  email: z.string().email('Email inválido'),
  age: z.number({invalid_type_error: 'Idade precisa ser um número.'}).min(18)
});

const Page = () => {

  const { register, handleSubmit } = useForm({
    resolver: zodResolver(SignUpFormSchema)
  });

  const handleSubmitForm = () => {

  }

  return (
    <div className="container mx-auto"> 
      <form onSubmit={handleSubmit(handleSubmitForm)}>

        <div>
          <input 
            {...register('name')}
            className="border border-black p-3 m-3"
          />
        </div>
        
        <div>
          <input 
            {...register('lastname')}
            className="border border-black p-3 m-3"
          />
        </div>
          
        <div>
          <input 
            {...register('age', { valueAsNumber: true })}
            className="border border-black p-3 m-3"
          />
        </div>
          

        <input type="submit" value="cadastrar" />
      </form>
    </div>
  );
} 

export default Page;