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
| - d  | 同时修改 atime 与 mtime |

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
# [ ! $USER = root ] && echo "user" || echo "root"

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
#!/bin/bash
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
#!/bin/bash
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
| - g  | 指定一个初始的用户基本组（必须已存在）   |
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
|------|--------------------------|
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
| /usr/share   | 帮助与说明文件，也可放置共享文件                            | 
| /var | 主要存放经常变化的文件，如日志 |
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


## 使用RAID与LVM磁盘阵列技术
**RAID** 独立冗余磁盘阵列技术方案的特性，并通过实际部署RAID10，RAID5+备份盘等方案来更直观地查看RAID的强大效果，以便进一步满足生存环境对磁盘设备IO读写速度与数据冗余备份机制的需求。

### RAID（独立冗余磁盘阵列）
RAID 0: 把两块物理磁盘设备（至少两块）通过硬件或软件的方式串联在一起，组成一个大的卷组，并将数据依次写入到各个物理硬盘中。这样依赖，在最理想的状态下，硬盘设备的读写性能会提升数倍，但是若任意一块硬盘发生故障将导致整个系统的数据都受到破坏。
![](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200305092538.png)

RAID 1: 它是把两块以上的硬盘设备进行绑定，在写入数据时，是将数据同时写入到多块硬盘设备上。当其中一块硬盘发生故障后，一般会立即自动以热交换的方式来恢复数据的正常使用。
![](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200305091029.png)

RAID 5： (兼顾读写速度，数据安全性，成本)是把磁盘设备的奇偶效验信息保存到其他硬盘设备中。RAID5磁盘阵列组中的数据的奇偶效验信息并不是单独保存到某一块硬盘设备中，而是存储到除自身意外的其他每一块硬盘设备上，这样的好处是其中任何一设备损坏后不至于出现致命缺陷。
![](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200305091553.png)

RAID 10: 是RAID1和RAID0技术的一个组合体。 RAID10技术需要至少4块硬盘来组建，其中先分别两两制作成RAID1磁盘整列，以保证数据的安全性，然后再对两个RAID1磁盘阵列实施RAID0技术，进一步提高硬盘设备的读写。从理论上来将，只要坏的不是同一组的所有硬盘，那么最多可以损坏50%的硬盘设备而不丢失数据。
![](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200305091920.png)


### 部署磁盘阵列

**mdadm** 用于管理Linux系统中的软件RAID磁盘阵列.
mdadm[模式]<RAID 设备名称>[选项][成员设备名称]

**mdadm命令的常用参数和作用** 

| 参数 | 作用             |
|------|------------------|
| -a   | 检测设备名称     |
| -n   | 指定设备数量     |
| -l   | 指定RAID级别     |
| -C   | 创建             |
| -v   | 显示过程         |
| -f   | 模拟设备损坏     |
| -r   | 移除设备         |
| -Q   | 查看摘要信息     |
| -D   | 查看详细信息     |
| -S   | 停止RAID磁盘阵列 |


<span id="inline-toc">1.</span> 使用mdadm命令创建RAID 10，名称为"/dev/md0"

`mdadm -Cv /dev/md0 -a yes -n 4 -l 10 /dev/sdb /dev/sdc /dev/sdd /dev/sde`

<span id="inline-toc">2.</span> 把制作号的RAID磁盘整列格式化为ext4格式。

`mkfs.ext4 /dev/md0`

<span id="inline-toc">3.</span> 创建挂载点然后把磁盘设备进行挂载操作

```
mkdir /RAID
mount /dev/md0 /RAID
df -h
```

<span id="inline-toc">4.</span> 查看/dev/md0磁盘阵列的详细信息，并把挂载信息写入到配置文件中，并把挂载信息写入到配置文件中，使其永久生效。

```
madadm -D /dev/md0

echo "/dev/md0 /RAID ext4 defaults 0 0" >> /etc/fstab
```

### 损坏磁盘整列及修复

**模拟设备损坏** 

```
mdadm /dev/md0 -f /dev/sdb

madam -D /dev/md0
/dev/md0:
        Version : 1.2
  Creation Time : Thu Mar  5 09:58:27 2020
     Raid Level : raid10
     Array Size : 4191232 (4.00 GiB 4.29 GB)
  Used Dev Size : 2095616 (2046.84 MiB 2145.91 MB)
   Raid Devices : 4
  Total Devices : 4
    Persistence : Superblock is persistent

    Update Time : Thu Mar  5 10:07:51 2020
          State : clean, degraded 
 Active Devices : 3
Working Devices : 3
 Failed Devices : 1
  Spare Devices : 0

         Layout : near=2
     Chunk Size : 512K

           Name : localhost.localdomain:0  (local to host localhost.localdomain)
           UUID : bdf4a631:f2a3651f:32d0fc2c:01dd60fe
         Events : 19

    Number   Major   Minor   RaidDevice State
       0       0        0        0      removed
       1       8       32        1      active sync   /dev/sdc
       2       8       48        2      active sync   /dev/sdd
       3       8       64        3      active sync   /dev/sde

       0       8       16        -      faulty   /dev/sdb

```

**重启系统，然后再把新的硬盘添加到RAID磁盘阵列中**

```
umount /RAID
mdadm /dev/md0 0a /dev/sdb
mdadm -D /dev/md0
/dev/md0:
        Version : 1.2
  Creation Time : Thu Mar  5 09:58:27 2020
     Raid Level : raid10
     Array Size : 4191232 (4.00 GiB 4.29 GB)
  Used Dev Size : 2095616 (2046.84 MiB 2145.91 MB)
   Raid Devices : 4
  Total Devices : 4
    Persistence : Superblock is persistent

    Update Time : Thu Mar  5 10:13:07 2020
          State : clean 
 Active Devices : 4
Working Devices : 4
 Failed Devices : 0
  Spare Devices : 0

         Layout : near=2
     Chunk Size : 512K

           Name : localhost.localdomain:0  (local to host localhost.localdomain)
           UUID : bdf4a631:f2a3651f:32d0fc2c:01dd60fe
         Events : 46

    Number   Major   Minor   RaidDevice State
       4       8       16        0      active sync   /dev/sdb
       1       8       32        1      active sync   /dev/sdc
       2       8       48        2      active sync   /dev/sdd
       3       8       64        3      active sync   /dev/sde

mount -a
```

### 磁盘阵列+备份盘


```
// -n 3 代表创建这个RAID5磁盘阵列所需的硬盘数
// -l 5 代表RAID 级别
// -x -l 代表有一块备份盘
mdadm -Cv /dev/md1 -n 3 -l 5 -x 1 /dev/sdb /dev/sdc/ dev/sdd /dev/sde

// 查看磁盘阵列
mdadm -D /dev/md0

// 格式化
mkfs.ext4 /dev/md0

// 自动挂载
echo "/dev/md0 ext4 defaults 0 0" >> /etc/fstab
mkdir /RAID
mount -a
```

**测试**

```
// 将/dev/sdb移除磁盘阵列
mdadm /dev/md0 -f /dev/sdb

mdadm -D /dev/md0

```

### LVM (逻辑卷)
LVM 可以允许用户对磁盘资源进行动态调整.

物理卷(PV Physical Volume)： 处于LVM中的最底层，可以将其理解为物理硬盘，硬盘分区或者RAID磁盘阵列。
卷组(VG Volume Group)： 建立在物理卷之上，一个卷组可以包含多个物理卷，而且在卷组创建之后也可以继续向其中添加新的物理卷.
逻辑卷(PE Physical Extent)： 使用卷组中空闲的资源建立的，并且逻辑卷在建立后可以动态地扩展或缩小空间.

**部署逻辑卷**

**常用的LVM部署命令** 

| 功能/命令 | 物理卷管理 | 卷组管理  | 逻辑卷管理 |
|-----------|------------|-----------|------------|
| 扫描      | pvscan     | vgscan    | lvscan     |
| 建立      | pvcreate   | vgcreate  | lvcreate   |
| 显示      | pvdisplay  | vgdisplay | lvdisplay  |
| 删除      | pvremove   | vgremove  | lvremove   |
| 扩展      |            | vgextend  | lvextend   |
| 缩小      |            | vgreduce  | lvreduce   |



<span id="inline-toc">1.</span> 让新添加的两块磁盘设备支持LVM技术

```
pvcreate /dev/sdb /dev/sdc
```

<span id="inline-toc">2.</span> 把两块硬盘设备加入到storage卷组中，然后查看卷组的状态。

```
vgcreate storage /dev/sdb /dev/sdc

vgdisplay
```

<span id="inline-toc">3.</span> 切割出一个约150MB的逻辑卷设备

在对逻辑卷进行切割时有两种计量单位
1. 以容量为单位，所使用的参数为-L。 
	例如，使用-L 150M 生成一个大小为150MB的逻辑卷。

2. 一种是以基本单元的个数为单位，所使用的参数为-l, 每个基本单元的大小默认为4MB.

```
lvcreate -n vo -l 37 storage

lvdisplay
```

<span id="inline-toc">4.</span> 把生成好的逻辑卷进行格式化，然后挂载使用

```
mkfs.ext4 /dev/storage/vo

mkdir /linuxprobe
mount /dev/storage/vo /linuxprobe

df -h

echo "/dev/storage/vo /linuxprobe ext4 defaults 0 0" >> /etc/fstab
```

### 扩容逻辑卷

```
umount /linuxprobe
// 扩容
lvextend -L 290M /dev/storage/vo
// 检查硬盘完整性
e2fsck -f /dev/storage/vo
// 重置硬盘容量
resize2fs /dev/storage/vo
// 重新挂载硬盘设备并查看挂载状态
mount -a
df -h
```

### 缩小逻辑卷
在生产环境中执行缩小逻辑卷操作时，一定要提前备份好数据。另外Linux系统规定，在对LVM逻辑卷进行缩容操作之前，先要检查文件系统的完整性.
```
umount /linuxprobe
// 检查文件系统的完整性。
e2fsck -f /dev/storage/vo
// 把逻辑卷vo的容量减小到120M
resize2fs /dev/storage/vo 120M
lvreduce -L 120M /dev/storage/vo

// 重新挂载文件系统并查看系统状态
mount -a
df -h
```

### 逻辑卷快照
LVM的快照卷功能的特点：
- 快照卷的容量必须等同于逻辑卷的容量
- 快照卷仅一次有效，一旦执行还原操作后则会被立即自动删除

<span id="inline-toc">1.</span> 使用-s参数生成一个快照卷，使用-L参数指定切割的大小。另外，还需要在命令后面写上是针对哪个逻辑卷执行的快照操作。

```
lvcreate -L 120M -s -n SNAP /dev/storage/vo
lvdisplay
```

<span id="inline-toc">2.</span> 在逻辑卷所挂载的目录中创建一个100MB的垃圾文件，然后再查看快照卷的状态，可以发现存储空间占的用量上升了。

```
dd if=/dev/zero of=/linuxprobe/files count=1 bs=100M
lvdisplay
```

<span id="inline-toc">3.</span> 为了效验SNAP快照卷的效果，需要对逻辑卷进行快照还原操作。再次之前记得先卸载卷设备与目录的挂载。

```
umount /linuxprobe
lvconvert --merge /dev/storage/SNAP
```

<span id="inline-toc">4.</span> 快照卷会被自动删除掉，并且刚刚在逻辑卷设备被执行快照操作后再创建出来的100MB的垃圾文件也被删除了。

```
mount -a
ls /linuxprobe/
lost+found  readme.txt
```

### 删除逻辑卷

<span id="inline-toc">1.</span> 取消逻辑卷与目录的挂载关联，删除配置文件中永久生效的设备参数。

```
umount /linuxprobe
vim /etc/fstab
```

<span id="inline-toc">2.</span> 删除逻辑卷设备，需要输入y来确认操作

```
lvremove /dev/storage/vo
```

<span id="inline-toc">3.</span> 删除卷组，此处只要些卷组名称即可，不需要设备的绝对路径

```
vgremove storage
```

<span id="inline-toc">4.</span> 删除物理卷设备

```
pvremove /dev/sdb /dev/sdc
```



## Apache
### 安装Apache

```
1. 将光盘设备中的系统镜像挂载到/media/cdrom目录。
mkdir -p /media/cdrom
mount /dev/cdrom /media/cdrom

2. 使用Vim 创建仓库的配置文件
vim /etc/yum.repos.d/rhe17.repo
[rhe17]
name=rhe17
baseurl=file:///media/cdrom
enabled=1
gpgcheck=0

3. 安装Apache服务程序
yum install httpd

4. 启动httpd服务程序
systemd start httpd
systemd enable httpd
```


### 配置服务文件参数

**Linux 系统中的配置文件** 

| 配置文件的名称 | 存放位置                  |
|----------------|---------------------------|
| 服务目录       | /etc/httpd                |
| 主配置目录     | /etc/httpd/conf/httpd.cof |
| 网站数据目录   | /var/www/html             |
| 访问日志       | /var/log/httpd/access_log |
| 错误日志       | /var/log/httpd/error_log  |


**配置httpd服务程序时最常用的参数以及用途描述** 

| 参数           | 用途                      |
|----------------|---------------------------|
| ServerRoot     | 服务目录                  |
| ServerAdmin    | 服务员邮箱                |
| User           | 运行服务的用户            |
| Group          | 允许服务的用户组          |
| ServerName     | 网站服务器的域名          |
| DocumetRoot    | 网站数据目录              |
| Directory      | 网站数据目录的权限        |
| Listen         | 监听的IP地址与端口号      |
| DirectoryIndex | 默认的索引页页面          |
| ErrorLog       | 错误日志文件              |
| Timeout        | 网页超时时间，默认为300秒 |


### SELinux 安全子系统
使用此系统的目的是，让各个服务进程都受到约束，使其仅获取到本应获取的资源。

**SELinux服务有三种配置模式** 

1. enforcing : 强制启用安全策略模式，将拦截服务的不合法请求
2. permissive: 遇到服务越权访问时，只发出警告而不强制拦截。
3. disable: 对于越权的行为不警告也不拦截。


<span id="inline-toc">1.</span> **getenforce**
获取当前SELinux服务的运行模式：

```
# getenforce
Enforcing
```

<span id="inline-toc">2.</span> setenforce

```
setenforce 0 [0 为禁用，1为启用]
```


**原因分析**
`httpd`服务程序的功能是允许用户访问网站的内容，因此SELinux肯定会默认放行用户对网站的请求操作。但是，我们将数据的默认保持目录修改为了`home/wwwroot/` 这就产生了问题了。`home`目录是用来存放普通用户的家目录数据的，而现在，`httpd`提供的网站服务却要获取普通用户家目录中的数据了，这显然违反了SELinux的监管原则。

### semanage
用于管理SELinux的策略，格式为 semanage [选项] [文件]
-l 参数用于查询
-a 参数用于添加
-m 参数用于修改
-d 参数用于删除

```
semanage fcontext -a -t httpd_sys_content_t /home/wwwroot
semanage fcontext -a -t httpd_sys_content_t /home/wwwroot/*
```

**restorecon** 命令将设置好的SELinux安全上下文立即生效。
- Rv 参数对指定的目录进行递归操作。

```
restorecon -Rv /home/wwwroot/
```

### 个人用户主页功能

1. httpd服务程序中，开启个人用户主页功能

``` diff
- userDir disable
+ # userDir disable

- # UserDir public_html 
+ UserDir public_html 
```

2. 在用户家目录中建立用于保持网站数据的目录及首页面文件。另外，还需要把家目录的权限修改为755,保证其他人也有权限读取里面的内容

```
su - feng

mkdir public_html
ehco "This is feng's website" > public_html/index.html

chmod -RF 755 /home/feng
```



3. 重新启动http服务程序
systemctl restart httpd

4. 修改SELinux安全上下文

```
getsebool -a | grep http
```

setsebool 

-P 使修改后的SELinux策略规则永久生效且立即生效。

```
setsebool -P httpd_enable_homedirs=on
```

### 通过身份验证访问网站

1. 使用 htpasswd 命令生成密码数据库
-c 参数表示第一次生成
用户名称（该用户不必是系统中已有的本地账户）

```
htpasswd -c /etc/httpd/passwd feng
```

2. 编辑个人用户主页功能的配置文件

```
vim /etc/httpd/conf.d/userdir.conf

<Directory "/home/*/public_html">
AllowOverride all
# 刚刚生成出来的密码验证文件保持路径
authuserfile "/etc/httpd/passwd"
#当用户尝试访问个人用户网站时的提示信息
authname "My privately website"
authtype basic
#用户进行账户密码登录时需要验证的用户名称
require user feng
</Directory>
```

### 虚拟主机功能
#### 基于IP地址
#### 基于主机域名
#### 基于端口号

### Apache 的访问控制









## iptables 与 firewalld 防火墙

### iptables

**规则** 
在进行路由选择钱处理数据包（PREROUTING）
处理流入的数据包（INPUT）
处理流出的数据包（OUTPUT）
处理转发的数据包（FORWARD）
在进行路由选择后处理数据包（POSTROUTING）

**动作** 
允许流量通过（ACCEPT）
拒绝流量通过（REJECT） 流量发送方会看到端口不可达的响应
记录日志信息（LOG）
拒绝流量通过（DROP）流量方会看到响应超时的提醒，但是流量发送方无法判断流量是被拒绝，还是接收方主机当前不在线

**iptables中常用的参数以及作用** 

| 参数        | 作用                                    |
|-------------|-----------------------------------------|
| -P          | 设置默认策略                            |
| -F          | 清空规则链                              |
| -L          | 查看规则链                              |
| -A          | 在规则链的末尾加入新规则                |
| -I num      | 在规则链的末尾的头部加入新规则          |
| -D num      | 删除某一条规则                          |
| -s          | 匹配来源地址 IP/MASK,加叹号“！”表示IP外 |
| -d          | 匹配目标地址                            |
| -i 网卡名称 | 匹配从这块网卡流入的数据                |
| -o 网卡名称 | 匹配从这块网卡流出的数据                |
| -p          | 匹配协议，如TCP、UDP、ICMP              |
| --dport num | 匹配目标端口号                          |
| --sport num | 匹配来源端口号                          |


## 使用ssh服务管理远程主机
### 配置网络服务
`nmtui`

```
vim /etc/sysconfig/network-scripts/ifcfg-enoxxxx

TYPE=Ethernet 
BOOTPROTO=none 
DEFROUTE=yes 
IPV4_FAILURE_FATAL=no 
IPV6INIT=yes 
IPV6_AUTOCONF=yes 
IPV6_DEFROUTE=yes 
IPV6_FAILURE_FATAL=no 
NAME=eno16777736 
UUID=ec77579b-2ced-481f-9c09-f562b321e268 
ONBOOT=yes
IPADDR0=192.168.10.10
HWADDR=00:0C:29:C4:A4:09 
PREFIX0=24 
IPV6_PEERDNS=yes 
IPV6_PEERROUTES=yes


systemctl restart network
ping -c 4 192.168.10.10
```

### 创建网络会话
`numcli`

```
// 查看网络信息
numcli connection show
// 查看网络状态
numcli coc show enp0s3
```

`connection add con-name type ifname` 创建网络会话。


```
numcli connection add con-name house type ethernet ifname
```

- ifname 参数指定本机的网卡名称
- con-name 参数指定公司所使用的网络会话名称company

### 绑定两块网卡

<span id="inline-toc">1.</span> 在虚拟机系统中添加一块网卡设备，确保两块网卡都处于同一个网络连接（即网卡模式相同）



<span id="inline-toc">2.</span> 使用Vim文本编辑器来配置网卡设备的绑定参数。这些原本独立的网卡设备此时需要被配置成一块"从属"网卡，服务与"主"网卡，不应该再有自己的IP地址等信息。

```
vim /etc/sysconfig/network-scripts/ifcfg-xxx

TYPE=Ethernet
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
DEVICE=xxxx
MASTER=bond0
SLAVE=yes


vim /etc/sysconfig/network-scripts/ifcfg-xxx

TYPE=Ethernet
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
DEVICE=xxxx
MASTER=bond0
SLAVE=yes
```

还需要将绑定后的设备命名为bond0并把IP地址等信息填写进去，这样当用户访问相应服务的时候，实际上就是由这两块设备共同提供服务

```
vim /etc/sysconfig/network-scripts/ifcfg-bond0

TYPE=Ethernet
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
DEVICE=bond0
IPADDR=192.168.56.101
PREFIX=24
DNS=255.255.255.0
NM_CONTROLLED=no
```


<span id="inline-toc">3.</span> 让Linux内核支持网卡绑定驱动。
- mode0 (平衡负载模式): 平时两块均工作，且自动备援，但需要咋与服务器本地网卡相连的交换机设备上进行端口聚合来支持绑定技术。
- mode1 (自动备援模式):平时只有一块网卡工作，在它故障后自动替换另外的网卡.
- mode6 (平衡负载模式): 平时两块网卡均工作，且自动备援，无须交换机设备提供辅助支持。

```
vim /etc/modprode.d/bond.conf
alias bond0 bonding
options bond0 miimon=100 mode=6
```

<span id="inline-toc">4.</span> 重启网络服务后网卡绑定操作即可成功，正常情况下只有bond0网卡设备才会有IP地址等信息。

```
systemctl restart network
ifconfig
```



### 远程传输命令
scp(secure copy) 是一个基于SSH协议在网络之间进行安全传输的命令

**scp命令中可用的参数及作用**

| 参数 | 作用                     |
|------|--------------------------|
| -v   | 显示详细的连接进度       |
| -p   | 指定远程主机的sshd端口号 |
| -r   | 用于传送文件夹           |
| -6   | 使用IPv6协议             |


传送文件到远程服务器

-r 进行递归操作


```
scp ~/readme.txt root@123.57.209.109:/root
readme.txt                                 100%   26     0.7KB/s   00:00  
scp 192.168.10.20:/etc/redhat-release /root
```


### 不间断会话服务

screen 可用实现的功能：
会话恢复： 即便网络中断，也可让会话随时恢复，确保用户不会失去对远程会话的控制
多窗口： 每个会话都是独立运行的，拥有各自独立的输入输出终端窗口，终端窗口内显示过的信息也将被分开隔离保持，以便下次使用依然能看到之前的操作记录。
会话共享： 当多个用户同时登录到远程服务器时，便可以使用会话共享功能让用户之间的输入输出信息共享。


**创建linux会话**
screen -S linux

**查看会话列表**
screen -ls

**恢复会话**
screen -r

**获取远程会话**
screen -x (Attach to a not detached screen session.(Multi display mode))



## vsftpd

Ftp 是一种在互联网中进行文件传输的协议，基于客户端、服务器模式，默认使用20,21号端口。
20 数据端口: 用于进行数据传输。
21 命令端口：用于接受客户端发出的相关FTP命令与参数。

ftp的两种工作模式：
**主动模式** FTP服务器主动向客户端发起连接请求
**被动模式** FTP服务器等待客户端发起连接请求(FTP的默认工作模式)


### 安装

```
sudo pacman -S vsftpd
```

**vsftpd服务程序常用的参数以及作用** 

| 参数                              | 作用                                                         |
|-----------------------------------|--------------------------------------------------------------|
| listen=[YES][NO]                  | 是否以独立允许的方式监听服务                                 |
| listen_address=IP 地址            | 设置要监听的IP地址                                           |
| listen_port=21                    | 设置FTP服务的监听端口                                        |
| download_enable=[YES][NO]         | 是否允许下载文件                                             |
| userlist_enhable=[YES][NO]        | 用户列表“允许"                                               |
| userlist_deny=[YES][NO]           | 用户列表”禁止“                                               |
| max_clients=0                     | 最大客户端连接数，0为不限制                                  |
| max_per_ip=0                      | 同一IP地址的最大连接数，0为不限制                            |
| anonymous_enable=[YES][NO]        | 是否允许匿名用户访问                                         |
| anno_upload_enable=[YES][NO]      | 是否允许匿名用户上传文件                                     |
| anno_umask=022                    | 匿名用户上传文件的umask值                                    |
| anno_root=/var/ftp                | 匿名用户的FTP根目录                                          |
| anno_mkdir_write_enable=[YES][NO] | 是否允许匿名用户创建目录                                     |
| anno_other_write_enable=[YES][NO] | 是否开放匿名用户的其他写入权限（包括重命名，删除等操作权限） |
| anno_max_rate=0                   | 匿名用户的最大传输速率（字节/秒），0为不限制                 |
| local_enable=[YES][NO]            | 是否允许本地用户登录FTP                                      |
| local_umask=022                   | 本地用户上传文件的umask值                                    |
| local_root=/var/ftp               | 本地用户的FTP根目录                                          |
| chroot_local_user=[YES][NO]       | 是否将用户权限禁锢在FTP目录，以确保安全                      |
| local_max_rate=0                  | 本地用户最大传输速率（字节/秒），0为不限制                   |

### vsftpd 服务程序
**匿名开放模式** 是一种最不安全的认证模式，任何人都可以无需密码验证而直接登录到FTP服务器。
**本地用户模式** 是通过Linux系统本地的账户密码信息进行认证的模式,相较于匿名开放模式更安全，而且配置起来也很简单。但是如果被黑客破解了账户的信息，就可以畅通无阻地登录FTP服务器，从而完全控制整台服务器。
**虚拟用户模式** 是这三种模式中最安全的一种认证模式，它需要为FTP服务单独建立用户数据文件，虚拟出用来进行口令验证的账户信息，而这些账户信息在服务器系统中实际上是不存在，仅供FTP服务程序进行认证使用。这样，即使黑客破解了账户信息也无法登录服务器，从而有效降低了破坏范围和影响。


### 匿名开放模式

可以向匿名用户开放的权限参数以及作用

| 参数                        | 作用                               |
|-----------------------------|------------------------------------|
| annoymous_enable=YES        | 允许匿名访问模式                   |
| anno_umask=022              | 匿名用户上传文件的umask值          |
| anno_upload_enable=YES      | 允许匿名用户上传文件               |
| anno_mkdir_write_enable=YES | 允许匿名用户创建目录               |
| anno_other_write_enable=YES | 允许匿名用户修改目录名称或删除目录 |

默认访问目录是`/var/ftp`

**赋权**
chown -Rf ftp /var/ftp/pub


### 本地用户模式

| 参数                | 作用                                             |
|---------------------|--------------------------------------------------|
| annoymous_enable=NO | 静止匿名访问模式                                 |
| local_enable=YES    | 允许本地用户模式                                 |
| write_enable=YES    | 设置可写权限                                     |
| local_umask=022     | 本地用户创建文件的umask值                        |
| userlist_enable=YES | 启用“静止用户名单”,名单文件为ftpusers和user_list |
| userlist_deny=YES   | 开启用户作用名单文件功能                         |


/etc/vsftpd/usr_list

### 虚拟用户模式
1. 创建用于进行FTP认证的用于数据库文件，其中奇数行为账户名，偶数行为密码。

```
cd /etc/vsftpd/

vim vuser.list

db_load -T -t hash -f vuser.list vuser.db
file vuser.db
vuser.db: Berkeley DB (Hash, version 9, native byte-order)

chmod 600 vuser.db
rm -f vuser.list
```


2. 创建vsftpd服务程序用于存储文件的根目录以及虚拟用户的映射的系统本地用户。FTP服务用于存储文件的根目录指的是，当虚拟用户登录后访问的默认位置
	由于Linux系统中的每一个文件都有所有者、所属组属性。例如使用虚拟账户“张三”新建了一个文件，但是系统中找不到账户“张三”,就会导致这个文件的权限出现错误。
	为此，需要再创建一个可以映射到虚拟用户的系统本地用户。简单来说，就是让虚拟用户默认登录到与之有映射关系的这个系统本地用户的家目录中，虚拟用户创建的文件的属性都归属于这个系统本地用户，从而避免Linux系统无法处理虚拟用户所创建文件的属性全系。
	为了方便管理FTP服务器上的数据，可以把这个系统本地的家目录设置为/var目录（该目录用来存放经常发生改变的数据）.并且为了安全起见，我们将这个系统本地用户设置为不允许登录FTP服务器，这不会影响虚拟用户登录，而且还可以避免黑客通过这个系统本地用户进行登录。

```
usradd -d /var/ftproot -s /sbin/nologin virtual
ls -ld /var/ftproot/
  drwx------. 3 virtual virtual 74 Mar  3 11:38 /var/ftproot
chmod -Rf 755 /var/ftproot/
```


3. 建立用于支持虚拟用户的PAM文件
	PAM(可插拔认证模块)是一种认证机制，通过一些动态链接库和统一的API把系统提供的服务与认证方式分开，使得系统管理员可以根据需求灵活调整服务程序的不同认证方式。
	PAM是一组安全机制的模块，系统管理员可以轻易地调整服务程序的认证方式，而不必对应用程序进行修改。PAM采取了分层设计（应用程序层，应用接口层，鉴别模块层）的思想。
![PAM的分层设计结构](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200304101220.png)

```
vim /etc/pam.d/vsftpd.vu

auth required pam_userdb.so db=/etc/vsftpd/vuser
account required pam_userdb.so db=/etc/vsftpd/vuser
```


4. 在vsftpd服务程序的主配置文件中通过 pam_service_name 参数将PAM认证文件的名称修改为 vsftpd.vu, pam作为应用程序层与鉴别模块层的连接纽带，可以让应用程序根据需求灵活地在自身插入所需的鉴别功能模块。当应用程序需要PAM认证时，则需要在应用程序中定义负责认证的PAM配置文件，实现所需的认证功能。

**利用PAM文件进行认证时使用的参数以及作用**

| 参数                       | 作用                                                         |
|----------------------------|--------------------------------------------------------------|
| anonymous_enable=NO        | 禁止匿名开放模式                                             |
| local_enable=YES           | 允许本地用户模式                                             |
| quest_enable=YES           | 开启虚拟用户模式                                             |
| quest_username=virtual     | 指定虚拟用户账户                                             |
| pam_service_name=vsftpd.vu | 指定PAM文件                                                  |
| allow_writeable_chroot=YES | 允许对禁锢的FTP根目录执行写入操作，而且不拒绝用户的登录请求 |

```
vim /etc/vsftpd/vsftpd.conf
```

5. 为虚拟用户设置不同的权限。

```
mkdir /etc/vsftpd/vusers_dir/
cd /etc/vsftpd/vusers_dir/
vim feng

anno_upload_enable=YES
anno_mkdir_write_enable=YES
anno_other_write_enable=YES

```

再次修改 vsftpd 主配置文件，通过添加 user_config_dir 参数来定义这两个虚拟用户不同权限的配置文件所存放的路径。为了让修改后的参数立即生效，需要重启 vsftpd 服务程序并将该服务添加到开机启动项中：

```
vim /etc/vsftpd/vsftpd.conf

user_config_dir=/etc/vsftpd/vusers_dir

```


6. 设置SELinux域允许策略，然后虚拟用户模式登录FTP服务器。


```
# gensebool -a | grep ftp

setsebool -P ftpd_full_access=on
```

### 简单文件传输协议

TFTP (Trivial File Transfer Protocol)是一种基于UDP协议的客户端和服务器之间进行简单文件传输的协议。
占用69号端口，效率高，安全性低。

```
yum isntall tftp-server tftp
```

在RHEL 7系统中，TFTP服务是使用xinetd服务程序来管理的，xinetd服务可以用来管理多种轻量级的网络服务，而且具有强大的日志功能。

```
vim /etc/xinetd.d/tftp
 
把默认禁用（disable）参数修改为no:

```

重启xinetd服务并将它添加到系统的开机启动项中，以确保TFTP服务在系统重启后依然处于允许状态。有些系统防火墙没有允许UDP协议的69端口，因此需要手动将该端口号加入到防火墙的允许策略中：

```
systemctl restart xinetd
systemctl enable xinetd
firewall-cmd --permanent --add-port=69/udp
firewall-cmd --reload
```

TFTP 的根目录为/var/lib/tftpboot

**tftp命令中可用的参数以及作用**

| 命令    | 作用                |
|---------|---------------------|
| ?       | 帮助信息            |
| put     | 上传文件            |
| get     | 下载文件            |
| verbose | 显示详细的处理信息  |
| status  | 显示当前的状态信息  |
| binary  | 使用二进制进行传输  |
| ascii   | 使用ASCII码进行传输 |
| timeout | 设置重传的超时时间  |
| quit    | 退出                |


```
echo "i love linux" > /var/lib/tftpboot/readme.txt
tftp 192.168.0.104

tftp> get readme.txt
tftp> quit

cat readme.txt
i love linux
```



## 使用Samba 或 NFS实现文件共享
sudo pacman -S samba

`/etc/samba/private/smb.conf`

Samba : window 与 linux 文件共享
NFS: linux 与 linux 文件共享

**Samba 服务程序中的参数以及作用** 

| [global]   | 参数                                     | 作用                                                      |
|------------|------------------------------------------|-----------------------------------------------------------|
|            | workgroup = MYGROUP                      | #工作组名称                                               |
|            | server string = Samba Server Versinon %v | #服务器介绍信息，参数%v为显示SMB版本号                    |
|            | lon file = /var/log/samba/log.%m         | #定义日志文件的存放位置与名称，参数%m为来访的主机名       |
|            | max log size                             | #定义日志文件的最大容量为50KB                             |
|            | security = user                          | #安全验证的方式，共有四种： share, user, server, domain   |
|            | passdb backend = tdbsam                  | #定义用户后台的类型, 共有三种: smbpassed, tdbsam, ldapsam |
|            | load printers = yes                      | #设置在Samba服务启动时是否共享打印机设备                  |
|            | cups options = raw                       | # 打印机的选项                                            |
| [homes]    |                                          | # 共享参数                                                |
|            | comment = Home Directories               | # 描述信息                                                |
|            | browseable = no                          | #指定共享信息是否在”网上邻居“中可见                       |
|            | writable = yes                           | #定义是否可以执行写入操作，与”read only“相反              |
| [printers] |                                          | #打印机共享参数


### 配置共享资源

**用于设置Samba服务程序的参数以及租用** 

| 参数                                                  | 作用                       |
|-------------------------------------------------------|----------------------------|
| [database]                                            | 共享名称为database         |
| comment = Do not arbitrarily modify the database file | 警告用户不要随意修改数据库 |
| path = /home/database                                 | 共享目录为/home/databse/   |
| public = no                                           | 关闭”所用人可见“           |
| writable = yes                                        | 允许写入操作               |

<span id="inline-toc">1.</span> 创建用于访问共享资源的账户信息。

**用于pdbedit 命令的参数以及作用** 

| 参数      | 作用                   |
|-----------|------------------------|
| -a 用户名 | 建立Samba账户          |
| -x 用户名 | 删除Samba账户          |
| -L        | 列出账户列表           |
| -Lv       | 列出账户详细信息的列表 |

<span id="inline-toc">2.</span> 创建用户共享资源的文件目录

<span id="inline-toc">3.</span> 设置SELinux 服务与策略

<span id="inline-toc">4.</span> 在Samba 服务程序的主配置文件中，安装格式写入共享信息。

<span id="inline-toc">5.</span> Samba 服务程序的配置工作基本完毕。



### NFS(网络文件系统)

<span id="inline-toc">1.</span> 为了检验NFS服务配置的效果，需要两台Linux主机（一台充当NFS服务器，一台充当NFS客户端）

<span id="inline-toc">2.</span> 在NFS服务器上建立用于NFS文件共享的目录，并设置足够的权限确保其他人也有写入权限。

<span id="inline-toc">3.</span> NFS服务程序的配置文件为/etc/exports, 默认情况下里面没有任何内容。

<span id="inline-toc">4.</span> 启动和启用NFS服务程序。
