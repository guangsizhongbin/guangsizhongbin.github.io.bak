---
title: vsftpd
date: 2020-02-25 10:32:29
description:
tags:
	- vsftpd
categories:
	- linux
urlname: vsftpd
image:
---
{% cq %}
ftp是一种文件传输协议，基于这种协议的有许多ftp软件。ftp软件分为服务器：vsftpd 端和客户端：ftp
{% endcq %}

<!--more-->

## install
sudo pacman -S vsftpd

## enable and start
systemctl enable vsftpd
systemctl start vsftpd



