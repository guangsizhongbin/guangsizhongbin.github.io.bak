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

sudo pacman -S net-tools

```
# ifconfig
lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 903  bytes 83248 (81.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 903  bytes 83248 (81.2 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

wlp2s0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.103  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 fe80::d867:4afc:2669:aa56  prefixlen 64  scopeid 0x20<link>
        ether d4:25:8b:84:99:d2  txqueuelen 1000  (Ethernet)
        RX packets 1485897  bytes 1946655368 (1.8 GiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 1239346  bytes 183909644 (175.3 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0




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
| 命令 <  文件         | 将文件作为命令的标准输入                     |
| 命令 << 分界符号     | 从标准输入中读入，直到遇见分界符才停止       |
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


## 用户身份与文件权限

### 用户身份

<span id="inline-toc">1.</span> 用户身份：
- 管理员UID为0： 系统的管理员用户
- 系统用户为1~999
- 普通用户UID从1000开始

<span id="inline-toc">2.</span> useradd

| 参数 | 作用                                     |
|------|------------------------------------------|
| - d  | 指定用户的家目录（默认为/home/username） |
| - e  | 账户的到期时间，格式为YYYY-MM-DD.        |
| - u  | 指定该用户的默认id                       |
| - g  | 指定一个出事的用户基本组（必须已存在）   |
| - G  | 指定一个或多个扩展用户组                 |
| - N  | 不创建与用户同名的基本用户组             |
| - s  | 指定该用户的默认Shell 解释器             |

```
# useradd -d /home/linux -u 8888 -s /sbin/nologin linuxprobe
# id feng
uid=1000(feng) gid=1000(feng) groups=1000(feng),998(wheel)
```

<span id="inline-toc">3.</span> groupadd
group [ 选项 ] 群组名

<span id="inline-toc">4.</span> usermod

| 参数    | 作用                                                               |
|---------|--------------------------------------------------------------------|
| - c     | 填写用户账户的备注信息                                             |
| - d - m | 参数-m与参数-d连用，可重新指定用户的家目录并自动把旧的数据转移过去 |
| - e     | 账户的到期时间，格式为YYYY-MM-DD                                   |
| - g     | 变更所属用户组                                                     |
| - G     | 变更扩展用户组                                                     |
| - L     | 锁定用户禁止其登录系统                                             |
| - U     | 解锁用户，允许其登录系统                                           |
| - s     | 变更默认终端                                                       |
| - u     | 修改用户的UID                                                      |

```
➜  ~ id feng
uid=1000(feng) gid=1000(feng) groups=1000(feng),998(wheel)
➜  ~ sudo usermod -G root feng
➜  ~ id feng
uid=1000(feng) gid=1000(feng) groups=1000(feng),0(root)
```

<span id="inline-toc">5.</span> passwd
passwd [选项] [用户名]

| 参数    | 作用                                                   |
|---------|--------------------------------------------------------|
| - l     | 锁定用户，禁止其登录                                   |
| - u     | 解除锁定，允许用户登录                                 |
| --stdin | 允许通过标准输入修改用户密码，                         |
| - d     | 使该用户可用空密码登录系统                             |
| - e     | 强制用户在下次登录时修改密码                           |
| - S     | 显示用户的密码是否被锁定，以及密码所采用的加密算法名称 |

```
# passwd -l feng
```


<span id="inline-toc">6.</span> userdel
userdel [选项] 用户名

| 参数 | 作用                     |
|------+--------------------------|
| -f   | 强制删除用户             |
| -r   | 同时删除用户及用户家目录 |

```
# userdel -r feng
```



### 文件权限与归属
-: 普通文件
d: 目录文件
l: 链表文件
b: 块设备文件
c: 字符设备文件
p: 管道文件

### 文件的特殊权限
<span id="inline-toc">1.</span> SUID
对二进制程序进行设置的特殊权限，可以让二进制程序的执行者临时拥有属主的权限。

```
➜  ~ ls -l /etc/shadow
-rw------- 1 root root 788 Feb 27 13:25 /etc/shadow
➜  ~ ls -l /bin/passwd 
-rwsr-xr-x 1 root root 63640 Feb  4 20:31 /bin/passwd
```
使用passwd命令时如果加上SUID特殊权限位，就可让普通用户临时获得程序所有这身份，把变更的密码信息写入到shadow文件中。

<span id="inline-toc">2.</span> SGID
让执行者实现如下两种功能
1. 让执行者临时拥有属组的权限（对拥有执行权限的二进制程序进行设置）
2. 在某个目录中创建的文件自动继承该目录的用户组（只可以对目录进行设置）

<span id="inline-toc">3.</span> SBIT
当对某个目录设置了SBIT位权限后，那么该目录中的文件就只能被其所有这执行删除操作了。

### 文件的隐藏属性
<span id="inline-toc">1.</span> chattr
用于设置文件的隐藏权限

| 参数                                                                                           | 作用                                                                                  |
| ------|--------------------------------------------------------------------------------------- |
| i                                                                                              | 无法对文件修改；若对目录设置了该参数，则仅能修改其中的子文件内容而不能新建或删除文件 |
| a                                                                                              | 仅允许补充（追加）内容，无法覆盖、删除内容（Append Only）                             |
| S                                                                                              | 文件内容在变更后立即同步到硬盘（sync）                                                |
| s                                                                                              | 彻底从硬盘中删除，不可回复（用0填充原文件所在硬盘区域）                               |
| A                                                                                              | 不再修改这个文件或目录的最后访问时间（atime）                                         |
| b                                                                                              | 不再修改文件或目录的存取时间                                                          |
| D                                                                                              | 检查压缩文件中的错误                                                                  |
| d                                                                                              | 使用dump命令备份时忽略本文件、目录                                                    |
| c                                                                                              | 默认将文件或目录进行压缩                                                              |
| u                                                                                              | 当删除该文件后依然保留其在硬盘中的数据，方便日后恢复                                  |
| t                                                                                              | 让文件系统支持尾部合并（tail-merging）                                                |
| x                                                                                              | 可以直接访问压缩文件中的内容                                                          |

```
[root@feng feng]# chattr +a linuxprobe 
[root@feng feng]# rm linuxprobe 
rm: cannot remove 'linuxprobe': Operation not permitted
```

<span id="inline-toc">2.</span> lsattr
需要使用lsattr命令，文件的隐藏权限才能看到

```
[root@feng feng]# lsattr linuxprobe 
-----a--------e----- linuxprobe
```


### 文件访问控制列表
指定某一类用户设置权限。
<span id="inline-toc">1.</span> setfacl
-R 针对目录文件
-m 针对普通文件
-b 删除某个文件的ACL

```
[root@feng feng]# setfacl -Rm u:feng:rwx /root
[root@feng feng]# ls -ld /root/
drwxrwx---+ 10 root root 4096 Feb 27 13:24 /root/
```
文件的权限(+),这就意味着该文件已经设置了ACL了。

<span id="inline-toc">2.</span> getfacl

```
➜  ~ getfacl /root 
getfacl: Removing leading '/' from absolute path names
# file: root
# owner: root
# group: root
user::rwx
user:feng:rwx
group::r-x
mask::rwx
other::---
```

## 存储结构与磁盘划分

**Linux 系统中常见的目录名称以及相应内容**

| 目录名称     | 应放置文件的内容                                            |
|--------------|-------------------------------------------------------------|
| /boot        | 开机所需文件--内核、开机菜单以及所需配置文件等              |
| /dev         | 以文件形式存放任何设备与接口                                |
| /etc         | 配置文件                                                    |
| /home        | 用户家目录                                                  |
| /bin         | 存放单用户模式下还可以操作的命令                            |
| /lib         | 开机时用到的函数库，以及/bin 与/sbin 下面的命令要调用的函数 |
| /sbin        | 开机过程中需要的命令                                        |
| /media       | 用于挂载设备文件的目录                                      |
| /opt         | 放置第三方的软件                                            |
| /root        | 系统管理员的家目录                                          |
| /srv         | 一些网络服务的数据文件目录                                  |
| /tmp         | 任何人均可使用的"共享"临时目录                              |
| /proc        | 虚拟文件系统，例如系统内核、进程、外部设备及网络状态等      |
| /usr/local   | 用户自行安装的软件                                          |
| /usr/sbin    | Linux 系统开机时不会用到的软件、命令、脚本                  |
| /usr/share   | 帮助与说明文件，也可放置共享文件                            |  | /var | 主要存放经常变化的文件，如日志 |
| /lost+found/ | 当文件系统发生错误是，将一些丢失的片段存放在这里            |



### 物理设备的命名规则

| 硬件设备      | 文件名称           |
|---------------|--------------------|
| IDE设备       | /dev/hd[a-d]       |
| SCSI/SATA/U盘 | /dev/sd[a-p]       |
| 软驱          | /dev/fd[0-1]       |
| 打印机        | /dev/lp[0-15]      |
| 光驱          | /dev/cdrom         |
| 鼠标          | /dev/mouse         |
| 磁带机        | /dev/st0或/dev/ht0 |

![](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200227160340.png) 
/dev/ 目录中保存的应当是硬件设备文件
sd 表示存储设备
a 表示系统中同类接口中第一个被识别到的设备
5 表示这个设备是一个逻辑分区
/dev/sda5 这是系统中第一块被识别到的硬件设备中分区编号为5的逻辑分区的设备文件

<span id="inline-toc">1.</span> mount

| 参数 | 作用                               |
|------|------------------------------------|
| -a   | 挂载所在/etc/fstab中定义的文件系统 |
| -t   | 指定文件系统的类型                 |


**/etc/fstab** 

| 字段     | 意义                                                                     |
|----------|--------------------------------------------------------------------------|
| 设备文件 | 一般为设备的路径+设备名称，也可以些唯一的识别码（UUID）                  |
| 挂载目录 | 指定要挂载到的目录，需在挂载钱创建好                                     |
| 格式类型 | 指定文件系统的格式                                                       |
| 权限选项 | 若设置为defaults, 则默认权限为：rw, suid, dev, exec, auto, nouser, async |
| 自检     | 若为1则开机后进行磁盘自检，为0则不自检                                   |
| 优先级   | 若“自检”字段为1，则可对多块磁盘进行自检优先设置                          |


<span id="inline-toc">2.</span> umout


<span id="inline-toc">3.</span> fdisk


<span id="inline-toc">4.</span> du

```
➜  ~ du -sh /boot
82M     /boot
```




<span id="inline-toc">5.</span> edquota
sudo pacman -S quota-tools

限制用户的硬盘可用容量或所能创建的最大文件个数

-u 表示针对哪个用户进行设置
-g 表示要对哪个用户组进行设置



<span id="inline-toc">6.</span> ln

| 参数 | 作用                                               |
|------|----------------------------------------------------|
| -s   | 创建"符号链接"（如果不带-s参数，则默认创建硬链接） |
| -f   | 强制创建文件或目录的链接                           |
| -i   | 覆盖前先询问                                       |
| -v   | 显示创建链接的过程                                 |
