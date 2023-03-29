import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import { userStore } from '../store/user';
const routes = [
	{
		path:"/",
		name:"Home",
		component:Home,
		redirect: "/table",
		children:[
			{
				path: "/table",
				name: "Table",
				component: ()=>import("../views/Table.vue")
			},
			{
				path: "/test",
				name: "Test",
				component: ()=>import("../views/Test.vue")
			}
		]
	},
	{
        path: "/about",
		name: "About",
		component: () =>
		import(/*webpackChunkName:"about"*/ "../views/About.vue")
	},
	{
        path: "/login",
		name: "Login",
		component: () =>
		import(/*webpackChunkName:"about"*/ "../views/Login.vue")
	}
];
const router = createRouter({
	history:createWebHistory(),
	routes,
});
//全局前置路由守卫
router.beforeEach((to, from, next)=>{
	let user = userStore();
	if(to.path!="/login"&&!user.username){
		next('/login');
	}else{
		next();
	}
});
export default router;