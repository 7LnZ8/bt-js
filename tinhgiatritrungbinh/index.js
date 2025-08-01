let tinhgiatritrungbinh = function() {
            // Lấy giá trị từ 5 ô input
            let num1 = parseFloat(document.getElementById('num1').value) || 0;
            let num2 = parseFloat(document.getElementById('num2').value) || 0;
            let num3 = parseFloat(document.getElementById('num3').value) || 0;
            let num4 = parseFloat(document.getElementById('num4').value) || 0;
            let num5 = parseFloat(document.getElementById('num5').value) || 0;

            // Tính tổng của 5 số
            let sum = num1 + num2 + num3 + num4 + num5;

            // Tính giá trị trung bình
            let trungbinh = sum / 5;

            // Hiển thị kết quả ra màn hình
            let ketqua = document.getElementById('giatritrungbinh');
            if (trungbinh != Number) {
                ketqua.textContent = `Giá trị trung bình của 5 số là: ${trungbinh}`;
            } else {
                ketqua.textContent = `Vui lòng nhập đủ 5 số hợp lệ.`;
            }
        }