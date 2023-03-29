<template>
    <div>
        关于我们
    </div>
    <h2>{{ num }}</h2>
    <h2>{{ total }}</h2>
    <!-- <h3>{{ userInfo }}</h3> -->
    <button @click="changeNum">修改值</button>
    <!-- <button @click="changeUserInfo">修改userInfo</button> -->
</template>
<script setup>
// vuex的写法
// import { useStore } from 'vuex'
// let store = useStore();
// let num = computed(()=>store.state.num);
// let total = computed(()=>store.getters.total);

// const changeNum = ()=>{
//     store.commit('changeNum');
//     store.dispatch('changeBtn');
// }
// let userInfo = computed(()=>store.state.user.userInfo);
// console.log(userInfo)
// const changeUserInfo = ()=>{
//     store.commit('changeInfo');
// }
import { storeToRefs } from 'pinia';
import { aboutStore } from '../store/about';
const store = aboutStore();
//需要引入storeToRefs进行解构,才能直接修改值
let { num , total } =  storeToRefs(store);
const changeNum = ()=>{
    num.value ++;
    // 批量更新(本身是支持批量更新的,需要用$patch)
    // store.$patch(state=>{
    //     state.counter++;
    //     state.arr.push(4)
    //     state.name '456';
    // })
}
</script>