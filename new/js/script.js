// Array gambar latar belakang yang akan digunakan
const backgrounds = [
    'img/hero-bg-pawai.jpg',  // Gambar pertama
    'img/1.jpg',       
    'img/2.jpg',        
    'img/3.jpg',       
    'img/4.jpg',       
    'img/5.jpg',       
    'img/6.jpg'     
];

let currentIndex = 0;  // Indeks gambar saat ini

// Fungsi untuk mengganti gambar latar belakang dengan efek transisi
function changeBackground() {
    // Mendapatkan elemen header
    const header = document.querySelector('header');

    // Menambahkan efek transisi sementara dengan mengubah backgroundImage
    header.style.transition = 'background-image 2s ease-in-out';

    // Mengubah gambar latar belakang pada elemen header
    header.style.backgroundImage = `url(${backgrounds[currentIndex]})`;

    // Mengupdate indeks gambar berikutnya
    currentIndex = (currentIndex + 1) % backgrounds.length;
}

// Menjalankan fungsi `changeBackground` setiap 5 detik
setInterval(changeBackground, 15000); // Ganti gambar setiap 5 detik


// Ambil elemen navbar
const navbar = document.querySelector('.navbar');

// Menambahkan event listener untuk mendeteksi scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {  // Jika scroll lebih dari 50px
        navbar.classList.add('scroll');  // Tambahkan kelas .scroll untuk mengubah opacity
    } else {
        navbar.classList.remove('scroll');  // Hapus kelas .scroll ketika scroll di atas 50px
    }
});
