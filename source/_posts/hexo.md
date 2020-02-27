---
title: hexo
copyright: true
date: 2020-02-12 12:04:10
description: hexo 配置记录
tag:
	- hexo
	- install
categories:
	- linux
---

## 安装 hexo

```zsh
// 安装环境
sudo pacman -S nodejs
sudo pacman -S npm

// 安装hexo
sudo npm install -g hexo-cli
```

### 初始化 hexo
```
hexo init <folder>
cd <folder>
npm install 
```

### 与 github repository 链接
<span id="inline-toc">1.</span> 安装 git plugin 插件
`npm install hexo-deployer-git --save`

<span id="inline-toc">2.</span> hexo: `_config.yml`

```
type: git
repository: https://github.com/guangsizhongbin/guangsizhongbin.github.io.git
branch: master
```

<span id="inline-toc">3.</span> Domain:

| CNAME | blog.fengqigang.cn | guangsizhongbin.github.io |
|-------|--------------------|---------------------------|
| A     | @                  | ping_ip                   |

<span id="inline-toc">4.</span> hexo's

```
touch CNAME:
blog.fengqigang.cn
```

### git config
```
git config --global user.name "guangsizhongbin"
git config --global user.email "guangsizhongbin@gmail.com"
```

## Next theme

### Install Next
```
cd blog
git clone https://github.com/theme-next/hexo-theme-next themes/next
```

### 个性化

<span id="inline-toc">1.</span> 开启 Next theme
> `hexo's _config.yml`:
> themes: next

<span id="inline-toc">2.</span> 切换主题
> `themes/_config.yml`:
> Scheme : Mist

<span id="inline-toc">3.</span> Set sidebar
> `themes/_config.yml`:
> display : post

<span id="inline-toc">4.</span> post_meta
> `themes/_config.yml`:
> post_meta

<span id="inline-toc">5.</span> sidebar
```
>> theme's _config.yml
uncoment: 
	style: source/_data/styles.styl


>> hexo/source/styles.styl
//自定义回到顶部样式
.back-to-top {
  right: 60px;
  width: 70px;  //图片素材宽度
  height: 900px;  //图片素材高度
  top: -900px;
  bottom: unset;
  transition: all .5s ease-in-out;
  background: url("/images/scroll.png");

  //隐藏箭头图标
  > i {
    display: none;
  }

  &.back-to-top-on {
    bottom: unset;
    top: 100vh < (900px + 200px) ? calc( 100vh - 900px - 200px ) : 0px;
  }
}
```

<span id="inline-toc">6.</span> Displays the current browsing progress

```
>> theme's_config.yml

# back2top:

# Reading progress bar

```

<span id="inline-toc">7.</span> Set animation effect
`theme's _config.yml` >> motion

<span id="inline-toc">8.</span> Number tags
```dff
>> hexo's styles.syl
 span#inline-toc {
    display: inline-block;
    border-radius: 80% 100% 90% 20%;
    background-color: rgb(227, 242, 253);
    color: #555;
    padding: 0.05em 0.4em;
    margin: 2px 5px 2px 0px;
    line-height: 1.5;
}
```

<span id="inline-toc">9.</span> site accleration

```
>> themes's _config
host: fonts.useso.com

```


<span id="inline-toc">10.</span> Custom color block labels
```
>> hexo's styles.syl
// 颜色块-黄
span#inline-yellow {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: #f0ad4e;
}
// 颜色块-黑
span#inline-black {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: black;
}
// 颜色块-绿
span#inline-green {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: #5cb85c;
}
// 颜色块-蓝
span#inline-blue {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: #2780e3;
}
// 颜色块-紫
span#inline-purple {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: #9954bb;
}
// 颜色块-红
span#inline-red {
  display:inline;
  padding:.2em .6em .3em;
  font-size:80%;
  font-weight:bold;
  line-height:1;
  color:#fff;
  text-align:center;
  white-space:nowrap;
  vertical-align:baseline;
  border-radius:0;
  background-color: #df3e3e;
}
```

<span id="inline-toc">11.</span> Color tag cloud
```
>> hexo's styles.syl
.tag-cloud a {
  -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: 0.2s ease-out;
  padding: 2px 10px;
  margin: 8px;
  background: #eee;
  border-bottom: none;
  border-radius: 12px;
}
.tag-cloud a:hover {
  text-decoration: none;
  background: #64ceaa;
  color: #fff !important;
  -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  -moz-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}

>> theme's page.swig
{{ tagcloud({min_font: 18, max_font: 55, amount: 300, color: true, start_color: '#c6948e', end_color: '#FC6470'}) }}

```

<span id="inline-toc">12.</span> beautify the h1, h2
```
h1{padding: 0px 20px;border-left: 10px solid #ed515191;background-color: rgba(208, 208, 208, 0);font-size: 19px;line-height: 30px;color: cornflowerblue;font-weight: bold;margin: 5px 0;}
h2{padding:0px 20px;border-left: 10px solid #BF51ED91;background-color: rgba(208, 208, 208, 0);font-size:18px;line-height: 30px;color:cornflowerblue;font-weight:bold;margin: 5px 0;}
h3{padding:0px 20px;border-left: 10px solid #6495ed91;background-color: rgba(208, 208, 208, 0);font-size:17px;line-height: 27px;color:cornflowerblue;font-weight:bold;margin: 5px 0;}
h4{padding:0px 20px;border-left: 10px solid #e2aa2b91;background-color: rgba(208, 208, 208, 0);font-size:16px;line-height: 24px;color:cornflowerblue;font-weight:bold;margin: 5px 0;}
h5{padding:0 20px;border-left: 10px solid #64c1c191;background-color: rgba(208, 208, 208, 0);font-size:15px;line-height: 21px;color:cornflowerblue;font-weight:bold;margin: 5px 0;}
```

<span id="inline-toc">13.</span> Open markdown file after running hexo new
```
1. mdir scripts in hexo's root.

2. in scripts' js
var spawn = require('child_process').spawn;
 // Hexo 3
hexo.on('new', function(data){
spawn('nvim', [data.path], { stdio: 'inherit' });
});
```

<span id="inline-toc">14.</span> Abstract picture
```dff
>> theme's _macro 's post.swig  
+   
+   {% if post.image %}
+   <div class="out-img-topic">
+     <img src={{ post.image }} class="img-topic" />
+   </div>
+   {% endif %}
+

>> _data
img.img-topic {
	width: 100%;
}

>> post-matter
image: url
```







#### plugins

<span id="inline-toc">1.</span> Local-search
```
>> root:
sudo npm install hexo-generator-searchdb -save

>>  themes/config.yml
--:
Local_Search:
enable: false
++:
Local_Search:
enable: true

>> hexo's _config.yml
++:
search:
path: search.xml
field: post
format: html
limit: 10000
```

<span id="inline-toc">2.</span> Add social link
> `themes/_config.yml`
> Social Link:

<span id="inline-toc">3.</span> set codeblock
> `themes/_config.yml`
> codeblock

<span id="inline-toc">4.</span> set Creative_commons
> `themes/_config.yml`
> ++:
> creative_commons:
> lincese: by-nc-sa
> sidebar: true
> post: true
> language: 

<span id="inline-toc">5.</span> Statistical function
```
>> root:
sudo npm i hexo-symbols-count-time --save

>> hexo's _config.yml
++:
symbols_count_time:
	symbols: true
	time: true
	total_symbols: true
	total_time: true

>> theme's _config.yml
# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true
  item_text_post: true
  item_text_total: false
  awl: 2
  wpm: 300
```

<span id="inline-toc">6.</span> pet
```
>> root:
sudo npm install -save hexo-helper-live2d
sudo npm install live2d-widget-model-wanko



>> hexo's _config.yml
live2d:
  enable: true
  scriptFrom: local
  pluginRootPath: live2dw/
  pluginJsPath: lib/
  pluginModelPath: assets/
  tagMode: false
  log: false
  model:
    use: live2d-widget-model-wanko
  display:
    position: left
    width: 150
    height: 300
  mobile:
    show: false
  react:
	opacity: 0.7
```

<span id="inline-toc">7.</span> hexo-douban
```
>> root:
sudo npm install -save hexo-douban -save

>> hexo's _config.yml
douban:
  user: 169475909
  builtin: true
  book:
    title: 'This is my books'
  timeout: 10000

>> update douban
hexo douban -b
```


<span id="inline-toc">8.</span> hexo-browsersync

```
>> root:
npm install hexo-browsersync --save

>> hexo's _config.yml
browsersync:
  logLevel: "warn"
  ghostMode:
    scroll: true
  instanceName: "uniqueString"
```

<span id="inline-toc">9.</span> top

```
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save


>> themes\next\layout\_macro's post
/ post-meta.

{% if post.top %}
	<i class="fa fa-thumb-tack"></i>
	<font color=7D26CD>置顶</font>
	<span class="post-meta-divider">|</span>
{% endif %}
```


<span id="inline-toc">10.</span> math_support

```
npm uninstall hexo-renderer-marked --save
npm install hexo-renderer-kramed --save

>> themes' _config
enable math


```

<++>




## Backup hexo
<span id="inline-toc">1.</span> `Idea`:
**master**  : Static pages
**hexo**  : Source files

<span id="inline-toc">2.</span> **master**

```
>> hexo's _config.yml
++
deploy:
	type: git
	repo: https://github.com/guangsizhongbin/guangsizhongbin.github.io.git
	branch: master

>> root
hexo clean && hexo g -d
```

<span id="inline-toc">3.</span> **hexo** 

```
>> github 
add new branch hexo

>> root
git clone -b hexo https://github.com/guangsizhongbin/guangsizhongbin.github.io.git

cp `_config.yml`、`themes/`、`source`、`scffolds`、`package.json、.gitignore

rm -rf /themes/next/.git/

git add .

git commit

git push
```



## help

hexo s --- server
hexo g --- generate
hexo d --- deploy
hexo new newpapername --- create a markdown file which names newpapername in _posts 
hexo new page board --- create a filefoder which names board and a markdown file name index 
hexo new draft newpage --- create a markdown file which names newpage.md in _drafts
hexo publish draft newpage --- send the newpage to post
















