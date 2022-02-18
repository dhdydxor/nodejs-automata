const DateUtil =
{
   isMonthDay: (date?: string | Date): boolean =>
   {
      if (date === undefined)
      {
         date = new Date();
      }

      return false;
   }
};

export default DateUtil;