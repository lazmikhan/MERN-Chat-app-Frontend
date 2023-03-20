import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] =useState('');
    const [name, setName] =useState('');
    const [password, setPassword] =useState('');
    const [confirmPassword, setConfirmPassword] =useState('');
    const [pic, setPic] =useState('');
    const handleSubmit =()=>{
        console.log(name, pic, password)
        }
    const uploadImg =(pic)=>{

    }

    return (
        <Container>
            <Box>
            <VStack spacing='24px'>
                <FormControl isRequired textColor={'#1fa595'}>
                    <FormLabel  textColor={'white'}>Name</FormLabel>
                    <Input required backgroundColor={'white'} placeholder='Your Name' onBlur={(e)=>{
                       const name= e.target.value;
                       setName(name);
                    }}></Input>
                        </FormControl>
                   <FormControl isRequired>
                   <FormLabel   textColor={'white'}> Email</FormLabel>
                    <Input backgroundColor={'white'}  placeholder='Your Email'></Input>
                  
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
                <FormControl isRequired>
                <FormLabel  textColor={'white'}>Confirm Password</FormLabel>
                    <Input  textColor={'black'}  onBlur={(e)=>{
                       const cPassword= e.target.value;
                       setConfirmPassword(cPassword);
                    }} type={'password'} backgroundColor={'white'}  placeholder='Confirm Password'></Input>
                </FormControl>
                <FormControl isRequired>
                <FormLabel  textColor={'white'}>Upload Image</FormLabel>
                  <Input onBlur={(e)=>{
                       const pic= e.target.value;
                       setPic(pic);
                    }}   type={'file'} accept="image/*" onChange={(e)=>
                   
                    uploadImg( e.target.files[0])

                  }></Input>
                </FormControl>
                    <Box  display={'flex'} justifyContent='center'>
                    <Button onClick={handleSubmit} textColor={'#1fa595'} backgroundColor={'white'} type='submit' margin={'20px'}>Sign Up</Button>
                    </Box>
                   
            
   
  </VStack>
            </Box>
        </Container>
    );
};

export default SignUp;