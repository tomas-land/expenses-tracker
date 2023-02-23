import dayjs from 'dayjs'
import 'dayjs/locale/lt'

const currentMonthLT = dayjs().locale('lt').format('MMMM')
const previousMonthLT = dayjs().subtract(1, 'month').locale('lt').format('MMMM')
const startOFMonth = dayjs().startOf("month").toISOString();
const startOFPreviousMonth = dayjs().subtract(1, 'month').startOf("month").toISOString();
const endOFPreviousMonth = dayjs().subtract(1, 'month').endOf("month").toISOString()

const formateDate = (date: string) => {
  const formatedDate = dayjs(date).format('YYYY MM-DD')
  return formatedDate
}
const formateHours = (date: string) => {
  const formatedHours = dayjs(date).format('HH:mm')
  return formatedHours
}


export  { currentMonthLT, previousMonthLT, formateDate, formateHours, startOFMonth, startOFPreviousMonth, endOFPreviousMonth }