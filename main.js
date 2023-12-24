const users = [
    { username: "tata", password: "ta4567" },
    { username: "tyty", password: "ty12378" },
    
  ];
  
  const loginForm = document.querySelector(".login-form");
  const validateInput = (inputObj) => {
    const { username, password } = inputObj;
  
    const foundUser = users.find(
      (user) =>
        user.username === username &&
        user.password === password
    );
  
    if (!username || !password) {
      window.alert("กรุณากรอกชื่อผู้ใช้และรหัสผ่าน");
    } else if (!foundUser) {
      if (!users.some((user) => user.username === username)) {
        window.alert("ชื่อผู้ใช้ไม่ถูกต้อง");
      } else {
        window.alert("รหัสผ่านไม่ถูกต้อง");
      }
    } else {
      window.alert("เข้าสู่ระบบสำเร็จ!");
      window.location.href = "https://www.example.com/";
    }
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    let inputObj = {};
  
    for (let el of loginForm.elements) {
      if (el.id) {
        inputObj[el.id] = el.value;
      }
    }
  
    validateInput(inputObj);
  };
  
  loginForm.addEventListener("submit", handleLogin);