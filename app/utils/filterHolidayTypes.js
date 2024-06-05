import React from 'react'

export const filterHolidaysByType = (data, type) => {
  return data.filter((item) => {
    const itemType = Array.isArray(item.type) ? item.type : [item.type];
    return itemType.includes(type);
  });
};