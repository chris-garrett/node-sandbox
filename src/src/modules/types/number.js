import Humanize from 'humanize-plus';

export const parseMoney = (value) => {
  return Number(`${value}`.replace(/[^0-9.-]+/g,""));
};

export const formatMoney = (text) => {
  if (text === null || text === undefined) return null;
  return '$' + Humanize.formatNumber(text,2);
};
