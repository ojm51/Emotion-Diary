const getMonthlyDiaryData = (pivotDate, diaryData) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();

  return diaryData.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

export default getMonthlyDiaryData;
