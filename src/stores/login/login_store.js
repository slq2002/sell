import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);
//对应登录页的数据源状态管理
export default({
	state:{
		uName:'请登录',
		uPwd:'',
		count:0,
		show:false
	},
	//mutations 修改状态的方法
	//1.同名mutations操作 只要commit提交 ，全部触发
	//2.mutations里的操作 必须是同步的 可以是异步的
	//3.调用使用 commit('操作名')
	mutations:{
		AddCount(state){
			state.count++;
		},
		AddCountAsync(state){
			//周期调用
			setInterval( () => {
				console.log('AddCountAsync ');
			}, 1000);
		}
		
	},
	/**
	 * 1.actions 操作可以调用 1个或多个mutations的操作
	 * 2.调用使用 dispatch('操作名字')
	 */
	actions:{
		increment(context){
			context.commit('AddCount');
			context.commit('AddCountAsync');
		},
		incrementAsync(context){
			setInterval( () => {
				context.commit('AddCount');
				console.log('incrementAsync');
			}, 1000);
		}
	},
	//getters类似之前学的 computed中的 计算属性
	getters:{
		not_show(state){
			return !state.show;
		}
	}
});