// หา element ที่เราต้องใช้จาก HTML
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// รอฟังว่า Add Task ถูกคลิกเมื่อไหร่
addTaskBtn.addEventListener("click", function () {

    // อ่านข้อความที่ผู้ใช้พิมพ์
    const taskText = taskInput.value.trim();

    // ถ้าไม่ได้พิมพ์อะไร ไม่ต้องสร้าง Task
    if (taskText === "") {
        return;
    }

    // สร้าง <li>
    const li = document.createElement("li");

    // สร้าง checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // สร้างข้อความของ Task
    const label = document.createElement("label");
    label.textContent = taskText;

    // เอา checkbox และ label ใส่ใน <li>
    li.appendChild(checkbox);
    li.appendChild(label);

    // เอา <li> ใส่ใน <ul>
    taskList.appendChild(li);

    // ล้างช่อง input หลังเพิ่มเสร็จ
    taskInput.value = "";
});