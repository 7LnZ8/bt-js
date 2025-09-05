// Hàm tạo đối tượng nhân viên
function NhanVien(
  taiKhoan,
  hoTen,
  email,
  matKhau,
  ngayLam,
  luongCB,
  chucVu,
  gioLam
) {
  this.taiKhoan = taiKhoan;
  this.hoTen = hoTen;
  this.email = email;
  this.matKhau = matKhau;
  this.ngayLam = ngayLam;
  this.luongCB = luongCB;
  this.chucVu = chucVu;
  this.gioLam = gioLam;

  // Phương thức tính tổng lương
  this.tinhTongLuong = function () {
    let heSo = 1;
    if (this.chucVu === "Giám đốc") {
      heSo = 3;
    } else if (this.chucVu === "Trưởng phòng") {
      heSo = 2;
    } else if (this.chucVu === "Nhân viên") {
      heSo = 1;
    }
    return this.luongCB * heSo;
  };

  // Phương thức xác định loại nhân viên dựa trên giờ làm
  this.xacDinhLoaiNV = function () {
    if (this.gioLam >= 192) {
      return "xuất sắc";
    } else if (this.gioLam >= 176) {
      return "giỏi";
    } else if (this.gioLam >= 160) {
      return "khá";
    } else {
      return "trung bình";
    }
  };
}

// Hàm lấy dữ liệu từ form và tạo đối tượng nhân viên
function taoNhanVien() {
  const taiKhoan = document.getElementById("tknv").value.trim();
  const hoTen = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const matKhau = document.getElementById("password").value.trim();
  const ngayLam = document.getElementById("datepicker").value.trim();
  const luongCB = parseFloat(document.getElementById("luongCB").value.trim());
  const chucVu = document.getElementById("chucvu").value;
  const gioLam = parseFloat(document.getElementById("gioLam").value.trim());

  const nhanVien = new NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCB,
    chucVu,
    gioLam
  );

  // Tính tổng lương và loại nhân viên
  nhanVien.tongLuong = nhanVien.tinhTongLuong();
  nhanVien.loaiNhanVien = nhanVien.xacDinhLoaiNV();

  return nhanVien;
}

// Ví dụ sử dụng khi nhấn nút "Thêm người dùng"
document.getElementById("btnThemNV").addEventListener("click", function () {
  const nv = taoNhanVien();
  console.log(nv);
});
// Mảng lưu danh sách nhân viên
const danhSachNhanVien = [];

// Hàm render danh sách nhân viên ra bảng
function renderTable() {
  const tbody = document.getElementById("tableDanhSach");
  tbody.innerHTML = ""; // Xóa nội dung cũ

  danhSachNhanVien.forEach((nv, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${nv.loaiNhanVien}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="xoaNhanVien(${index})">Xóa</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
}

// Hàm thêm nhân viên mới và cập nhật bảng
document.getElementById("btnThemNV").addEventListener("click", function () {
  const nv = taoNhanVien();

  // Thêm nhân viên vào mảng
  danhSachNhanVien.push(nv);

  // Hiển thị lại bảng
  renderTable();

  // Có thể reset form hoặc đóng modal ở đây nếu cần
});

// Ví dụ hàm xóa nhân viên theo index
function xoaNhanVien(index) {
  danhSachNhanVien.splice(index, 1);
  renderTable();
}
function phanloai() {
  let xeploai = document.getElementById("searchName").value;

  let seach = danhSachNhanVien.filter((item) => {
    return item.xacDinhLoaiNV() === xeploai;
  });
  console.log("🚀 ~ phanloai ~ danhSachNhanVien:", danhSachNhanVien);
  let tbody = document.getElementById("tableDanhSach");
  tbody.innerHTML = ""; // Xóa nội dung cũ

  seach.forEach((nv, index) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${nv.loaiNhanVien}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="xoaNhanVien(${index})">Xóa</button>
      </td>
    `;

    tbody.appendChild(tr);
  });
  if (xeploai === "") {
    let tbody = document.getElementById("tableDanhSach");
    tbody.innerHTML = ""; // Xóa nội dung cũ

    danhSachNhanVien.forEach((nv, index) => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
      <td>${nv.taiKhoan}</td>
      <td>${nv.hoTen}</td>
      <td>${nv.email}</td>
      <td>${nv.ngayLam}</td>
      <td>${nv.chucVu}</td>
      <td>${nv.tongLuong.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      })}</td>
      <td>${nv.loaiNhanVien}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="xoaNhanVien(${index})">Xóa</button>
      </td>
    `;

      tbody.appendChild(tr);
    });
  }
}
