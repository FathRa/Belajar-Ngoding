let arrPeran = ["Ksatria", "Tabib", "Penyihir"];

const Proxytia = (nama, peran) => {
  if (nama == " " || nama == "") {
    return "Nama wajib diisi";
  } else if (peran == " " || peran == "") {
    return "Pilih peranmu untuk memulai game !";
  }

  if (!arrPeran.includes(peran)) {
    return "Peran tidak ada";
  } else if (arrPeran.includes(peran) && peran == "Ksatria") {
    return `Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu !`;
  } else if (arrPeran.includes(peran) && peran == "Tabib") {
    return `Halo ${peran} ${nama}, kamu dapat membantu teman mu yang terluka !`;
  } else if (arrPeran.includes(peran) && peran == "Penyihir") {
    return `Halo ${peran} ${nama}, kamu dapat menciptakan keajaiban untuk membantu kemenangan !`;
  }
};

console.log(Proxytia(" ", "Ksatria"));
console.log(Proxytia("Udin", " "));
console.log(Proxytia("Udin", "Penjajah"));
console.log(Proxytia("Udin", "Ksatria"));
console.log(Proxytia("Ujang", "Tabib"));
console.log(Proxytia("Asep", "Penyihir"));
