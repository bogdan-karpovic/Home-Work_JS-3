// 1
 const userAge = prompt('Введіть ваш вік:');
 if ( userAge < 12 ) {
   alert('Ви ще дитина')
} else if (userAge < 18) {
   alert('Ви підліток')
} else if (isNaN(userAge) == true) {
   alert('Введено не число')
} else {
   alert ('Ви є дорослим')
};



// 2

const month = prompt('Введіть місяць року:');

switch (month) {
   case 'Січень':
      console.log('31 день в місяці');
      break;
   case 'Лютий':
      console.log('28 днів в місяці, (29 днів в високосному місяці )');
      break;
   case 'Березень':
      console.log('31 день в місяці');
      break;      
   case 'Квітень':
      console.log('30 днів в місяці');
      break;
   case 'Травень':
      console.log('31 день в місяці');
      break;
   case 'Червень':
      console.log('30 днів в місяці');
      break;
   case 'Липень':
      console.log('31 день в місяці');
      break;
   case 'Серпень':
      console.log('31 день в місяці');
      break;
   case 'Вересень':
      console.log('30 днів в місяці');
      break;
   case 'Жовтень':
      console.log('31 день в місяці');
      break;
   case 'Листопад':
      console.log('30 днів в місяці');
      break;
   case 'Грудень':
      console.log('31 день в місяці');
      break;
default: 
   console.log("Ви ввели не дійсний місяць");      
}
