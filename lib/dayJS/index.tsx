import dayjs from 'dayjs'
import 'dayjs/locale/lt'

const currentMonthLT = dayjs().locale('lt').format('MMMM')
const previousMonthLT = dayjs().subtract(1, 'month').locale('lt').format('MMMM')
const startOFMonth = dayjs().startOf("month").toISOString();
const startOFPreviousMonth = dayjs().subtract(1, 'month').startOf("month").toISOString();
const endOFPreviousMonth = dayjs().subtract(1, 'month').endOf("month").toISOString()
const startOFYear = dayjs().startOf('year').format('YYYY-MM');
const startOFYearISO = dayjs().startOf('year').toISOString();
const endOFYear = dayjs().endOf('year').format('YYYY-MM');
const currentMonth = dayjs().format('YYYY-MM');
const endOFcurrentMonthISO = dayjs().endOf('month').toISOString();

const formateDate = (date: string) => {
  const formatedDate = dayjs(date).format('YYYY MM-DD')
  return formatedDate
}
const formateHours = (date: string) => {
  const formatedHours = dayjs(date).format('HH:mm')
  return formatedHours
}
const formateDateToMonthLT = (date: string) => {
  const formatedDate = dayjs(date).locale('lt').format('MMMM');
  return formatedDate;
};
const generateListOfMonths = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push(dayjs().subtract(i, 'month').locale('lt').format('MMMM').charAt(0).toUpperCase() + dayjs().subtract(i, 'month').locale('lt').format('MMMM').slice(1));
  }
  return months;
};
export {endOFcurrentMonthISO,formateDateToMonthLT, generateListOfMonths, startOFYear,startOFYearISO, endOFYear, currentMonth, currentMonthLT, previousMonthLT, formateDate, formateHours, startOFMonth, startOFPreviousMonth, endOFPreviousMonth };