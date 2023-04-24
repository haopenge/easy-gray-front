<template>
  <div class="login">
    <div class="login-container">
      <h1 class="login-title">Welcome Back</h1>
      <form class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" class="form-control" v-model="email"
                 placeholder="Enter your email">
          <label for="password">Password</label>
          <input type="password" id="password" class="form-control" v-model="password"
                 placeholder="Enter your password">
        </div>
        <button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
      </form>
      <div class="login-footer">
        <a href="#" class="login-link">Forgot Password?</a>
        <span class="login-separator"></span>
        <a href="#" class="login-link">Create an Account</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // 在这里处理登录逻辑
      console.log('Email:', this.email)
      console.log('Password:', this.password)
    },
  },
}
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-container {
  position: relative;
  width: 400px;
  padding: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.login-title {
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 28px;
  text-align: center;
}

.login-form {
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: bold;
}

.form-control {
  display: block;
  width: 100%;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f5f5f5;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #4caf50;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #3e8e41;
}

.login-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-link {
  color: #4caf50;
  text-decoration: none;
  font-size: 16px;
  margin: 0 10px;
  transition: all 0.3s ease;
}

.login-link:hover {
  text-decoration: underline;
}

.login-separator {
  width: 1px;
  height: 16px;
  margin: 0 10px;
  background-color: #ccc;
}

.login-container:before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 20px;
  border: 1px solid #4caf50;
  z-index: -1;
  animation: border-animation 2s linear infinite;
}

.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: url("https://cdn.pixabay.com/photo/2016/07/23/18/45/pokemon-1536849_960_720.png") center center no-repeat;*/
  background-size: cover;
}

@keyframes border-animation {
  0% {
    border-color: #4caf50;
  }
  25% {
    border-color: #f44336;
  }
  50% {
    border-color: #2196f3;
  }
  75% {
    border-color: #ffc107;
  }
  100% {
    border-color: #4caf50;
  }
}
</style>
