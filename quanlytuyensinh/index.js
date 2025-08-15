function calculateResult() {
    // Lấy giá trị từ các ô input
    const benchmark = parseFloat(document.getElementById('benchmark').value);
    const score1 = parseFloat(document.getElementById('score1').value);
    const score2 = parseFloat(document.getElementById('score2').value);
    const score3 = parseFloat(document.getElementById('score3').value);
    const area = document.getElementById('area').value;
    const target = document.getElementById('target').value;

    // Kiểm tra điểm thi có bị điểm liệt (<= 0) không
    if (score1 <= 0 || score2 <= 0 || score3 <= 0) {
        document.getElementById('totalScoreText').innerHTML = `Điểm tổng kết: N/A`;
        document.getElementById('statusText').innerHTML = `<span class="fail">Kết quả: Rớt do có điểm nhỏ hơn hoặc bằng 0</span>`;
        return;
    }

    // Tính điểm ưu tiên khu vực
    let areaPriorityScore = 0;
    switch (area) {
        case 'A':
            areaPriorityScore = 2;
            break;
        case 'B':
            areaPriorityScore = 1;
            break;
        case 'C':
            areaPriorityScore = 0.5;
            break;
        default:
            areaPriorityScore = 0;
            break;
    }

    // Tính điểm ưu tiên đối tượng
    let targetPriorityScore = 0;
    switch (target) {
        case '1':
            targetPriorityScore = 2.5;
            break;
        case '2':
            targetPriorityScore = 1.5;
            break;
        case '3':
            targetPriorityScore = 1;
            break;
        default:
            targetPriorityScore = 0;
            break;
    }

    // Tính tổng điểm ưu tiên
    const priorityScore = areaPriorityScore + targetPriorityScore;

    // Tính tổng điểm cuối cùng
    const totalScore = score1 + score2 + score3 + priorityScore;

    // Hiển thị tổng điểm
    document.getElementById('totalScoreText').innerHTML = `Điểm tổng kết: ${totalScore}`;

    // Kiểm tra và hiển thị kết quả đỗ/trượt
    if (totalScore >= benchmark) {
        document.getElementById('statusText').innerHTML = `<span class="pass">Kết quả: Đậu</span>`;
    } else {
        document.getElementById('statusText').innerHTML = `<span class="fail">Kết quả: Rớt</span>`;
    }
}