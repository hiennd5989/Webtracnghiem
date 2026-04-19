const QUESTIONS = [
  {
    q: "Câu 1. Thông tin được chứa ở đâu trong máy tính?",
    options: [
      "Thông tin được chứa trong các tệp. Thư mục có thể chứa tệp và các thư mục con khác.",
      "Thông tin được chứa trực tiếp trong ổ đĩa, không cần tệp hay thư mục.",
      "Thông tin chỉ được chứa trong thư mục gốc và không thể chứa trong tệp."
    ],
    correct: 0
  },
  {
    q: "Câu 2. Trong máy tính có các loại tệp nào?",
    options: [
      "Chỉ có tệp văn bản và tệp hình ảnh.",
      "Văn bản, hình ảnh, âm thanh, video.",
      "Chỉ có tệp âm thanh và tệp video."
    ],
    correct: 1
  },
  {
    q: "Câu 3. Ổ đĩa có phải là thư mục không?",
    options: [
      "Ổ đĩa không phải là thư mục, nó chỉ là nơi chứa các thư mục.",
      "Ổ đĩa là một tệp đặc biệt của máy tính.",
      "Ổ đĩa cũng là một thư mục, còn gọi là thư mục gốc. Nó không là thư mục con của thư mục nào khác."
    ],
    correct: 2
  },
  {
    q: "Câu 4. Cấu trúc cây của một thư mục cho biết điều gì?",
    options: [
      "Cấu trúc cây chỉ cho biết tên của thư mục.",
      "Cấu trúc cây của một thư mục cho biết nó chứa những tệp nào, những thư mục nào.",
      "Cấu trúc cây cho biết dung lượng của ổ đĩa."
    ],
    correct: 1
  },
  {
    q: "Câu 5. Để xem các tệp và thư mục trong máy tính, em sử dụng phần mềm nào?",
    options: [
      "Em sử dụng phần mềm trình chiếu PowerPoint.",
      "Em sử dụng phần mềm soạn thảo văn bản Word.",
      "Em sử dụng phần mềm quản lí tệp."
    ],
    correct: 2
  },
  {
    q: "Câu 6. Trong phần mềm quản lí tệp, em tạo thư mục bằng lệnh nào?",
    options: [
      "Em tạo thư mục bằng lệnh New Folder ở dải lệnh Home.",
      "Em tạo thư mục bằng lệnh New File ở dải lệnh Home.",
      "Em tạo thư mục bằng lệnh Add Folder ở dải lệnh View."
    ],
    correct: 0
  },
  {
    q: "Câu 7. Trong phần mềm quản lí tệp, ở dải lệnh Home, em đổi tên thư mục bằng lệnh nào?",
    options: [
      "Em đổi tên thư mục bằng lệnh Copy.",
      "Em đổi tên thư mục bằng lệnh Rename.",
      "Em đổi tên thư mục bằng lệnh Move."
    ],
    correct: 1
  },
  {
    q: "Câu 8. Trong phần mềm quản lí tệp, ở dải lệnh Home, em xóa thư mục bằng lệnh nào?",
    options: [
      "Em xóa thư mục bằng lệnh Remove.",
      "Em xóa thư mục bằng lệnh Cut.",
      "Em xóa thư mục bằng lệnh Delete."
    ],
    correct: 2
  },
  {
    q: "Câu 9. Khi giao tiếp trên Internet, em không nên tùy tiện cung cấp những thông tin nào của cá nhân và gia đình?",
    options: [
      "Em nên cung cấp đầy đủ mọi thông tin để kết bạn nhanh hơn.",
      "Em không nên cung cấp họ tên, địa chỉ nhà, số điện thoại, tên các thành viên trong gia đình, thẻ thanh toán trực tuyến,...",
      "Em chỉ cần giấu tên trường học, còn lại có thể cung cấp hết."
    ],
    correct: 1
  },
  {
    q: "Câu 10. Khi sử dụng Internet, kẻ xấu có thể lợi dụng thông tin của cá nhân và gia đình em để làm những gì có hại cho em?",
    options: [
      "Kẻ xấu có thể dùng thông tin để gửi thiệp chúc mừng sinh nhật.",
      "Kẻ xấu có thể dùng thông tin để giúp em học tập tốt hơn.",
      "Kẻ xấu có thể lợi dụng thông tin để giả mạo, lừa đảo, bắt cóc,..."
    ],
    correct: 2
  },
  {
    q: "Câu 11. Để kích hoạt phần mềm trình chiếu PowerPoint, em thực hiện thao tác nào?",
    options: [
      "Em nháy đúp chuột vào biểu tượng của phần mềm PowerPoint.",
      "Em nháy chuột phải vào màn hình nền và chọn Refresh.",
      "Em mở Control Panel rồi chọn PowerPoint."
    ],
    correct: 0
  },
  {
    q: "Câu 12. Để tạo mới tệp trình chiếu, em nháy chuột chọn lệnh nào trên bảng chọn File?",
    options: [
      "Em nháy chuột chọn lệnh Save.",
      "Em nháy chuột chọn lệnh Open.",
      "Em nháy chuột chọn lệnh New."
    ],
    correct: 2
  },
  {
    q: "Câu 13. Để mở tệp trình chiếu đã có, trên bảng chọn File, em nháy chọn lệnh nào?",
    options: [
      "Em nháy chọn lệnh Open.",
      "Em nháy chọn lệnh New.",
      "Em nháy chọn lệnh Close."
    ],
    correct: 0
  },
  {
    q: "Câu 14. Các bước để thêm ảnh vào trang trình chiếu mới là gì?",
    options: [
      "B1: Trên dải lệnh Home chọn Copy. B2: Dán ảnh vào trang trình chiếu.",
      "B1: Trên dải lệnh Insert nháy chuột chọn lệnh Pictures. B2: Mở thư mục chứa ảnh, chọn ảnh cần thêm và nháy chuột chọn Insert.",
      "B1: Nháy chuột phải vào trang trình chiếu. B2: Chọn New Slide rồi gõ tên ảnh."
    ],
    correct: 1
  },
  {
    q: "Câu 15. Các bước để tạo bài trình chiếu là gì?",
    options: [
      "B1: Mở trình duyệt web. B2: Gõ địa chỉ trang web. B3: Tải ảnh về máy.",
      "B1: Bật máy in. B2: Nháy chuột vào biểu tượng File. B3: In bài ra giấy.",
      "B1: Kích hoạt phần mềm trình chiếu. B2: Tạo tệp trình chiếu và lưu với tên phù hợp. B3: Lần lượt nhập nội dung và thêm ảnh (nếu cần) cho từng trang trình chiếu."
    ],
    correct: 2
  },
  {
    q: "Câu 16. Lợi thế của việc tìm hiểu thế giới tự nhiên qua công cụ đa phương tiện là gì?",
    options: [
      "Tìm hiểu thế giới tự nhiên qua công cụ đa phương tiện sẽ giúp em quan sát và hiểu biết thêm về thế giới tự nhiên một cách sinh động và trực quan.",
      "Giúp em tiết kiệm tiền mua sách giáo khoa.",
      "Giúp em không cần học bài ở lớp nữa."
    ],
    correct: 0
  }
];

const quizEl = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultEl = document.getElementById("result");

function renderQuiz() {
  quizEl.innerHTML = "";
  QUESTIONS.forEach((item, qIndex) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-${qIndex}`;

    const title = document.createElement("h3");
    title.className = "question-title";
    title.textContent = item.q;
    card.appendChild(title);

    const optList = document.createElement("div");
    optList.className = "options";
    item.options.forEach((optText, oIndex) => {
      const optId = `q${qIndex}-o${oIndex}`;
      const label = document.createElement("label");
      label.className = "option";
      label.setAttribute("for", optId);

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${qIndex}`;
      input.id = optId;
      input.value = String(oIndex);

      const span = document.createElement("span");
      span.className = "option-letter";
      span.textContent = String.fromCharCode(65 + oIndex);

      const text = document.createElement("span");
      text.className = "option-text";
      text.textContent = optText;

      label.appendChild(input);
      label.appendChild(span);
      label.appendChild(text);
      optList.appendChild(label);
    });
    card.appendChild(optList);

    const feedback = document.createElement("p");
    feedback.className = "feedback";
    feedback.id = `feedback-${qIndex}`;
    card.appendChild(feedback);

    quizEl.appendChild(card);
  });
}

function getSelected(qIndex) {
  const selected = document.querySelector(`input[name="question-${qIndex}"]:checked`);
  return selected ? parseInt(selected.value, 10) : null;
}

function handleSubmit() {
  const unanswered = [];
  QUESTIONS.forEach((_, i) => {
    if (getSelected(i) === null) unanswered.push(i);
  });

  if (unanswered.length > 0) {
    const firstUnanswered = document.getElementById(`q-${unanswered[0]}`);
    firstUnanswered.scrollIntoView({ behavior: "smooth", block: "center" });
    alert(`Em còn ${unanswered.length} câu chưa chọn đáp án. Hãy làm đầy đủ trước khi nộp bài nhé!`);
    return;
  }

  let correctCount = 0;
  QUESTIONS.forEach((item, i) => {
    const selected = getSelected(i);
    const card = document.getElementById(`q-${i}`);
    const feedback = document.getElementById(`feedback-${i}`);
    card.classList.remove("correct", "wrong");

    const labels = card.querySelectorAll(".option");
    labels.forEach((label) => {
      label.classList.remove("chosen-correct", "chosen-wrong", "show-correct");
      const input = label.querySelector("input");
      input.disabled = true;
    });

    if (selected === item.correct) {
      correctCount++;
      card.classList.add("correct");
      labels[selected].classList.add("chosen-correct");
      feedback.textContent = "Chính xác!";
    } else {
      card.classList.add("wrong");
      labels[selected].classList.add("chosen-wrong");
      labels[item.correct].classList.add("show-correct");
      feedback.textContent = `Đáp án đúng: ${String.fromCharCode(65 + item.correct)}. ${item.options[item.correct]}`;
    }
  });

  const total = QUESTIONS.length;
  const score = Math.round((correctCount / total) * 100 * 10) / 10;

  resultEl.hidden = false;
  resultEl.innerHTML = `
    <h2>Kết quả bài thi</h2>
    <p class="score">Điểm: <strong>${score}</strong> / 100</p>
    <p>Số câu đúng: <strong>${correctCount}</strong> / ${total}</p>
  `;
  resultEl.classList.remove("good", "ok", "bad");
  if (score >= 80) resultEl.classList.add("good");
  else if (score >= 50) resultEl.classList.add("ok");
  else resultEl.classList.add("bad");

  submitBtn.disabled = true;
  resultEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

function handleReset() {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
    input.disabled = false;
  });
  document.querySelectorAll(".question-card").forEach((card) => {
    card.classList.remove("correct", "wrong");
  });
  document.querySelectorAll(".option").forEach((opt) => {
    opt.classList.remove("chosen-correct", "chosen-wrong", "show-correct");
  });
  document.querySelectorAll(".feedback").forEach((f) => {
    f.textContent = "";
  });
  resultEl.hidden = true;
  resultEl.innerHTML = "";
  submitBtn.disabled = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

renderQuiz();
submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleReset);
