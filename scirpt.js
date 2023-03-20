const valueluasTanah = document.getElementById("luasTanah");
if (valueluasTanah != null) {
  valueluasTanah.addEventListener("keyup", function (e) {
    valueluasTanah.value = this.value;
  });
}
const valueNjopTanah = document.getElementById("njopTanah");
if (valueNjopTanah != null) {
  valueNjopTanah.addEventListener("keyup", function (e) {
    valueNjopTanah.value = this.value;
  });
}
const valueluasBangunan = document.getElementById("luasBangunan");
if (valueluasBangunan != null) {
  valueluasBangunan.addEventListener("keyup", function (e) {
    valueluasBangunan.value = this.value;
  });
}
const valueNjopBangunan = document.getElementById("njopBangunan");
if (valueNjopBangunan != null) {
  valueNjopBangunan.addEventListener("keyup", function (e) {
    valueNjopBangunan.value = this.value;
  });
}
function besaranPBB() {
  let hargaTanah = valueluasTanah.value * valueNjopTanah.value;
  let hargaBangunan = valueluasBangunan.value * valueNjopBangunan.value;
  let PBB =
    ((((hargaTanah + hargaBangunan - 12000000) * 20) / 100) * 5) / 100 - 15000;
  document.getElementById("hasil").innerHTML = PBB;
}
