chieuCao = 170;

if(chieuCao > 100 && chieuCao < 200){
    canNangLyTuong = (chieuCao%100)*9/10;
    canNangToiDa = chieuCao%100;
    canNangToiThieu = (chieuCao%100)*8/10;

    console.log("Cân nặng lý tưởng, chiều cao tối đa, tối thiểu của bạn lần lượt là: ",canNangLyTuong,canNangToiDa,canNangToiThieu);
}
else{
    console.log("Chieu cao bạn nhập không hợp lệ !!!");
}


