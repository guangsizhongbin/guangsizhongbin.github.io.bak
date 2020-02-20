---
title: cplus
date: 2020-02-19 18:59:08
description:
tags:
	- cplus
categories:
	- cplus
urlname: cplus
image:
---




## 1. C++ 基本语法

- 对象
    - 对象具有状态和行为
- 类
    - 可以定义为描述对象行为、状态
- 方法
    - 一个方法表示一种行为。一个类可以包含多个方法。
- 即时变量
    - 每个对象都有其独特的即时变量。

- C++ 程序结构

<!--more-->
```c++

/*
 *Hello World
 */

#include <iostream>

using namespace std;

int main()
{
	cout << "Hello World\n";

	return 0;

}

```

## 2. 数据类型

- 基本的内置类型
    - bool 
    - char    1字节
    - int    4字节
    - float    4字节
    - double    8字节
    - void
    - wchar_t    2或4个字节    1个宽字符
        - typedef short int wchar_t;    // wchar_t 实际上的空间是和 short int 是一样的

一些基本类型可以使用一个或多个类型修饰符进行修饰：
    - signed
    - unsigned
    - short
    - long


- typedef 声明
- 枚举类型


## 3. C++变量类型
> - 变量的名称可以由字母、数字和下划线符号组成。
> - 它必须以字母或下划线开头。
> - 区分大小写。

- bool
- char
- int
- float    sign 1    exponent    8    fraction 23
- double    sign 1    expoent    11    fraction    52
- void
- wchar_t    宽字符型

---
**不带初始化的定义：带有静态存储持续时间的变量会被隐式初始化为NULL(所有字节的值都是0)，其他所有变量的初始值是未定义的。**

```c++
/*
 *输出 c, f的值
 *30
 *23.3333
 */


#include <iostream>
using namespace std;

// 变量声明
extern int a,b;
extern int c;
extern float f;

int main()
{
    // 变量定义
	int a, b;
	int c;
	float f;

    // 实际初始化
	a = 10;
	b = 20;
	c = a + b;

	cout << c << endl;

	f = 70.0/3.0;
	cout << f << endl;

	return 0;
}

```

**1.只有当声明也是定义时，声明才可以有初始式，因为只有定义才分配存储空间
   2. 初始化式必须要有存储空间来进行初始化。如果声明有初始式，那么它可被当作是定义。**

## 4. C++ 变量作用域

**定义变量的地方**

    - 局部变量 
        - 在函数或一个代码块内部声明的变量
    - 形式参数
        - 在函数参数的定义中表明的变量
    - 全局变量
        - 在所有函数外部声明的变量

- 局部变量

```c++
\*
 * 局部变量演示
 *
 *\
#include <iostream>
using namespace std;

int main()
{
	int a,b;
	int c;

	a = 10;
	b = 20;
	c = a + b;

	cout << c;

	return 0;
}
```

- 全局变量

```c++
\*
 *演示全局变量
 *输出 30
 *\
#include <iostream>
using namespace std;

int g;

int main()
{
	int a,b;

	a = 10;
	b = 20;
	g = a+b;

	cout << g;

	return 0;
}
```

- 局部变量和全局变量的名称可以相同，但是函数内，局部变量的值会覆盖全局变量的值

```c++
\*
 *演示局部变量和全局变量冲突之时，怎样处理
 *局部变量会覆盖全局变量的值
 *20
 *\
#include <iostream>
using namespace std;

int g = 30;

int main()
{

	int g = 20;

	cout << g;

	return 0;
}

```

- 初始化局部变量和全局变量


| 数据类型       |  初始化默认值   |
| :-: | :-: |
|   int  | 0 |
| char |  '\0'   |
|   float  |  0   |
|  double   |    0 |
|  pointer   |  NULL   |

## 5. C++常量
> 常量是固定值,在程序执行期间不会改变.这些固定的值,又叫做字面量
> - 整数常量
> - 浮点数字
> - 字符
> - 字符串
> - 布尔值

- 整数常量
    - 前缀表进制    0x 或 0X 表十六进制, 0 表示八进制. 默认十进制
    - 后缀表符号    U 表示无符号整数,    L表示长整数
    - 078

- 浮点常量
    - 带符号的指数用e或E引入
    - 3.14159
    - 314159E-5L

- 布尔常量
    - true
    - false

- 字符常量
    - 字符常量是括在单引号中.
    - 如果常量以L(仅当大写时)开头,则表示它是一个宽字符常量(例如L'x'),此时它必须存储在wchar_t类型的变量中.否则,它就是一个窄字符常量(例如'x'),此时它可以存储在char类型的简单变量中.

- 字符串常量
    - 字符串字面值或常量是括在双引号""中的.

- 定义常量
    - #define 预处理器
    
```c++
/*
 *50
 *
 */
#include <iostream>
using namespace std;

#define LENGTH 10
#define WIDTH 5
#define NEWLINE "\n"

int main()
{
	int area;

	area = LENGTH * WIDTH;
	cout << area;
	cout << NEWLINE;

	return 0;
}
 
```

   - const 关键字


```c++
/*
 *
 *
 */
#include <iostream>
using namespace std;


int main()
{
	int area;

    const int LENGTH = 10;
    const int WIDTH = 5;
    const char NEWLINE = '\n';

	area = LENGTH * WIDTH;
	cout << area;
	cout << NEWLINE;

	return 0;
}
```

## 6. C++修饰符类型

- signed
- unsigned
- long
- short

```c++
/*
 *测试unsigned int --->  0 到 65535
 * signed int ---> -32768 到 32767
 * 当signed int溢出时,32767会增加一位 -32768. 然后再加上原来的数
 */
#include <iostream>
using namespace std;

int main()
{
	short int i;
	short unsigned int j;

	j = 50000;

	i = j;
	cout << i << endl;
	cout << (-32768 + 50000 -32768) << endl;


	return 0;
}

/*----------------------
-15536
-15536
*/----------------------
```

## 7. C++ 中的类型限定符

- const
    - const 类型的对象在程序执行期间不能被修改.
- volatile
    - 修饰符 volatile 告诉编辑器不需要优化 volatile 声明的变量,让程序可以直接从内存中读取变量.
    - 对于一般的变量编辑器会对变量进行优化,将内存中的变量值放在寄存器中以加快读写效率.
- restrict
    - 由 restrict 修饰的指针是唯一一种访问它所指向的对象的方式.
    - 只有C99增加了新的类型限定符 restrict.


## 8. C ++ 存储类

- auto
- register
- static
    - 1. static 修饰局部变量可以在函数调用之间保存局部变量的值
    - 2. static 修饰全局变量, 会使变量的作用域限制在它的文件内
    - 3. static 修饰类数据成员上时,会导致仅有该成员的副本被类的所有对象共享.

```c++
/*
 *static 修饰局部变量时,可以在函数调用之间保存局部变量的值
 */
 
#include <iostream> 

void func(void);

static int count = 10;
extern int i;

int main()
{
	while(count--)
	{
		func();	
	}
	return 0;
}

void func(void)
{
	int i =5;
	i++;
	std::cout << "变量i为" << i;
	std::cout << ", 变量count为" << count << std::endl;

}

/*
-----------------------------
变量i为6, 变量count为9
变量i为6, 变量count为8
变量i为6, 变量count为7
变量i为6, 变量count为6
变量i为6, 变量count为5
变量i为6, 变量count为4
变量i为6, 变量count为3
变量i为6, 变量count为2
变量i为6, 变量count为1
变量i为6, 变量count为0

-----------------------------
*/

```

- extern

- mutable
    - 说明符仅仅适用于类的对象.
    
- thread_local
    - 声明变量仅可在它之上创建的线程上访问.
    - 变量在创建线程时创建,并在销毁线程时销毁.
    - 每个线程都有其自己的变量副本.
    - thread_local 说明符可以与static 或extern 合并.

## 9. 运算符

- 算术运算符
    -   \+
    -    \-
    -    \*
    -    \/
    -    \%
    -    \++
    -    \--
    
- 关系运算符
    - ==
    - !=
    - \>
    - <
    - \>
    - \>=
    - \<=
    
- 逻辑运算符
    - \&&
    - \||
    - \!
    
- 位运算符
    - \&
    - \|
    - \^
    - \~
    - \<<
    - \>>
    
- 赋值运算符
    - \=
    - \+=
    - \-=
    - \*=
    - \/=
    - \%=
    - \<<=
    - \>>=
    - \&=
    - \^=
    - \|=
    
- 杂项运算符
    - sizeof
    - condition? X : Y    条件运算符 如果Condition 为真? 则值为X : 否则值为Y.
    - ,    逗号运算符 会顺序执行一系列运算. 整个逗号表达式的值是以逗号分隔的列表中的最后一个表达式的值.
    - . (点) 和 -> (箭头)  成员运算符     用于引用类, 结构和共用体的成员.
    - Cast     强制转换运算符    把一种数据类型转换位另一种数据类型.
    - &    指针运算符 & 返回变量的地址.
    - \*    指针运算符 *    指向一个变量.


## 10. 循环

- 循环类型
    - while

```c++
/*
 * while
 */
#include <iostream>
using namespace std;

int main()
{
	int a = 10;

	while (a < 20)
	{
		cout << "a的值:"<< a <<endl;	
		a++;	
	}

	return 0;
}

/*
--------------------
a的值:10
a的值:11
a的值:12
a的值:13
a的值:14
a的值:15
a的值:16
a的值:17
a的值:18
a的值:19

--------------------
*/

```


    - for

```c++
/*
 *for
 */
#include <iostream>
using namespace std;

int main()
{

	for(int a= 10; a<20; a++)
	{
		cout << "a的值:"<< a <<endl;	
	}

	return 0;
}

/*
------------------------
a的值:10
a的值:11
a的值:12
a的值:13
a的值:14
a的值:15
a的值:16
a的值:17
a的值:18
a的值:19

------------------------
```

 - 基于范围的for 循环(c++11)

```c++
#include <iostream>
using namespace std;

int my_array[5] = {1,2,3,4,5};

int main()
{
		cout << "int :"<< endl;
	for (int &x :my_array)
	{	
		x *=2;
		cout << x <<endl;
	}

		cout << "auto :"<< endl;
	for (auto &x : my_array)
	{	
		x *=2;
		cout << x <<endl;	
	}
	return 0;
}

```

```c++
/*
 *
 */

#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main()
{
	string str("some string");

	for(auto &c :str)
	{
		c = toupper(c);
	}
	cout << str << endl;
	return 0;
}

/*
---------------------------
SOME STRING
---------------------------
*/
```


 - do...while
 

```c++
 
/*
 * do while
 */

#include <iostream>
using namespace std;

int main()
{
	int a = 10;

	do
	{
		cout << "a 的值" << a <<endl;
		a = a +1;
	
	
	}while(a <20);

	return 0;
}


/*
---------------------------
a 的值10
a 的值11
a 的值12
a 的值13
a 的值14
a 的值15
a 的值16
a 的值17
a 的值18
a 的值19

---------------------------
*/

```


- 嵌套

```c
/*
 *
 */

#include <iostream>
using namespace std;

int main()
{
	int i,j;
	for(i=2; i<100; i++)
	{
		for(j=2; j<=(i/j);j++)	
		{
			if(!(i%j))
				break;
		}

	if(j > (i/j))
	{
		cout << i << "是质数\n";
	}
	}


	return 0;
}

/*
--------------------
2是质数
3是质数
5是质数
7是质数
11是质数
13是质数
17是质数
19是质数
23是质数
29是质数
31是质数
37是质数
41是质数
43是质数
47是质数
53是质数
59是质数
61是质数
67是质数
71是质数
73是质数
79是质数
83是质数
89是质数
97是质数

--------------------
*/

```

- 循环控制语句
   
- break

```c
/*
 *
 */
#include <iostream>
using namespace std;

int main()
{
	int a = 10;

	do
	{
		cout << "a 的值:" << a << endl;
		a += 1;
		if (a > 15)
		{
			break;	
		}
	
	
	}while(a < 20);


	return 0;
}

/*
-----------------------
a 的值:10
a 的值:11
a 的值:12
a 的值:13
a 的值:14
a 的值:15
-----------------------
*/
```



- continue

```c++
#include <iostream>
using namespace std;

int main()
{
	int a = 10;

	do
	{
		if (a == 15)
		{
			a = a + 1;
			continue;
		}
	
		cout << "a 的值:" << a << endl;
		a += 1;
	
	}while(a < 20);


	return 0;
}

/*
-------------------
a 的值:10
a 的值:11
a 的值:12
a 的值:13
a 的值:14
a 的值:16
a 的值:17
a 的值:18
a 的值:19
--------------------
*/
```


 - goto

- 无限循环


```c++
#include <iostream>
using namespace std;
 
int main ()
{
 
   for( ; ; )
   {
      printf("This loop will run forever.\n");
   }
 
   return 0;
}
```


## 11. 判断

- if 语句
- if...else 语句
- 嵌套 if 语句
- switch 语句
- 嵌套 switch 语句

- ? : 运算符

## 12. C++引用

- 引用的特点
    - 不存在空引用
    - 一旦引用被初始化为一个对象,就不能被指向到另一个对象.指针可以在任何时候指向到另一个对象
    - 引用必须在创建时被初始化.指针可以在任何时间被初始化.

```c
/*
 *引用 int&
 */
#include <iostream>

using namespace std;

int main()
{
	int i;
	double d;

	int& r=i;
	double& s=d;

	i=5;
	cout << "Value of i:" << i << endl;
	cout << "Value of i reference:" << i << endl;

	d =11.7;
	cout << "Value of i:" << d << endl;
	cout << "Value of i reference:" << d << endl;

	return 0;
}

/*
---------------------------
Value of i:5
Value of i reference:5
Value of i:11.7
Value of i reference:11.7
---------------------------
*/

```

## 13. C++ 时间 & 日期

与时间相关的类型:
    - clock_t
    - time_t
    - size_t
    - tm

- 函数

- time_t time(time_t *seconds)
    - seconds  这是指向类型为time_t 的对象的指针,用来存储 seconds 的值
    - 以time_t对象返回当前日历时间.

- char *ctime(const time_t *timer)
    - timer 这是指向time_t对象的指针, 用来返回一个日历时间
    - 该函数返回一个c 字符串,该字符串包含了可读格式的日期和时间信息.

- struct tm *localtime(const time_t *timer)
    - timer 这是指向表示日历时间的time_t值的指针
    - 该函数返回指向 tm 结构的指针
    
- clock_t clock(void)
    - 为了获取CPU所使用的秒数,需要除以CLOCKS_PER_SEC
    - 返回自程序启动起,处理器时钟所使用的时间.如果失败,则返回-1值.

- char * asctime(const struct tm *timeptr)
    - 代表struct timeptr的日期和时间
    - 返回一个指向字符串的指针
    - Www Mmm dd hh:mm:ss yyyy
    - Www 表示星期几
    - Mmm 是以字母表示的月份
    - dd 表示一月中的第几天
    - hh:mm:ss 表示时间
    - yyyy 表示年份


- struct tm *gmtime(const time_t *timer)
    - timepter  这是指向表示日历时间的time_t值的指针
    - 返回指向tm结构的指针,该结构带有被填充的时间信息.

- time_t mktime(struct tm *timepter)
    - 转换为一个依据本地时区的time_t值.
    - timepter 指向表示日历时间的time_t值的指针
    - 返回一个time_t值,该值对应于以参数传递的日历时间.如果发生错误,则返回-1值.

- double difftime(time_t time1, time_t time2)
    - 返回 time1 和 time2 之间相差的秒数(time1 - time2)

- size_t strftime(char *str, size_t maxsize, const char *format, const struct tm *timeptr)
    - 根据format 中定义的格式化规则,格式化结构 timeptr 表示的时间,并把它存储在str中.
    - str --这是指向目标数组的指针,用来复制产生的C字符串
    - maxsize -- 这是被复制到str的最大字符数
    - format --这是c字符串,包含了普通字符和特殊格式说明符的任何组合.
        - %Y 年份
        - %m 月份
        - %d 日
        - %H 小时
        - %M 分钟
        - %S 秒
    - timeptr --这是指向tm结构的指针
    - 返回值: 如果产生的c字符串小于size个字符(包括空结束字符),则会返回复制到str中的字符总数(不包括空结束字符),否则返回零.
    

```c++
/*
 *time_t time
 */
#include <iostream>
#include <time.h>

int main()
{
	time_t seconds;

	seconds = time(NULL);
	printf("自1970-01-01 起的小时数 = %ld\n", seconds/3600);


	return 0;
}

/*
-------------------
自1970-01-01 起的小时数 = 437810
-------------------
*/
```


```c++
/*
 * ctime()
*/
#include <iostream>
#include <time.h>

int main()
{
	time_t curtime;

	time(&curtime);
	
	printf("当前时间=%s",ctime(&curtime));


	return 0;
}

/*
当前时间=Thu Dec 12 10:14:01 2019
*/
```

```c++
/*
 * localtime
 */
#include <iostream>
#include <time.h>

int main()
{
	time_t rawtime;
	struct tm *info;
	

	time(&rawtime);
	
	info = localtime(&rawtime);
	printf("当前时间=%s",asctime(info));


	return 0;
}

/*
------------------
当前时间=Thu Dec 12 10:23:48 2019
------------------
*/

```

```c++
/*
 */

#include <iostream>
#include <time.h>

int main()
{
	clock_t start_t, end_t;
	double total_t;
	int i;

	start_t = clock();
	printf("程序启动,start_t = %ld\n", start_t);

	printf("开始一个大循环,start_t = %ld\n", start_t);
	for(i=0; i<100000000 ; i++)
	{}
	end_t = clock();
	printf("大循环结束,end_t=%ld\n",end_t);

	total_t = (double)(end_t - start_t)/ CLOCKS_PER_SEC;
	printf("CPU 占用的总时间:%f\n",total_t);
	printf("程序退出...\n");
	
	return 0;
}



/*
------------------------------
程序启动,start_t = 1089
开始一个大循环,start_t = 1089
大循环结束,end_t=185023
CPU 占用的总时间:0.183934
程序退出...

------------------------------
 */

```

```c++
/*
asctime()
*/
#include <stdio.h>
#include <string.h>
#include <time.h>

int main()
{
   struct tm t;

   t.tm_sec    = 10;
   t.tm_min    = 10;
   t.tm_hour   = 6;
   t.tm_mday   = 25;
   t.tm_mon    = 2;
   t.tm_year   = 89;
   t.tm_wday   = 6;

   puts(asctime(&t));
   
   return(0);
}

/*
-------------------------------
Sat Mar 25 06:10:10 1989
-------------------------------
*/

```

```c++
/*
    gmtime()
*/
#include <iostream>
#include <time.h>

#define BST (+1)
#define CCT (+8)

int main()
{
	time_t rawtime;
	struct tm *info;

	time(&rawtime);

	info = gmtime(&rawtime);

	printf("当前的世界时钟:\n");
	printf("伦敦:%2d:%02d\n",(info->tm_hour +BST)%24, info->tm_min);
	printf("中国:%2d:%02d\n",(info->tm_hour +CCT)%24,info->tm_min);

	return(0);

}

/*
当前的世界时钟:
伦敦: 3:50
中国:10:50
*/

```

```c++
/*
 * mktime()
 */

#include <stdio.h>
#include <time.h>

int main()
{
	time_t rawtime;
	struct tm * timeinfo;
	int year, month, day;
	const char * weekday[] = {"周日","周一","周二","周三","周四","周五","周六"};

	printf("年:");fflush(stdout);scanf("%d",&year);
	printf("月:");fflush(stdout);scanf("%d",&month);
	printf("日:");fflush(stdout);scanf("%d",&day);

	time(&rawtime);
	timeinfo = localtime(&rawtime);
	timeinfo->tm_year = year -1900;
	timeinfo->tm_mon = month -1;
	timeinfo->tm_mday = day;

	mktime(timeinfo);

	printf("那一天是:%s\n",weekday[timeinfo->tm_wday]);

	return 0;
}


/*
--------------------------------
年:2019
月:12
日:1
那一天是:周日
--------------------------------
 */
```


```C++
/*
    difftime
*/
#include <stdio.h>
#include <time.h>
#include <unistd.h>

int main()
{
	time_t start_t, end_t;
	double diff_t;

	printf("程序启动...\n");
	time(&start_t);

	printf("休眠5秒...\n");
	sleep(5);

	time(&end_t);
	diff_t = difftime(end_t,start_t);

	printf("执行时间=%f\n",diff_t);
	printf("程序退出...\n");

	return 0;
}


/*
----------------------
程序启动...
休眠5秒...
执行时间=5.000000
程序退出...
------------------------
*/
```


```c++
/*
 * strftime()
 */

#include <stdio.h>
#include <time.h>

int main()
{
	time_t rawtime;
	struct tm *info;
	char buffer[80];

	time(&rawtime);

	info = localtime(&rawtime);

	strftime(buffer, 80, "%Y-%m-%d %H:%M:%S",info);
	printf("格式化的日期&时间: |%s|\n",buffer);
	
	return 0;
}

/*
--------------------------
格式化的日期&时间: |2019-12-12 11:29:38|
--------------------------
 */
```


- 当前日期和时间

```c++
/*
输出当前系统的日期和时间,包括本地和UTC时间
 */
#include <iostream>
#include <ctime>

using namespace std;

int main()
{
	time_t now = time(0);

	char *dt = ctime(&now);

	cout << "本地日期和时间:" << dt << endl;

	tm *gmtm = gmtime(&now);
	dt =asctime(gmtm);
	cout <<"UTC 日期和时间"<< dt <<endl;
}

/*
本地日期和时间:Thu Dec 12 11:34:41 2019

UTC 日期和时间Thu Dec 12 03:34:41 2019

*/
```


- 使用结构 tm 格式化时间

```c++
/*
格式化字符串
 */
#include <iostream>
#include <ctime>

using namespace std;

int main()
{
	time_t now = time(0);

	cout << "1970 到目前经过秒数:" << now << endl;

	tm *ltm = localtime(&now);

	cout << "年:" << 1900 +ltm->tm_year << endl;
	cout << "月:" << 1 +ltm->tm_mon << endl;
	cout << "日:" << 1900 +ltm->tm_mday << endl;
	cout << "时间:" << ltm->tm_hour << ":"<<ltm->tm_min<<":"<< ltm->tm_sec << endl;

}


/*
--------------------
本地日期和时间:Thu Dec 12 11:34:41 2019

UTC 日期和时间Thu Dec 12 03:34:41 2019

--------------------
 */
```

## 14. 基本的输入输出

- I/O 库头文件

    - \<iostream>
        - 该文件定义了cin. cout. cerr和clog 对象.
       
    - \<iomanip>
        - 通过所谓的参数化的流控制器(比如setw和setprecision), 来声明堆执行标准化 I/O 有用的服务.

    - \<fstream>
        - 该文件位用户控制的文件处理声明的服务.

- 标准输出流 (cout)

```c++
#include <iostream>
#include <ctime>

using namespace std;

int main()
{
	char str[]="Hello C++";

	cout << "Value of str is :" << str << endl;
}

/*
--------------------------
Value of str is :Hello C++
--------------------------
*/
```

- 标准输入流(cin)
> cin >> name >> age; 
> 相当于 cin >> name; cin >> age;

```c++ 
#include <iostream>
#include <ctime>

using namespace std;

int main()
{
	char name[50];

	cout << "请输入您的名称:";
	cin >> name;
	cout << "您的名称是:" << name << endl;
}
/*
---------------------------
请输入您的名称:feng
您的名称是:feng
---------------------------
*/
```

- 标准错误流 (cerr)
    - cerr 对象是非缓冲的,且每个流插入到cerr都会立即输出.

```C++
#include <iostream>
#include <ctime>

using namespace std;

int main()
{
	char str[] = "Uable to read...";

	cerr << "Error message:" << str << endl;
}
/*
------------------------
Error message:Uable to read...
------------------------
 */

```

- 标准日志流 (clog)
    - clog对象是缓冲的. 这意味着每个流插入到clog都会先存储在缓冲在,直到缓冲填满或者缓冲区刷新时才会输出.




## 15. C ++ 类 & 对象

- 定义

```c++
class Box
{
    public:
        double length;
        double breadth;
        double height;
};
```

- 访问数据成员

```C++
#include <iostream>

using namespace std;

class Box
{
	public:
		double length;
		double breadth;
		double height;
};

int main()
{
	Box box1;
	Box box2;
	double volume = 0.0;

	box1.height = 5.0;
	box1.length = 6.0;
	box1.breadth = 7.0;

	box2.height = 10.0;
	box2.length = 12.0;
	box2.breadth = 13.0;

	volume = box1.height * box1.length * box1.breadth;
	cout << "Box1 的体积" << volume << endl;

	volume = box2.height * box2.length * box2.breadth;
	cout << "Box2 的体积" << volume << endl;



	return 0;
}

```

- 类成员函数
    - 成员函数可以定义在类定义内部
    - 也可以在类的外部使用范围解析运算符 ：：

```c++
#include <iostream>

using namespace std;

class Box
{
	public:
		double length;
		double breadth;
		double height;

		double getVolume(void);
		void setLength(double len);
		void setBreadth(double bre);
		void setHeight(double hei);
};

double Box::getVolume(void)
{
	return length * breadth * height;
}

void Box::setLength(double len)
{
	length = len;
}

void Box::setBreadth(double bre)
{
	breadth = bre;
}

void Box::setHeight(double hei)
{
	height = hei;
}

int main()
{
	Box Box1;
	Box Box2;
	double volume = 0.0;

	Box1.setLength(6.0);
	Box1.setBreadth(7.0);
	Box1.setHeight(5.0);

	Box2.setLength(12.0);
	Box2.setBreadth(13.0);
	Box2.setHeight(10.0);

	volume = Box1.getVolume();
	cout << "Box1 的体积：" << volume << endl;
	
	volume = Box2.getVolume();
	cout << "Box2 的体积：" << volume << endl;
	return 0;

}

/*
---------------------
Box1 的体积：210
Box2 的体积：1560
---------------------
*/
```


- 类访问修饰符
    - public 外部是可访问的。 
        - 可以不使用任何成员函数来设置和获取公有变量的值。
    - private (默认)
        - 只有类和有元函数可以访问私有成员。
        - 默认情况下，类的所有成员都是私有的。
    - protected
        - 与私有成员十分相似，但有一点不同，保护成员在派生类（即子类）中是可访问的。

**我们一般会在私有区域定义数据，在公有区域定义相关函数**

```c++
#include <iostream>
using namespace std;

class Box
{
	protected:
		double width;
};

class SmallBox:Box
{
	public:
		void setSmallWith(double wid);
		double getSmallWidth(void);
};

double SmallBox::getSmallWidth(void)
{
	return width;
}

void SmallBox::setSmallWith(double wid)
{
	width = wid;
}

int main()
{
	SmallBox box;

	box.setSmallWith(5.0);
	cout << "Width of box:" << box.getSmallWidth() << endl;

	return 0;
}% 
```

**继承**

- 继承中的特点
    - public 继承： 基类 public 成员， protected 成员， private 成员 的访问属性在派生类中分别变成： public, protected, private
    - protected 继承： 基类 public 成员， protected 成员， private 成员的访问属性在派生类中分别变成： protected, protected, private.
    - private 继承：基类 public 成员， protected 成员， private 成员的访问属性在派生类中分别变成：private, private,private


- public 继承

```C++
#include<iostream>
#include<assert.h>
using namespace std;

class A{
	public:
		int a;
		A(){
			a1 = 1;
			a2 = 2;
			a3 = 3;
			a = 4;
		}
		void fun(){
			cout << a << endl;
			cout << a1 << endl;
			cout << a2 << endl;
			cout << a3 << endl;
		}
	public:
		int a1;
	protected:
		int a2;
	private:
		int a3;
};

class B: public A{
	public:
		int a;
		B(int i){
		A();
		a = i;
		}
		void fun(){
		cout << a << endl;
		cout << a1 << endl;
		cout << a2 << endl;
		cout << a3 << endl; // 错误，基类的private成员不能被派生类访问。
		}
};

int main(void)
{
	B b(10);
	cout << b.a << endl;
	cout << b.a1 << endl;
	cout << b.a2 << endl; // 错误，类外不能访问 protected 成员
	cout << b.a3 << endl; // 错误，类外不能访问 private 成员
	system("pause");
	return 0;
}

```

- protected 继承

```c++
#include<iostream>
#include<assert.h>
using namespace std;

class A{
public:
	int a;
	A(){
		a1 =1;
		a2 =2;
		a3 =3;
		a  =4;
	}
	void fun(){
		cout << a << endl;
		cout << a1 << endl;
		cout << a2 << endl;
		cout << a3 << endl;
	}
public:
	int a1;
protected:
	int a2;
private:
	int a3;
};

class B : protected A{
	public:
		int a;
		B(int i){
		A();
		a = i;
		}
		void fun(){
		cout << a << endl;
		cout << a1 << endl;
		cout << a2 << endl;
		cout << a3 << endl; // 错误，基类的private 成员不能被派生访问
		}
};

int main(){
	B b(10);
	cout << b.a << endl;
	cout << b.a1 << endl; //错误，protected 不能在类外访问
	cout << b.a2 << endl; //错误，protected 成员不能在类外访问
	cout << b.a3 << endl; //错误，private 成员不能在类外访问
	system("pause");
	return 0;
}
```

- private 继承

```C++
#include<iostream>
#include<assert.h>
using namespace std;

class A{
	public:
		int a;
		A(){
		a1 = 1;
		a2 = 2;
		a3 = 3;
		a  = 4;
		}
		void fun(){
		cout << a << endl;
		cout << a1 << endl;
		cout << a2 << endl;
		cout << a3 << endl;
		}
	public:
		int a1;
	protected:
		int a2;
	private:
		int a3;
};

class B: private A{
	public:
		int a;
		B (int i){
			A();
			a = i;
		}
		void fun(){
			cout << a << endl;
			cout << a1 << endl;
			cout << a2 << endl; // 正确，基类的protected成员，在派生类中变成了private,可以被派生类访问。
			cout << a3 << endl; // 错误，基类的private成员不能被派生类访问。
		}
};

int main(){
	B b(10);
	cout << b.a << endl;
	cout << b.a1 << endl; // private 成员不能在类外访问
	cout << b.a2 << endl; // private 成员不能在类外访问
	cout << b.a3 << endl; // private 成员不能在类外访问
	system("pause");
	return 0;
}

```





- 构造函数 & 析构函数
    - 构造函数： 是类的一种特殊的成员函数，它会每次创建类的新对象时执行。
    - 构造函数的名称与类的名称完全相同，并且不会返回任何类型，也不会返回 void. 构造函数可用于为某些成员变量设置初始值。


```C++
#include <iostream>

using namespace std;

class Line
{
	public:
		void setLength(double len);
		double getLength(void);
		Line(); // 这是构造函数

	private:
		double length;
};

Line::Line(void)
{
	cout << "Object is being created" << endl;
}

void Line::setLength(double len)
{
	length = len;
}

double Line::getLength(void)
{
	return length;
}

int main()
{
	Line line;

//	line.setLength(6.0);
//	cout << "Length of line:" << line.getLength() << endl;

	return 0;
}

/*
-------------------------
Object is being created
-------------------------
*/
```

- 带参数的构造函数

```c++
#include <iostream>

using namespace std;

class Line
{
	public:
		void setLength(double len);
		double getLength(void);
		Line(double len);

	private:
		double length;
};

Line::Line(double len)
{
	cout << "Object is being created, leng =" << len << endl;
	length = len;
}

void Line::setLength(double len)
{
	length = len;
}

double Line::getLength(void)
{
	return length;
}

int main()
{
	Line line(10.0);

	cout << "Length of line:" << line.getLength() << endl;

	line.setLength(6.0);
	cout << "Length of line:" << line.getLength() << endl;

	return 0;
}
/*
Object is being created, leng =10
Length of line:10
Length of line:6
*/
```

- 使用初始化列表来初始化字段

```C++  
Line::Line(double len): length() 
{
    cout << "Object is being created, length =" << len << endl;
}
-------------------------------------------
Line::Line(double len)
{
    length = len;
    cout << "Object is being created, length =" << len << endl;
}
-------------------------------------------
c::c(double a, double b, double c): X(a), Y(b), Z(c)
{
...
}

```


- 类的析构函数
    - 它会在每次删除所创建的对象时执行。
    - 析构函数的名称与类的名称是完全相同的，只是在对面加了个波浪号（～）作为前缀，它不会返回任何值，也不能带有任何数。

```c++
#include <iostream>

using namespace std;

class Line
{
	public:
		void setLength(double len);
		double getLength(void);
		Line();
		~Line();

	private:
			double length;
};

Line::Line(void)
{
	cout << "Object is being created" << endl;
}

Line::~Line(void)
{
	cout << "Object is being deleted" << endl;
}

void Line::setLength(double len)
{
	length = len;
}

double Line::getLength(void)
{
	return length;
}

int main()
{
	Line line;

//	line.setLength(6.0);
//	cout << "Length of line:" << line.getLength() << endl;

	return 0;
}

/*
Object is being created
Object is being deleted
*/
```


- C++ 拷贝构造函数
    - 是使用同一类中之前创建的对象来初始化新创建的对象
        - 通过使用另一个同类型的对象来初始化新创建的对象。
        - 复制对象把它作为参数传递给函数
        - 复制对象，并从函数返回这个对象


```C++
#include <iostream>

using namespace std;

class Line
{
	public:
		int getLength(void);
		Line(int len);
		Line(const Line &obj);
		~Line();

	private:
		int *ptr;
};

Line::Line(int len)
{
	cout << "调用构造函数" << endl;
	ptr = new int;
	*ptr = len;
}

Line::Line(const Line &obj)
{
	cout << "调用拷贝构造函数并为指针 ptr 分配内存" << endl;
	ptr = new int;
	*ptr = *obj.ptr;
}

Line::~Line(void)
{
	cout << "释放内存" << endl;
	delete ptr;
}

int Line::getLength(void)
{
	return *ptr;
}

void display(Line obj)
{
	cout << "line 大小:" << obj.getLength() << endl;
}

int main()
{
	Line line(10);

	display(line);

	return 0;
}

```

- 使用已有的同类型的对象来初始化新创建的对象

```c++
#include <iostream>

using namespace std;

class Line
{
	public:
		int getLength(void);
		Line(int len);
		Line(const Line &obj);
		~Line();

	private:
		int *ptr;
};

Line::Line(int len)
{
	cout <<"调用构造函数"<< endl;
	ptr = new int;
	*ptr = len;
}

Line::Line(const Line &obj)
{
	cout <<"调用拷贝函数并为指针 ptr 分配内存" << endl;
	ptr = new int;
	*ptr = *obj.ptr;
}

Line::~Line(void)
{
	cout << "释放内存" << endl;
	delete ptr;
}

void display(Line obj)
{
	cout << "line 大小：" << obj.getLength() << endl;
}

int Line::getLength(void)
{
	return *ptr;
}

int main()
{
	Line line1(10);
	Line line2 = line1;

	display(line1);
	display(line2);

	return 0;
}

/*
调用构造函数
调用拷贝函数并为指针 ptr 分配内存
调用拷贝函数并为指针 ptr 分配内存
line 大小：10
释放内存
调用拷贝函数并为指针 ptr 分配内存
line 大小：10
释放内存
释放内存
释放内存
*/


```





- C++ 友元函数
    - 类的友元函数是定义在类外部，但有权访问类的所有私有（private）成员和保护（protected）成员。
    - 友元函数并不是成员函数。

```c++
#include <iostream>

using namespace std;

class Box
{
	double width;
	public:
		friend void printWidth(Box box);
		void setWidth(double wid);
};

void Box::setWidth(double wid)
{
	width = wid;
}

void printWidth(Box box)
{
	/* 因为 printWidth()是Box的友元，它可以直接访问该类的任何成员  */
	cout << "Width of box:" << box.width << endl;
}

int main()
{
	Box box;

	box.setWidth(10.0);

	printWidth(box);

	return 0;
}


/*
--------------------------------------
Width of box : 10
--------------------------------------
*/
```




- C++ 内联函数
    - 通常与类一起使用。
    - 如果一个函数是内联的，那么编译时，编译器会把该函数代码副本放置在每个调用该函数的地方。
    - 对内联函数进行任何修改，都需要重新变异函数的所有客户端，因为编译器需要重新更换一次所有的代码，否则就会继续使用旧函数。
    - 在类定义中的定义的函数都是内联函数，即使没有使用inline 说明符。

```c++
#include <iostream>

using namespace std;

inline int Max(int x, int y)
{
	return (x > y)? x:y;
}

int main()
{
	cout << "Max (20.10):" << Max(20,10) << endl;
	cout << "Max (0,200):" << Max(0,200) << endl;
	return 0;
}

/*
------------------------
Max (20.10):20
Max (0,200):200
------------------------
*/

```


- C++ 中的this 指针
    - 每一个对象都能通过 this 来访问自己的地址。
    - 友元函数没有 this 指针，因为友元不是类的成员。只有成员函数才有 this 指针。

```C++
#include <iostream>

using namespace std;

class Box
{
	public:
		Box(double l=2.0, double b=2.0, double h=2.0)
		{
			cout << "Constructor called."<< endl;
			length = 1;
			breadth = b;
			height = h;
		}
		double Volume()
		{
			return length * breadth * height;
		}
		int compare(Box box)
		{
			return this->Volume() > box.Volume();			
		}
	private:
		double length;
		double breadth;
		double height;
};

int main(void)
{
	Box Box1(3.3, 1.2, 1.5);
	Box Box2(8.5, 6.0, 2.0);

	if(Box1.compare(Box2))
	{
		cout << "Box2 is smaller than Box1"	<< endl;
	}
	else
	{
		cout << "Box2 is equal to or larger than Box1"	<<endl;
	}
}

/*
--------------------------
Constructor called.
Constructor called.
Box2 is equal to or larger than Box1
--------------------------
*/
```



- C++ 中指向类的指针
    - 一个指向C++类的指针与指向结构的指针类似，访问指向类的指针的成员，需要使用成员访问运算符->

```c++
#include <iostream>

using namespace std;

class Box
{
	public:
		Box(double l=2.0, double b=2.0, double h=2.0)
		{
			cout << "Constructor called."<< endl;
			length =l;
			breadth =b;
			height =h;
		}
		double Volume()
		{
			return length * breadth * height;	
		}

	private:
		double length;
		double breadth;
		double height;
};

int main(void)
{
	Box Box1(3.3, 1.2, 1.5);
	Box Box2(8.5, 6.0, 2.0);
	Box *ptrBox;

	ptrBox = &Box1;

	cout << "Volume of Box1:" << ptrBox->Volume() << endl;

	ptrBox = &Box2;

	cout << "Volume of Box2:" << ptrBox->Volume() << endl;

	return 0;
}

/*
---------------------------------
Constructor called.
Constructor called.
Volume of Box1: 5.94
Volume of Box2: 102
---------------------------------
*/

```



- C++ 类的静态成员
       - 可以使用 static 关键字来把类成员定义为静态的。
       - 当我们声明类的成员为静态时，这意味着无论创建多少个类的对象，静态成员都只有一个副本。
       - 静态成员在类的所有对象中是共享的。如果不存在其他的初始化语句，在创建第一个对象时，所有的静态数据都会被初始化为零。我们不能把静态成员的初始化放置在类的定义中，但是可以在类的外部通过使用范围解析运算符::来重新声明静态变量从而对它进行初始化。

```c++
#include <iostream>

using namespace std;

class Box
{
	public:
		static int objectCount;

		Box(double l=2.0,double b=2.0, double h=2.0)
		{
			cout << "Constructor called." << endl;
			length =l;
			breadth =b;
			height =h;

			objectCount++;
		}
		double Volume()
		{
			return length * breadth * height;	
		}

	private:
		double length;
		double breadth;
		double height;
};

int Box::objectCount = 0;

int main(void)
{
	Box Box1(3.3, 1.2, 1.5);
	Box Box2(8.5, 6.0, 2.0);

	cout << "Total objects:" << Box::objectCount << endl;

	return 0;
}

/*
-----------------------
Constructor called.
Constructor called.
Total objects: 2
-----------------------
*/
```

- 静态成员函数
    - 如果把函数成员声明为静态的，就可以把函数与类的任何特定对象独立开来。
    - 静态成员函数即使在类对象不存在的情况下也能被调用，静态函数只要使用类名加范围解析运算符::就可以访问。
    - 静态成员函数只能访问静态成员数据、其他静态成员函数和类外部的其他函数。
    - 静态成员函数有一个类范围，他们不能访问类的this指针。

**静态成员函数与普通成员函数的区别**
- 静态成员函数没有 this 指针， 只能访问静态成员（包括静态成员变了和静态成员函数）
- 普通成员函数有 this 指针，可以访问类中的任意成员；而静态成员函数没有 this 指针。

```c++
#include <iostream>

using namespace std;

class Box
{
	public:
		static int objectCount;

		Box(double l=2.0, double b=2.0, double h=2.0)
		{
			cout << "Constructor called."<< endl;
			length = l;
			breadth = b;
			height = h;

			objectCount ++;
		}
		double Voulme()
		{
			return length * breadth * height;
		}
		static int getCount()
		{
			return objectCount;	
		}

	private:
		double length;
		double breadth;
		double height;
};

int Box::objectCount = 0;

int main(void)
{
	cout << "Inital Stage Count:" << Box::getCount() <<endl;

	Box Box1(3.3, 1.2, 1.5);
	Box Box2(8.5, 6.0, 2.0);

	cout << "Final Stage Count:" << Box::objectCount << endl;

	return 0;
}

/*
------------------------
Inital Stage Count:0
Constructor called.
Constructor called.
Final Stage Count:2
------------------------
*/
```

## 16. 继承



```C++
#include <iostream>

using namespace std;

class Shape
{
	public:
		void setWidth(int w)
		{
			width = w;	
		}
		void setHeight(int h)
		{
			height = h;	
		}
	protected:
		int width;
		int height;
};

class Rectangle: public Shape
{
	public:
		int getArea()
		{
			return(width * height);	
		}

};

int main(void)
{
	Rectangle Rect;

	Rect.setWidth(5);
	Rect.setHeight(7);

	cout << "Total area:" << Rect.getArea() << endl;
	
	return 0;

}

/*
---------------------------------
Total area:35
---------------------------------
*/
```


- 访问控制和继承
    - 派生类可以访问基类中所有的非私有成员。
    - 因此基类成员如果不想被派生类的成员函数访问，则应在基类中声明 private.


- 一个派生类继承了所有的基类的方法，但下列情况除外：
    - 基类的构造函数、析构函数和拷贝构造函数
    - 基类的重载运算符
    - 基类的友元函数

- 继承类型
    - 我们几乎不使用 protected 或 private 继承， 通常使用 public 继承
        - 公有继承 （public):  
            - 私有成员不能直接被派生类访问，但是可以通过调用基类的公有和保护成员来访问。
        - 保护继承 (protected):
            - 当一个类派生自保护基类时，基类的公有和保护成员将成为派生类的保护成员 
        - 私有继承 （private):
            - 当一个类派生自私有基类时，基类的公有和保护成员将成为派生类的私有成员


- 多继承
    - 即一个子类可以有多个父亲，它继承了多个父类的特性。
    - 访问修饰符继承方式是 public, protected 或 private, 用来修饰每个基类，各个基类之间用逗号分隔。


```c++
#include <iostream>

using namespace std;

class Shape
{
	public:
		void setWidth(int w)
		{
			width = w;	
		}

		void setHeight(int h)
		{
			height = h;	
		}
	protected:
		int width;
		int height;
};

class PaintCost
{
	public:
		int getCost(int area)
		{
			return area * 70;	
		}
};

class Rectangle: public Shape, public PaintCost
{
	public:
		int getArea()
		{
			return (width * height);
		}
};

int main()
{
	Rectangle Rect;
	int area;

	Rect.setWidth(5);
	Rect.setHeight(7);

	area = Rect.getArea();

	cout << "Total area:" << Rect.getArea() << endl;

	cout << "Total paint cost:$" << Rect.getCost(area) << endl;




	return 0;
}

/*
Total area:35
Total paint cost:$2450
 */
```

## 17. C++ 重载运算符和重载函数

- C++ 允许在同一作用域中的某个函数和运算符指定多个定义，分别称为**函数重载**和**运算符重载**
- 当调用一个重载函数或重载运算符时，编译器通过把使用的参数类型与定义中的参数类型进行比较，决定选用最合适的定义。选择最合适的重载函数或重载运算符的过程称为重载决策。


```C++
/*
 *  重载函数
 */

#include <iostream>

using namespace std;

class printDate
{
	public:
		void print(int i){
			cout << "整数为："<< i << endl;
		}
		void print(double f){
			cout << "浮点数："<< f << endl;
		}
		void print(char c[]){
			cout << "字符串为:"<< c << endl;
		}
};

int main(void)
{
	printDate pd;

	pd.print(5);

	pd.print(500.263);

	char c[]= "Hello C++";
	pd.print(c);

	return 0;
}

/*
整数为：5
浮点数：500.263
字符串为:Hello C++
 */
```

- C++ 中的运算符重载
    - 重载的运算符是带有特殊名称的函数，函数名是由关键字 operator 和其后要重载的运算符构成。
    > Box oerator+(const Box&);


```c++
/*
 * C++ 中的运算符重载
*/
#include <iostream>
using namespace std;

class Box
{
	public:

		double getVolume(void)
		{
			return length * breadth * height;	
		}
		void setLength(double len)
		{
			length = len;	
		}

		void setBreadth(double bre)
		{
			breadth = bre;	
		}

		void setHeight(double hei)
		{
			height = hei;	
		}

		Box operator+(const Box& b)
		{
			Box box;
			box.length = this->length + b.length;
			box.breadth = this->breadth + b.breadth;
			box.height = this->height + b.height;
			return box;
		}
	private:
		double length;
		double breadth;
		double height;
};


int main()
{
	Box Box1;
	Box Box2;
	Box Box3;
	double volume = 0.0;

	Box1.setLength(6.0);
	Box1.setBreadth(7.0);
	Box1.setHeight(5.0);

	Box2.setLength(12.0);
	Box2.setBreadth(13.0);
	Box2.setHeight(10.0);

	volume = Box1.getVolume();
	cout << "volume of Box1:" << volume << endl;

	volume = Box2.getVolume();
	cout << "volume of Box2:" << volume << endl;

	Box3 = Box1 + Box2;

	volume = Box3.getVolume();
	cout << "volume of Box3:" << volume << endl;

	return 0;
}

/*
volume of Box1:210
volume of Box2:1560
volume of Box3:5400
*/
```

- 运算符重载实例

- 一元运算符重载
    - \++  --
    - 前缀形式重载调用 Check operator ++(), 后缀形式重载调用 operator ++ (int)
    
```c++
#include <iostream>
using namespace std;

class Time
{
	private:
		int hours;
		int minutes;
	public:
		Time()
		{
			hours = 0;
			minutes = 0;
		}
		Time(int h, int m)
		{
			hours = h;
			minutes = m;
		}
		void displayTIme()
		{
			cout << "H:"<< hours << "M:" << minutes << endl;
		}

		Time operator++()
		{
			++minutes;
			if(minutes >=60)
			{
			++hours;
			minutes -=60;
			}
			return Time(hours, minutes);
		}

		Time operator++(int) //int 在括号内是为了向编译器说明这个后缀形式，而不是表示整数。
		{
			Time T(hours, minutes);

			++minutes;
			if(minutes >= 60)
			{
				++hours;
				minutes -=60;
			}
			return T; //返回原始值
		}
};

int main()
{
	Time T1(11,59), T2(10,40);
	
	++T1;
	T1.displayTIme();

	++T1;
	T1.displayTIme();

	T2++;
	T2.displayTIme();
	T2++;
	T2.displayTIme();


	return 0;
}

/*
H:12M:0
H:12M:1
H:10M:41
H:10M:42
*/


```

```C++
/*
 *++ 重载
 */
#include <iostream>
using namespace std;

class Check
{
	private:
		int i;
	public:
		Check():i(0){}
		Check operator ++()
		{
			Check temp;
			temp.i = ++i;
			return temp;
		}

		Check operator ++(int)
		{
			Check temp;
			temp.i = i++;
			return temp;
		}
		void Display()
		{cout << "i =" << i <<endl;}
};


int main()
{
	Check obj, obj1;
	obj.Display();
	obj1.Display();

	obj1=++obj;
	obj.Display();
	obj1.Display();

	obj1=obj++;
	obj.Display();
	obj1.Display();

	return 0;

}
```


```C--
#include <iostream>
using namespace std;

class Check
{
	private:
		int i;
	public:
		Check():i(3){}
		Check operator --()
		{
			Check temp;
			temp.i = --i;
			return temp;
		}

		Check operator -- (int)
		{
		Check temp;
		temp.i = i--;
		return temp;
		}

		void Display()
		{cout << "i = " << i << endl;}
};

int main()
{
	Check obj, obj1;
	obj.Display();
	obj1.Display();

	obj1=--obj;
	obj.Display();
	obj1.Display();

	obj1=obj--;
	obj.Display();
	obj1.Display();

	return 0;
}

/*
----------------------------
i = 3
i = 3
i = 2
i = 2
i = 1
i = 2
----------------------------
 */
```



- 二元运算符重载(需要两个参数)

```C++
#include <iostream>
using namespace std;

class Box
{
	double length;
	double breadth;
	double height;

	public:
	
	double getVolume(void)
	{
		return length * breadth * height;
	}

	void setLength(double len)
	{
		length =len;
	}

	void setBreadth(double bre)
	{
		breadth =bre;	
	}

	void setHeight(double hei)
	{
		height = hei;	
	}

	Box operator+(const Box& b)
	{
		Box box;
		box.length = this->length + b.length;
		box.breadth = this->breadth + b.breadth;
		box.height = this->height + b.height;
		return box;
	}
};

int main()
{
	Box Box1;
	Box Box2;
	Box Box3;
	double volume = 0.0;

	Box1.setLength(6.0);
	Box1.setBreadth(7.0);
	Box1.setHeight(5.0);

	Box2.setLength(12.0);
	Box2.setBreadth(13.0);
	Box2.setHeight(10.0);

	volume = Box1.getVolume();
	cout << "Volume of Box1:"<< volume << endl;

	volume = Box2.getVolume();
	cout << "Volume of Box2:"<< volume << endl;

	Box3 = Box1 + Box2;

	volume = Box3.getVolume();
	cout << "volume of Box3:" << volume << endl;

	return 0;
}

/*
Volume of Box1:210
Volume of Box2:1560
volume of Box3:5400
*/

```




- 关系运算符重载

```C++
/*
 *fun: 关系运算符
 */


#include <iostream>
using namespace std;

class Distance
{
    private:
        int feet;
        int inches;
    public:
        Distance(){
        feet =0;
        inches =0;
        }
        Distance(int f, int i){
        feet = f;
        inches =i;
        }

        void displayDistance()
        {
        cout << "F:" << feet << "I:"<< inches << endl;
        }

        Distance operator-()
        {
        feet =-feet;
        inches = -inches;
        return Distance(feet,inches);
        }

        bool operator <(const Distance& d)
        {
            if(feet < d.feet)
            {
                return true;
            }
            if(feet == d.feet && inches < d.inches)
            {
                return true; 
            }
            return false;
        }
};

int main()
{
    Distance D1(11,10), D2(5,11);

    if(D1 < D2)
    {
        cout << "D1 is less than D2"  << endl;
    }
    else
    {
    cout << "D2 is less than D1" << endl;
    }
    return 0;
}

/*
D2 is less than D1
*/
```


- 输入、输出运算符重载
    - istream 输入流类
    - ostram 输出流类

```C++
/*
 *fun: 输入、输出运算符重载
 */

#include <iostream>
using namespace std;

class Distance
{
    private:
        int feet;
        int inches;

    public:
        Distance(){
        feet =0;
        inches =0;
        }
    Distance(int f, int i)
    {
    feet = f;
    inches = i;
    }
    friend ostream &operator<<(ostream &output, const Distance &D)
    {
    output << "F:" << D.feet << " I :" << D.inches;
    return output;
    }
    friend istream &operator>>(istream &input, Distance &D)
    {
    input >> D.feet >> D.inches;
    return input;
    }
};

int main()
{
    Distance D1(11,10), D2(5,11),D3;

    cout << "Enter the value of object:"<< endl;
    cin >> D3;
    cout <<"First Distance:"  << D1 << endl;
    cout << "Second Distance:" << D2 << endl;
    cout << "Third Distance:" << D3 << endl;

    return 0;
}

/*
Enter the value of object:
10
20
First Distance:F:11 I :10
Second Distance:F:5 I :11
Third Distance:F:10 I :20
*/

```



- 赋值运算符重载

```c++
/*
 *fun:赋值运算符重载
 */

#include <iostream>
using namespace std;

class Distance
{
    private:
        int feet;
        int inches;
        
    public:
        Distance(){
            feet = 0;
            inches = 0;
        }
        Distance(int f, int i){
            feet = f;
            inches = i;
        }
        void operator=(const Distance &D)
        {
            feet = D.feet;
            inches = D.inches;
        }

        void displayDistance()
        {
        cout << "F:" << feet << " I:"<< inches << endl;
        }
};

int main()
{
    Distance D1(11,10), D2(5,11);

    cout << "First Distance";
    D1.displayDistance();

    cout << "Second Distance";
    D2.displayDistance();

    D1 = D2;
    cout << "Second Distance";
    D1.displayDistance();

    return 0;
}

/*
First DistanceF:11 I:10
Second DistanceF:5 I:11
Second DistanceF:5 I:11
*/
```

- 函数调用运算符（） 重载
    - 当重建（）时，不是创造了一种新的调用函数的方式，相反地，这是创建一个可以传递任意数目参数的运算符函数。

```C++
/*
 *函数调用运算符()
 */

#include <iostream>
using namespace std;

class Distance
{
    private:
        int feet;
        int inches;
    public:
        Distance(){
        feet =0;
        inches = 0;
        }
        Distance(int f, int i)
        {
       feet = f;
       inches = i;
        }

        Distance operator()(int a, int b, int c)
        {
        Distance D;
        D.feet = a+c+10;
        D.inches = b+c+100;
        return D;
        }

        void displayDistance()
        {
        cout << "F:" << feet << " I:" << inches << endl;
        }
};

int main()
{
    Distance D1(11,10),D2;

    cout << "First Distance:";
    D1.displayDistance();

    D2 = D1(10,10,10);
    cout << "Second Distance:";
    D2.displayDistance();

    return 0;
}

/*
First Distance:F:11 I:10
Second Distance:F:30 I:120
*/

```



- 下标运算符[]重载

```C++
/*
 *fun:下标运算符[]重载
 */

#include <iostream>
using namespace std;
const int SIZE = 10;

class saferay
{
    private:
        int arr[SIZE];
    public:
        saferay()
        {
            register int i;
            for(i=0; i<SIZE; i++)
            {
            arr[i] = i;
            }
        }
        int& operator[](int i)
        {
        if(i > SIZE) 
        {
         cout << "索引超过最大值" << endl;
        // 返回第一个元素
         return arr[0];
        }
        return arr[i];
        }

};

int main()
{
    saferay A;

    cout << "A[2]的值为:" << A[2] << endl;
    cout << "A[5]的值为:" << A[5] << endl;
    cout << "A[12]的值为:" << A[12] << endl;
        
    return 0;


}

/*
A[2]的值为:2
A[5]的值为:5
索引超过最大值
A[12]的值为:0
*/
```



- 类成员访问运算符-> 重载


## 18. 多态

- 静态多态/静态链接 
    - 函数调用在程序执行前就准备好了.
    - 有时称为早绑定.
    - 变成动态多态需要加上 virtual

- 虚函数
    - 是在基类中使用关键字 **virtual** 声明的函数.在派生类中重新定义基类定义的虚函数时,会告诉编译器不要静态链接到该函数.
    - 在程序中任意点可以根据所调用的对象类型来选择调用的函数,这种操作被称为动态链接,或后期绑定.


```c++
/*
 *多态
 */

#include <iostream>
using namespace std;

class Shape{
    protected:
        int width, height;
    public:
        Shape(int a =0, int b =0)
        {
            width = a;
            height =b;
        }
        virtual    int area()
        {
            cout << "Parent class area:"  << endl;
            return 0;
        }
};

class Rectangle: public Shape{
    public:
        Rectangle(int a=0, int b=0):Shape(a, b){}
        int area()
        {
        cout << "Rectangle class area:" << endl;
        return (width * height);
        }
};

class Triangle: public Shape{
    public:
        Triangle(int a=0, int b=0):Shape(a,b){}
        int area()
        {
        cout << "Triangle class area:" << endl;
        return(width * height /2);
        }
};

int main()
{
    Shape *shape;
    Rectangle rec(10,7);
    Triangle tri(10,5);

    shape =&rec;
    shape->area();

    shape =&tri;
    shape->area();

    return 0;
}

/*
Rectangle class area:
Triangle class area:

*/
```

- 纯虚函数
    - 可能想要在基类中定义虚函数,以便在派生类中重新定义该函数更好地适用于对象,但是在基类中又不能对虚函数给出又意义的实现,这时就会用到纯虚函数.

```c++
class Shape {
   protected:
      int width, height;
   public:
      Shape( int a=0, int b=0)
      {
         width = a;
         height = b;
      }
      // pure virtual function
      virtual int area() = 0;
};
```

**= 0 告诉编译器,函数没有主体,上面的虚函数是纯虚函数**

## 19. C++ 数据抽象

- 数据抽象
    - 只向外界提供关键信息,并隐藏其后台的实现细节,即只表现必要的信息而不呈现细节.


```c++
/*
 *数据抽象
 */

#include <iostream>
using namespace std;

class Adder{
    public:
        Adder(int i =0)
        {
            total = i; 
        }

        void addNum(int number)
        {
            total += number; 
        }

        int getTotal()
        {
            return total; 
        };

    private:
        int total;
};

int main()
{
    Adder a;

    a.addNum(10);
    a.addNum(20);
    a.addNum(30);

    cout << "Total " << a.getTotal() << endl;
    return 0;
}

/*
Total 60
*/

```


## 20. 数据封装

- 所有的C++ 程序都有以下两个基本要素:
    - 程序语句(代码): 这是程序中执行动作的部分,它们被称为函数
    - 程序数据: 数据是程序的信息, 会受到程序函数的影响.

- **数据封装**是一种把数据和操作数据的函数捆绑在一起的机制,**数据抽象**是一种仅向用户暴露接口而把具体的实现细节隐藏起来的机制.

```c++
/*
 *数据封装
 */

#include <iostream>
using namespace std;

class Adder{
    public:

        Adder(int i =0)
        {
            total =i; 
        }

        void addNum(int number)
        {
            total += number; 
        }

        int getTotal()
        {
            return total;
        };

    private:
        int total;
};

int main()
{
    Adder a;

    a.addNum(10);
    a.addNum(20);
    a.addNum(30);

    cout << "Total" << a.getTotal() << endl;

    return 0;
}
/*
Total60
*/

```

## 21. C++ 接口(抽象类)

- 数据抽象:
    - 是一个把实现细节与相关的数据分离开的概念
- 抽象类:
    - 如果类中至少有一个函数被声明为纯虚函数,则这个类就是抽象类.
    - 声明中使用"=0"来指定.

```c++
/*
 *  抽象类
 */
#include<iostream>
using namespace std;

class Shape
{
public:
    virtual int getArea()=0;
    void setWidth(int w)
    {
        width =w; 
    }
    void setHeight(int h)
    {
        height = h; 
    }
protected:
    int width;
    int height;
};

class Rectangle: public Shape
{
    public:
        int getArea()
        {
            return (width * height);
        }
};

class Triangle: public Shape
{
    public:
        int getArea()
        {
            return (width * height)/2;
        }
};

int main(void)
{
    Rectangle Rect;
    Triangle Tri;

    Rect.setWidth(5);
    Rect.setHeight(7);

    cout << "Total Rectangle area:" << Rect.getArea() << endl;

    Tri.setWidth(5);
    Tri.setHeight(7);
    cout << "Total Triangle area:" << Tri.getArea() << endl;

    return 0;
}
/*
Total Rectangle area: 35
Total Triangle area: 17
 */

```

## C ++ 文件和流

| 数据类型  |                                                  描述                                                  |
| :------: | :---------------------------------------------------------------------------------------------------: |
| ofstream |                              该数据类型表示输出文件流，用于创建文件并向文件写入信息                              |
| ifstream |                                  该数据类型表示输入文件流，用于从文件读取信息                                  |
| fstream  | 该数据类型通常表示文件流，且同时具有 ofstream 和 ifstream两种功能，这意味着它可以创建文件，向文件写入信息，从文件读取信息。 |


- 打开文件
> void open(const char *filename, ios::openmode mode);


|  模式标志   |                           描述                            |
| ---------- | -------------------------------------------------------- |
| ios::app   | 追加模式。所有写入都追加到文件末尾。                             |
| ios::ate   | 文件打开后定位到文件末尾。                                     |
| ios::in    | 打开文件用于读取。                                           |
| ios::out   | 打开文件用于写入。                                           |
| ios::trunc | 如果该文件已经存在，其内容将在打开文件之前被截断，即把文件长度设为 0。 |




- 关闭文件
> void close()



- 写入文件

\<< 


- 读取文件
\>>

- 实例

```C++
#include <fstream>
#include <iostream>
using namespace std;

int main()
{
  char data[100];

  ofstream outfile;
  outfile.open("afile.dat");

  cout << "Writing to the file" << endl;
  cout << "Enter your name:";
  cin.getline(data,100);

  outfile << data << endl;

  cout << "Enter your age:";
  cin >> data;
  cin.ignore();

  outfile << data << endl;

  outfile.close();

  ifstream infile;
  infile.open("afile.dat");

  cout << "Reading from the file" << endl;
  infile >> data;

  cout << data << endl;

  infile >> data;

  cout << data << endl;

  infile.close();


  return 0;
}

/*
Writing to the file
Enter your name:Zara
Enter your age:9
Reading from the file
Zara
9
*/
```

- 文件位置指针
    - istream 和 ostream 都提供了用于重新定位的文件位置指针的成员函数。
    - istream ---- seekg ---- seek get
    - ostream ---- seekp ---- seek put
    - seekg 和 seekp 的参数通常是一个长整数。 第二个参可以用于指定查找方向。
    - ios::beg 从流的开头开始定位
    - ios::cur 从流的当前位置开始定位
    - ios::end 从流的末尾开始定位

```
// 定位到 fileObject 的第 n 个字节（假设是 ios::beg）
fileObject.seekg( n );
 
// 把文件的读指针从 fileObject 当前位置向后移 n 个字节
fileObject.seekg( n, ios::cur );
 
// 把文件的读指针从 fileObject 末尾往回移 n 个字节
fileObject.seekg( n, ios::end );
 
// 定位到 fileObject 的末尾
fileObject.seekg( 0, ios::end );
```



## C++ 异常处理

- try
    - try 中的代码标识将被激活的特定异常。它后面通常跟一个或多个 catch 块。
- throw
    - 当问题出现时，程序会抛出一异常
- catch
    - 在想要处理问题的地方，通过异常处理程序捕获异常。


- 抛出异常

```c++
double division(int a, int b)
{
    if(b==0)
    {
       throw "Division by zero condition!";
    }
    return (a/b);
}
```

- 捕获异常

```c++
#include <iostream>
using namespace std;

double division(int a, int b)
{
  if (b==0)
  {
    throw "Division by zero condition!";
  }
  return (a/b);
}

int main()
{
  int x = 50;
  int y = 0;
  double z = 0;

  try{
    z = division(x,y); 
    cout << z << endl;
  }catch(const char* msg){ // 抛出了一个类型为 const char*的异常。
    cerr << msg <<endl; 
  }

  return 0;
}

/*
Division by zero condition!
*/
```

- 定义新异常

```c++
#include<iostream>
#include<exception>
using namespace std;

struct MyException : public exception
{
  const char * what() const throw() // what()是异常类提供的一个公共方法。
  {
    return "C++ Exception";
  }
};

int main()
{

  try
  {
    throw MyException(); 
  }
  catch(MyException& e)
  {
    cout << "MyException caught" << endl;
    cout << e.what() << endl;
  }

  return 0;
}

/*
MyException caught
C++ Exception
*/
```

## C++ 动态内存

- C++ 程序中的内存分为两个部分：
    - 栈： 在函数内部申明的所有变量都将占用栈内存。
    - 堆： 这是程序未使用的内存，在程序运行时可用于动态 分配内存。
    - 使用 new 运算符为给定类型的变量在运行时分配堆内的内存，并返回所分配的空间地址
    - 使用 delete 运算符，删除之前由 new 运算符分配的内存。

- malloc( ) 与 new( )
    - new 的优点： new 不只是分配了内存，还创建了对象。

```c++
#include<iostream>
using namespace std;

int main()
{
  double *pvalue = NULL;
  pvalue = new double;

  *pvalue = 29493.22;
  cout << "Value of pvalue:" << *pvalue <<endl;

  delete pvalue;
  
  return 0;
}

/*
Value of pvalue:29493.2
*/
```

- 数组的动态内存分配

- 二维数组实例

```c++
#include<iostream>
using namespace std;

int main()
{
  int **p;
  int i,j; //p[4][8]

  // 开始分配4行8列的二位数据
  p = new int *[4];
  for(i=0;i<4;i++)
  {
    p[i] =new int [8];
  }

  // 分配数据
  for(i=0;i<4;i++)
  {
    for(j=0;j<8;j++)
    {
      p[i][j]= j*i;
    }
  }

  // 打印数据
  for(i=0;i<4;i++)
  {
    for(j=0;j<8;j++)
    {
      if(j==0) cout<<endl;
      cout<<p[i][j] << "\t";
    }
  }

  // 开始释放申请的堆
  for(i=0;i<4;i++)
  {
    delete []p[i];
  }
  delete []p;

  return 0;
}

/*
0	0	0	0	0	0	0	0	
0	1	2	3	4	5	6	7	
0	2	4	6	8	10	12	14	
0	3	6	9	12	15	18	21	
*/
```

- 三维数组

```c++
#include<iostream>
using namespace std;

int main()
{
  int ***p;
  int i,j,k; //p[2][3][4]

  p = new int **[2];
  for(i=0;i<2;i++)
  {
    p[i] =new int *[3];
    for(j=0;j<3;j++)
      p[i][j]=new int[4];
  }

  // 分配数据
  for(i=0; i<2; i++)
  {
    for(j=0; j<3; j++) 
    {
      for(k=0;k<3;k++)
      {
        p[i][j][k]=i+j+k;
        cout<< p[i][j][k] <<" ";
      }
      cout<< endl;
    }
    cout<< endl;
  }
  
  // 释放内存
  for(i=0; i<2; i++)
  {
    for(j=0; j<3; j++) 
    {
      delete []p[i][j];
    }
  }
  for(i=0;i<2;i++)
  {
    delete [] p[i];
  }
  delete []p;
  return 0;
}

/*
0 1 2 
1 2 3 
2 3 4 

1 2 3 
2 3 4 
3 4 5 
*/
```

- 对象的动态内存分配

```c++
#include<iostream>
using namespace std;

class Box
{
  public:
    Box(){
      cout << "调用构造函数！" <<endl;
    }
    ~Box(){
      cout << "调用析构函数！" <<endl;
    }
};

int main()
{
  Box* myBoxArray = new Box[4];

  delete [] myBoxArray;
  return 0;
}

/*
调用构造函数！
调用构造函数！
调用构造函数！
调用构造函数！
调用析构函数！
调用析构函数！
调用析构函数！
调用析构函数！
*/
```

## C++ 动态命名空间

> 为了区分相同的地方有两个一样的名字的函数，类，变量等。引入了命名空间

```C++
#include <iostream>
using namespace std;

namespace first_space{
  void func(){
    cout << "Inside first_space" << endl;
  }
}

namespace second_space{
  void func(){
    cout << "Inside second_space" << endl;
  }
}

int main()
{
  first_space::func();
  second_space::func();
  
  return 0;
}
/*
Inside first_space
Inside second_space
*/
```

- using 指令
    - using namespace 指令，这样在使用命名空间时就可以在不用在前面加上命名空间的名称。这个指令会告诉编译器，后续的代码将使用指定的命名空间中的名称

```c++
#include <iostream>
using namespace std;

namespace first_space{
  void func(){
    cout << "Inside first_space" << endl;
  }
}

namespace second_space{
  void func(){
    cout << "Inside second_space" << endl;
  }
}

using namespace first_space;

int main()
{
  func();
  second_space::func();


  return 0;
}
/*
Inside first_space
Inside second_space
*/
```

- 不连续的命名空间，嵌套的命名空间

```c++
#include <iostream>
using namespace std;

namespace first_space{
  void func(){
    cout << "Inside first_space" << endl;
  }
namespace second_space{
  void func(){
    cout << "Inside second_space" << endl;
}

  }
}

using namespace first_space::second_space;

int main()
{
  
  func();

  return 0;
}

/*
Inside second_space
*/
```

## C++ 模板



-  函数模板

```
tmplate <class type> ret-type func-name(parameter list)
```
**这里的 type 是函数所使用的数据类型的占位符名称。这个名称可以在函数定义中使用**

```c++
#include<iostream>

using namespace std;

template <typename T>
inline T const& Max (T const&a, T const& b)
{
  return a < b ? b:a;
}

int main()
{
  int i = 39;
  int j = 20;
  cout << "Max(i,j)" << Max(i,j) << endl;

  double f1 = 13.5;
  double f2 = 20.7;
  cout << "Max(f1,f2)" << Max(f1,f2) << endl;

  string s1 = "Hello";
  string s2 = "world";
  cout << "Max(s1, s2)" << Max(s1,s2) << endl;

  return 0;
}

/*
Max(i,j)39
Max(f1,f2)20.7
Max(s1, s2)world
*/
```

- **类模板**

```
template <class type> class class-name {
.
.
.
}
```

## c++ 预处理

- 预处理指令不是 C++ 语句，所以它们不会以分号（；）结尾。

- #define 预处理
`#define macro-name replacement-text`

```c++
#include<iostream>
using namespace std;

#define PI 3.14159

int main()
{
  cout << "Value of PI："<< PI << endl;

  return 0;
}
/*
Value of PI：3.14159
*/
```

- 参数宏

```c++
#include<iostream>
using namespace std;

#define MIN(a,b)(a<b ? a:b)

int main()
{
  int i,j;
  i = 100;
  j = 30;
  cout <<"较小的值为：" << MIN(i,j) << endl;

  return 0;
}

/*
较小的值为：30
*/
```

- 条件编译

```c++
#include<iostream>
using namespace std;
#define DEBUG // 程序会对 cerr 语句进行编译

#define MIN(a,b)(((a)<(b))?a:b)

int main()
{
  int i,j;
  j =30;
  i =100;
#ifdef DEBUG 
  cerr << "Trace: Inside main function" << endl;
#endif

#if 0 // 语句注释掉程序的一部分 
  cout << MKSTR(HELLO C++) << endl;
#endif

  cout << "The minimum is " << MIN(i,j) << endl;

#ifdef DEBUG
  cerr <<"Trace: Coming out of main function"<< endl;
#endif

  return 0;
}
/*
Trace: Inside main function
The minimum is 30
Trace: Coming out of main function
*/
```


- \# 和 \## 运算符

```C++
#include<iostream>
using namespace std;

#define MKSTR(x) #x

int main()
{
  cout << MKSTR(HELLO C++) << endl;

  return 0;
}
/*
HELLO C++
*/
```

```C++
#include<iostream>
using namespace std;

#define concat(a,b) a ## b

int main()
{
  int xy = 100;

  cout << concat(x,y);

  return 0;
}
/*
100
*/
```


- C++ 中的预定义宏

```c++
#include<iostream>
using namespace std;


int main()
{
  cout << "Value of __LINE__:" << __LINE__ << endl;
  cout << "Value of __FILE__:" << __FILE__ << endl;
  cout << "Value of __DATE__:" << __DATE__ << endl;
  cout << "Value of __TIME__:" << __TIME__ << endl;


  return 0;
}

/*
Value of __LINE__:7
Value of __FILE__:hello.cpp
Value of __DATE__:Dec 21 2019
Value of __TIME__:10:48:33
*/
```


## C++ 信号处理

|   信号   |                描述                |
| :-----: | :--------------------------------: |
| SIGABRT |      程序的异常终止，如调用 abort      |
| SIGFPE  | 错误的算术运算，比如除以零或导致溢出的操作 |
| SIGILL  |             检测非法指令             |
| SIGINT  |          接收到交互注意信号           |
| SIGSEGV |             非法访问内存             |
| SIGTERM |             发送到程序的终止请求             |

- signal( )函数
    - 用来捕获 SIGINT 信号。 不管是想在程序中捕获什么信号，都必须使用 `signal` 函数来注册，并将其与信号处理程序相关联。

`void (*signal (int sig, void(*func)(int)))(int)`

```c++
#include<iostream>
#include<csignal>
#include<unistd.h>

using namespace std;

void signalHandler(int signum)
{
  cout << "interrupt signal("<< signum <<")received.\n";
}

int main()
{
  signal(SIGINT,signalHandler);

  while(1){
    cout << "Going to sleep..." << endl;
    sleep(1);
  }

  return 0;
}
/*
Going to sleep...
Going to sleep...
Going to sleep...
Going to sleep...
Going to sleep...
^Cinterrupt signal(2)received.
*/
```

- raise( )函数
    - raise( )生成信号，该函数带有一个整数信号编号作为参数。
    `int raise(signal sig)`
        - SIGINT
        - SIGABRT
        - SIGFPE
        - SIGILL
        - SIGSEGV
        - SIGTERM
        - SIGHUP

```c++
#include<iostream>
#include<csignal>
#include<unistd.h>

using namespace std;

void signalHandler(int signum)
{
  cout << "interrupt signal("<< signum <<")received.\n";

  exit(signum);
}

int main()
{
  int i=0;

  signal(SIGINT,signalHandler);

  while(++i){
    cout << "Goint to sleep" << endl;
    if(i==3){
      raise(SIGINT);
    }
    sleep(1);
  }

  return 0;
}
/*
Goint to sleep
Goint to sleep
Goint to sleep
interrupt signal(2)received.
*/
```

## C++ 多线程

- 多线程是多任务处理的一种特殊形式，多任务处理允许让电脑同事允许两个或两个以上的程序
- 一般情况下，两种类型的多任务处理： `基于进程和基于线程`
    - 基于进程的多任务处理是程序的并发执行。
    - 基于线程的多任务是同意程序的片段的并发执行。
![线程与进程的区别](_v_images/20191224194540030_423604735.png)

- 创建线程
 
```c++
#inlude <pthread.h>
pthread_create (thread, attr, start_routine, arg)
```
- thread 指向线程标识符指针
- attr 一个不透明的属性对象，可以被用来设置线程属性。可以指定线程属性对象，也可以使用默认值 NULL.
- start_routine 线程运行函数起始地址，一旦线程被创建就会执行。
- arg 运行函数的参数。它必须通过把引用作为指针强制转换为void类型进行传递。如果没有传递参数，则使用NULL。
- 创建线程成功时，函数返回0，若返回值不为0则说明创建线程失败。

- 终止线程

```C++
#inlcude <pthread.h>
pthread_exit(status)
```
> 在这里，pthread_exit 用于显式地退出一个线程。通常情况下，pthread_exit()函数是在线程完成工作后无需继续存在时调用。
如果 main()是在它所创建的线程之前结束，并通过 pthread_exit( ) 退出，那么其他线程将继续执行。否则，它们将在 main( )结束时自动终止。

```c++
#include <iostream>
#include <pthread.h>

using namespace std;
#define NUM_THREADS 5

void* say_hello(void* args)
{
  cout <<"Hello Runoob!"<< endl;
  return 0;
}

int main()
{
  pthread_t tids[NUM_THREADS]; // 定义线程的id变量，多个变量使用数组
  for(int i=0;i<NUM_THREADS;++i)
  {
     //参数依次是：创建线程id,线程参数，调用的函数，传入的函数参数
    int ret = pthread_create(&tids[i],NULL,say_hello,NULL);
      if(ret!=0)
      {
        cout << "pthread_create error:error_code="<<ret<<endl; 
      }
  }
    //等各个线程退出后，进程才结束，否则进程强制结束了，线程可能还没有反应过来。
  pthread_exit(NULL);
}
```
- 运行
<mark>g++ test.cpp -lpthread </mark>

```c++
#include<iostream>
#include<cstdlib>
#include<pthread.h>

using namespace std;

#define NUM_THREADS 5

void *PrintHello(void *threadid)
{
  int tid=*((int*)threadid);
  cout <<"Hello Runoob! 线程ID"<<tid<<endl;
  pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  int indexes[NUM_THREADS];
  int rc;
  int i;
  for(i=0;i<NUM_THREADS;i++)
  {
    cout<<"main():创建线程,"<<i<<endl; 
    indexes[i]=i;
    rc =pthread_create(&threads[i],NULL,
          PrintHello,(void *)&(indexes[i]));
    if(rc){
      cout<<"ERROR:无法创建线程," << rc<<endl;
      exit(-1);
    }
  }
  pthread_exit(NULL);
}
/*
main():创建线程,0
main():创建线程,1
Hello Runoob! 线程ID0
main():创建线程,2
Hello Runoob! 线程ID1
main():创建线程,3
Hello Runoob! 线程ID2
main():创建线程,4
Hello Runoob! 线程ID3
Hello Runoob! 线程ID4
*/
```

```c++
#include<iostream>
#include<cstdlib>
#include<pthread.h>

using namespace std;

#define NUM_THREADS 5

void *PrintHello(void *threadid)
{
  int tid=*((int*)threadid);
  cout <<"Hello Runoob! 线程ID"<<tid<<endl;
  pthread_exit(NULL);
}

int main()
{
  pthread_t threads[NUM_THREADS];
  int indexes[NUM_THREADS];
  int rc;
  int i;
  for(i=0;i<NUM_THREADS;i++)
  {
    cout<<"main():创建线程,"<<i<<endl; 
    indexes[i]=i;
    rc =pthread_create(&threads[i],NULL,
          PrintHello,(void *)&(indexes[i]));
    if(rc){
      cout<<"ERROR:无法创建线程," << rc<<endl;
      exit(-1);
    }
  }
  pthread_exit(NULL);
}
/*
main():创建线程,0
main():创建线程,1
Hello Runoob! 线程ID0
main():创建线程,2
Hello Runoob! 线程ID1
main():创建线程,3
Hello Runoob! 线程ID2
main():创建线程,4
Hello Runoob! 线程ID3
Hello Runoob! 线程ID4
*/
```

- 向线程传递参数

- 连接和分离线程
