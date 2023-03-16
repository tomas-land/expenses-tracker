"use client"

//react
import Link from 'next/link';
//Internal Lib
import { useExpensesSWR } from '@lib/hooks/useSWRrequest';
//Icons
import { IoMdStats, IoMdAdd } from 'react-icons/io';
//Styles
import s from '@styles/Components/_BalanceDisplay.module.scss'


const BalanceDisplay = () => {
  const { expenses, mutate, error, isLoading }: any = useExpensesSWR();

  const totalAmountExpenses = expenses?.map((item: any) => item.amount).reduce((prev: number, curr: number) => prev + curr, 0);

  return (
    <>
      <div className={s.display}>
        <div className={s.btn_wrapper}>
          <Link href={'/statistics'}><IoMdStats fill='white' size='1.5rem' /></Link>
          <Link href={'/add-expense'}><IoMdAdd fill='white' size='1.8rem' /></Link>
        </div>
        <div className={s.balance_wrapper}>
          <h4>MANO IŠLAIDOS</h4>
          <div className={s.balance}>
            <h3>&euro;</h3>
            <h1>{totalAmountExpenses}</h1>
          </div>
        </div>
      </div>
    </>

  )
}

export default BalanceDisplay


    //MATERIAL UI
    // <Paper elevation={10} sx={{
    //   color: '#4158D0',
    //   backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)',
    //   pt: '1rem',
    //   borderBottomRightRadius: '1rem',
    //   borderBottomLeftRadius: '1rem',
    //   borderTopLeftRadius: '0',
    //   borderTopRightRadius: '0',

    // }}>
    //   <Box sx={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', paddingInline: '1rem', paddingBottom: '0.5rem' }}>
    //     <IconButton aria-label="addicon" sx={{ color: 'white' }}>
    //       <Link href={'/'}><IoMdStats fill='white' size='1.5rem' />
    //       </Link>
    //     </IconButton>
    //     <IconButton aria-label="addicon" sx={{ color: 'white' }}>
    //       <Link href={'/'}><IoMdAdd fill='white' size='1.8rem' /></Link>
    //     </IconButton>
    //   </Box>
    //   <Box padding={1} >
    //     <Typography variant='h6' align='center' sx={{ color: 'textColorGray.main', fontWeight: '600', letterSpacing: '0.1rem' }}>MANO IŠLAIDOS</Typography>
    //     <Box pb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', gap: '0.5rem' }}>
    //       <Typography variant='h5' sx={{ color: 'textColor.main' }}>&euro;</Typography>
    //       <Typography variant='h3' align='center' fontFamily={"Raleway"} sx={{ color: 'textColor.main', fontWeight: '600', letterSpacing: '0.2rem' }}>3390</Typography>
    //     </Box>
    //   </Box>
    // </Paper >