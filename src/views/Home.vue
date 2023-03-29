<template>
    <el-container class="common-layout">
        <el-header>
            <Header></Header>
        </el-header>
        <el-container>
            <!-- 设置el-aside的width=null，取消其默认300px的宽度 -->
            <el-aside width="null"><Menu></Menu></el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        
    </el-container>
</template>
<script setup>
import Header from '../components/header.vue'
import Menu from '../components/menu.vue'

</script>
<style scoped>
.common-layout{
    height: 100vh;
    flex-direction: columns;
}
.el-header{
    /* 去除header两边默认的距离 */
    /* --el-header-padding: 0 0; */
    background-color: #242f42;
}
.el-main{
    flex-grow: 1;
    background-color: #121212;
}
/* .el-aside{
    min-width: 20px;
    width: 200px;
} */
</style>