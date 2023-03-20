import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const handleSubmit =()=>{
        console.log(password)
        }
    return (
        <Container>
        <Box>
        <VStack spacing='24px'>
         
               <FormControl isRequired>
               <FormLabel   textColor={'white'}> Email</FormLabel>
                <Input    onBlur={(e)=>{
                    const password= e.target.value;
                    setEmail(email);
                 }} backgroundColor={'white'}  placeholder='Your Email'></Input>
              
               </FormControl>
            <FormControl isRequired>
            <FormLabel textColor={'white'}>Password</FormLabel>
                <Input type={'password'}  backgroundColor={'white'}  placeholder='Your Password'
                textColor={'black'}
                 onBlur={(e)=>{
                    const password= e.target.value;
                    setPassword(password);
                 }}
                ></Input>
            </FormControl>
         
           
                <Box  display={'flex'} justifyContent='center'>
                <Button onClick={handleSubmit} textColor={'#1fa595'} backgroundColor={'white'} type='submit' margin={'20px'}>Login</Button>
                </Box>
               
        

</VStack>
        </Box>
    </Container>
    );
};

export default Login;