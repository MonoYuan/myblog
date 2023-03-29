import { defineStore } from 'pinia'
// pinia模块划分就是创建多个js, 定义多个Store, 然后指定不同id
export const aboutStore = defineStore('aboutStore', {
    state: ()=>{
        return {
            num: 0,
            total: 10
        }
    },
    getters:{},
    actions:{},
    // 开启持久化(需要安装pinia-plugin-persist插件)
    persist:{
        enabled: true,
        storage: localStorage
    }
});