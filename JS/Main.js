console.log("Hi apa kabar!");

var nama = prompt("Masukan Nama:");
alert(nama);

var tes = confirm("yakin mau lihat ??");
if (tes === true) {
  alert("Welcome");
} else {
  alert("yahhhh");
}

var tombolMenu = document.getElementsByClassName("tombol-menu")[0];
var menu = document.getElementsByClassName("menu")[0];

tombolMenu.onclick = function () {
  menu.classList.toggle("active");
};

menu.onclick = function () {
  menu.classList.toggle("active");
};
