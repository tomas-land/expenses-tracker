export function getSortedMonths(data) {
    const allMonths = new Set();

    data?.forEach(item => {
      for (const month in item.monthlyTotal) {
        if (item.monthlyTotal.hasOwnProperty(month)) {
          allMonths.add(month);
        }
      }
    });

    return [...allMonths];
  }