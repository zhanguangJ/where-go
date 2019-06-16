<template>
  <div>
      <ul class="Nav-tab">
            <li :class="loginType?'on':''" @click="loginType=true"><a>普通登录</a></li>
            <li :class="loginType?'':'on'" @click="loginType=false"><a>短信验证码登录</a></li>
      </ul>
      <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          v-if="loginType == true"
        >
          <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" show-password style="width:80%;"></el-input>
          </el-form-item>
          <div class="loo"><span>找回密码</span></div>
          <el-form-item style="margin-bottom:0;">
              <el-button type="primary" @click="submitForm('ruleForm')" style="width:80%;border-radius:20px;">登录</el-button>
          </el-form-item>
          <el-form-item style="margin-bottom:0;">
              <el-button type="primary" @click="registerForm('ruleForm')" style="width:80%;border-radius:20px;margin-top:10px;">快速注册</el-button>
          </el-form-item>
      </el-form>
        <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
              v-else
            >
          <el-form-item label="手机号码" prop="phoneNum">
              <el-input v-model="ruleForm.phoneNum" style="width:80%;"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
              <el-input type="text" v-model="ruleForm.code" style="width:80%;"></el-input>
              <button class="getCode">免费获取验证码</button>
          </el-form-item>
          <el-form-item style="margin-bottom:0;">
              <el-button type="primary" @click="submitForm('ruleForm')" style="width:80%;border-radius:20px;">登录</el-button>
          </el-form-item>
          <el-form-item style="margin-bottom:0;">
              <el-button type="primary" @click="registerForm('ruleForm')" style="width:80%;border-radius:20px;margin-top:10px;">快速注册</el-button>
          </el-form-item>
      </el-form>
  </div>
</template>

<script>
import {isvalidPhone} from '../../../libs/reg.js'
import axios from 'axios'
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validPhone=(rule, value,callback)=>{
      if (!value){
          callback(new Error('请输入电话号码'))
      }else  if (!isvalidPhone(value)){
        callback(new Error('请输入正确的11位手机号码'))
      }else {
          callback()
      }
  }
    return {
      loginType : true,
      ruleForm: {
        username: "",
        password: "",
        checkPass: "",
        phoneNum:""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 18, message: "长度在5到18个字符", trigger: "blur" }
        ],
        password: [{ required: true, validator: validatePass, trigger: "blur" }],
        phoneNum: [{ required: true, message: "请输入手机号码", trigger: "blur" },
                  { required: true, validator: validPhone, trigger: "blur" }
        ],
        code:[{ required: true, message: "请输入正确的验证码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
                axios
        .get(
          "https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/logintest"
        )
        .then(response => {
            var res = response.data.data,
                len = res.length,
                userNameArr = [],
                passWordArr = [],
                ses = window.sessionStorage;
            // 拿到所有的username
            for (var i = 0; i < len; i++) {
                userNameArr.push(res[i].username);
                passWordArr.push(res[i].password);
            }
            console.log(userNameArr, passWordArr);
            console.log(this.ruleForm.username)
            if (userNameArr.indexOf(this.ruleForm.username) === -1) {
                this.$message("账号不存在！");
            } else {
                var index = userNameArr.indexOf(this.ruleForm.username);
                if (passWordArr[index] === this.ruleForm.password) {
                // 把token放在sessionStorage中
                ses.setItem("data", res[index].username);
                
                 this.$message("登录成功");
                //登录成功跳转首页
                this.$router.replace('/my');
                // console.log(this.$router);
                } else {
                    this.$message("密码错误");
                }
            }
        })
        .catch(err => {
          console.log("连接数据库失败！");
        });

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerForm(formName) {
      this.$router.replace('/Register');
    }
  }
};
</script>
<style lang="scss" scoped>
ul{
  list-style: none;
}
.Nav-tab {
    width: 100%;
    display: table;
    padding-bottom: 30px;
}
.Nav-tab li {
    display: table-cell;
    width: 50%;
}
.Nav-tab li.on a {
    border-top: 2px solid #00bcd4;
    background-color: #fff;
    color: #00bcd4;
}
.Nav-tab a {
    display: block;
    width: 100%;
    line-height: 40px;
    border-top: 2px solid #dadada;
    font-size: .42rem;
    color: #999;
    text-align: center;
    background-color: #fafafa;
}
.loo{
  width: 28%;
  float: right;
  font-size: 12px;
  color: #ccc;
  margin-top: -15px;
}
.getCode{
  position: relative;
  z-index: 1;
  float:right;
  font-size: 12px;
  height: 35px;
  margin-right: 58px;
  margin-top: -38px;
}
</style>


