let sum = function(){
    let sonhapvao = document.querySelector("#number").value*1;
    let sohangchuc = Math.floor(sonhapvao/10);
    let sohangdonvi = sonhapvao % 10;
    let tong = sohangchuc + sohangdonvi;
    document.querySelector("#ketqua").innerHTML = `Tổng hai ký số : ${tong}` 
}