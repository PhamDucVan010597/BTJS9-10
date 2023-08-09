//Mảng quản lý nhân viên
var arrNhanVien = [];

document.querySelector("#btnThemNV").onclick = function () {
  var nhanVien = new NhanVien();
  //DOM tới giao diện
  nhanVien.taiKhoan = document.querySelector("#tknv").value;
  nhanVien.hoTen = document.querySelector("#name").value;
  nhanVien.email = document.querySelector("#email").value;
  nhanVien.matKhau = document.querySelector("#password").value;
  nhanVien.ngayLam = document.querySelector("#datepicker").value;
  nhanVien.luongCoBan = +document.querySelector("#luongCB").value;
  nhanVien.heSoChucVu = +document.querySelector("#chucvu").value;
  nhanVien.gioLam = document.querySelector("#gioLam").value;
  nhanVien.tinhLuong.value = tinhLuong();

  //   Truy xuất thẻ option bên trong select
  var slChucVu = document.querySelector("#chucvu");
  nhanVien.chucVu = slChucVu[slChucVu.selectedIndex].innerHTML;

  //Thêm nhân viên vào mảng
  arrNhanVien.push(nhanVien);
  renderTableNhanVien(arrNhanVien);
  saveStorage(arrNhanVien);
};

//Tạo hàm chứa các tham số  arrNhanVien để đưa ra giao diện
function renderTableNhanVien(arrNV) {
  var outputHTML = "";
  for (var i = 0; i < arrNV.length; i++) {
    var nhanVien = arrNV[i];

    outputHTML += `
        <tr>
        <td>${nhanVien.taiKhoan} </td>
        <td>${nhanVien.hoTen} </td>
        <td>${nhanVien.email} </td>
        <td>${nhanVien.ngayLam} </td>
        <td>${nhanVien.chucVu} </td>
        <td>${nhanVien.tinhLuong()} </td>
        <td>${nhanVien.xepLoai()}</td>
        <button class="btn btn-outline-danger" onclick="XoaNhanVien('${i}')" >Xóa</button>
        <button class="btn btn-outline-primary" onclick="suaNhanVien('${i}')" data-toggle="modal"
        data-target="#myModal" >Sửa</button>
        </tr>
        `;
  }
  document.querySelector("#tableDanhSach").innerHTML = outputHTML;
}

//Tạo hàm xóa
function XoaNhanVien(indexDel) {
  arrNhanVien.splice(indexDel, 1);
  renderTableNhanVien(arrNhanVien);
}

//Tạo hàm Sửa
function suaNhanVien(indexEdit) {
  var nhanVienSua = arrNhanVien[indexEdit];
  document.querySelector("#tknv").value = nhanVienSua.taiKhoan;
  document.querySelector("#name").value = nhanVienSua.hoTen;
  document.querySelector("#email").value = nhanVienSua.email;
  document.querySelector("#password").value = nhanVienSua.matKhau;
  document.querySelector("#datepicker").value = nhanVienSua.ngayLam;
  document.querySelector("#luongCB").value = nhanVienSua.luongCoBan;
  document.querySelector("#chucvu").value = nhanVienSua.chucVu;
  document.querySelector("#gioLam").value = nhanVienSua.gioLam;
}

function saveStorage() {
  var strArrNhanVien = JSON.stringify(arrNhanVien);
  localStorage.setItem("arrNhanVien", strArrNhanVien);
}
//Lấy dữ liệu từ localStorage
function getStorage() {
  if (localStorage.getItem("arrNhanVien")) {
    var stringResult = localStorage.getItem("arrNhanVien");
    arrNhanVien = JSON.parse(stringResult);
  }
}

window.onload = function () {
  getStorage();
  renderTableNhanVien[arrNhanVien];
};
