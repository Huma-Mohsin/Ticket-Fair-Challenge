var customer_going_out_of_city = true;
var customer_Is_student = true;
var age = 65;
if (age < 2) {
    console.log("Free Ticket for infants");
}
else if (customer_going_out_of_city && (age >= 2 && age < 5)) {
    console.log("You have to buy tickets at half price of the actual ticket");
}
else if (customer_going_out_of_city && customer_Is_student && (age >= 5 && age < 12)) {
    console.log("50% off on ticket for all students");
}
else if (customer_going_out_of_city && (age >= 5 && age < 65)) {
    console.log("You can buy a full ticket");
}
else if (customer_going_out_of_city || age >= 65) {
    console.log("You can pay half price by showing your NIC if you are a senior citizen");
}
