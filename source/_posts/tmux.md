---
title: tmux
tags:
  - linux
categories:
  - linux
math: false
date: 2020-03-02 21:18:25
description:
urlname: tmux
image:
top:
---
`Tmux` 允许在单个窗口中，同时访问多个会话。

<!--more-->
## 安装
sudo pacman -S tmux

## 会话管理

**新建会话**
tmux new -s <session-name>

**分离会话**
tmux detach

**查看所有会话**
tmux ls

**接入会话**
tmux attach -t <session-name>

**杀死会话**
tmux kill-session -t <session-name>

**切换会话**
tmux switch -t <session-name>

**重命名**
tmux rename-session -t

**会话快捷键**

```
ctrl+b d: 分离当前会话
ctrl+b s: 列出所有会话
ctrl+b $: 重命名当前会话
```

## 窗格操作


**快捷键**

```
ctrl+b %: 划分左右两个窗格
ctrl+b ": 划分上下两个窗格
ctrl+b <arrow key>: 光标切换到其他窗格。
ctrl+b ;: 光标切换到上一个窗格
ctrl+b o: 管标切换到下一个窗格
ctrl+b {: 当前窗格左移动
ctrl+b }: 当前窗格右移动
ctrl+b ctrl+o: 当前窗格上移
ctrl+b Alt+o 当前窗格下移
ctrl+b x:关闭当前窗格
ctrl+b !:将当前窗格分为一个独立窗口
Ctrl+b z：当前窗格全屏显示，再使用一次会变回原来大小。
Ctrl+b Ctrl+<arrow key>：按箭头方向调整窗格大小。
Ctrl+b q：显示窗格编号。
```



### 窗口管理

**快捷键**

Ctrl+b c：创建一个新窗口，状态栏会显示多个窗口的信息。
Ctrl+b p：切换到上一个窗口（按照状态栏上的顺序）。
Ctrl+b n：切换到下一个窗口。
Ctrl+b <number>：切换到指定编号的窗口，其中的<number>是状态栏上的窗口编号。
Ctrl+b w：从列表中选择窗口。
Ctrl+b ,：窗口重命名。



---


Reference:

