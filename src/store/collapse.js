import { defineStore } from "pinia";


export const collapseStore = defineStore('collapseStore',{
    state: ()=>{
        return {
            isCollapse: false,
        }
    },
    getters:{},
    actions:{
        changeCollapse(){
            this.isCollapse = !this.isCollapse;
        }
    },
    persist:{
        enabled: true,
        storage: localStorage
    },

});
