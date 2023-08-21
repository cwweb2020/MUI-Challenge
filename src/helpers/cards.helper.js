export function countCardTypes(arr) {
    let visa = 0;
    let master = 0;
    let other = 0;
  
    arr.forEach(obj => {
      const firstDigit = obj.card_number.charAt(0);
      if (firstDigit === '4') {
        visa++;
      } else if (firstDigit === '5') {
        master++;
      } else {
        other++;
      }
    });
  
    return [visa, master, other];
  }