import moment from 'moment';

export const DateTime = unixtime => {
  const date = moment(unixtime).format('DD-MM-YYYY');
  return date;
};
