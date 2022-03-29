<template>
  <div class="login">
    <div class="meform">
      <div class="title">
        <h3>Login Form</h3>
      </div>
      <el-form :model="formdata">
        <el-form-item prop="user">
          <el-input placeholder="admin"
                    v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw"
                      type="password">
          <el-input placeholder=""
                    v-model="formdata.pw"
                    class="input"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="btn"
                     @click="submitfn">Login</el-button>
        </el-form-item>
      </el-form>
      <div class="bot-div">
        <p class="bot-title">username:admin</p>
        <p class="bot-title">password:any</p>
      </div>

    </div>
  </div>
</template>

<script>
import instance from "../api/index.js"
export default {
  name: "MyLogin",
  data () {
    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      newdebouncefn: null
    }
  },
  methods: {
    submitfn () {
      this.loginfn()
    },
    newsubmitfn () {
      this.debouncefn(this.loginfn())
    },
    async loginfn () {
      //登录业务
      let user = this.formdata.user
      let pw = this.formdata.pw
      let { data } = await instance.post("/login", { user, pw })
      console.log(data)

      // 存token
      console.log(data.data.token)
      if (data.message === "fail") {
        return this.$message.error("登录失败")
      }
      if (data.message === "success") {
        //存token
        localStorage.setItem("token", data.data.token)
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "wen" })
          }
        })
      }
    },
  },

  created () {
    this.newdebouncefn = this.debouncefn(this.loginfn)
  }

}
</script>

<style scoped>
.login {
  background-color: rgb(45, 58, 75);
  width: 100vw;
  height: 100vh;
}
.title {
  width: 370px;
  position: absolute;
  margin-left: -185px;
  left: 50%;
  top: -80px;
  text-align: center;
}
.login .title h3 {
  color: #fff;
}
.login .meform {
  box-sizing: border-box;
  width: 420px;
  height: 280px;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-left: -210px;
  margin-top: -130px;
}
.login .meform .btn {
  width: 100%;
}
.bot-div {
  display: flex;
}
.bot-div .bot-title {
  font-size: 14px;
  margin-right: 15px;
  color: #fff;
}
</style>