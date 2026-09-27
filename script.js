```javascript
// Tính điểm trung bình
function calculateAverage(scores) {
    let sum = 0;

    for (let score of scores) {
        sum += score;
    }

    return sum / scores.length;
}


// Xếp loại học tập
function classify(avg) {
    if (avg >= 8.0) {
        return "Giỏi";
    } else if (avg >= 6.5) {
        return "Khá";
    } else if (avg >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}


// Xử lý khi nhấn nút "Tính kết quả"
document.getElementById("studentForm").addEventListener("submit", function(event) {

    // Không reload trang
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const error = document.getElementById("error");

    // Lấy điểm 5 môn
    const scoreInputs = [
        document.getElementById("score1"),
        document.getElementById("score2"),
        document.getElementById("score3"),
        document.getElementById("score4"),
        document.getElementById("score5")
    ];

    const scores = [];

    // Kiểm tra dữ liệu
    if (name === "") {
        error.textContent = "Vui lòng nhập tên sinh viên!";
        return;
    }

    for (let input of scoreInputs) {

        if (input.value === "") {
            error.textContent = "Vui lòng nhập đầy đủ điểm 5 môn!";
            return;
        }

        const score = Number(input.value);

        if (score < 0 || score > 10) {
            error.textContent = "Điểm phải nằm trong khoảng từ 0 đến 10!";
            return;
        }

        scores.push(score);
    }

    // Xóa thông báo lỗi
    error.textContent = "";

    // Tính điểm trung bình
    const avg = calculateAverage(scores);

    // Xếp loại
    const result = classify(avg);

    // Tên các môn học
    const subjects = [
        "Giải tích 1",
        "Đại số tuyến tính",
        "Xác suất thống kê",
        "Tin học đại cương",
        "Xây dựng ứng dụng Web"
    ];

    // Hiển thị tên sinh viên
    document.getElementById("resultName").textContent = name;

    // Hiển thị bảng điểm
    const table = document.getElementById("scoreTable");
    table.innerHTML = "";

    for (let i = 0; i < scores.length; i++) {

        const row = `
            <tr>
                <td>${i + 1}</td>
                <td>${subjects[i]}</td>
                <td>${scores[i]}</td>
            </tr>
        `;

        table.innerHTML += row;
    }

    // Hiển thị điểm trung bình
    document.getElementById("average").textContent = avg.toFixed(2);

    // Hiển thị xếp loại
    document.getElementById("classification").textContent = result;

    // Hiển thị khu vực kết quả
    document.getElementById("result").classList.remove("hidden");
});
```
