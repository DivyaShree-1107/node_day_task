function main(user){
switch (user) {
  case (user.match(/Divya/) || {}).input:
    console.log("Divya is logged in");
    break;
  case (user.match(/Deepa/) || {}).input:
    console.log("Deepa is logged in");       
    break;
  case (user.match(/Dikshith/) || {}).input:
    console.log("Dikshith is logged in");       
    break;
  case (user.match(/Trishika/) || {}).input:
    console.log("Trishika is logged in");       
    break;
  default:
    console.log("No such user found");
    break;
}
}
user = 'Kavya';
main(user);