const DateUtil =
{
   isMonthDay: (date?: string | Date) =>
   {
      if (date === undefined)
      {
         date = new Date();
      }
   }
};

export default DateUtil;