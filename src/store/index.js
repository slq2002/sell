import Vue from 'vue'
import vuex from 'vuex'

//引入store的分支
import login_store from '../stores/login/login_store.js'
import main_store from '../stores/main/main_store.js'

Vue.use(vuex);

export default new vuex.Store({
	state:{
		msg:'我是index中的数据源'
	},
	modules:{
		Login:login_store,
		Main:main_store
	}
});