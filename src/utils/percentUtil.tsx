export const percentage = (positive: number, negative: number) => {
  const total = positive + negative;
  const totalPositive = Math.round((positive * 100) / total);
  const totalNegative = Math.round(100 - totalPositive);
  return { positive: totalPositive, negative: totalNegative };
};
