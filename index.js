var Tong = document.getElementById('Tong');
Tong.onclick=function(){
    var luongMotNgay = document.getElementById('luongMotNgay').value*1;
    var soNgayLam = document.getElementById('soNgayLam').value*1;
    var tong = luongMotNgay * soNgayLam ;

    var ketQua = "Kết quả là :" + tong;
    var thongBao = document.getElementById('thongBao');
    thongBao.innerText = ketQua ;
}

// bài 2
var trunBinh = document.getElementById('trungBinh');
trungBinh.onclick= function () {
    var number1 = document.getElementById('number1').value*1;
    var number2 = document.getElementById('number2').value*1;
    var number3 = document.getElementById('number3').value*1;
    var number4 = document.getElementById('number4').value*1;
    var number5 = document.getElementById('number5').value*1;
    var tinhTrungBinh = (number1 + number2 + number3 + number4 + number5) / 5 ;

    var ketQua1 = 'kết quả là :' + tinhTrungBinh;
    var thongBao1 = document.getElementById('thongBao1');
    thongBao1.innerText = ketQua1 ;

}

// bai 3
var quyDoi =document.getElementById('quyDoi');
quyDoi.onclick = function(){
    var usd = document.getElementById('usd').value*1;
    var quyDoiTien = usd * 23.500;
    
    var ketQua2 = 'kết quả là :'+ quyDoiTien;
    var thongBao2 = document.getElementById('thongBao2');
    thongBao2.innerText=ketQua2 ;
}

// bai4
var Tinh = document.getElementById('Tinh');
Tinh.onclick = function(){
    var chieuDai=document.getElementById('chieuDai').value*1;
    var chieuRong =document.getElementById('chieuRong').value*1;

    var dienTich = chieuDai * chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    var ketQua3 = 'diện tích là:' + dienTich;
    var ketQua4 = 'chu vi là:' + chuVi;
    var thongBao3 = document.getElementById('thongBao3');
    thongBao3.innerText= ketQua3+ ';' + ketQua4 ;
}

// bai 5
var tinhTong=document.getElementById('tinhTong');
tinhTong.onclick=function(){
    var ChuSo=document.getElementById('ChuSo').value*1;
    var hangChuc =Math.floor(ChuSo%10);
    var DonVi =Math.floor(ChuSo/10);
    var tinhTong= hangChuc + DonVi; 

    var ketQua5="kết quả là:" + tinhTong;
    var thongBao4 =document.getElementById('thongBao4');
    thongBao4.innerText=ketQua5;
}