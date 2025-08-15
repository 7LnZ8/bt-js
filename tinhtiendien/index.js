function calculateElectricityBill() {
    const name = document.getElementById('name').value;
    const kw = parseFloat(document.getElementById('kw').value);
    let totalBill = 0;
    let remainingKw = kw;
    const resultDiv = document.getElementById('result');

    if (isNaN(kw) || kw < 0) {
        resultDiv.innerHTML = `<p style="color: red;">Vui lòng nhập số Kw hợp lệ.</p>`;
        return;
    }

    if (remainingKw > 0) {
        const tier1Kw = Math.min(remainingKw, 50);
        totalBill += tier1Kw * 500;
        remainingKw -= tier1Kw;
    }

    if (remainingKw > 0) {
        const tier2Kw = Math.min(remainingKw, 50);
        totalBill += tier2Kw * 650;
        remainingKw -= tier2Kw;
    }

    if (remainingKw > 0) {
        const tier3Kw = Math.min(remainingKw, 100);
        totalBill += tier3Kw * 850;
        remainingKw -= tier3Kw;
    }

    if (remainingKw > 0) {
        const tier4Kw = Math.min(remainingKw, 150);
        totalBill += tier4Kw * 1100;
        remainingKw -= tier4Kw;
    }

    if (remainingKw > 0) {
        totalBill += remainingKw * 1300;
    }

    resultDiv.innerHTML = `
        <h3>Kết quả tính toán:</h3>
        <p><strong>Tên khách hàng:</strong> ${name}</p>
        <p><strong>Số Kw tiêu thụ:</strong> ${kw} Kw</p>
        <p><strong>Tổng tiền phải trả:</strong> ${totalBill.toLocaleString('vi-VN')} VNĐ</p>
    `;
}