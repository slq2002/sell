import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
//主页面登录数据源管理
export default({
	state:{
		content:'我是主页面'
		
	},
	//mutations 修改状态的方法
	mutations:{
		AddCount(state){
			console.log("main_store.js");
			//state.count++;
		}
	}
});