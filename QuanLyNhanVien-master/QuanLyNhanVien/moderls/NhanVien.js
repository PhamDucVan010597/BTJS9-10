function NhanVien() {
  this.taiKhoan = "";
  this.hoTen = "";
  this.email = "";
  this.matKhau = "";
  this.ngayLam = "";
  this.chucVu = "";
  this.gioLam = "";
  this.loaiNhanVien = "";
  this.luongCoBan = "";
  this.heSoChucVu = 1;
  this.tinhLuong = function () {
    var tongLuong = this.luongCoBan * this.heSoChucVu;
    return tongLuong.toLocaleString();
  };
  this.xepLoai = function () {
    var outputXepLoai = "";
    if (this.gioLam >= 192) {
      outputXepLoai = "Nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      outputXepLoai = "Nhân viên Giỏi";
    } else if (this.gioLam >= 160) {
      outputXepLoai = "Nhân viên khá";
    } else {
      outputXepLoai = "trung bình";
    }
    return outputXepLoai;
  };
}
