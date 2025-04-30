const questions = [
    {
        document: "Tư liệu 1: Sử gia Lê Văn Hưu nói: 'Trưng Trắc, Trưng Nhị là đàn bà, hô một tiếng mà các quận Cửu Chân, Nhật Nam, Hợp Phố cùng 65 thành ở Lĩnh Ngoại đều hưởng ứng...'\n\nTư liệu 2: Bà quê ở huyện Quân An, quận Cửu Chân (Thanh Hoá ngày nay)...",
        question: "Câu 1: Đọc các đoạn tư liệu sau:",
        options: [
            "a) Đoạn tư liệu 2 nhắc đến nhân vật Trưng Trắc.",
            "b) Triệu Thị Trinh lãnh đạo cuộc khởi nghĩa chống triều đại nhà Ngô (Trung Quốc).",
            "c) Các cuộc khởi nghĩa được nhắc đến trong 2 đoạn tư liệu trên đều chống lại ách đô hộ của các triều đại phong kiến phương Bắc, trong thời kì nghìn năm Bắc thuộc.",
            "d) Quy mô cuộc khởi nghĩa của Hai Bà Trưng rất rộng lớn, gồm các quận Cửu Chân, Nhật Nam, Hợp Phố cùng 65 thành ở Lĩnh Ngoại."
        ],
        answers: [false, true, true, true]
    },
    {
        document: "Tư liệu 1: 'Nam đế nhà (Tiền) Lý...'\n\nTư liệu 2: 'Vị thế của người anh hùng Phùng Hưng...'",
        question: "Câu 2: Đọc các đoạn tư liệu sau:",
        options: [
            "a) Đoạn tư liệu 1 nhắc đến nhân vật Lý Bí.",
            "b) Phùng Hưng lãnh đạo cuộc khởi nghĩa chống lại chế độ đô hộ của nhà Lương.",
            "c) Các cuộc khởi nghĩa được nhắc đến trong 2 đoạn tư liệu trên đều giành được thắng lợi, lập được chính quyền tự chủ trong một khoảng thời gian.",
            "d) Cuộc khởi nghĩa của Phùng Hưng thắng lợi đã mở đường cho sự thành lập của nhà Đinh, nhà Lý ở Đại Việt sau này."
        ],
        answers: [true, false, true, false]
    },
    {
        document: "“Cuộc khởi nghĩa Tây Sơn là cuộc nông dân khởi nghĩa duy nhất trong thời phong kiến Việt Nam đã đánh bại kẻ thù trong và ngoài nước (…). Phong trào đã lật đổ nền thống trị của các tập đoàn phong kiến phản động, kết thúc tình trạng phân chia đất nước kéo dài trên hai thế kỉ, đánh tan quân xâm lược Xiêm và Thanh, đặt cơ sở cho công cuộc khôi phục quốc gia thống nhất sau này”.",
        question: "Câu 3: Đọc đoạn tư liệu sau:",
        options: [
            "a) Đoạn trích phản ánh đóng góp của phong trào Tây Sơn đối với lịch sử dân tộc thế kỉ XVIII.",
            "b) Khởi nghĩa Tây Sơn là cuộc khởi nghĩa nông dân duy nhất trong lịch sử phong kiến Việt Nam.",
            "c) Một trong những công lao to lớn của phong trào Tây Sơn là lật đổ các tập đoàn phong kiến phản động, thống nhất hoàn toàn quốc gia.",
            "d) Khởi nghĩa Tây Sơn đã đánh tan quân xâm lược đến từ phương Tây, bảo vệ vững chắc độc lập dân tộc."
        ],
        answers: [true, false, false, false]
    },
    {
        document: "“Vào sáng ngày mồng 5 Tết, tiếng súng nổ liên hồi ở mạn tây nam... Tôn Sĩ Nghị cùng một số tùy tùng chạy qua cầu phao, vượt sông Hồng lên mạn bắc...”",
        question: "Câu 4: Đọc đoạn tư liệu sau:",
        options: [
            "a) Đoạn trích phản ánh thắng lợi của nghĩa quân Lam Sơn trong cuộc kháng chiến chống quân Thanh.",
            "b) Thắng lợi quân sự được nhắc đến trong đoạn trích diễn ra ở Ngọc Hồi, Đống Đa.",
            "c) Tôn Sĩ Nghị là vị tướng chỉ huy của quân ta trong cuộc kháng chiến chống quân Thanh.",
            "d) Đoạn trích chủ yếu nhằm phản ánh tinh thần đoàn kết của quân ta trong các trận quyến chiến chiến lược với kẻ thù."
        ],
        answers: [false, true, false, false]
    },
    {
        document: "“Tiền giấy chẳng qua chỉ là mảnh giấy vuông... để cho tiền của hàng hoá thường vẫn lưu thông tức là sinh ra ứ đọng...”",
        question: "Câu 5: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Tiền giấy “Thông bảo hội” mà Hồ Quý Ly ban hành dễ bị làm giả và khó cất giữ.",
            "B. Việc sử dụng tiền giấy thay tiền đồng không ảnh hưởng đến sự phát triển kinh tế hàng hóa lúc bấy giờ.",
            "C. Đoạn trích phê phán việc thay tiền đồng bằng tiền giấy của Hồ Quý Ly.",
            "D. Một trong những nhược điểm của việc sử dụng tiền giấy lúc bấy giờ là dễ bị làm giả."
        ],
        answers: [true, false, true, true]
    },
    {
        document: "“Năm 1402, định lại các lệ thuế và tô ruộng... Đinh nam không có ruộng và trẻ mồ côi, đàn bà góa, thì dẫu có ruộng cũng thôi không thu”.",
        question: "Câu 6: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Trong cải cách của mình, Hồ Quý Ly đã cho điều chỉnh thế khóa, tăng thuế ruộng, hạ thuế bãi dâu.",
            "B. Nội dung cải cách trên đã hạn chế đáng kể sở hữu ruộng đất quy mô lớn của tư nhân.",
            "C. Thể lệ thu thuế trong cải cách của Hồ Quý Ly được chia theo các hạng đất chứ không cào bằng như trước.",
            "D. Chính sách thu thuế của Hồ Quý Ly thể hiện sự nhân đạo và tiến bộ với một số đối tượng đặc biệt khó khăn trong xã hội."
        ],
        answers: [true, false, true, true]
    },
    {
        document: "“Nay quan gia còn trẻ thơ mà thiên tai xảy ra luôn... thể có phải là chế độ bình trị đâu”.",
        question: "Câu 7: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Đoạn trích phản ánh mối lo ngại của vua Lê Nhân Tông về thực trạng kinh tế, chính trị của quốc gia lúc bấy giờ.",
            "B. Theo vua Lê Nhân Tông, một trong những nguyên nhân khiến triều đình có nhiều biến động là do tình trạng phe cánh, bè phái trong nội bộ hệ thống quan lại.",
            "C. Dưới thời vua Lê Nhân Tông, thiên tai xảy ra liên tiếp là do triều đình không quan tâm đến sản xuất nông nghiệp và đời sống nhân dân.",
            "D. Một bộ phận công thần dưới thời vua Lê Nhân Tông có nhiều biểu hiện của sự lộng quyền."
        ],
        answers: [true, true, false, true]
    },
    {
        document: "“Năm 1471... việc ông trực tiếp quản lí các bộ đã hạn chế sự cồng kềnh, quan liêu của bộ máy hành chính”.",
        question: "Câu 8: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Đoạn trích cung cấp thông tin về một số biện pháp cải cách của vua Lê Thánh Tông trên lĩnh vực chính trị, quân sự.",
            "B. Một số quan lại đương chức nhưng không có học thức đã bị Lê Thánh Tông bãi bỏ, thay thế vào đó là những người được tuyển chọn qua hình thức khoa cử.",
            "C. Năm 1471, vua Lê Thánh Tông đã thực hiện một số biện pháp thể hiện sự trọng dụng đặc biệt đối với bộ phận công thần trong triều.",
            "D. Những cải cách của Lê Thánh Tông năm 1471 đã khiến quyền lực được tập trung cao độ vào trong tay nhà vua."
        ],
        answers: [false, true, false, true]
    },
    {
        document: "“Năm 1477, Lê Thánh Tông ban hành chế độ quân điền... làng xã quản lí ruộng đất cho nhà nước trung ương và nhà vua”.",
        question: "Câu 9: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Đoạn trích cung cấp thông tin về một số biện pháp cải cách của vua Lê Thánh Tông trên lĩnh vực kinh tế.",
            "B. Chế độ quân điền mà vua Lê Thánh Tông ban hành có điểm tích cực là đảm bảo cho người dân có ruộng đất để cày cấy, canh tác.",
            "C. Với chính sách quân điền, nhà nước Lê sơ trở thành thế lực địa chủ tối cao, làng xã biến thành đơn vị thay mặt nhà nước quản lý ruộng đất.",
            "D. Trong bối cảnh lịch sử lúc bấy giờ, chính sách quân điền gây ra nhiều hệ quá tiêu cực hơn là tích cực."
        ],
        answers: [true, true, true, false]
    },
    {
        document: "“Trong thì Nội các ở bên tả... khiến cho ràng rịt nhau mới mong đến được thịnh trị”.",
        question: "Câu 10: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Lời dụ của vua Minh Mạng phản ánh tổ chức bộ máy chính quyền phong kiến ở cấp trung ương và địa phương.",
            "B. Nội các, Cơ mật viện, Lục bộ là những cơ quan chủ chốt trực tiếp giúp việc cho vua và chịu trách nhiệm trước nhà vua.",
            "C. Vua Minh Mạng rất coi trọng việc kiểm tra, giám sát lẫn nhau giữa các cơ quan chủ chốt trong triều.",
            "D. Ngũ quân Đô thống phủ là cơ quan chuyên môn giúp đỡ Lục bộ về tổ chức quân đội, võ bị ở các địa phương."
        ],
        answers: [false, true, true, false]
    },
    {
        document: "“Tháng 9 năm 1832, Minh Mạng lập ra Đô sát viện... Đô sát viện hoạt động độc lập với các Giám sát ngự sử 16 đạo”.",
        question: "Câu 11: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Đô sát viện là một cơ quan chủ chốt của triều đình phong kiến trung ương được vua Minh Mạng thành lập thế kỉ XVIII.",
            "B. Đô sát viện là cơ quan chỉ chịu sự kiểm soát và giám sát duy nhất của nhà vua.",
            "C. Đô sát viện có nhiệm vụ giám sát các cơ quan, quan lại các cấp từ trung ương đến địa phương.",
            "D. Trong việc kiểm tra, giám sát công việc của bộ máy quan lại ở địa phương, Đô sát viện hoạt động độc lập với các Giám sát ngự sử 16 đạo."
        ],
        answers: [false, true, true, false]
    },
    {
        document: "“Hiệu quả cải cách hành chính của Minh Mạng là đã tăng cường được tính thống nhất quốc gia... nhưng không tạo được sức mạnh kinh tế, chính trị…”.",
        question: "Câu 12: Cho đoạn tư liệu sau đây:",
        options: [
            "A. Đoạn tư liệu phản ánh tác động tích cực và hạn chế trong cải cách của vua Minh Mạng trên lĩnh vực hành chính.",
            "B. Một trong những hiệu quả tích cực trong cải cách của vua Minh Mạng là tạo dựng được mối quan hệ tốt đẹp với bên ngoài, củng cố khối đại đoàn kết dân tộc.",
            "C. Cải cách của vua Minh Mạng đã thống nhất các đơn vị hành chính địa phương trong cả nước, thông qua đó hoàn thành thống nhất đất nước về mặt hành chính.",
            "D. Cải cách của vua Minh Mạng đã góp phần ổn định tình hình đất nước nhưng không tạo được động lực thúc đẩy sự phát triển mạnh mẽ của kinh tế, chính trị đất nước."
        ],
        answers: [true, false, true, true]
    },
    {
        document: "“Cuộc cải cách của vua Minh Mạng diễn ra trên nhiều lĩnh vực... Đây là nguồn tài liệu quý giá cho các nhà nghiên cứu hiện nay…”.",
        question: "Câu 13: Cho đoạn tư liệu sau đây:",
        options: [
            "a) Đoạn trích cung cấp thông tin về những dấu ấn cải cách của vua Minh Mạng trên các lĩnh vực chính trị, xã hội, văn hóa.",
            "b) Quốc sử quán được thành lập dưới thời vua Minh Mạng là một cơ quan chuyên làm nhiệm vụ thu thập và biên soạn sách sử.",
            "c) Việc tìm hiểu, nghiên cứu về Việt Nam dưới thời Nguyễn chỉ có thể được thực hiện thông qua nguồn tài liệu mà Quốc sử quán triều Nguyễn ghi chép và để lại.",
            "d) Cuộc cải cách của vua Minh Mạng diễn ra trên nhiều lĩnh vực, nhưng để lại dấu ấn sâu sắc nhất là lĩnh vực văn hóa."
        ],
        answers: [false, true, false, false]
    },
    {
        document: "“Nội các là một cơ yếu, phải đặc cách chọn lấy những bề tôi chầu hầu tùy tùng... đều thuộc tòa Nội các cả”.",
        question: "Câu 14: Cho đoạn tư liệu sau đây:",
        options: [
            "a) Nội các là một trong những cơ quan chủ chốt của triều đình phong kiến trung ương nhà Nguyễn từ thời vua Minh Mạng.",
            "b) Toàn bộ các thành viên của Nội các đều lấy từ các chức quan ở trong Lục bộ.",
            "c) Theo lời dụ của Minh Mạng, một trong những nhiệm vụ của Nội các là giúp vua khởi thảo sắc, chiếu, sớ tấu…",
            "d) Nội các chịu trách nhiệm trực tiếp trước nhà vua, đồng thời chịu sự giám sát của Lục bộ và các cơ quan chuyên môn khác."
        ],
        answers: [true, false, true, false]
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let quizSubmitted = false;

function initQuiz() {
    showQuestion(currentQuestion);
}

function showQuestion(index) {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[index];

    let html = `
        <div class="question-text">${question.question}</div>
        <div class="document-text">${question.document}</div>
        <div class="options">
    `;

    question.options.forEach((option, i) => {
        const isChecked = userAnswers[index]?.[i] || false;

        html += `
            <div class="option">
                <input type="checkbox" id="option-${i}" data-index="${i}" ${isChecked ? 'checked' : ''} ${quizSubmitted ? 'disabled' : ''}>
                <label for="option-${i}">${option}</label>
            </div>
        `;
    });

    html += `</div>`;

    if (quizSubmitted) {
        let resultHtml = '';
        let allCorrect = true;

        for (let i = 0; i < question.options.length; i++) {
            const userAnswer = userAnswers[index]?.[i] || false;
            const isCorrect = userAnswer === question.answers[i];

            if (!isCorrect) allCorrect = false;

            resultHtml += `
                <div class="option-result">
                    Câu ${String.fromCharCode(97 + i)}: 
                    <span class="${isCorrect ? 'correct' : 'incorrect'}">
                        ${isCorrect ? 'Đúng' : 'Sai'} (${question.answers[i] ? 'Đ' : 'S'})
                    </span>
                </div>
            `;
        }

        html += `
            <div class="result ${allCorrect ? 'correct' : 'incorrect'}">
                ${allCorrect ? 'Chính xác!' : 'Chưa chính xác!'}
            </div>
            <div class="answer-details">
                ${resultHtml}
            </div>
        `;
    }

    quizContainer.innerHTML = html;

    if (!quizSubmitted) {
        document.querySelectorAll('.option input').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const optionIndex = parseInt(this.getAttribute('data-index'));
                if (!userAnswers[index]) {
                    userAnswers[index] = [];
                }
                userAnswers[index][optionIndex] = this.checked;
            });
        });
    }

    document.getElementById('prev-btn').classList.toggle('hidden', index === 0);
    document.getElementById('next-btn').classList.toggle('hidden', index === questions.length - 1);
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
});

document.getElementById('submit-btn').addEventListener('click', () => {
    quizSubmitted = true;
    score = 0;

    questions.forEach((q, i) => {
        const allCorrect = q.answers.every((a, index) => userAnswers[i]?.[index] === a);
        if (allCorrect) score++;
    });

    document.getElementById('final-score').textContent = `Điểm của bạn: ${score}/${questions.length}`;
    document.getElementById('final-score').classList.remove('hidden');
    showQuestion(currentQuestion);
});

initQuiz();
