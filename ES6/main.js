// Ambil element
// const user_place = document.getElementById("user");
// const cart_items = document.getElementById("cart");
// const skills_holder = document.getElementById("skills");
const skills_holder = document.getElementById("Siswa");

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
// const yourSkills = ["web develoment", "Editing"];

// tambahkan item kepada array
// yourSkills.push("Desainer");
/* perulangan dengan foreach */
// yourSkills.forEach((skill) => {
//     console.log(`${skill}`);
// });

// menggunakan DOM HTML untuk array
// var parent = "<ul>";

// yourSkills.forEach((skill) => {
//     parent += "<li>" + skill + "</li>";
//     console.log(`${skill}`);
// });
// parent += "</ul>";
// skills_holder.innerHTML = parent;

// Menggunakan Map
// const printskills = yourSkills.map((skill) => {
//     return skill;
// });
// skills_holder.innerHTML = printskills;

// filter data
// const myPrimarySkills = yourSkills.filter((skill) => {
//     return skill === "web develoment";
// });
// console.log(myPrimarySkills);

// Modul untuk member kelas
class Siswa {
    constructor(username, password, nama_kelas) {
        (this.username = username),
        (this.password = password),
        (this.nama_kelas = nama_kelas);
    }
    gabung() {
        console.log(
            this.username + " Telah bergabung pada kelas " + this.nama_kelas
        );
    }
}
// let tambahSiswa = new Siswa("Rizka Rachmawati", "h", "Web Developer");
// tambahSiswa.gabung();

// inheritance
class Langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }
    gabungPaket() {
        console.log(" Hi " + this.username + " telah berlangganan " + this.paket);
    }
}
let tambahLangganan = new Langganan("Rizka Rachmawati", "Premium");
tambahLangganan.gabungPaket();