<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#324157"
        class="el-menu-vertical-demo"
        text-color="#fff"
        :collapse="isCollapse"
        unique-opend
        router
    >
        <el-sub-menu :index="item.path" v-for="item in menuData" :key="item.path">
            <template #title>
                <el-icon><location /></el-icon>
                <span>{{ item.name }}</span>
            </template>
            <el-menu-item :index="it.path" v-for="it in item.children" >{{ it.name }}</el-menu-item>
        </el-sub-menu>

    </el-menu>
</template>
<script setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia';
import { collapseStore } from '../store/collapse';
import { fetchMenu } from '../api/menu';

const store = collapseStore();
let { isCollapse } = storeToRefs(store);

let menuData = ref([]);
onBeforeMount(() => {
    fetchMenu().then(result=>{
        console.log(result);
        menuData.value = result;
    });
})

</script>
<style scoped>
.el-menu{
    height: 100%;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
</style>