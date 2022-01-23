import { Flex,Box,Heading,FormControl ,FormLabel,Input, Button, Alert} from '@chakra-ui/react'
import React from 'react'
import { Formik, useFormik } from 'formik';
import validationSchema from './validations';
import { fetchRegister, fetchSignIn } from '../../../api';
import { useAuth } from '../../../contexts/AuthContext';


function Signin() {
    const {login} = useAuth(); // AuthContext içindeki veriyi bu componentta da kullandık.

   
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
        initialValues:{
          email: '',
          password:'',
        },
        onSubmit: async(values,bag) => {
          try{
            const loginResponse = await  fetchSignIn({email:values.email,password:values.password});
            console.log(loginResponse);
            login(loginResponse);
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
                            Sign In
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
                            <Button mt="4" width={"full"} type='submit' colorScheme={"green"}>Sign In</Button>
                        </form>
                    </Box>
                </Box>
           </Flex>
        </div>
    )
}

export default Signin
