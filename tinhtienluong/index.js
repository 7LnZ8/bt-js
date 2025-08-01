let tinhLuong = function () {
  let luongNgay = document.querySelector("#luong-ngay").value * 1;

  let soNgayLam = document.querySelector("#so-ngay-lam").value * 1;

  let tongLuong = luongNgay * soNgayLam;

  document.querySelector("#ket-qua").innerText = `Lương cho ${soNgayLam} ngày : ${tongLuong}`;
};
