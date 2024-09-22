import { useState } from 'react';
import Head from 'next/head'

import Signup from '../Components/Signup';

export default function Login() {



  return (
    <>
      <Signup />
      <Head>
        <link rel="shortcut icon" href="./SignUp/cadastro.png" />
        <title>Cadastro</title>
      </Head>
    
    </>
  );
}
