<template>
	<!--编写HTML代码 只能被一个总dom包含-->
	<div class="main">
		<div class="login">
			<form action="" method="post">
				<table border="1" cellspacing="" cellpadding="" width="300">
					<tr>
						<td>用户名:</td>
						<td><input type="text" v-model="uName"></td>
					</tr>
					<tr>
						<td>密码:</td>
						<td><input type="password" v-model="uPwd"></td>
					</tr>
					<tr>
						<td colspan="2">
							<button type="button" @click="login">登录</button>
						</td>
					</tr>
				</table>
			</form>
		</div>
	</div>
	
</template>

<script>
	//编写js代码
	/**
	 * 1.项目目录 c13中安装 npm intall axios --save(安装完成后 node_modules中出现 axios)
	 * 2.启动项目 npm run dev
	 * 3.引入axios对象
	 */
	const axios = require('axios');
export default {
  name: 'denglu',
  data () {
    return {
		msg: '学生信息管理系统',
		uName:'',
		uPwd:''
	}
  },
  methods:{
		login (){
			//1.参数1 指定文件位置（跨域访问-从别人网站） 被访问的json文件位置 不能随意放置 只能放置在 static中
			axios.get('../static/login.json').then((response) =>{
				//遍历数据对象 一一对比
				console.log(this.uName+this.uPwd);
				for(let item of response.data.denglu){
					if(item.name == this.uName && this.uPwd == item.pwd){
						this.$store.state.Login.uName = this.uName;
						this.$router.push({name:'HelloWorld'});
						return;
					}
				}
				alert("用户或密码错误！");
				//console.log(response);
				//异常走catch
			}).catch(function(err){
				console.log(err);
			});
			
			/*
			console.log(this.uName + "--" + this.uPwd);
			//axios 从后台 json中获取数据 判断登录
			if(this.uName == "admin" && this.uPwd == "123"){
				this.$store.state.Login.uName = this.uName;
				//js实现路由跳转
				this.$router.push({name:'Main'});
			}else{
				alert("您输入的账号密码有误!");
			}*/
		}
  }
  
  
}
</script>

<style>
	/*样式皮肤*/
	.main{
		text-align: center;
	}
	.login{
		width:400px;
		margin:100px auto;
	}
</style>
