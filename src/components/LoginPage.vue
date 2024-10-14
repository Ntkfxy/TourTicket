<template>
    <div class="login-background">
      <div class="login-container">
        <h2>เข้าสู่ระบบ</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="username">ชื่อผู้ใช้</label>
            <input
              type="text"
              id="username"
              v-model="username"
              required
              placeholder="กรุณากรอกชื่อผู้ใช้"
            />
          </div>
          <div class="form-group">
            <label for="password">รหัสผ่าน</label>
            <input
              type="password"
              id="password"
              v-model="password"
              required
              placeholder="กรุณากรอกรหัสผ่าน"
            />
          </div>
          <button type="submit" class="login-btn">เข้าสู่ระบบ</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      handleLogin() {
        console.log(`Username: ${this.username}, Password: ${this.password}`);
        // หลังจากเข้าสู่ระบบเสร็จสิ้นให้ไปยังหน้า Home
        this.$router.push('/home'); // เปลี่ยนเส้นทางไปยังหน้า Home
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box; /* ปรับการจัดการ box model */
  }
  
  html, body {
    height: 100%; /* ให้ body เต็มความสูง */
    margin: 0; /* ลบ margin */
  }
  
  .login-background {
    background-image: url('@/assets/images/home/doipha.jpg'); /* เปลี่ยนเป็น path รูปภาพที่ต้องการ */
    background-size: cover; /* ปรับให้ภาพเต็มพื้นที่ */
    background-position: center; /* ตำแหน่งกลาง */
    height: 100vh; /* ความสูงเต็มหน้าจอ */
    display: flex; /* ใช้ flexbox */
    justify-content: center; /* จัดกลางแนวนอน */
    align-items: center; /* จัดกลางแนวตั้ง */
  }
  
  .login-container {
    max-width: 400px; /* ความกว้างสูงสุด */
    width: 100%; /* ความกว้าง 100% */
    padding: 40px; /* เพิ่ม padding รอบ ๆ */
    border: 1px solid rgba(255, 255, 255, 0.8);
    border-radius: 10px; /* ทำมุมมน */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: rgba(255, 255, 255, 0.9); /* พื้นหลังแบบโปร่งใส */
    backdrop-filter: blur(10px); /* เบลอภาพด้านหลัง */
  }
  
  .login-container h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input {
    width: 100%; /* ความกว้าง 100% */
    padding: 10px; /* เพิ่ม padding */
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border 0.3s;
  }
  
  .form-group input:focus {
    border-color: #ffa500; /* สีเมื่อโฟกัส */
  }
  
  .login-btn {
    width: 100%; /* ความกว้าง 100% */
    padding: 10px; /* เพิ่ม padding */
    background-color: #ffa500; /* สีพื้นหลังของปุ่ม */
    color: white;
    border: none;
    border-radius: 5px; /* ทำมุมมน */
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .login-btn:hover {
    background-color: #ff8c00; /* สีเมื่อเลื่อนเมาส์ไปที่ปุ่ม */
  }
  </style>
  