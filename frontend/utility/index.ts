export const getLimitedString = (str: string, length: number): string => {
  return str.length > length ? `${str.slice(0, length)}...` : str;
};
