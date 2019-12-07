
 export const isEmpty = value => {
   let  valueLength = value.length 
   switch(valueLength) { 
    case  0 :
      return `empty${value}`;
     
     default : 
      return "";
     
    } 
  } 
  
export const isNotSimilar = (value, value2) => {
  if( value !== value2) {
    return true;
  }
} 
