let ketqua = function () {
    let chieudaihcn = document.querySelector("#chieudai").value*1;
    let chieuronghcn = document.querySelector("#chieurong").value*1;
    let chuvihcn = (chieudaihcn + chieuronghcn) * 2;
    let dientichhcn = chieudaihcn * chieuronghcn;
    document.querySelector("#chuvi").innerHTML = `Chu vi hcn là: ${chuvihcn}`;
    document.querySelector("#dientich").innerHTML = `Diện tích hcn là: ${dientichhcn}`;
}
