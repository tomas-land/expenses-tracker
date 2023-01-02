"use client";

import React from 'react'
import Button from '@mui/material/Button';
import BalanceDisplay from './BalanceDisplay';
import { Container } from '@mui/material';
import ExpensesList from './ExpensesList';

const Home = () => {
  return (
    <>
      <Container maxWidth='sm' >
        <BalanceDisplay />
        <ExpensesList />
      </Container>
    </>
  )
}

export default Home
