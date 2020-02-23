---
title: linux
date: 2020-02-21 18:22:33
description:
tags:
	- linux
categories:
	- linux
urlname: linux
image:
---
《linux 就该这么学》

<!--more-->

## 常用系统命令
<span id="inline-toc">1.</span> man
? 从下至上搜索关键词

<span id="inline-toc">2.</span> echo
```
# echo $SHELL

/usr/bin/zsh
```

<span id="inline-toc">3.</span> date

```
# date "+%Y-%m-%d %H:%M:%S"

date "+%Y-%m-%d %H:%M:%S"
2020-02-21 18:28:30
```
<span id="inline-toc">4.</span> reboot

<span id="inline-toc">5.</span> poweroff

<span id="inline-toc">6.</span> wget

| 参数 | 作用                                 |
|------|--------------------------------------|
| - b  | 后台下载模式                         |
| - P  | 下载到指定目录                       |
| - t  | 最大尝试次数                         |
| - p  | 下载页面内所有资源，包括图片、视频等 |
| - r  | 递归下载                             |

<span id="inline-toc">7.</span> ps

```
# ps aux
```
<span id="inline-toc">8.</span> top

<span id="inline-toc">9.</span> pidof

**显示某个指定服务进程的PID** 
```
# pidof trojan
1414
```

<span id="inline-toc">10.</span> kill
kill [参数][进程PID]

<span id="inline-toc">11.</span> killall
killall [参数][进程名称]

## 系统状态检测命令
<span id="inline-toc">1.</span> ifconfig

```
# ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<hos
t>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 21557  bytes 38847491 (37.0 MiB
)
        RX errors 0  dropped 0  overruns 0  frame 
0
        TX packets 21557  bytes 38847491 (37.0 MiB
)
        TX errors 0  dropped 0 overruns 0  carrier
 0  collisions 0

wlp2s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>
  mtu 1500
        inet 192.168.0.101  netmask 255.255.255.0 
 broadcast 192.168.0.255
        inet6 fe80::1b6a:9567:5536:d3c1  prefixlen
 64  scopeid 0x20<link>
        ether d4:25:8b:84:99:d2  txqueuelen 1000  
(Ethernet)
        RX packets 47339  bytes 61312431 (58.4 MiB
)
        RX errors 0  dropped 0  overruns 0  frame 
0
        TX packets 25363  bytes 2978054 (2.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier
 0  collisions 0
```

<span id="inline-toc">2.</span> uname

```
# uname -a
Linux feng 5.5.4-arch1-1 #1 SMP PREEMPT Sat, 15 Feb 2020 00:36:29 +0000 x86_64 GNU/Linux
```

<span id="inline-toc">3.</span> uptime

```
# uptime
 19:08:39 up  1:00,  7 users,  load average: 0.46, 0.55, 0.43
```

<span id="inline-toc">4.</span> free

```
# free -h
              总计         已用        空闲      共享    缓冲/缓存    可用
内存：       7.7Gi       1.7Gi       4.2Gi       314Mi       1.7Gi       5.4Gi
交换：          0B          0B          0B
```

<span id="inline-toc">5.</span> who

```
# who
feng     tty1         2020-02-21 18:09 (:0)
feng     pts/0        2020-02-21 18:09 (:0)
feng     pts/1        2020-02-21 18:10 (:0)
feng     pts/2        2020-02-21 18:18 (:0)
feng     pts/3        2020-02-21 19:04 (:0)
feng     pts/4        2020-02-21 19:00 (:0)
```

<span id="inline-toc">6.</span> last
查看所有系统的登录记录

<span id="inline-toc">7.</span> history
显示出当前用户在本地计算机中执行过的最近1000条命令记录。

## 工作目录切换命令
<span id="inline-toc">1.</span> pwd

<span id="inline-toc">2.</span> cd

<span id="inline-toc">3.</span> ls

## 文件编辑命令
<span id="inline-toc">1.</span> cat
-n 显示行号

<span id="inline-toc">2.</span> more
空格回车向下翻页

<span id="inline-toc">3.</span> head
head -n 20

<span id="inline-toc">4.</span> tail
tail -n 20

tail -f 持续刷新

<span id="inline-toc">5.</span> tr
替换文本中的一些词汇

cat xxx.cf | tr [a-z] [A-Z]

<span id="inline-toc">6.</span> wc
**统计指定文本的行数、字数、字节数**

| 参数 | 作用         |
|------|--------------|
| -l   | 只显示行数   |
| -w   | 只显示单词数 |
| -c   | 只显示字节数 |

<span id="inline-toc">7.</span> stat
用于查看文件的具体存储信息和时间等信息。

```
  文件：blog
  大小：4096            块：8          IO 块：4096   目录
设备：802h/2050d        Inode：12590930    硬链接：24
权限：(0755/drwxr-xr-x)  Uid：( 1000/    feng)   Gid：( 1000/    feng)
最近访问：2020-02-21 10:05:25.992278525 +0800
最近更改：2020-02-21 10:04:57.989327115 +0800
最近改动：2020-02-21 10:04:57.989327115 +0800
创建时间：2020-02-18 09:10:08.235778039 +0800
```

<span id="inline-toc">8.</span> cut
用于按列提取文本字符
-f 设置需要的列数
-d 设置间隔符号

```
#head -d: -f1 /etc/passwd
root:x:0:0::/root:/bin/bash
bin:x:1:1::/:/usr/bin/nologin

#cut -d: -f1 /etc/passwd
root
bin
daemon
mail
ftp
http
nobody
dbus
systemd-journal-remote
systemd-network
systemd-resolve
systemd-timesync
systemd-coredump
uuidd
polkitd
avahi
colord
rtkit
sddm
usbmux
feng
git
geoclue
```


<span id="inline-toc">9.</span> diff
```
diff --brief 1024.c 2048.c
文件 1024.c 和 2048.c 不同

diff -c 1024.c 20148.c
描述文件内容具体的不同
```

## 文件目录管理命令
<span id="inline-toc">1.</span> touch

| 参数 | 作用                    |
|------|-------------------------|
| - a  | 仅修改“读取时间”(atime) |
| - m  | 仅修改“修改时间”(mtime) |
| - d  | 同事修改 atime 与 mtime |

```
touch -d "2017-05-04 15:44" 1024.c
ls -l 1024.c
-rw-r--r-- 1 feng feng 2020  5月  4  2017 1024.c
```

<span id="inline-toc">2.</span> mkdir
-p 可以创建出具有嵌套叠层关系目录。

<span id="inline-toc">3.</span> cp
cp [选项] 源文件 目标文件

| 参数 | 作用                                         |
|------|----------------------------------------------|
| -p   | 保留原始文件的属性                           |
| -d   | 若对象为“链接文件”，则保留该“链接文件”的属性 |
| -r   | 递归持续复制（用于目录）                     |
| -i   | 若目标文件存在则询问是否覆盖                 |
| -a   | 相当于-pdr(p.d.r为上述参数)                  |

<span id="inline-toc">4.</span> mv
mv [选项] 源文件 [目标路径|目标文件名]

<span id="inline-toc">5.</span> rm
-f 强制删除
-r 删除文件夹

<span id="inline-toc">6.</span> dd
按照大小和个数的数据块来复制文件或转换文件

| 参数  | 作用                 |
|-------|----------------------|
| if    | 输入的文件名称       |
| of    | 输出的文件名称       |
| bs    | 设置每个“块”的大小   |
| count | 设置要复制“块”的个数 |

```
dd if=/dev/zero of=1G_file count=1 bs=1G
记录了1+0 的读入
记录了1+0 的写出
1073741824 bytes (1.1 GB, 1.0 GiB) copied, 1.58115 s, 679 MB/s
```

<span id="inline-toc">7.</span> file
```
file 1024.c 
1024.c: C source, UTF-8 Unicode text
```

## 打包压缩与搜索命令
<span id="inline-toc">1.</span> tar

| 参数 | 作用                   |
|------|------------------------|
| -c   | 创建压缩文件           |
| -x   | 解开压缩文件           |
| -t   | 查看压缩包内有哪些文件 |
| -z   | 用Gzip压缩或解压       |
| -j   | 用bzip2压缩或解压      |
| -v   | 显示压缩或解压的过程   |
| -f   | 目标文件名             |
| -p   | 保留原始的权限与属性   |
| -P   | 使用绝对路径来压缩     |
| -C   | 指定解压到的目录       |

`tar -czvf 压缩包名称.tar.gz 要打包的目录`
`tar -xzvf 压缩包名称.tar.gz`


<span id="inline-toc">2.</span> grep

| 参数 | 作用                                           |
|------|------------------------------------------------|
| -b   | 将可执行文件（binary）当作文本文件(text)来搜索 |
| -c   | 仅显示找到的行数                               |
| -i   | 忽略大小写                                     |
| -n   | 显示换号                                       |
| -v   | 反向选择--仅列出没有“关键词”的行               |

```
grep /bin/nologin /etc/passwd
nobody:x:65534:65534:Nobody:/:/usr/bin/nologin
dbus:x:81:81:System Message Bus:/:/usr/bin/nologin
systemd-journal-remote:x:982:982:systemd Journal Remote:/:/usr/bin/nologin
```

<span id="inline-toc">3.</span> find

| 参数               | 作用                                                                                   |
|--------------------|----------------------------------------------------------------------------------------|
| -name              | 匹配名称                                                                               |
| -perm              | 匹配权限（mode 为完全匹配 -mode为包含即可）                                            |
| -user              | 匹配所有者                                                                             |
| -group             | 匹配所有组                                                                             |
| -mtime -n +n       | 匹配修改内容的时间（-n 指n天以内，+n指n天以前）                                        |
| -atime -n +n       | 匹配访问文件的时间（-n 指n天以内，+n指n天以前）                                        |
| -ctime -n +n       | 匹配修改文件权限的时间（-n 指n天以内，+n指n天以前）                                    |
| -nouser            | 匹配无所有者的文件                                                                     |
| -nogroup           | 匹配无所有组的文件                                                                     |
| -newer f1 !f2      | 匹配比文件f1新但比f2旧的文件                                                           |
| --type b/d/c/p/l/f | 匹配文件类型（后面的字母参数一次表示块设备，目录，字符设备，管道，链接文件，文本文件） |
| -size              | 匹配文件的大小（+50KB为查找超过50KB的文件，而-50KB为查找小于50KB的文件）               |
| -prune             | 忽略某个目录                                                                           |
| -exec ......{}\;   | 后面可跟进一步处理搜索结果的命令                                                       |

```
# find / -user feng -exec cp -a {} ~/findresults/ \;
```

## 管道符、重定向与环境变量

### 重定向
标准输入重定向：STDIN (文件描述符为0)
标准输出重定向：STDOUT (文件符号为1)
标准输出错误重定向: STDERR (文件符号为2)

**输入重定向** 
| 符号                 | 作用                                         |
|----------------------|----------------------------------------------|
| 命令 >  文件         | 将文件作为命令的标准输入                     |
| 命令 >> 分界符号     | 从标准输入中读入，直到遇见分界符才停止       |
| 命令 < 文件1 > 文件2 | 将文件1作为命令的标准输入，并标准输出到文件2 |

**输出重定向** 
| 符号         | 作用                                 |
|--------------|--------------------------------------|
| 命令 > 文件  | 标准输出重定向到一个文件             |
| 命令2> 文件  | 将错误输出到一个文件中               |
| 命令 >> 文件 | 标准输入重定向到一个文件(追加)       |
| 命令2>> 文件 | 将错误输出到一个文件中(追加)         |
| 命令&>> 文件 | 将标准输出和错误输出共同写入到文件中 |


### 管道符
**把前一个命令将要输出到屏幕的数据当作是后一个命令的标准输入** 

### 环境变量
[0-9] 匹配0-9
? 匹配单个字符

## vim && shell
### vim
?字符串 自下而上的搜索
/字符串 自上而下的搜索

### shell
$0 shell脚本名称
$* 所有位置的参数值
$# 总共有几个参数
$? 显示上一命令执行的返回值

&& 逻辑与
|| 逻辑或
！ 逻辑非

```
\# [ ! $USER = root ] && echo "user" || echo "root"

user
```


**整数运算比较**
| 运算符 | 作用       |
|--------|------------|
| -eq    | 是否等于   |
| -ne    | 是否不等于 |
| -gt    | 是否大于   |
| -lt    | 是否小于   |
| -le    | 小于等于   |
| -ge    | 大于等于   |

**字符串比较运算符**
| 运算符 | 作用                   |
|--------|------------------------|
| =      | 比较字符串内容是否相同 |
| !=     | 比较字符串内容是否不同 |
| -z     | 字符串内容是否为空     |

**判断ip是否能够连的通**
```bash
\#!/bin/bash
ping -c 3 -i 0.2 -w 3 $1 &> /dev/null
if [ $? -eq 0 ]
then
echo "Host $1 is on-line."
else
echo "Host $1 is off-line."
fi
```

**判断用户是否存在，不存在则添加用户**
```bash
\#!/bin/bash
read -p "Enter The Users Password:" PASSWD
for UNAME in 'cat users.txt'
do
id $UNAME &> /dev/null
if [ $? -eq 0 ]
then
echo "Already exists"
else
useradd $UNAME &> /dev/null
echo "$PASSWD" | passwd --stdin $UNAME &> /dev/null
if [ $? -eq 0 ]
then
echo "$UNAME, Create success"
else
echo "$UNAME, Create failure"
fi
fi
done
```

## crontab
sudo pacman -S cronie
systemctl enable cronie.service
systemctl start cronie.service

"分、时、日、月、星期 命令"

```
# crontab -e
1 * * * * * echo "hello" > /home/feng/abc.txt
```

所有命令使用绝对路径
