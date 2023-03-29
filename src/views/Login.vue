<template>
    <div class="login-wrapper">
        <div class="ms-login">
            <div class="login-title">后台管理系统</div>
            <div class="login-body">
                <el-form class="ms-content" v-model="userModel">

                    <el-form-item>
                        <el-input type="text" v-model="userModel.username">
                            <template #prepend><el-button icon="User"></el-button></template>
                        </el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-input type="password" v-model="userModel.password">
                            <template #prepend><el-button icon="Lock"></el-button></template>
                        </el-input>
                    </el-form-item>


                    <el-form-item>
                        <el-button type="primary" class="loginBtn" @click="doLogin">登录</el-button>
                    </el-form-item>
                    
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { userStore } from '../store/user'
import { ElMessage } from 'element-plus'
const userModel = reactive({
    username: "admin",
    password: "123"
});
const router = useRouter();
const doLogin = ()=>{
    //执行登录逻辑,发送request请求,如果是登录成功,还需要返回相应的权限信息,存入pinia或vuex中,方便在路由守卫中进行鉴权
    const user = userStore();
    user.username = userModel.username;
    ElMessage({
        message: '登录成功!',
        type: 'success'
    });
    setTimeout(() => {
        router.push("/");
    }, 1000);
}
</script>


<style>
.login-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../assets/img/login-bg.jpg');
    background-size: 100%;
}
.ms-login{
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
	left: 50%;
	top: 50%;
	width: 350px;
	margin: -190px 0 0 -175px;
	border-radius: 5px;
	overflow: hidden;
}
.ms-content{
    padding: 30px 30px;
}
.login-title{
    height: 45px;
    margin-top: 15px;
    color: white;
    font-size: 20px;
    border-bottom: 2px solid #ddd;
}
.loginBtn{
    width: 100%;
}
</style>