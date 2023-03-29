<template>
    <el-row>
        <el-col :span="12" class="left">
            <div class="collapse-btn" @click="changeState">
                <el-icon v-if="isCollapse" size="30" color="white"><Expand /></el-icon>
                <el-icon v-else size="30" color="white"><Fold /></el-icon>
            </div>
        </el-col>
        <el-col :span="12" class="right">
            <el-tooltip
                class="box-item"
                effect="dark"
                content="您当前有3个通知"
                placement="bottom-start"
            >
                <div class="noticeBox">
                    <el-icon @click="router.push('/login')" :size="25" color="white"><Bell /></el-icon>
                </div>
            </el-tooltip>&nbsp;&nbsp;&nbsp;&nbsp;

            <el-avatar :src="imgurl" :size="25"/>&nbsp;&nbsp;&nbsp;&nbsp;
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    {{ user.username }}
                <el-icon class="el-icon--right" color="white">
                    <arrow-down />
                </el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </el-col>
    </el-row>
</template>
<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { userStore } from '../store/user';
import imgurl from '../assets/img/img.jpg'
import { storeToRefs } from 'pinia';
import { collapseStore } from '../store/collapse';

let router = useRouter()
let user = userStore();

const store = collapseStore();
let { isCollapse } = storeToRefs(store);

const changeState = ()=>{
    store.changeCollapse();
}


const logout = ()=>{
    user.username='';
    router.push('/login')
}
</script>
<style scoped>
.right{
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    margin-top: 12px;
}
.collapse-btn{
    margin-top: 12px;
    width: 30px;
}
.el-tooltip,.noticeBox{
    width: 30px;
}
.noticeBox{
    width: 30px;
}
.el-dropdown{
    padding-top: 4px;
    cursor: pointer;
}
.el-dropdown-link{
    color: white;
}
</style>