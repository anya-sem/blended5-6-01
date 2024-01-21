import { format, formatDistanceToNow } from 'date-fns';

export const formatDataToNow = data => {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
};

export const formatData = data => {
  return format(new Date(data), 'Pp');
};
