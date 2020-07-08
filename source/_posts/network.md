---
title: network
tags:
  - computer
categories:
  - computer
math: false
date: 2020-03-09 12:21:52
description:
urlname:
image:
top:

---
# 概述
## 计算机网络的概述
**三网** 电信网络，有限电视网络和计算机网络
网络： 把许多计算机连接在一起
互联网： 把许多网络通过路由器连接在一起

## 互联网的标准化工作
**互联网草案**
**建立标准**
**互联网标准**


## 计算机网络的组成
### 互联网的边缘部分
	由所有连接在互联网上的主机组成。这部分是用户直接使用的，用来进行通信和资源共享。
	处在互联网边缘部分就是连接在互联网上的所有主机。这些主机又称为端系统（end system).

	端系统在功能上可能有很大的差别：
	小： 普通个人电脑，智能手机，网络摄像头
	大： 网络摄像头

**1.端系统之间通信的含义**
"主机A与主机B进行通信" == "运行在主机A上的某个程序和运行在主机B上的另一个程序进行通信" === “计算机之间通信”

**2.端系统之间的两种通信方式**

`客户 服务器方式（C/S方式）`即Client/Server方式，简称C/S方式

**客户软件的特点**
	被用户调用后允许，在在打算通信时主动向远地服务器发起通信（请求服务）.因此，客户程序必须知道服务器程序的地址.
	不需要特殊的硬件和很复杂的操作系统.

**服务器软件的特点**
	系统启动后即自动调用并一直不断运行着，被动地等待并接受来自各地的客户的通信请求。因此，服务器程序不需要知道客户程序的地址。
	一般需要强大的硬件和高级的操作系统支持。

![客户 服务器工作方式](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309142734.png)


`对等方式（P2P方式）` 即Peer to Peer方式，简称P2P方式
	是指两个主机在通信时并不区分哪一个是服务请求方还是服务提供方。
	只要两个主机都运行了对等连接软件（P2P软件）,他们就可以进行平等的、对等连接通信。
	对等连接工作方式可支持大量对等用户（如上百万个）同时工作。

![对等连接工作方式](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309143534.png)

### 互联网的核心部分
	由大量网络和连接这些网络的路由器组成。这部分是为边缘部分提供服务的。
	是互联网中最复杂的部分。
	在网络核心部分起特殊作用的是路由器

![互联网的边缘部分与核心部分](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309141721.png)

**电路交换的基本概念**
每一部电话都直接连接到交换机上，而交换机使用交换的方法，让电话用户彼此之间可以很方便地通信。所采用的交换方式就是电路交换。
- 交换（switching）就是转接
- 从通信资源的分配角度来看，“交换”就是按照某种方式动态地分配传输线路的资源

**电路交换特点**
1. 电路交换必定是面向连接的
2. 电路交换为三个阶段：
	建立连接： 建立一条专用的物理通路，以保证双方通话时所需的通信资源在通信时不会被其他用户占用。
	通信： 主叫和被叫双方就能互相通电话
	释放连接： 释放刚才使用的这条专用的物理通路（释放刚才占用的所有通信资源）
3. 计算机数据具有突发性，这导致在传送计算机数据时，通信线路的利用率很低（用来传送数据的时间往往不到10%甚至1%）
![电路交换](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309144836.png)

**分组交换特点**
1. 分组交换采用存储转发技术
2. 在发送端，先把较长的报文划分城较短的、固定长度的数据段。

**分组交换的优点**
高效: 在分组传输的过程中动态分配传输带宽，对通信链路是逐段占用。
灵活: 为每一个分组独立地选择最合适的转发路由
迅速: 以分组作为传送单位，可以不先建立连接就能向其他主机发送分组。
可靠: 保证可靠性的网络协议；分布式多路由的分组交换网，使网络有很好的生存性。

**分组交换的缺点**
1. 分组在各结点储存转发时需要排队，这就会造成一定的时延。
2. 分组必须携带的首部（里面有必不可少的控制信息）也造成了一定的开销。

**三种交换的比较**
![三种交换的比较](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309144836.png)


## 计算机网络的分类

**按照网络作用范围进行分类**
`广域网WAN`: 作用范围通常为几十到几千公里。
`城域网MAN`: 作用距离约为5~50公里。
`局域网LAN`：局限在较小的范围（如1公里左右).
`个人区域网PAN`： 范围很小，大约在10米左右。

**按照网络的使用者进行分类**
`公用网(public network)`: 按规定缴纳费用的人都可以使用的网络。
`专用网(private network)`: 为特殊业务工作的需要而建造的网络。

**用来把用户接入到互联网的网络**
接入网AN(Access Network): 它又称为本地接入网或居民接入网
- 本身既不属于互联网的核心部分，也不属于互联网的边缘部分
- 接入网是从某个用户端系统到互联网中的第一个路由器（也称为边缘路由器）之间的一种网络。

## 计算机网络的性能
### 计算机网络的性能指标
- 速率 
	一个比特就是二进制数字中的一个1或0.
	数据的传送速率，也称为数据率或比特率。
	速率往往是额定速率或标称速率，非实际允许速率。
- 带宽
	表示单位时间内网络中的某信道通过的“最高数据率”。
	单位bit/s
- 吞吐量
	表示单位时间内通过某个网络（或信道、接口）的数据量。
	吞吐量受网络的带宽或网络的额定速率的限制。
- 时延
	是指数据（一个报文或分组，甚至比特）从网络（或链路）的一端传送到另一端所需的时间。
	主要由以下几个不同的部分组成：
	1.发送时延(从发送数据帧的第一个比特算起，到该帧的最后一个比特发送完毕所需的时间)
	2.传播时延(电磁波在信道中需要传播一定的距离而花费的时间)
	3.处理时延(主机或路由器在收到分组时，为处理分组（例如分析头部、提取数据、差错检验或查找路由）)所花费的时间。
	4.排队时延(分组在路由器输入输出队列中排队等待处理所经历的时延)

![时延所产生的地方](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309153641.png)

- 时延带宽积(数据在网络中经历的总时延就是发送时延、传播时延、处理时延和排队时延之和)
![时延带宽积](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309153808.png)

- 往返时间RTT(从发送方发送数据开始，到发送方受到来自接收方的确认，总共经历的时间)

- 利用率
	信道利用率
	网络利用率
信道利用率并非越高越好。当某信道的利用率增大时，该信道引起的时延也就迅速增加。
![时延与网络利用率的关系](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309154504.png)

### 计算机网络的非性能指标
- 费用
- 质量
- 标准化
- 可靠性
- 可扩展性和可升级性
- 易于管理与维护



## 计算机网络的体系结构
### 网络协议
	是为了进行网络中的数据交换而建立的规则、标准或约定。

**组成要素** 
- 语法： 数据与控制信息的结构或格式。
- 语义： 需要发出何种控制信息，完成何种动作以及做出何种响应。
- 同步： 事件实现顺序的详细说明。


### 计算机网络的体系结构
是网络的各层及其协议的集合。

![协议](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309155641.png)

**主机1向主机2发送数据**
1. 应用进程数据先传送到应用层，加上应用层首部，成为应用层PDU(Protocol Data Unit)协议数据单元。
2. 应用层PDU再传送到运输层，加上运输层首部，成为运输层报文
3. 运输层报文再传送到网络层，加上网络层首部，成为IP数据报文(或分组)
4. ip数据报再传送到数据链路层，加上链路层首部和尾部，成为数据链路层帧
5. 数据链路层帧在传送到物理层。最下面的物理层把比特流传送到物理媒体。

**实体，协议**
实体： 表示任何可发送或接受信息的硬件或软件进程.
协议： 是控制两个对等实体进行通信的规则的集合。

**特点**
在协议的控制下，两个对等实体间的通信使得本层能够向上一层提供服务。
在实现本层协议，还需要使用下层所提供的服务。


**服务访问点**
同一系统相邻两层的实体进行交互的地方，成为服务访问点SAP(Service Access Point)。
OSI把层与层之间交换的数据的单位称为服务数据单元SDU(Service Data Unit)

**IP可应用到各式各样的网络上**
![ip](https://cdn.jsdelivr.net/gh/guangsizhongbin/picture//DeepinScreenshot_select-area_20200309160801.png)






---
Reference:
