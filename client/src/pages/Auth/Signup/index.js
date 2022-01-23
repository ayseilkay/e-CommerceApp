import { Flex,Box,Heading,FormControl ,FormLabel,Input, Button, Alert} from '@chakra-ui/react'
import React from 'react'
import { Formik, useFormik } from 'formik';
import validationSchema from './validations';
import { fetchRegister } from '../../../api';
import axios from 'axios';
import { useAuth } from '../../../contexts/AuthContext';


function Signup() {
    const {login} = useAuth(); // AuthContext içindeki veriyi bu componentta da kullandık.

   
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
        initialValues:{
          email: '',
          password:'',
          passwordConfirm:''
        },
        onSubmit: async(values,bag) => {
          try{
            const registerResponse = await  fetchRegister({email:values.email,password:values.password});
            console.log(registerResponse)
            login(registerResponse);
          }catch(e){
             bag.setErrors({general:e.response.data.message})
          }
        },
        
        validationSchema,
      });

      
    return (
        <div>
           <Flex align="center" width="full" justifyContent="center">
                <Box pt="10">
                    <Box textAlign="center">
                        <Heading>
                            Sign Up
                        </Heading>
                    </Box>
                    <Box my={"5"}>
                        {
                            errors.general && (
                                <Alert status='error'>{errors.general}</Alert>
                            )
                        }
                    </Box>
                    <Box my={5} textAlign="left">
                        <form onSubmit={handleSubmit}>
                            <FormControl mt={"4"}>
                                <FormLabel>Email</FormLabel>
                                <Input name="email" type={"email"} value={values.email} onChange={handleChange} onBlur={handleBlur} isInvalid={ errors.email && touched.email}/>
                                {
                                errors.email && touched.email && (<div className='error'> {errors.email}</div>
                                )}
                            </FormControl>
                            <FormControl mt={"4"}>
                                <FormLabel>Password</FormLabel>
                                <Input name="password" type="password" value={values.password} onChange={handleChange} onBlur={handleBlur} isInvalid={errors.password && touched.password}/>
                                {
                                errors.password && touched.password && (<div className='error'> {errors.password}</div>
                                )}
                            </FormControl>
                            <FormControl mt={"4"}>
                                <FormLabel>Password Confirm</FormLabel>
                                <Input name="passwordConfirm" type="password" value={values.passwordConfirm} onChange={handleChange} onBlur={handleBlur} isInvalid={errors.passwordConfirm && touched.passwordConfirm}/>
                                 {
                                errors.passwordConfirm && touched.passwordConfirm && (<div className='error'> {errors.passwordConfirm}</div>
                                )}
                            </FormControl>

                            <Button mt="4" width={"full"} type='submit' colorScheme={"green"}>Sign Up</Button>
                        </form>
                    </Box>
                </Box>
           </Flex>
        </div>
    )
}

export default Signup
