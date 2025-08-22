let array = [];
let integerArray = [];

document.getElementById('taskSelector').addEventListener('change', function() {
    const additionalInputsDiv = document.getElementById('additionalInputs');
    additionalInputsDiv.innerHTML = '';
    if (this.value === '6') {
        additionalInputsDiv.innerHTML = `
            <p>Nhập 2 vị trí (cách nhau bởi dấu phẩy):</p>
            <input type="text" id="swapPositions" placeholder="Ví dụ: 0, 1">
        `;
    } else if (this.value === '9') {
        additionalInputsDiv.innerHTML = `
            <p>Nhập mảng số thực mới (cách nhau bởi dấu phẩy):</p>
            <input type="text" id="realArrayInput" placeholder="Ví dụ: 1.5, 2, -3.14, 4">
        `;
    }
});

function saveArray() {
    const input = document.getElementById('integerInput').value;
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
    if (numbers.length > 0) {
        integerArray = numbers;
        document.getElementById('result').innerText = `Mảng đã lưu: [${integerArray.join(', ')}]`;
    } else {
        document.getElementById('result').innerText = "Vui lòng nhập các số nguyên hợp lệ.";
    }
}

function clearArray() {
    integerArray = [];
    document.getElementById('integerInput').value = '';
    document.getElementById('result').innerText = 'Mảng đã được xóa.';
}

function runTask() {
    const selector = document.getElementById('taskSelector');
    const task = selector.value;
    let resultText = '';

    if (integerArray.length === 0 && task !== '9') {
        document.getElementById('result').innerText = "Vui lòng lưu mảng trước khi thực thi.";
        return;
    }

    switch (task) {
        case '1':
            resultText = `Tổng các số dương: ${sumPositiveNumbers()}`;
            break;
        case '2':
            resultText = `Số lượng số dương: ${countPositiveNumbers()}`;
            break;
        case '3':
            resultText = `Số nhỏ nhất: ${findMinNumber()}`;
            break;
        case '4':
            resultText = `Số dương nhỏ nhất: ${findMinPositiveNumber()}`;
            break;
        case '5':
            resultText = `Số chẵn cuối cùng: ${findLastEvenNumber()}`;
            break;
        case '6':
            resultText = swapValues();
            break;
        case '7':
            resultText = `Mảng sau khi sắp xếp: [${sortAscending()}]`;
            break;
        case '8':
            resultText = `Số nguyên tố đầu tiên: ${findFirstPrime()}`;
            break;
        case '9':
            resultText = `Số lượng số nguyên: ${countIntegersInRealArray()}`;
            break;
        case '10':
            resultText = comparePositiveNegativeCount();
            break;
        default:
            resultText = 'Vui lòng chọn một chức năng.';
    }
    document.getElementById('result').innerText = resultText;
}

// 1. Tổng các số dương
function sumPositiveNumbers() {
    return integerArray.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}

// 2. Đếm số dương
function countPositiveNumbers() {
    return integerArray.filter(num => num > 0).length;
}

// 3. Tìm số nhỏ nhất
function findMinNumber() {
    if (integerArray.length === 0) return 'Mảng rỗng';
    return Math.min(...integerArray);
}

// 4. Tìm số dương nhỏ nhất
function findMinPositiveNumber() {
    const positives = integerArray.filter(num => num > 0);
    if (positives.length === 0) return 'Không có số dương';
    return Math.min(...positives);
}

// 5. Tìm số chẵn cuối cùng
function findLastEvenNumber() {
    const evens = integerArray.filter(num => num % 2 === 0);
    return evens.length > 0 ? evens[evens.length - 1] : -1;
}

// 6. Đổi chỗ 2 giá trị
function swapValues() {
    const positions = document.getElementById('swapPositions').value.split(',').map(pos => parseInt(pos.trim()));
    if (positions.length !== 2 || isNaN(positions[0]) || isNaN(positions[1])) {
        return "Vui lòng nhập 2 vị trí hợp lệ.";
    }
    const [pos1, pos2] = positions;
    if (pos1 < 0 || pos1 >= integerArray.length || pos2 < 0 || pos2 >= integerArray.length) {
        return "Vị trí không hợp lệ.";
    }
    [integerArray[pos1], integerArray[pos2]] = [integerArray[pos2], integerArray[pos1]];
    return `Mảng sau khi hoán đổi: [${integerArray.join(', ')}]`;
}

// 7. Sắp xếp tăng dần
function sortAscending() {
    return integerArray.sort((a, b) => a - b);
}

// 8. Tìm số nguyên tố đầu tiên
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    const firstPrime = integerArray.find(isPrime);
    return firstPrime !== undefined ? firstPrime : -1;
}

// 9. Đếm số nguyên trong mảng số thực
function countIntegersInRealArray() {
    const input = document.getElementById('realArrayInput').value;
    const realNumbers = input.split(',').map(num => parseFloat(num.trim()));
    const integers = realNumbers.filter(num => Number.isInteger(num));
    return integers.length;
}

// 10. So sánh số lượng số âm và số dương
function comparePositiveNegativeCount() {
    const positiveCount = integerArray.filter(num => num > 0).length;
    const negativeCount = integerArray.filter(num => num < 0).length;
    
    if (positiveCount > negativeCount) {
        return `Số lượng số dương nhiều hơn số âm (${positiveCount} > ${negativeCount})`;
    } else if (negativeCount > positiveCount) {
        return `Số lượng số âm nhiều hơn số dương (${negativeCount} > ${positiveCount})`;
    } else {
        return `Số lượng số dương và số âm bằng nhau (${positiveCount} = ${negativeCount})`;
    }
}