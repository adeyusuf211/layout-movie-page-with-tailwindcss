/* 
/ MEMBUAT OBJEK PADA JAVASCRIPT
/
/ ============ Deskripsi =========
/ Pada bagian ini akan dijelaskan 
/ contoh - contoh menuliskan objek
/ pada javascript.
/
/ ============ Selesai ===========
*/

// 1. Objek literal
// let Manusia = {
//     nama: "Ade Yusuf",
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, Selamat Makan`);
//     }
// }

// 2. Function declaration
// function Manusia(nama, energi) {
//     let manusia = {};
//     manusia.nama = nama;
//     manusia.energi = energi;

//     manusia.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} Selamat Makan`);
//     }

//     manusia.main = function (jam) {
//         this.energi -= porsi;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }

//     return manusia;
// }

// let manusia1 = Manusia('Ade Yusuf', 20);
// let manusia2 = Manusia('Juned', 10);

// 3. Constructor function
// keyword new
// function Manusia(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} Selamat Makan`);
//     }

//     this.main = function (jam) {
//         this.energi -= porsi;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     }
// }

// let manusia = new Manusia('Ade Yusuf', 20);

// 4. Objek Create
// const manusiaMethod = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama} Selamat Makan`);
//     },

//     main: function (jam) {
//         this.energi -= porsi;
//         console.log(`Halo ${this.nama}, Selamat Bermain`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat Tidur`);
//     }
// }

// function Manusia(nama, energi) {
//     let manusia = Object.create(manusiaMethod);
//     manusia.nama = nama;
//     manusia.energi = energi;

//     return manusia;
// }

// let manusia = Manusia('Ade Yusuf', 20);

// ========= Akhir Penjelasan Cara Membuat Objek 


/* 
/ ========= Prototype =============
/
/
/ ========= Penjelasan =============
/ Ini adalah bagian untuk menuliskan
/ contoh penulisan prototype pada 
/ Javascript
/ ==================================
/
/ ======== Selesai =================
*/

// 1. Prototype
// function Manusia(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Manusia.prototype.makan = function makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat makan`;
// }   

// Manusia.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat bermain`;
// }

// Manusia.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, Selamat tidur`;
// }

// let manusia = new Manusia('Ade Yusuf', 20);

// versi Class 
// class Manusia {
//     constructor(nama, energi) {
//         this.nama   = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, Selamat makan`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, Selamat makan`;
//     }

//     tidur(jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, Selamat makan`;
//     }
// }

// ========== Akhir penjelasan mengenai prototype

/* 
=========== Closure ===================
/
/
/ ========= Penjelasan ================
/ Dibagian ini akan dijelaskan cara
/ membuat clousure dengan javascript
/ =====================================
/
/ ========= Selesai ===================
*/

// let manusia = new Manusia('Ade Yusuf', 10);

// Tentang Closure
// code

// contoh 1:
// function init() {
//     let nama = "Ade Yusuf";
//     function tampilNama() {
//         console.log(nama);
//     }
//     tampilNama();
// }
// init();

// contoh 2:
// function init() {
//     let nama = "Ade Yusuf";
//     function tampilNama() {
//         console.log(nama);
//     }
//     return tampilNama
// }
// let panggilNama = init();
// panggilNama();

// contoh 3:
// function init() {
//     return function(nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Ade Yusuf');

// Function Factories
// function  ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}`);
//     }
// }

// let selamatPagi     = ucapkanSalam('Pagi');
// let selamatSiang    = ucapkanSalam('Siang');
// let selamatMalam    = ucapkanSalam('Malam');

// selamatPagi('Ade Yusuf');
// console.dir(selamatMalam("Ade Yusuf"));

// Private Function
// let add = function() {
//     let counter = 0;
//     return function() {
//         return ++counter;
//     }
// }

// let a = add();

// console.log(a());
// console.log(a());
// console.log(a());

// Tentang Arrow Function
// function biasa (expression)
// let tampilNama = function (nama) {
//     return `Halo ${nama}`;
// }

// console.log(tampilNama('Ade Yusuf'));

// ========== Akhir Penjelasan Closure ======


/*
/ ============== Arrow Function =============
/ 
/
/ ============== Penjelasan ==================
/ Dibagian ini akan diberikan contoh penulisan
/ arrow function pada javascript.
/
/
/ ============= Selesai ======================
*/

// Arrow Function 
// 1 Parameter
// let tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log(tampilNama('Ade Yusuf'));

// 2 Parameter
// let tampilNama = (nama, waktu) => {
//     return `Halo, ${nama}, ${waktu}`;
// }
// console.log(tampilNama('Ade Yusuf', 'Pagi'));

// 3. Implisit Return (jika parameternya hanya 1 dan hanya mengembalikan return saja)
// let tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Ade Yusuf'));

// 4. Tanpa parameter (tanda buka dan tutup kurung harus ditulis)
// let tampilNama = () => `Halo`;
// console.log(tampilNama());

// 5. Contoh yang lebih komplek
// let manusia = ['Ujang', 'Joni Aja', 'Asep Doank'];

// function biasa
// let jumlahHuruf = manusia.map(function(nama){
//     return nama.length;
// });

// arrow function (mengembalikan array)
// let jumlahHuruf = manusia.map(nama => nama.length);

// mengembalikan objek
// let jumlahHuruf = manusia.map(nama => ({ nama: nama, jumlahHuruf: manusia.length }));
// let jumlahHuruf = manusia.map(nama => ({ nama, jumlahHuruf: manusia.length }));
// console.log(jumlahHuruf);

// Filter, Map dan Reduce
// const angka = [1, 2, 3, -4, -6, 0, 8, -9, 5, 7];

// fiter 
// dengan callback function
// const angkaBaru = angka.filter(function(e) {
//     return e >= 3;
// });

// dengan arrow function
// const angkaBaru = angka.filter( e => e >= 3 );

// map
// const angkaBaru = angka.map(e => e * 2);

// reduce
// const angkaBaru = angka.reduce((a, b) =>  a + b);

// Method Chaining (gabungan)
// Cari angka lebih dari 3
// Kali dengan 5
// Jumlahkan
// const hasil = angka.filter(a => a >= 3) // Filter angka lebih dari 3 (3, 5, 7, 8)
// .map(a => a * 5) // Kali angka dengan 5 (15, 25, 35, 40)
// .reduce((a, b) => a + b, 0); // Jumlahkan Hasilnya (115)
// console.log(hasil);


// Latihan higher order function (filter, map and reduce)

// Langkah - langkahnya:
// 1. ambil semua element video
// const videos = Array.from(document.querySelectorAll('[data-duration]'));

// // 2. pilih hanya yang seri "Javascript Lanjutan"
// let jsLanjut = videos.filter(video => video.textContent.includes('JavaScript Lanjutan'))

// // 3. ambil durasi dari setiap video
// .map(item => item.dataset.duration)

// // 4. ubah durasi menjadi int, dan menit jadi detik
// .map(waktu => {
//     const parts = waktu.split(':').map(part => parseFloat(part));
//     return (parts[0] * 60) + parts[1];
// })

// // 5. jumlahkan semua detik
// .reduce((total, detik) => total + detik);

// // 6. ubah format jadi jam, menit, detik
// const jam = Math.floor(jsLanjut / 3600);
// jsLanjut  = jsLanjut - jam * 3600;
// const menit = Math.floor(jsLanjut / 60);
// const detik = jsLanjut - menit * 60;

// // 7. simpan dengan DOM
// const durasi = document.querySelector('.total-durasi');
// durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// const jmlVideo = videos.filter(video => video.textContent.includes('JavaScript Lanjutan')).length;
// const pJmlVideo = document.querySelector('.jumlah-video');
// pJmlVideo.textContent = `${jmlVideo} Video`;


// Destructering Array 
// const angka = [1, 2, 3, 4, 5];

// const [satu, dua, tiga, empat, lima] = angka;
// skipping items
// const [satu, , , , lima] = angka;
// console.log(satu);

// Swap items (tukar items)
// const a = 2;
// const b = 3;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// return value pada function 
// function coba() {
//     return [1, 2];
// }
// const [a, b] = coba();
// console.log(a);

// Rest parameter
// const [a, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(values);

// Destructering objek
// const mhs = {
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor'
// };

// const {nama, alamat} = mhs;

// Assignmet tanpa deklarasi objek
// ({nama, alamat} = {nama: "Ade Yusuf", alamat: "Bogor"});

// Assignment ke variable baru 
// const mhs = {
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor'
// };
// const {nama: n, alamat: a} = mhs;

// Memberikan nilai default
// const mhs = {
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor',
//     email: 'adeyusuf005@gmail.com'
// };

// const {nama, alamat, email = "contoh@gmail.com"} = mhs;

// Rest Parameter
// const mhs = {
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor', 
//     email: 'adeyusuf005@gmail.com'
// };

// const {nama, ...value} = mhs;

// Mengambil field yang objeknya menjadi parameter pada function
// const mhs = {
//     id: 12345,
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor', 
//     email: 'adeyusuf005@gmail.com'
// };

// function getId({ id }) {
//     return id;
// }

// Contoh lain menggunakan function
// function kalkulator(a, b) {
//     return [a + b, a * b, a - b, a / b];
// }

// const [tambah, kali, kurang, bagi] = kalkulator(5, 6);
// console.log(kali);

// function kalkulator(a, b) {
//     return {
//         tambah: a + b,
//         kali: a * b,
//         bagi: a / b,
//         kurang: a - b
//     }
// }

// const {bagi, kali, tambah, kurang} = kalkulator(5, 6);

// const mhs = {
//     nama: 'Ade Yusuf',
//     jurusan: 'Manajemen Informatika', 
//     email: 'adeyusuf005@gmail.com',
//     nilai: {
//         tugas: 90,
//         uts: 80,
//         uas: 95
//     }
// };

// function mahasiswa({nama, jurusan, nilai: {tugas, uas, uts}}) {
//     return `Halo, nama saya ${nama}, saya mengambil jurusan ${jurusan}, dan nilai tugas saya adalah ${tugas}`
// }
// console.log(mahasiswa(mhs));


// Looping di javascript
// array
// const manusia = ['ujang', 'joni', 'asep'];

// dengan for (biasa)
// for(let i = 0; i < manusia.length; i++) {
//     console.log(manusia[i]);
// }

// dengan forEach
// manusia.forEach(m => console.log(m));

// dengan for..of
// for(const m of manusia) {
//     console.log(m);
// }

// String
// const makhluk = 'manusia';
// for(const m of makhluk) {
//     console.log(m);
// }

// const manusia = ['ujang', 'joni', 'asep'];
// manusia.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke: ${i + 1}`);
// });

// for(const [i, m] of manusia.entries()) {
//     console.log(`${m} adalah mahasiswa ke: ${i + 1}`);
// };

// nodeList

// const nama = document.querySelectorAll('li');
// nama.forEach(n => console.log(n.innerHTML));
// for(n of nama) {
//     console.log(n.innerHTML);
// }

// // Arguments
// function jumlahkanAngka() {
//     let jumlah = 0;
//     for(j of arguments) {
//         jumlah += j;
//     }
//     return jumlah;
// }

// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
// const ade = {
//     nama: 'Ade Yusuf',
//     alamat: 'Bogor',
//     email: 'adeyusuf005@gmail.com'
// };

// for(a in ade) {
//     console.log(ade[a]);
// }


// Spread Operator

// untuk menggabungkan 2 array atau lebih
// const manusia = ['ujang', 'joni', 'asep'];
// const alamat  = ['bogor', 'bandung', 'jakarta'];
// const data    = [...manusia, ...alamat];
// console.log(data);

// untuk mengcopy isi array
// const manusia = ['ujang', 'joni', 'asep'];
// const manusia1 = [...manusia];
// manusia1[0] = 'saeful';
// console.log(manusia1);

// const nama  = document.querySelector('.nama');
// const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('');
// nama.innerHTML = huruf;


// Promise
// Objek yang merepresentasikan keberhasilan / kegagalan sebuah event di masa depan
// janji (terpenuhi / ingkar)
// states (fullfiled / rejected / pending)
// callback (resolve / reject /finnaly)
// aksi (then / catch)

// contoh 1
// const ditepati  = true;
// const janji1    = new Promise((resolve, reject) {
//     if(ditepati) {
//         resolve('Janji Ditepati');
//     } else {
//         reject('Ingkar Janji');
//     }
// });

// janji1
//     .then(response => console.log('OK : ' + response))
//     .catch(response => console.log('NOT OK : ' + response));

// contoh 2
// let ditepati    = false;
// const janji2    = new Promise((resolve, reject) => {
//     if(ditepati) {
//         setTimeout(() => {
//             resolve('Ditepati');
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject('Ingkar');
//         }, 3000);
//     }
// });

// console.log('mulai');
// janji2  
//     .then(response => console.log('Ok' + response))
//     .then(response => console.log('Gagal' + response));
// console.log('selesai');


const burger = document.getElementById('burger');
const menu   = document.getElementById('menu');

burger.addEventListener('click',function() {
    menu.classList.toggle('hidden');
});