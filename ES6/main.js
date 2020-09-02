// Ambil element
// const user_place = document.getElementById("user");
// const cart_items = document.getElementById("cart");
const skills_holder = document.getElementById("skills");

// ES5
// USER
// const user_logged = "Rizka";
// user_place.innerHTML = "Hi," + user_logged;

// var Myname = "Rizka Rachmawati";
// Myname = "Lalu Irfi Andika Putra";
// console.log(Myname);

// var Myname = ["BMW", "Mazda", "Toyota"];
// for (var i = 0; i < Myname.length; i++) {
//     console.log(Myname[i]);
// }
// console.log(Myname); // Masih bisa di jalankan jika menggunakan var

// objek literal (CART)
// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category,
//     };
// }
// var getProduct = addProduct("Iphone 11", "Gadget");
// console.log(getProduct);

// ES6
// USER
// const user_logged = "Rizka";
// user_place.innerHTML = `Hi ${user_logged}`;

// const apa = "Rizka Rachmawati";
// console.log(apa);

// const apa = ["BMW", "Mazda", "Toyota"];
// for (let i = 0; i < apa.length; i++) {
//     console.log(apa[i]);
// }
// console.log(apa); // tidak bisa berjalan jika menggunakan let

// objek literal (CART)
// function addProduct(name, category) {
//     return {
//         name,
//         category,
//     };
// }
// var getProduct = addProduct("Iphone 11", "Gadget");
// cart_items.innerHTML = getProduct.name;

// ARRAY (SKILLS)
const yourSkills = ["web develoment", "Editing"];

// tambahkan item kepada array
yourSkills.push("Desainer");
// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// menggunakan DOM HTML untuk array
var parent = "<ul>";

yourSkills.forEach((skill) => {
    parent += "<li>" + skill + "</li>";
    console.log(`${skill}`);
});
parent += "</ul>";
skills_holder.innerHTML = parent;