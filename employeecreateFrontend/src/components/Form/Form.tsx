import React from 'react'
import { Employee } from '../../Interfaces/EmployeeInterface'
import { useForm } from 'react-hook-form'
import styles from "./Form.module.scss"
import PISection from '../PI_Section/PISection'
import CDSection from '../CD_Section/CDSection'
import ESSection from '../ES_Section/ESSection'
import Buttons from '../Buttons_Section/Buttons'
import Header from '../Header/Header'
import { submitEmployee } from '../../services/employee-services'

const Form = () => {

    const {
        register,
        handleSubmit, formState: { errors }
      } = useForm<Employee>();
    
      const onSubmit = (data: Employee) => {
        console.log("Data", data);
        const cleanedDate = submitEmployee(data);
        
      };

    
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container__AddEmployee__title}>
        <Header/>
        <div className={styles.container__body}>
          <PISection errors={errors} register={register}/>
          <CDSection errors={errors} register={register}/>
          <ESSection errors={errors} register={register}/>
          <Buttons/>
        </div>
      </div>
    </form>
  )
}

export default Form