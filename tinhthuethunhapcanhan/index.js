function calculateTax() {
    
    const fullName = document.getElementById('fullName').value;
    const annualIncome = parseFloat(document.getElementById('annualIncome').value);
    const dependents = parseInt(document.getElementById('dependents').value);

    
    if (!fullName || isNaN(annualIncome) || isNaN(dependents)) {
        document.getElementById('result').innerHTML = '<p style="color: red;">Vui lòng nhập đầy đủ thông tin hợp lệ.</p>';
        return;
    }

    
    const baseDeduction = 4;
    const dependentDeduction = 1.6;

    
    const taxableIncome = annualIncome - baseDeduction - (dependents * dependentDeduction);

    
    let tax = 0;

    
    if (taxableIncome <= 0) {
        tax = 0;
    } else if (taxableIncome <= 60) {
        tax = taxableIncome * 0.05;
    } else if (taxableIncome <= 120) {
        tax = 60 * 0.05 + (taxableIncome - 60) * 0.10;
    } else if (taxableIncome <= 210) {
        tax = 60 * 0.05 + 60 * 0.10 + (taxableIncome - 120) * 0.15;
    } else if (taxableIncome <= 384) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + (taxableIncome - 210) * 0.20;
    } else if (taxableIncome <= 624) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + (taxableIncome - 384) * 0.25;
    } else if (taxableIncome <= 960) {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + (taxableIncome - 624) * 0.30;
    } else {
        tax = 60 * 0.05 + 60 * 0.10 + 90 * 0.15 + 174 * 0.20 + 240 * 0.25 + 336 * 0.30 + (taxableIncome - 960) * 0.35;
    }

  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Kết quả</h3>
        <p><strong>Họ và tên:</strong> ${fullName}</p>
        <p><strong>Tổng thu nhập năm:</strong> ${annualIncome.toLocaleString('vi-VN')} triệu đồng</p>
        <p><strong>Số người phụ thuộc:</strong> ${dependents}</p>
        <p><strong>Thu nhập chịu thuế:</strong> ${taxableIncome > 0 ? taxableIncome.toLocaleString('vi-VN') : 0} triệu đồng</p>
        <p><strong>Thuế thu nhập cá nhân phải nộp:</strong> ${tax.toLocaleString('vi-VN')} triệu đồng</p>
    `;
}