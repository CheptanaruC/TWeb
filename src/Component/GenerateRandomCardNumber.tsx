export const generateRandomCardNumber = () => {
    let cardNumber = '';
    for (let i = 0; i < 16; i++) {
      cardNumber += Math.floor(Math.random() * 10);
      if ((i + 1) % 4 === 0 && i !== 15) {
        cardNumber += ' ';
      }
    }
    return cardNumber;
  };
  
  export const generateRandomExpirationDate = () => {
    let expirationDate = '';
    expirationDate += Math.floor(Math.random() * 2);
    if (expirationDate === '1') expirationDate += Math.floor(Math.random() * 2);
    else expirationDate += Math.floor(Math.random() * 9) + 1;
    expirationDate += '/';
    expirationDate += Math.floor(Math.random() * 10);
    expirationDate += Math.floor(Math.random() * 10);
    return expirationDate;
  };
  
  export const generateRandomCVV = () => {
    let cvvNumber = 0;
    let cvv = '';
    cvvNumber += Math.floor(Math.random() * 1000);
    cvv += cvvNumber;
    if (cvvNumber < 100 && cvvNumber > 9) cvv += '0';
    else if (cvvNumber < 9) cvv += '00';
    return cvv;
  };
  
  export const cardholderNames = [
    'Ion Petrov',
    'Vasile Pupkin',
    'Aliona Popov',
    'Adrian Marchitan',
  ];