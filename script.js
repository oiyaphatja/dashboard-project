function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const error = document.getElementById("error");
  
    // ตรวจสอบ username และ password
    if (username === "Admin" && password === "1234") {
      window.location.href = "home.html";
    } else {
      error.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
    }
  }
  document.querySelectorAll('.card-btn').forEach((btn) => {
    btn.addEventListener('click', function() {
        alert("Button clicked!");
        // คุณสามารถใส่คำสั่งเพื่อไปยังหน้าหรือทำฟังก์ชันอื่น ๆ ได้ที่นี่
    });
});
function logout() {
  // เคลียร์ข้อมูลใน localStorage หากใช้
  // localStorage.clear();

  // กลับไปหน้า login
  window.location.href = "login.html";
}
function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (username === "Admin" && password === "1234") {
    // สามารถเก็บค่าไว้ใช้ต่อ เช่น localStorage.setItem("username", username);
    window.location.href = "home.html";
  } else {
    error.textContent = "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง";
  }
}

  