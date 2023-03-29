import { defineStore } from 'pinia'

export const userStore = defineStore('userStore',{
    state: ()=>{
        return {
            username: '',
            role: ''
        }
    },
    getters:{},
    actions:{},
    persist:{
        enabled: true,
        storage: localStorage
    },

})