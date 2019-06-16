<template>
  <div>
    <ul class="Nav-tab">
      <li :class="loginType?'on':''" @click="loginType=true">
        <a>普通注册</a>
      </li>
      <li :class="loginType?'':'on'" @click="loginType=false">
        <a>短信验证码登录</a>
      </li>
    </ul>
    <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        v-if="loginType == true"
      >
      <el-form-item label="手机号码" prop="phoneNum1">
        <el-input v-model="ruleForm.phoneNum1" placeholder="请输入手机号码" style="width:80%;"></el-input>
      </el-form-item>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" placeholder="请输入用户名" style="width:80%;"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" show-password autocomplete="off" v-model="ruleForm.password" placeholder="请输入密码" style="width:80%;"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" prop="code">
        <el-input v-model="ruleForm.code" placeholder="请输入短信验证码" style="width:80%;"></el-input>
        <button class="getCode">免费获取验证码</button>
      </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="RegisterForm('ruleForm')" style="width:80%;border-radius:20px; margin-top:30px;">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitBack('ruleForm')" style="width:80%;border-radius:20px;">返回登录</el-button>
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
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
          style="width:80%;border-radius:20px;"
        >登录</el-button>
      </el-form-item>
      <el-form-item style="margin-bottom:0;">
        <el-button
          type="primary"
          @click="registerForm('ruleForm')"
          style="width:80%;border-radius:20px;margin-top:10px;"
        >快速注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {isvalidPhone} from '../../../libs/reg.js'
export default {
  data() {
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
      loginType: true,
      ruleForm: {
          username:'',
          password:"",
          phoneNum1:"",
          phoneNum:""
      },
      rules: {
        phoneNum: [{ required: true, message: "请输入手机号码", trigger: "blur" },
                  { required: true, validator: validPhone, trigger: "blur" }
        ],
        username:[{required:true,message:'请输入用户名',trigger:'blur'},
                  {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        password:[{required:true,message:"请输入密码",trigger:'blur'},
                  {min:6,max:12,message:'长度在6到12个字符',trigger:'blur'}
        ],
        phoneNum1: [{ required: true, message: "请输入手机号码", trigger: "blur" },
                  { required: true, validator: validPhone, trigger: "blur" }
        ],
        code:[{ required: true, message: "请输入正确的验证码", trigger: "blur" }]
      }
    };
  },
  methods:{
    submitBack(formName){
      this.$router.replace('/Login');
    },
    RegisterForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //插入数据库，这里也还没写
          
          this.$message("注册成功");
          //保存在session钟
          window.sessionStorage.setItem("data", this.ruleForm.username);
          //登录成功跳转首页
          this.$router.replace('/my');
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }

}
</script>
<style lang="scss" scoped>
ul {
  list-style: none;
}
a{
  text-decoration: none;
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
  font-size: 0.42rem;
  color: #999;
  text-align: center;
  background-color: #fafafa;
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


