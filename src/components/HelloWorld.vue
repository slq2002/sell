<template>
    <html>
        <head>
            <title>Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="keywords" content="Wedo Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template,
        Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
        </head>
        <body>
            <!--header-->
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
            <div class="services">
                <div class="container">
                    <h3>首页</h3>
                    <div class="services-grids">
                        <div class="col-md-4 services-grids-info">
                            <div class="srvs-image">
                                <a href="#"></a>
                            </div>
                            <div class="img-title">
                                <h4>one<br>我是第一个标题</h4>
                            </div>
                            <div class="clearfix"> </div>
                            <p>我是第一我是第一我是第一我是第一我是第一我是第一</p>
                        </div>
                        <div class="col-md-4 services-grids-info">
                            <div class="srvs-image">
                                <a href="#" class="camera active"></a>
                            </div>
                            <div class="img-title">
                                <h4>two<br>我是第二个标题</h4>
                            </div>
                            <div class="clearfix"> </div>
                            <p>我是第二我是第二我是第二我是第二我是第二我是第二</p>
                        </div>
                        <div class="col-md-4 services-grids-info">
                            <div class="srvs-image">
                                <a href="#" class="support"></a>
                            </div>
                            <div class="img-title">
                                <h4>three<br>我是第三个标题</h4>
                            </div>
                            <div class="clearfix"> </div>
                            <p>我是第三我是第三我是第三我是第三我是第三我是第三</p>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
<!--vue实现轮播图-->
			<div class="slide" v-on:mouseover="stop()" v-on:mouseout="move()">
				<div class="slideshow">
					<transition-group tag="ul" name="image">
						<li v-for="(img, index) in imgArray" v-show="index===mark" :key="index">
							<a href="#">
								<img :src='img'>
							</a>
						</li>
					</transition-group>
				</div>
				<div class="bullet">
					<span v-for="(item, index) in imgArray" :class="{ 'active':index===mark }"
						@click="change(index)" :key="index"></span>
				</div>
			</div>
            <!--//services-->
            <!--portfolio-->
            <div class="portfolio services">
                <div class="container">
                    <h3>LOVELY PORTFOLIO</h3>
                    <div class="portfolio-info">
                        <div class="col-md-4 portfolio-grids">
                            <div class="port-grids">
                                <div class="port-text">
                                    <h5>ome</h5>
                                    <span>2021 12.14</span>
                                </div>
                                <div class="port-image">
                                    <img src="../../static/images/img1.jpg" alt="" />
                                </div>
                                <div class="port-caption">
                                    <a href="samplepage.html">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 portfolio-grids">
                            <div class="port-grids">
                                <div class="port-text">
                                    <h5>two</h5>
                                    <span>2021 12.14</span>
                                </div>
                                <div class="port-image">
                                    <img src="../../static/images/img2.jpg" alt="" />
                                </div>
                                <div class="port-caption">
                                    <a href="samplepage.html">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-4 portfolio-grids">
                            <div class="port-grids">
                                <div class="port-text">
                                    <h5>three</h5>
                                    <span>2021 12.14</span>
                                </div>
                                <div class="port-image">
                                    <img src="../../static/images/img3.jpg" alt="" />
                                </div>
                                <div class="port-caption">
                                    <a href="samplepage.html">VIEW MORE</a>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
            <!--//portfolio-->
            <!--testimonials-->
            <div class="testimonials services">
                <div class="container">
                    <h3>TESTIMONIALS</h3>
                    <div class="sap_tabs">
                        <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
                            <ul class="resp-tabs-list">
                                <li class="resp-tab-item" aria-controls="tab_item-0" role="tab"><span><img
                                            src="../../static/images/img4.jpg" alt="" /></span></li>
                                <li class="resp-tab-item" aria-controls="tab_item-1" role="tab"><span><img
                                            src="../../static/images/img5.jpg" alt="" /></span></li>
                                <li class="resp-tab-item" aria-controls="tab_item-2" role="tab"><span><img
                                            src="../../static/images/img6.jpg" alt="" /></span></li>
                                <div class="clear"></div>
                            </ul>
                            <div class="resp-tabs-container">
                                <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                    <div class="view view-first">
                                        <h5>FILAN FISTEKU</h5>
                                        <p>Donec libero dui, scelerisque ac augue id, tristique ullamcorper elit. Nam
                                            ultrices, lacus vitae adipiscing aliquet, metus ipsum imperdiet libero,
                                            vitae
                                            dignissim sapien diam ac nibh convallis.</p>
                                    </div>
                                </div>
                                <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
                                    <div class="view view-first">
                                        <h5>ULLAMCORPER FILAN </h5>
                                        <p>Scelerisque ac augue id Donec libero dui, , tristique ullamcorper elit. Nam
                                            ultrices, lacus vitae adipiscing aliquet, metus ipsum imperdiet libero,
                                            vitae
                                            dignissim sapien diam ac nibh convallis.</p>
                                    </div>
                                </div>
                                <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                                    <div class="view view-first">
                                        <h5>SCELERISQUE AUGUE</h5>
                                        <p>Nam ultrices lacus vitae adipiscing aliquet, metus ipsum imperdiet libero,
                                            vitae
                                            dignissim sapientristique Donec libero dui, scelerisque ac augue id,
                                            ullamcorper
                                            elit,diam ac nibh convallis.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#" id="toTop" style="display: block;"> <span id="toTopHover" style="opacity: 1;"> </span></a>
            <!--//smooth-scrolling-of-move-up-->
        </body>
    </html>
</template>

<script>
	export default {
		data() {
			return {
				timer: null, //定时器
				mark: 0, //比对图片索引的变量
				imgArray: [
					'../../static/imgsss/1.jpg',
					'../../static/imgsss/2.jpg',
					'../../static/imgsss/3.jpg',
					'../../static/imgsss/4.jpg'
				]
			}
		},
		methods: {
			autoPlay() {
				this.mark++;
				if (this.mark === 4) {
					this.mark = 0
				}
			},
			play() {
				this.timer = setInterval(this.autoPlay, 500)
			},
			change(i) {
				this.mark = i
			},
			stop() {
				clearInterval(this.timer)
			},
			move() {
				this.timer = setInterval(this.autoPlay, 500)
			}
		},
		created() {
			this.play()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
