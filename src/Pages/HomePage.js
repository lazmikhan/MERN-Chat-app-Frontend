import { Box, Container, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';
import Login from '../components/Authentication/Login';
import SignUp from '../components/Authentication/SignUp';

const HomePage = () => {
    return (
        <Container maxW='xl' centerContent>
<Box display='flex'  justifyContent='center'
border='1px' bg='#1fa595' w={'100%'} p='1'
borderRadius={'lg'} borderWidth='1px' textColor={'white'} textShadow=' -1px -1px 0 #44b028, 1px -1px 0 #44b028, -1px 1px 0 #44b028, 1px 1px 0 #44b028;'
>
    <Text  fontSize={'4xl'} fontFamily='Lobster'>
        Chatter Box
    </Text>
</Box >
<Box border='1px' bg='#1fa595' w={'100%'} p='1'
borderRadius={'lg'} borderWidth='1px'>
<Tabs variant='soft-rounded' colorScheme='green' textColor={'white'}>
  <TabList marginBottom={'1px'}>
    <Tab width={'50%'} >Login</Tab>
    <Tab width={'50%'}>Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Login></Login>
    </TabPanel>
    <TabPanel>
     <SignUp></SignUp>
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
        </Container>
    );
};

export default HomePage;