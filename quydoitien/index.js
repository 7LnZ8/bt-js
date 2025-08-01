let quydoitien = function () {
    let sotienUSD = document.querySelector("#tienUSD").value * 1;
    const tygia = 23500;
    let ketqua = sotienUSD * tygia;
    document.querySelector("#so-tien").innerHTML = `Số tiền USD đổi được là: ${ketqua}`;
}