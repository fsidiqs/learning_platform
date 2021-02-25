export const renderPrice = (price) => {
   let str = price.toString();
   return str.slice(0, str.length - 2) + '.' + str.slice(str.length - 2);
};
