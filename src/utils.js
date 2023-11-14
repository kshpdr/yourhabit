export const calculateDayDifference = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    const differenceInTime = today.getTime() - start.getTime();
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
};