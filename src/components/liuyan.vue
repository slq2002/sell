<template>
	<div>
		<div class="header">
			<div class="social-icons">
				<ul>
					<li><a href="#"> </a></li>
					<li><a href="#" class="fb"> </a></li>
					<li><a href="#" class="in"> </a></li>
					<li><a href="#" class="dott"> </a></li>
				</ul>
			</div>
			<div class="container">
				<div class="col-md-9 top-nav">
					<span class="menu"><img src="../../static/images/menu-icon.png"></span>
					<ul class="nav1">
						<li><a href="#/HelloWorld" class="active" target="_parent">首页</a></li>
						<li><a href="#/main" target="_parent">产品页面</a></li>
						<li><a href="#/xinwen" target="_parent">新闻页</a></li>
						<li><a href="#/guanyu" target="_parent">关于我们</a></li>
						<li><a href="#/liuyan" target="_parent">留言</a></li>
					</ul>
				</div>
				<div class="col-md-3 header-logo"><b style="color: white;font-size: 25px;">Hellow:</b>
					<a  style="color: white;font-size: 25px;" href="#/denglu" target="_blank">{{$store.state.Login.uName}}</a>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
		<div class="wrap">
			<div class="wrap-head">
				<div class="head-logo">
				</div>
				<div class="head-txt">
					<a class="title-txt"></a>
				</div>
			</div>
			<div class="main-txt">
				<textarea name="" rows="" cols="" class="main-area"></textarea>
			</div>
			<div class="warp-footer">

				<div class="warp-footer-btns">
					<div class="release-btn">
						<a id="btn" v-on:click="ddd">发布</a>
					</div>
				</div>
			</div>
		</div>
		<!-- 显示留言的主体 -->
		<ul id="neirong">
			<div class="show">
				<div class="show-content">
					<div class="show-name">name</div>
					<p>马云，男，汉族，中共党员 [1]  ，1964年9月10日生于浙江省杭州市，祖籍浙江省嵊州市谷来镇， 阿里巴巴集团主要创始人，现担任日本软银董事、大自然保护协会中国理事会主席兼全球董事会成员、华谊兄弟董事、生命科学突破奖基金会董事、联合国数字合作高级别小组联合主席。</p>
					<div class="show-time">2021年x月x日</div>
					<div id="close" class="show-close"></div>
				</div>
			</div>
			<div class="show">
				<div class="show-content">
					<div class="show-name">name</div>
					<p>1988年毕业于杭州师范学院外语系，同年担任杭州电子工业学院英文及国际贸易教师，1995年创办中国第一家互联网商业信息发布网站“中国黄页”，1998年出任中国国际电子商务中心国富通信息技术发展有限公司总经理，1999年创办阿里巴巴，并担任阿里集团CEO、董事局主席。</p>
					<div class="show-time">2021年x月x日</div>
					<div id="close" class="show-close"></div>
				</div>
			</div>
			<div class="show">
				<div class="show-content">
					<div class="show-name">name</div>
					<p>{{name}}</p>
					<div class="show-time">2021年x月x日</div>
					<div id="close" class="show-close"></div>
				</div>
			</div>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'liuyan',
		data() {
			return {
				name: ''
			}
		},
		methods: {
			ddd: function() {
				var text = document.querySelector('textarea');
				var ul = document.getElementById('neirong');
				// 首先会创建一个li  并把文本域的内容给li 再把li添加到ul中
				var li = document.createElement('li');
				if (text.value == '') {
					alert('您没有输入内容');
				} else {
					// 文本域的值 value
					// 增加一个删除留言的按钮
					li.innerHTML = '<div class="show">\
				<div class="show-content">\
				<div class="show-name">name</div>' + text.value + '\
				<div class="show-time">2021年x月x日</div>\
				<div id="close" class="show-close"></div>\
				</div>';
					ul.insertBefore(li, ul.children[0]); // 把最新的发布放到最前面
				}
				text.value = '';
			}
		}
	}
</script>
<style>
	@import url("../css/ly.css");
</style>
