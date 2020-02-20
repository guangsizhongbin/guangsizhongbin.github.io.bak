---
title: c
date: 2020-02-19 18:57:14
description: 
tags:
	- c
categories:
	- c
urlname: c
image:
---





---
**注释**

    //   单行注释
    /* 
    */   多行注释

- 不能在注释内嵌套注释


<!--more-->

---
**标识符**
- C 标识符内不允许出现标点字符
- C是区分大小写的编程语言
- 必须以字母或下划线开始

---
**gcc 进行c语言编译分为四个步骤:**

1.预处理, 生成预编译文件(.i文件)
`gcc -E hello.c -o hello.i`

2.编译,生成汇编代码(.s文件)
`gcc -S hello.i -o hello.s`

3.汇编,生成目标文件(.o文件)
`gcc -c hello.s -o hello.o`

4.链接,生成可执行文件
`gcc hello.o -o hello`

---
避免因编译器的原因,生成的.exe文件打开时会一闪而过,从而观察不到其运行的结果,这是因为main( )结束时,DOS窗口会自动关闭.


## 1. 数据类型

---
**C中的类型分为:**
- 基本类型    
    - 整数类型和浮点类型
- 枚举类型    
    - 只能赋予离散整数值的变量
- void 类型         
    - 表明没有可用的值
- 派生类型    
    - 指针，数组，结构，共用体，函数

---
**整数类型**
- char
- unsigned char
- signed char
- int 
- unsigned int
- short
- unsigned short
- long
- unsigned long

**unsigned  正数， signed 正数和负数**
**char 一字节， int 4字节  long 4字节**

---
**浮点类型**
- float    4字节
- double    8字节
- long double    16字节

```c
#include <stdio.h>    // < >代表系统自带的库, " "表示用户自定义的库
#include <float.h>

int main(void)
{
	printf("float 存储最大字节数: %lu \n", sizeof(float));
	printf("float 最小值: %E\n", FLT_MIN);
	printf("float 最大值： %E\n", FLT_MAX);
	printf("精度值：%d\n", FLT_DIG);

	return 0;
}
```


printf( )
- e,E 以指数形式输出单、双精度实数  
- FLT_MIN, FLT_MAX 输出float 的最小值和最大值
- FLT_DIG 输出精度值

---
**void 类型**
- 函数返回为空   
    - void exit(int status)
- 函数参数为空    
    - int rand(void)；
- 指针执行 void   
    - void * malloc (size_tsize);


## 2. C变量

--- 
**变量类型**
- char 通常是一个字节（八位）。
- int 对机器而言，整数的最自然的大小
- float  单精度浮点数  1 位符号， 8 位指数， 23 位小数
- double 双精度浮点数 1位符号， 11位指数， 52位小数
- void 表示类型的缺失

---
**全局变量和局部变量在内存中的区别:**
全局变量保存在内存的全局存储中,占用静态的存储单元;
局部变量保存在栈中,只有在所在函数被调用时才动态地为变量分配存储单元.

**C语言进过编译之后将内存分为以下几个区域:**
- 栈(stack)
    - 由编译器进行管理,自动分配和释放,存放函数调用过程中的各种参数,局部变量,返回值以及函数返回地址.操作方式类似数据结构的栈.

- 堆
    - 用于程序动态申请分配和释放空间. C语言中的malloc 和free, c++中的new 和delete均是在堆中进行的.正常情况下,程序员申请的空间在使用结束后应该释放,若程序员没有释放空间,则程序结束时系统自动回收.**这里的堆并不是数据结构中的堆**

- 全局(静态)存储区
    - 分为DATA段和BSS段,
        - DATA段(全局初始化区)存放初始化的全局变量和静态变量
        - BSS段(全局未初始化区)存放未初始化的全局变量和静态变量.程序运行结束时自动释放.在程序执行之前会被系统自动请0
        - 所以未初始化的全局变量和静态变量在程序执行之前已经为0

- 文字常量区
    - 存放常量字符串.程序结束后由系统释放.

- 程序代码区
    - 存放程序的二进制代码

```c
/*
栈区-变量地址  i：0x7ffcc415671c
                p：0x7ffcc4156710
              str：0x7ffcc4156706
                q：0x7ffcc41566f8
堆区地址-动态申请：0x55d47f325010
全局外部有初值 k1：0x55d47d60e040
    外部无初值 k2：0x55d47d60e058
静态外部有初值 k3：0x55d47d60e044
    外静无初值 k4：0x55d47d60e050
  内静态有初值 m1：0x55d47d60e048
  内静态无初值 m2：0x55d47d60e054
文字常量地址    ：0x55d47d40d958, hello
程序区地址      ：0x55d47d40d740
*/


#include <stdio.h>
#include <stdlib.h>
int k1 = 1;
int k2;
static int k3 = 2;
static int k4;
int main( )
{  staticint m1=2, m2;
    inti=1;
    char*p;
    charstr[10] = "hello";
    char*q = "hello";
    p= (char *)malloc( 100 );
    free(p);
    printf("栈区-变量地址  i：%p\n", &i);
    printf("                p：%p\n", &p);
    printf("              str：%p\n", str);
    printf("                q：%p\n", &q);
    printf("堆区地址-动态申请：%p\n", p);
    printf("全局外部有初值 k1：%p\n", &k1);
    printf("    外部无初值 k2：%p\n", &k2);
    printf("静态外部有初值 k3：%p\n", &k3);
    printf("    外静无初值 k4：%p\n", &k4);
    printf("  内静态有初值 m1：%p\n", &m1);
    printf("  内静态无初值 m2：%p\n", &m2);
    printf("文字常量地址    ：%p, %s\n",q, q);
    printf("程序区地址      ：%p\n",&main);
    return0;
}

```






## 3. 常量

---
**常量的划分**
- **整数常量**
    - 可以十进制，八进制或十六进制的常量
    - 前缀表进制     0x 十六进制， 0 八进制。 0b 二进制 不带前缀默认十进制
       087    0xFeeL
    - 后缀表类型    U 无符号整数（unsigned）  L 表示长整数 (long)  U 和 L 的顺序随意·
       032U    
- **浮点常量**
    - 使用小数形式表示时，必须包含整数部分、小数部分，或同时包含两者
    - 使用指数形式表示时，必须包含小数点、指数，或同时包含两者。带符号的指数用e或E引入
    314159E-5L
- **字符常量**
      - 转义字符 
          - \n 换行
          - \t 制表符
- **字符串常量**
    - “”
    - 换行 \

- **单引号与双引号的区别:**
    - C语言中没有专门的字符串类型,因此双引号内的字符串会被存储到一个数组中,这个字符串代表指向这个数组起始字符的指针;
    - 单引号中的内容是一个 char 类型,是一个字符,这个字符对应的是ASCII表中的序列值.





---

**定义常量**

- const 与define 的区别
- const 定义的是变量不是常量,只是这个变量的值不允许改变是常变量.带有类型.编译运行的时候起作用存在类型类型检查
- define 定义的是不带类型的常数,只进行简单的字符替换. 在预编译的时候起作用,不存在类型检查.\

1. 两者的区别
(1) 编译器处理方式不同
    - #define 宏是在预处理阶段展开
    - const 常量是编译允许阶段
(2) 类型和安全检查不同
    - #define 宏没有类型,不做任何类型检查,仅仅是展开.
    - const 常量有具体的类型,在编译阶段会执行类型检查
 (3) 存储方式不同
     - #define 宏仅仅是展开,有多少地方使用,就展开多少次,不会分配内存.
     - const 常量会在内存中分配(可以是堆中也可以是栈中).
 (4) const 可以节省空间,避免不必要的内存分配.例如

```c
#define NUM 3.14159 //常量宏
const double Num = 3.14159; //此时并未将Pi放入ROM中...
double i = Num; //此时为Pi分配内存,以后不再分配
double I = NUM; //编译期间进行宏替换,分配内存
double j = Num; //没有内存分配
double J = Num; //再进行宏替换,又一次分配内存
```
const 定义常量从汇编的角度来看,只是给出了对应的内存地址,而不是像 #define 一样给出的是立即数,所以,const 定义的常量在程序允许过程中国只有一份拷贝(因为是全局的只读变量,存在静态区),而#define定义的常量在内存中有若干个拷贝.

(5) 提高了效率. 编译器通常不为普通const常量分配存储空间,而是将它们保存在符号表中,这使得它成为了编译期间的常量,没有了存储与读内存的操作,使得它的效率也很高.

(6) 宏替换只作替换,不做计算,不做表达式求解.

```c
#include <stdio.h>

#define LENGTH 10+10  //这里是把LENGTH 替换成了 10 +10 并没有求出它的解
//正确写法 #define LENGTH (10+10)
#define WIDTH  5
#define NEWLINE '\n'
int main(){   
    int area;   
    area = LENGTH * WIDTH;   
    printf("value of area : %d", area);   
    printf("%c", NEWLINE);   
    return 0;
}
```




   - #define 预处理器
```       
         #define identifier value 
```

```c
// 用常量进行举例
#include <stdio.h>

#define LENGTH 10
#define WIDTH 5
#define NEWLINE '\n'

int main()
{
	int area;

	area = LENGTH * WIDTH;
	printf("value of area : %d", area);
	printf("%c", NEWLINE);


	return 0;
}

```
 ---
 
   - const 关键字
   
```c   
       const type variable = value;
```

```c
#include <stdio.h>

int main(void)
{
	const int LENGTH = 10;
	const int WIDTH = 5;
	const char NEWLINE = '\n';
	int area;

	area = LENGTH * WIDTH;
	printf("value of area :%d", area);
	printf("%c",NEWLINE);

	return 0;


}
```

## 4. 存储类
 
 存储类定义C程序中变量/函数的范围（可见性）和生命周期。这些说明符放置在它们所修饰的类型之前。
 
 ---
 
- auto    所有局部变量默认的存储类

- register
    - 用于定义存储在寄存器中而不是RAM中的局部变量【它可能存储在寄存器中，这取决于硬件和实现的限制】
    - 寄存器只能用于需要**快速访问**的变量，比如计数器
    - 意味着变量的最大尺寸等于寄存器的大小(通常是一个词)

```c
/*
 *寄存器变量用时: 1 秒
 *一般变量用时: 8 秒
 */
#include <stdio.h>
#include <time.h>

#define TIME 100000000

int m,n = TIME;

int main(void)
{
	time_t start, stop;
	register int a,b = TIME;
	int x, y = TIME;

	time(&start);
	for(a=0;a<b;a++);
	time(&stop);
	printf("寄存器变量用时:%ld 秒\n",stop - start);

	time(&start);
	for(x=0;x<y;x++);
	time(&stop);
	printf("一般变量用时:%ld 秒\n",stop - start);
}


```




- static 
    -  指示编译器在程序的生命周期内保持局部变量的存在，而不需要在每次它进入和离开作用域时进行创建和销毁。因此，使用static修饰局部变量可以在函数调用之间保持局部变量的值。
    - 全局声明一个static 变量或方法可以被任何函数或方法调用，只要这些方法出现在跟static变量或方法同一个文件中。
    - static 修饰局部变量后,该变量只在初次运行时进行初始化工作,且只进行一次.

```c
/*
 *作用:用于解释经过 static 修饰之后,变量只会初次允许时进行初始化工作,且只进行一次.
 *2
 *3
 */
#include <stdio.h>

void fun()
{
	static int a=1; a++;
	printf("%d\n",a);
}

int main()
{
	fun();
	fun();
	return 0;
}

```




```c
#include <stdio.h>

/* 函数声明 */
void func1(void);

static int count = 10;        /* 全局变量 - static 是默认的 */

int main()
{
	while (count--) {
		func1();
	}
	return 0;
}

void func1(void)
{
	/* 'thingy' 是 'func1' 的局部变量 - 只初始化一次
	 * 每次调用函数 'func1' 'thingy' 值不会被重置。
	 */
	static int thingy = 5;
	thingy++;
	printf(" thingy 为 %d ， count 为 %d\n", thingy, count);
}
--------------------------------------
 thingy 为 6 ， count 为 9
 thingy 为 7 ， count 为 8
 thingy 为 8 ， count 为 7
 thingy 为 9 ， count 为 6
 thingy 为 10 ， count 为 5
 thingy 为 11 ， count 为 4
 thingy 为 12 ， count 为 3
 thingy 为 13 ， count 为 2
 thingy 为 14 ， count 为 1
 thingy 为 15 ， count 为 0
```


- extern    用于提供一个全局变量的引用。 通常用于两个或多个文件共享相同的全局变量或函数的时候

```c
// main.c
#include <stdio.h>

int count;
extern void write_extern();

int main()
{
	count = 5;
	write_extern();
}

// support.c
#include <stdio.h>

extern int count;

void write_extern(void)
{ 
	printf("count is %d\n", count);

}

----------------------------
count is 5
```

## 5. C 运算符

- 算术运算符
    -  自增 ++
    -  自减 --
    
    
    **a++ 与 ++a的区别**

```c
---------------------
a++是先赋值，如何再自增
++a是先自增，然后再赋值

---------------------

#include <stdio.h>

int main()
{
	int c;
	int a = 10;
	c = a++;
	printf("先赋值后运算：\n");
	printf("c 的值是 %d\n", c);
	printf("a 的值是 %d\n", a);
	a = 10;
	c = a--;
	printf("c 的值是 %d\n", c);
	printf("a 的值是 %d\n", a);

	printf("先运算后赋值：\n");
	a = 10;
	c = ++a;
	printf("c 的值是 %d\n", c);
	printf("a 的值是 %d\n", a);
	a = 10;
	c = --a;
	printf("c 的值是 %d\n", c);
	printf("a 的值是 %d\n", a);
}
```

---
- 关系运算符
    - ==
    - !=
    -  \>
    - <
    - \>=
    - <=

---

- 逻辑运算符
    - &&  与
    - ||      或
    - !       非

---

- 位运算符
    - & 与
    - | 或
    - ^ 异或
        - ^ 的性质     A^A = 0    A^0=A    0^0=0    1^0=1    1^1=0
    - ~ 取反
    - \<< 二进制左移运算符  （左边的二进制丢弃，右边补0）
    - \>>二进制右移运算符    （正数左补0，负数左补1，右边丢弃）
 
```c
/*
 *运用异或交换a,b的值,不引入第三个变量
 *a = 1; b = 2;
 */
#include <stdio.h>

int main(void)
{
	int	a =1;
	int b =2;

	a ^=b; // a = a^b
	b ^=a; // b = b^a
	a ^=b; // a = a^b

	printf("%d\n",a);	
	printf("%d\n",b);

	return 0;
}
```

```c
/*
 *利用位&运算,判断一个整数是否是2的整数次幂
 *m&(m-1)的结果为0,则表示m为偶数.
 *2&1 --> 0000 0010 & 0000 0001 = 0
 *4&3 --> 0000 0100 & 0000 0011 = 0
 *8&7 --> 0000 1000 & 0000 0111 = 0
 */


```




 ---
 
- 赋值运算符
    - =
    - +=
    - -=
    - *=
    - /=
    - %=
    - \<<=
    - \>>=
    - &=
    - ^=
    - |=
 
 ---
 
- 杂项运算符号
    - sizeof(  )
    - & *
    - （a == ） ? b : c      a中的表达式为true, 则为b, 否则为c 
   
## 6. C 判断

- if 语句

```c
------------------
使用 if 判断
------------------
#include <stdio.h>

int main(void)
{
	int a = 10;

	if (a < 20)
	{
		printf("a 小于20 \n");
	}
	printf("a 的值是%d\n",a);

	return 0;
}

----------------
a 小于20
a 的值是10
----------------
```



- if ... else / else if语句

```c

----------------
判断a 是大于20 ，等于20 ，还是小于20
----------------


#include <stdio.h>

int main(void)
{
	int a = 30;

	if (a < 20)
	{
		printf("a 小于20 \n");
	}
	else if(a == 20)
	{
		printf("a 等于 20\n");
	}
	else
	{
		printf("a 大于20\n");
	}



	return 0;
}
```


- 嵌套if 语句
    
```c
#include <stdio.h>

int main(void)
{
	int a = 100;
	int b = 200;

	if(a == 100)
	{
		if (b == 200)
		{
			printf("a 的值是100， 且b 的值是200\n");
		}
	}

	printf("a is %d \n",a);
	printf("b is %d \n",b);

	return 0;
}

```

- switch 语句

```c
#include <stdio.h>

int main(void)
{
	char grade = 'B';

	switch (grade)
	{
	case 'A':
		printf("Good!\n");
		break;
	case 'B':
		printf("Nice!\n");
		break;
	case 'C':
		printf("Success!\n");
		break;
	default:
		printf("Sorry,your garde is %c",grade);
	}



	return 0;
}
```


- 嵌套 switch

```c
#include <stdio.h>

int main()
{
	int a = 100;
	int b = 200;

	switch (a)
	{
	case 100:
		printf("This is a part of outer switch\n");
		switch (b)
		{
		case 200:
			printf("This is a part of inner switch\n");
		}
	}

	printf("a is %d\n", a);
	printf("b is %d\n", b);

		return 0;
}
```

```c
/*
 *判断是否是闰年的例子:润年可以被4和400整除.
 *
 */
#include <stdio.h>

//输入年份和月份
//判断是否为闰年
//判断对应的月份有多少天

void is_leap_year(int year, int month, int* ex);
void day_month( int month, int* ex);

int main(void)
{
	int year, month;
	int ex;
	printf("Please input year and month\n");
	scanf("%d %d", &year, &month);
	is_leap_year(year,month,&ex);
	day_month(month,&ex);

	return 0;
}

void is_leap_year(int year, int month, int* ex)
{
	if(month < 1 || month >12)
	{
		printf("please input correct month\n");
	}
	else{
		if((year %4 == 0 && year % 100 != 0) || year%400 ==0)	
		{
			* ex =1;
			printf("%d is leap year\n",year);	
		}
	}
}

void day_month( int month, int* ex)
{
	switch(month)
	{
		case 4:case 6:case 9:case 11:printf("%d 月有%d天.\n",month,30);
		 break;
		case 2:
				printf("%d月有%d天\n",month,27+ *ex);break;
		default:
				printf("%d月有%d天\n",month,31);							
	}
}
/*
--------------------------
Please input year and month
2019 12
12月有31天
---------------------------
*/

```





## 7. 循环
---
**循环类型**
- while

```c
-------------------
先判断，再执行
-------------------
#include <stdio.h>

int main(void)
{
	int a = 10;

	while (a < 20)
	{
		printf("a is :%d\n",a);
		a++;
	}

	return 0;
}
```


- for

```c
#include <stdio.h>

int main(void)
{

	for (int a = 10; a < 20; a++)
	{
		printf("a is : %d\n",a);
	}

	return 0;
}


```


- do...while

```c
------------------
do first, then select next.

------------------
#include <stdio.h>

int main(void)
{
	int a = 10;

	do
	{
		printf("a is %d\n", a);
		a++;
	} while (a < 20);

	return 0;
}
```




- 嵌套

```c
------------------
用for循环来查找2到100中的质数
------------------
#include <stdio.h>
 
int main ()
{
   /* 局部变量定义 */
   int i, j;
   
   for(i=2; i<100; i++) {
      for(j=2; j <= (i/j); j++)
        if(!(i%j)) break; // 如果找到，则不是质数
      if(j > (i/j)) printf("%d 是质数\n", i);
   }
 
   return 0;
}
```




---
**循环控制语句**

- break 结束整个循环
```c
#include <stdio.h>

int main()
{
	int a = 10;

	while (a < 20)
	{
		printf("a :%d \n", a);
		a++;
		if (a > 15)
		{
			break;
		}
	}

	return 0;
}
----------------------------
a :10
a :11
a :12
a :13
a :14
a :15

```



- continue 结束本次循环
```c
#include <stdio.h>

int main()
{
	int a = 10;

	while (a < 20)
	{
		printf("a :%d \n", a);
		a++;
		if (a > 15)
		{
			continue;
		}
	}

	return 0;
}
--------------------------------
a :10
a :11
a :12
a :13
a :14
a :15
a :16
a :17
a :18
a :19

```



- goto



## 8. C 函数

---
**实例**
```c
------------------
比较两个数的大小，并返回大的那个数
------------------
#include <stdio.h>

int max(int number_1, int number_2);
int main(void)
{
	

	printf
	("%d",max(1, 2));

	return 0;
}

int max(int number_1, int number_2)
{
	int result;

	if (number_1 > number_2)
		result = number_1;
	else
		result = number_2;

	return result;
}
```
- **关于main 函数的参数**

`int main(int argc, char *argv[])`

`int main()`

`argc` 和 `argv` 是 `main` 函数的形式参数。
如果 `main` 函数带参数，就是这两个类型的参数，否则 `main` 函数就没有参数。

（1）可执行文件名称和所有参数的个数之和传递给 `argc` [argument counter]
   
   (2) 可执行文件名称（包括路径名称）作为一个字符串，首地址被赋给 `argv[0]`, 参数1 也作为一个字符串， 首地址被赋给 `argv[1]`.
   

---

## 9. C 作用域规则
- 局部变量
    - 在某个函数或块的内部声明的变量。
    - 只能被该函数或该代码块内部的语句使用。
- 全局变量
    - 定义在函数的外部，通常是在程序的顶部。
    - 全局变量在整个程序生命周期内都是有效的。
        - 全局变量与局部变量在内存中的区别：
            - 全局变量保存在内存的全局存储区中，占用静态的存储单元。
            - 局部变量保存在栈中，只有在所在函数被调用是才动态地为变量分配存储单元。
            
- 形式参数(虚实结合)
    - 在定义函数中指定的形参，在没有出现函数调用是不占用内存中的存储单元。在函数调用是才分配内存。
    - 将实参的传递给形参
    - 在执行函数时，由于形参已经有值。可以用形参进行运算
    - 通过return语句将函数值返回，若无返回值，则无return
    - 调用结束后，形参被释放掉，实参保留原值（单向传递）
 
## 10. C 中的数组

- 数组的定义

```c
------------------
给n数组赋值，并输出
------------------
#include <stdio.h>
int main(void)
{
	int n[10];
	int i, j;
	for (i = 0;i < 10;i++)
	{
		n[i] = i + 100;
	}

	for (j = 0;j < 10; j++)
	{
		printf("Element[%d] = %d \n",j ,n[j]);
	}


	return 0;
}
```

---

- 多维数组

**定义**

```c
-----------
定义一个3行4列的数组
-----------

int x[3][4]
```

---
**初始化**

```c
-----------------
初始化一个5行2列的二维数组，并输出
-----------------
#include <stdio.h>

int main(void)
{
	int a[5][2] = { {0,0},{1,2},{2,4},{3,6},{4,8} };
	int i, j;

	for (i=0;i<5;i++)
		for (j = 0;j < 2;j++)
		{
			printf("a[%d][%d] = %d\n",i,j,a[i][j]);
		}


	return 0;
}
-------------------
a[0][0] = 0
a[0][1] = 0
a[1][0] = 1
a[1][1] = 2
a[2][0] = 2
a[2][1] = 4
a[3][0] = 3
a[3][1] = 6
a[4][0] = 4
a[4][1] = 8



```



- 传递数组给函数
    - 形式参数是一个指针
    void myFunction(int* param)
    - 形式参数是一个已定义大小的数组
    void myFunction(int param[10])
    - 是一个未定义大小的数组
    void myFunction(int param[ ])

```c
------------------

计算数组的平均值

------------------
#include <stdio.h>


double get_average(int arr[],int size);
int main(void)
{
	//得到数组的平均值
	int balance[5] = { 13,32,3213,314,315 };


	printf("average value is %f", get_average(balance,5));


	return 0;
}

double get_average(int arr[], int size)
{
	int i;
	int sum = 0;
	double average;

	for (i = 0;i < size; i++)
	{
		sum += arr[i];
	}

	average = sum / size;
	return average;
}

```



- 从函数返回数组

```c

------------------
置随机数，并去随机数
------------------

#include <stdio.h>



int* get_random();
int main(void)
{
	int i;
	int* p;
	p=get_random();
	
	for (i = 0; i < 10; i++)
	{
		printf("%d \n",  *(p + i));
	}



	return 0;
}


int* get_random()
{
	static int r[10];
	int i;
	srand(time(0));   //随机数初始化， time(0) 返回的是从1970 UTC Jan 1 00:00到当前时刻的秒数
	
	for (i = 0; i < 10; i++)
	{
		r[i] = rand();
		printf("r[%d] = %d\n", i, r[i]);
	}
	
	return r;
}



```

- 指向数组的指针
 
```c
#include <stdio.h>

int main()
{
	double balance[5] = { 1000.0, 2.0, 3.4, 17.0, 50.0 };
	double* p;
		int i;

	p = balance;

	printf("use pointer:\n");
	for (i =0 ; i<5; i++)
	{
		printf("*(p + %d): %f \n",i, *(p + i));
	}

	printf("use balance\n");
	for (i=0; i<5; i++)
	{
		printf("*(balance +%d): %f\n",i, *(p+i));

	}


	return 0;
}

use pointer:
*(p + 0): 1000.000000
*(p + 1): 2.000000
*(p + 2): 3.400000
*(p + 3): 17.000000
*(p + 4): 50.000000
use balance:
*(balance +0): 1000.000000
*(balance +1): 2.000000
*(balance +2): 3.400000
*(balance +3): 17.000000
*(balance +4): 50.000000
```




## 11. 枚举


- 定义

    - 先定义枚举类型，再定义枚举变量
    
```c
        enum DAY
{
	MON=1, TUE, WED, THU, FRI, SAT, SUN
};
enum DAY day;

```


    - 定义枚举类型的同时定义枚举变量
    


```c

enum DAY
{
	MON = 1, TUE, WED, THU, FRI, SAT, SUN
}day;
```


    - 省略枚举名称，直接定义枚举变量

```c
enum
{
	MON=1, TUE,WED,THU,FRI,SAT,SUN
}day;
```

- 遍历

```c
#include <stdio.h>

enum Day
{

	MON=1,TUE,WED,THU,FRI,SAT,SUN

}day;

int main()
{
	for (day = MON; day <= SUN; day++) {
		printf("枚举元素:%d \n", day);
	}

}
```

- 在switch 中应用

```c
#include <stdio.h>

int main(void)
{

	enum color {red = 1, green, blue};

	enum color favorite_color;

	printf("Please input your favourite color:(1.red, 2.green 3.blue)\n");
	scanf_s("%d",&favorite_color);

	switch (favorite_color)
	{
	case red:
		printf("Your favorite color is red!\n");
		break;
	case green:
		printf("Your favorite color is green\n");
		break;
	case blue:
		printf("Your favorite color is blue\n");
		break;
	}

	return 0;



	return 0;
}
```


- 将整数转换成枚举

```c
#include <stdio.h>

int main()
{

	enum day {
		saturday,
		sunday,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
	}workday;

	int a = 1;
	enum day weekend;
	weekend = (enum day) a;
	printf("weekend:%d", weekend);
	


	return 0;
}

--------------------
weekend:1

```

## 12. C 指针

- 使用指针

```c
#include <stdio.h>

int main(void)
{
	int var = 20;
	int* p;

	p = &var;

	printf("Address of var: %p\n", &var);
	printf("Address of stored in p variable %p \n", p);
	printf("value of *p variable:%d\n", *p);




	return 0;
}

---------------
Address of var: 000000A5F118F524
Address of stored in p variable 000000A5F118F524
value of *p variable:20
---------------


```



- C中的NULL指针
 
**大多数的操作系统上，程序不允许访问地址为0的内存，因为该内存是操作系统保留的。然而，内存地址0有特别重要的意义，它表明该指针不指向一个可访问的内存地址。但按照惯例，如果指针包含空值（零值），则假定它不指向任何东西。**

```c
#include <stdio.h>

int main(void)
{
	int* p= NULL;


	printf("Address of var: %p\n", p);


	return 0;
}
```

- 指针的算术运算
    - 递增
    
```c
#include <stdio.h>

int main (void)
{
	int var[3] = { 1,2,3 };
	int* p;
	int i;

	p = var;
	for (i = 0; i < 3; i++)
	{
		printf("存储地址:var[%d] = %p\n", i, p);
		printf("存储地址:var[%d] = %x\n", i, p);
		printf("存储值:var[%d]= %d\n",i,*p);
		p++;

	}



	return 0;
}
```


- 递减
    
    
```c
#include <stdio.h>

int main (void)
{
	int var[3] = { 1,2,3 };
	int* p;
	int i;

	p = &var[2];
	for (i = 3; i > 0; i--)
	{
		printf("存储地址:var[%d] = %p\n", i-1, p);
	//	printf("存储地址:var[%d] = %x\n", i-1, p);
		printf("存储值:var[%d]= %d\n",i-1,*p);

		p--;

	}



	return 0;
}
```


- 比较
    
    
```c
#include<stdio.h>


const int MAX = 3;

int main(void)
{

	int var[] = {10, 200, 3000};
	int i, * p;

	p = &var;
	i = 0;

	while (p <= &var[MAX - 1])
	{
		printf("Address of var[%d]=%p\n",i,p);
		printf("Value of var[%d]=%d\n",i,*p);

		p++;
		i++;
	}


	return 0;
}
--------------
Address of var[0]=00000026BF4FF918
Value of var[0]=10
Address of var[1]=00000026BF4FF91C
Value of var[1]=200
Address of var[2]=00000026BF4FF920
Value of var[2]=3000
--------------
```


- 指针数组

**指针数组**

 > 指针数组可以说是“指针的数组”，
    首先这个变量是一个数组，
    其次，“指针”修饰这个数组，
    意思是说这个数组的所有元素都是指针类型。

**数组指针**

> 数组指针可以说成是“数组的指针”
    首先，这个变量是一个指针
    其次，“数组”修饰这个指针，意思是说这个指针存放这一个数组的首地址，或者说这个指针指向的一个数组的首地址。


```c
#include <stdio.h>

#define MAX 3

int main()
{
	int  var[] = { 10, 100, 200 };
	int i, * ptr[MAX];

	for (i = 0; i < MAX; i++)
	{
		ptr[i] = &var[i]; /* 赋值为整数的地址 */
	}
	for (i = 0; i < MAX; i++)
	{
		printf("Value of var[%d] = %d\n", i, *ptr[i]);
	}
	return 0;
}
```


- 指向指针的指针

```c
#include <stdio.h>

int main(void)
{
	int var;
	int* ptr;
	int** pptr;

	var = 300;

	ptr = &var;
	pptr = & ptr;

	printf("value of var = %d\n", var);
	printf("value of var = %d\n", *ptr);
	printf("value of var = %d\n", **pptr);


	return 0;
}
```

- 传递指针给函数

```c
#include <stdio.h>
#include <time.h>

void getSeconds(unsigned long * par);

int main()
{
	unsigned long sec;

	getSeconds(&sec);

	printf("Number of seconds: %ld\n", sec);

	return 0;

}

void getSeconds(unsigned long *par)
{
	*par = time(NULL);
	return;

}

```


```c
#include <stdio.h>

double getAverage(int* parry, int size);
int main()
{
	int balance[5] = { 1 ,2,3,4,5};
	double avg;

	avg = getAverage(balance, 5);

	printf("Average value is :%f\n", avg);


	return 0;
}

double getAverage(int *parry, int size)
{
	int i, sum = 0;
	double average;

	for (i = 0; i < size; i++)
	{
		sum += *(parry + i) ;
	}

	average = sum / size;
	return average;
}

```

- 从函数返回指针

**c不支持在调用函数时返回局部变量的地址，除非定义局部变量为static变量**

```c
#include <stdio.h>
#include <time.h>

int* getRandom();
int main(void)
{

	int* p;
	int i;

	p = getRandom();
	
	for (i = 0;i < 10;i++)
	{
		printf("*(p+[%d]:)%d\n",i,*(p+i));
	}



	return 0;
}

int* getRandom()
{
	int i;
	static int r[10]; //定义局部变量为static变量
	
	srand(time(0));
	for (i = 0;i < 10;++i)
	{
		r[i] = rand();
		printf("%d\n",r[i]);
	}

	return r;
}

```


```c
int Board[8][8];    /*int 数组*/ 
int ** ptr;    /* 指向int指针的指针*/
int * risk[10];    /* 具有10个元素的数组，每个元素是一个指向 int 的指针 */
int (* rusks)[10];    /* 一个指针，指向具有10个元素的 int 数组 */
int * off[3][4];    /* 一个3 x 4的数组，每个元素是一个指向 int 的指针 */
int (* uff)[3][4];    /* 一个指针，指向 3 x 4的 int 数组 */
int (* uof[3])[4];    /* 一个具有 3 个元素的数组，每个元素是一个指向具有4个元素的 int 数组指针 */
```

### 空指针和悬空指针
- 初始化指针不赋 NULL **空指针**
    - 这样的指针是指向一片访问受限制的内存区域，无法使用它，这样的情况下的指针，业界给了它一个形象的名字：“野指针”
- free( )后指针不赋予 NULL **悬空指针**
    - 为指针分配内存后，指针便可以指向一片合法可使用的内存，但使用 free( )释放那片内存是，指针依旧存放着那片内存的地址。
    



## 13. 函数指针

**函数指针可以像一般函数一样，用于调用函数，传递函数**

typedef int (*fun_ptr)(int, int); //声明一个指向同样参数、返回值的函数指针类型

```c
#include <stdio.h>

int max(int x, int y)
{
	return x > y ? x : y;
}

int main(void)
{
	/* p 是函数指针 */
	int (*p)(int, int) = &max; // &可以省略
	int a, b, c, d;

	printf("请输入三个数字:");
	scanf_s("%d %d %d", &a, &b, &c);

	/* 与直接调用函数等价，d = max(max(a, b), c) */
	d = p(p(a, b), c);

	printf("最大的数字是: %d\n", d);

	return 0;
}
```

## 14. 回调函数

> 你到一个商店买东西，刚好你要的东西没有货，于是你在店员那里留下了你的`电话`，过了几天店里有货了，店员就打了你的电话，然后你接到电话后就到店里去取了货。


>`电话号码` 就叫`回调函数`
>`把电话留给店员`叫`登记回调函数`
>`店里后来有货了`叫`触发回调关联的事件`
>`店员给你打电话`叫`调用回调函数`
>`你到店里去取货`叫`响应回调事件`

**号码** 就是 **回调函数的名称**
**手机** 就是 **函数指针**
手机有了号码，就可以进行回调

```c++

```



- size_t
    - size_t 是一种数据类型，近似于无符号整型，但容量范围一般大于`int`和`unsigned`
    - 但凡不涉及负值范围的表示size取值的，都可以用size_t; 比如 array[size_t]
    - size_t 在stddef.h 头文件中定义
    - 在其他常见的宏定义以及函数中常用到有：
        - sizeof 运算符返回的结果是 size_t 类型
        - void *malloc(size_t size)



```c
#include <stdio.h>

void populate_arry(int* array, int arraySize, int(*getNextValue)(void));
int getNextRandomValue(void);

int main(void)
{
	int myarry[10];
	populate_arry(myarry, 10, getNextRandomValue);
	for (int i = 0;i < 10;i++)
	{
		printf("%d ", myarry[i]);
	}



	return 0;
}

void populate_arry(int *array, int arraySize, int(*getNextValue)(void))
{
	for (int i = 0; i < arraySize; i++)
		array[i] = getNextValue();
}

int getNextRandomValue(void)
{
	return rand();
}

```

## 15. C字符串

- strcpy(s1,s2);  string copy
	- 复制s2到s1上
- strcat(s1,s2);   string catenate
	- 连接s2到s1末尾
- strlen(s1);        string length
	- 返回s1长度
- strcmp(s1,s2);  string  compare
    - 
	- s1=s2时，返回0; s1<s2时，则返回小于0; s1>s2, 则返回小于0 
- strchr(s1,ch);
	- 返回字符串s1中字符ch的第一次出现到位置
- strstr(s1,s2);
	- 返回一个指针，指向字符串s2在s1中第一次出现到位置

```c
#include <stdio.h>
#include <string.h>
int main(void)
{
	

		char str1[12]= "Hello";
		char str2[12]= "World";
		char str3[12];
		int len;

		//复制str1到str3
		strcpy (str3,str1);
		printf("strcpy(str3, str1): %s\n", str3);

		//连接str1和str2
		strcat (str1,str2);
		printf("strcat(str1,str2): %s\n", str1);

		//查看总长度
		len = strlen(str1);
		printf("strlen(str1): %d\n",len);



		return 0;
}

```

- 字符串初始化

```c++
#include <stdio.h>

int main(void)
{
  char greeting[6] = {'H','e','l','l','o','\0'};
  printf("Greeting message:%s\n",greeting);

  char greeting_1[6] = {'H','e','l','l','o'}; //如果没有在字符数组最后增加`\0`的话输出的结果可能会有误。
  printf("Greeting message:%s\n",greeting_1);

  char greeting_2[]="Hello"; //不定长数组初始化字符串时默认结尾为`\0`
  printf("Greeting message:%s\n",greeting_2);

  

  return 0;
}
```


- strlen 与 sizeof 的区别

`sizeof`计算的是变量的大小，不受字符`\0`影响。
`strlen`计算的是字符串的长度，以`\0`作为长度判定依据。


## 16. 结构体变量 

- 结构体变量
    - 结构体中成员变量分配的空间是按照成员变量中占用空间最大的来作为分配单位。
    - 同样成员变量的存储空间也是不能跨分配单位的，如果当前的空间不足，则会存储到下一个分配单位中。

```c++
#include <stdio.h>

  typedef struct
  {
    unsigned char a;
    unsigned int b;
    unsigned char c;
  }debug_size1_t;

  typedef struct
  {
    unsigned char a;
    unsigned char b;
    unsigned int c;
  }debug_size2_t;

int main(void)
{
  printf("debug_size1_t size=%lu, debug_size2_t=%lu\r\n",sizeof(debug_size1_t),sizeof(debug_size2_t));

  return 0;
  
}

/*
debug_size1_t size=12, debug_size2_t=8
*/

debug_size1_t = a(1byte)+空闲(3byte)+b(4byte)+c(1byte)+空闲（3byte）=12(byte)
debug_size2_t = a(1byte)+b(1byte)+空闲(2byte)+c(4byte)=8(byte)
```


- 结构体变量初始化

```c
#include <stdio.h>

struct Books
{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
} book = {"C语言","feng","编程语言",123456};

int main(void)
{

	printf("title %s\n author %s\n subject %s\n book_id %d\n",book.title,book.author,book.subject,book.book_id);
	

	return 0;
}

```



- 访问结构成员

```c

#include <stdio.h>
#include <string.h>

struct Books
{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
};

int main()
{
	struct Books Book1;
	struct Books Book2;

	strcpy(Book1.title, "C programming");
	strcpy(Book1.author,"Nuha Ali");
	strcpy(Book1.subject,"C programming Tutorial");
	Book1.book_id = 6241;

	strcpy(Book2.title, "Telecom Billing");
	strcpy(Book2.author,"Zara Ali");
	strcpy(Book2.subject,"Telecom Billing Tutorial");
	Book2.book_id = 2311;

	printf("Book 1 tiltle :%s\n", Book1.title);
	printf("Book 1 author :%s\n", Book1.author);
	printf("Book 1 subject :%s\n", Book1.subject);
	printf("Book 1 book_id :%d\n", Book1.book_id);
	
	printf("Book 1 tiltle :%s\n", Book1.title);
	printf("Book 1 author :%s\n", Book1.author);
	printf("Book 1 subject :%s\n", Book1.subject);
	printf("Book 1 book_id :%d\n", Book1.book_id);


	return 0;

```



- 结构作为函数参数
 
```c

#include <stdio.h>
#include <string.h>


struct Books
{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
	
};

void printBook(struct Books book);
int main()
{
	struct Books Book1;
	struct Books Book2;

	strcpy(Book1.title, "C programming");
	strcpy(Book1.author,"Nuha Ali");
	strcpy(Book1.subject,"C programming Tutorial");
	Book1.book_id = 6241;

	strcpy(Book2.title, "Telecom Billing");
	strcpy(Book2.author,"Zara Ali");
	strcpy(Book2.subject,"Telecom Billing Tutorial");
	Book2.book_id = 2311;

	printBook (Book1);
	printBook (Book2);

	return 0;
}

void printBook (struct Books book)
{


	printf("book 1 tiltle :%s\n", book.title);
	printf("book 1 author :%s\n", book.author);
	printf("book 1 subject :%s\n", book.subject);
	printf("book 1 book_id :%d\n", book.book_id);


}


```

- 指向结构的指针

```c

#include <stdio.h>
#include <string.h>

struct Books
{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
};

void printBook (struct Books *book);

int main()
{
	struct Books Book1;
	struct Books Book2;

	strcpy(Book1.title, "C programming");
	strcpy(Book1.author,"Nuha Ali");
	strcpy(Book1.subject,"C programming Tutorial");
	Book1.book_id = 6241;

	strcpy(Book2.title, "Telecom Billing");
	strcpy(Book2.author,"Zara Ali");
	strcpy(Book2.subject,"Telecom Billing Tutorial");
	Book2.book_id = 2311;

	printBook(&Book1);
	printBook(&Book2);

	return 0;
}

void printBook (struct Books *book)
{
	
	printf("Book 1 tiltle :%s\n", book->title);
	printf("Book 1 author :%s\n", book->author);
	printf("Book 1 subject :%s\n", book->subject);
	printf("Book 1 book_id :%d\n", book->book_id);

}
```
- 位域  

```c
#include <stdio.h>

int main(void)
{

	struct bs{
		unsigned a:1;
		unsigned b:3;
		unsigned c:4;
	}bit,*pbit;

	bit.a =1;
	bit.b =7;
	bit.c =15;
	
	printf("%d,%d,%d\n",bit.a, bit.b, bit.c);
	
	pbit=&bit;
	pbit->a =0;
	pbit->b &=3;
	pbit->c |=1;

	
	printf("%d,%d,%d\n",pbit->a, pbit->b, pbit->c);
	
	

	return 0;
}
```

## 17. 共用体

- 结构体与共用体
    - 结构体变量所占内存长度是其中最大字段大小的整数倍。
    - 共同体变量所占的内存长度等于最长的成员变量的长度。




- 共同体的特点
    - 允许相同内存的位置存储不同的数据类型
    - 但是任何时候只能有一个成员带值
    - 若访问不是最后一个值，则返回的值有损坏

```c
#include <stdio.h>
#include <string.h>

union Data
{
	int i;
	float f;
	char str[20];
};


int main(void)
{
	union Data data;

	data.i = 10;
	printf("data.i = %d",data.i);

	data.f = 220.5;
	printf("data.f = %f",data.f);

	strcpy(data.str, "You are cool！");
	printf("data.str = %s",data.str);


	
	return 0;
}
----------------------------
data.i = 10
data.f = 220.500000
data.str = You are cool！

```

## 18. 位域
- 当每个变量中，只存储0或1时，为了更好的利用内存空间，C中提供了位域，告诉编辑器，将只使用这些字节。

```c
#include <stdio.h>
#include <string.h>


struct
{
	unsigned int widthValidated;
	unsigned int heightValidate;
}status1;


struct
{
	unsigned int widthValidated : 1; //这里的是宽度，即只有两个值
	unsigned int heightValidate : 1;
}status2;

int main()
{
	printf("Memory size occupied by status1 :%d\n", sizeof(status1));
	printf("Memory size occupied by status1 :%d\n", sizeof(status2));

	return 0;
}


```


## 19. typedef 与 #define
- typedef 与#define 的区别
    - typedef 仅限于为类型定义符号名称，#define不仅可以为类型定义别名，也能为数值定义别名。
    - typedef 是由编译器执行解释的，#define语句是由编译器进行处理的。





- typedef

```c
#include <stdio.h>
#include <string.h>

typedef struct Books
{
	char title[50];
	char author[50];
	char subject[100];
	int book_id;
	
}Book;

int main()
{
	Book book;

	strcpy(book.title, "C");
	strcpy(book.author, "feng");
	strcpy(book.subject,"c turtor");
	book.book_id=123;

	printf("book.title %s\n",book.title);
	printf("book.author %s\n",book.author);
	printf("book.subject %s\n",book.subject);
	printf("book.book_id %d\n",book.book_id);

	return 0;
}

```

- define

```c
#include <stdio.h>

#define TRUE 1
#define FALSE 0

int main()
{
	printf("True :%d\n",TRUE );
	printf("False :%d\n",FALSE);
	

	return 0;
}

```

## 20. 输入&输出
- 标准文件
- getchar( ) & putchar( ) 函数
    - 读取一个可用的字符，并把它返回为一个整数。同一时间只会读取一个单一的字符。
    
```c
int main(void)
{
	int c;

	printf("Enter a value:");
	c = getchar();

	printf("\nYou entered:");
	putchar(c);
	printf("\n");
	


	return 0;
}

-------------------------------
Enter a value:123

You entered:1
-------------------------------

```


- gets( ) & puts( )函数
    - char *gets(char *s)从 stdin 读取一行到s所指向的缓冲区，直到一个终止符或EOF.
    - int puts(const char *s)函数把字符串s和一个尾随的换行符写入到stdout.

```c
#include <stdio.h>

int main(void)
{
	char str[100];

	printf("Enter a value:");
	gets(str);

	printf("\nYou entered:");
	puts(str);
	printf("\n");

    return 0;
}

```

- scanf( ) 和 printf( )函数
    - scanf( ) 从标准输入流 stdin 读取输入，并根据提供的format来浏览输入。
    - printf( )把输出写入到标准输出流 stdout, 并根据提供的格式产生输出。


```c
#include <stdio.h>

int main(void)
{
	char str[100];
	int i;

	printf("Enter a value:");
	scanf("%s %d",str, &i);

	printf("\nYou entered:%s %d",str, i);
	printf("\n");
	


	return 0;
}

```


| 标准文件 | 文件指针 |  设备   |
| :----: | :----: | :----: |
| 标准输入 |  stdin  |  键盘   |
| 标准输出 | stdout  |  屏幕   |
| 标准错误 | stderr  | 您的屏幕 |


## 21. 文件读写

- 打开文件
    - FILE * fopen (const char * filename, const char * mode);
    - r w a r+ w+ a+
    - 二进制文件 需要 + b

- 关闭文件
    - int fclose ( FILE *fp );

- 写入文件
    - int fputc (int c, FILE *fp);
        - 如果写入成功，它会返回写入的字符，如果发生错误，则会返回EOF
    - int fputs (const char *s, FILE *fp);
        - 如果写入成功，它会返回一个非负值，如果发生错误，则会返回EOF.
    
```c
#include <stdio.h>


int main()
{

	FILE *fp = NULL;

	fp = fopen("/tmp/test.txt","w+");

	fprintf(fp, "This is testing for fprint...\n");	
	fputs("This is testing for fputs...\n",fp);
	
	fclose(fp);
}




```


- 读取文件
    - int fgetc(FILE *fp);
    
    - char *fgets(char *buf, int n, FILE *fp);
        - 从fp所指向的输入流中读取n - 1个字符。
        - 它会把读取的字符串复制到缓冲区 buf , 并在最后追加 null 字符来终止字符串。
        - 如果这个函数在读取最后一个字符串之前就遇到一个换行符 '\n' 或文件的末尾 EOF, 则只会返回读取到的字符，包括换行符。
        
    - int fscanf(FILE *fp, const char * format,...)
        - 从文件中读取字符串，但是在遇到第一个空格和换行符是，它会停止读取。
    
```c
#include <stdio.h>


int main()
{

	FILE *fp = NULL;
	char buff[255];

	fp = fopen("/tmp/test.txt","r");
	fscanf(fp, "%s", buff);
	printf("1: %s\n",buff);

	fgets(buff, 255, fp);
	printf("2: %s\n",buff);

	fgets(buff, 255, fp);
	printf("3: %s\n",buff);
	

	fclose(fp);
}
-----------------------------
1: This
2:  is testing for fprintf...

3: This is testing for fputs...

```

## 22. C 预处理器（CPP)

- 例子
    - #define
    - #include
    
- 预定义宏
    - __DATE__ 当前日期
    - __TIME__ 当前时间
    - __FILE__ 当前文件名，一个字符串常量
    - __LINE__ 返回当前行号，一个十进制常量
    - __STDC__ 当编译器以ANSI标准编译时，则定义为1.
    
```c
#include <stdio.h>

int main(void)
{
	printf("File :%s\n",__FILE__);
	printf("Date :%s\n",__DATE__);
	printf("Time :%s\n",__TIME__);
	printf("Line :%d\n",__LINE__);
	printf("ANSI :%d\n",__STDC__);


}
---------------------
File :string.c
Date :Dec  8 2019
Time :17:05:26
Line :8
ANSI :1

```

- 预处理运算符
    - 宏延续运算符（\）
    - 字符串常量化运算符（#）

```c
-----------------------------
Carole and Debra:We love you!
-----------------------------
#include <stdio.h>

#define message_for(a,b) \
	printf(#a" and "#b":We love you!\n");

int main(void)
{

	message_for(Carole,Debra);
}

```



    - 标记粘贴运算符（##）

```c
----------------------
token34= 40
----------------------
#include <stdio.h>

#define tokenpaster(n) printf ("token" #n "= %d\n", token##n)

int main(void)
{
	int token34 =40;

	tokenpaster(34);


	return 0;
}

```



    - defined( ) 用来确定一个标识符是否已经使用 #define定义过

```c
-----------------------------
Here is the message :You wish
-----------------------------
#include <stdio.h>

#if !defined (MESSAGE)
	#define MESSAGE "You wish"
#endif


int main(void)
{
	printf("Here is the message :%s \n", MESSAGE);
	return 0;
}

```

- 参数化的宏 
    - 参数列表是括在圆括号内，且必须紧跟在宏名称的后边。
    - 宏名称和左圆括号之间不允许有空格。
    

```c
 -----------------------
 4
 ------------------------
 #include <stdio.h>

#define square(x)((x)*(x))

int main(void)
{
	printf("%d",square(2));
	return 0;
}

```

## 23. 强制类型转换

- 自动类型转换

```c
\*
 *a=8,b=8,f=2.000000,x=3.600000
 *
 *\
#include<stdio.h>

int main()
{
    float f,x=3.6,y=5.2;
    int i=4,a,b;
    a=x+y;
    b=(int)(x+y);
    f=10/i;    //这里的是先进行计算之后,再赋值.
    printf("a=%d,b=%d,f=%f,x=%f\n",a,b,f,x);
}
```


- 整数提升

```c
Value of sum :116
#include <stdio.h>

int main(void)
{
	int i =17;
	char c = 'c';
	int sum;

	sum = i + c;
	printf("Value of sum :%d\n",sum);

	return 0;
}

```

- 常用的算术转换

```c
-------------------------
Value of sum :117.000000
-------------------------

#include <stdio.h>

int main()
{
	int i = 18;
	char c = 'c';
	float sum;

	sum = i + c;
	printf("Value of sum :%f\n",sum);

	return 0;
}

```

**这里的c首先被转换为整数，但是由于最后的值是float型的，所以会应用常用算术转换，编译器会把i和c转换为浮点型，并把它们相加得到一个浮点数。**


## 24. C错误处理
> C语言不提供对错误处理的直接支持，但是作为一种系统编程语言，它以返回值的形式允许访问底层数据。当发生错误时，大多数C或UNIX函数调用返回 1 或 NULL,同时会设置一个错误代码 errno,该错误代码是全局变量，表示在函数调用期间发生错误。

- errno
- perror( ) 显示您传给它的字符串，后跟一个冒号，一个空格和当前errno值的文本表示形式
- strerror( ) 函数，返回一个指针，指向当前 errno 值的文本表示形式。

```c
--------------------------------------------
错误号: 2
通过perror输出错误: No such file or directory
打开文件错误：No such file or directory
--------------------------------------------
#include <stdio.h>
#include <errno.h>
#include <string.h>

extern int errno;

int main()
{
	FILE * pf;
	int errnum;
	pf = fopen("unexist.txt","rb");
	if(pf==NULL)
	{
		errnum = errno;
		fprintf(stderr, "错误号: %d\n", errno);
		perror("通过perror输出错误");
		fprintf(stderr,"打开文件错误：%s\n",strerror(errnum));
	
	}
	else
	{
		fclose(pf);	
	}


	return 0;
}

```

- 被零除的错误

```c
--------------------------
除数为 0 退出运行...
--------------------------
#include <stdio.h>
#include <stdlib.h>
 
main()
{
   int dividend = 20;
   int divisor = 0;
   int quotient;
 
   if( divisor == 0){
      fprintf(stderr, "除数为 0 退出运行...\n");
      exit(-1);
   }
   quotient = dividend / divisor;
   fprintf(stderr, "quotient 变量的值为 : %d\n", quotient );
 
   exit(0);
}
```

- 程序退出状态
    - 通常情况下，程序成功执行完一个操作正常退出会带有值EXIT_SUCCESS. 在这里，EXIT_SUCCESS 是宏，它被定义为0.
    - 如果程序中存在一种错误情况，当您退出程序时，会带有状态值EXIT_FAILURE,被定义为-1.

```c
--------------------
quotient 变量的值为:4
--------------------
#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int dividend = 20;
	int divisor = 5;
	int quotient;

	if(divisor == 0)
	{
	
		fprintf(stderr, "除数为0退出允许...\n");
		exit(EXIT_FAILURE);
	}
	quotient = dividend / divisor;
	fprintf(stderr, "quotient 变量的值为:%d\n",quotient);


	exit(EXIT_SUCCESS);
}

```

## 25. C递归

- 数的阶乘

```c
----------------------------------
15的阶乘 1307674368000.000000
----------------------------------
#include <stdio.h>


double factorial(unsigned int i);
int main(void)
{

	int i = 15;
	printf("%d的阶乘 %f\n",i,factorial(i));
	


	return 0;
}


double factorial(unsigned int i)
{
	if(i <=1)
	{
		return 1;
	}
	return i * factorial(i-1);


}

```
- 斐波那契数列

```c
---------------------------------
1.000000 
1.000000 
2.000000 
3.000000 
5.000000 
8.000000 
13.000000 
21.000000 
34.000000 
55.000000 
89.000000 
144.000000 
233.000000 
377.000000 
610.000000
---------------------------------
double factorial(unsigned int i);
int main(void)
{

	int i;
	for(i=1;i<=15;i++)	
	{
		printf("%lf \n",factorial(i));
	
	}


	return 0;
}


double factorial(unsigned int i)
{
	if(i ==1)
	{
		return 1;
	}
	if(i==2)
	{
		return 1;	
	}
	else
		return factorial(i-1) + factorial(i-2);

}


```



## 26. C 可变参数

- 定义一个函数，最后一个参数为省略号，省略号前面可以设置自定义参数
- 在函数定义中创建一个va_list 类型变量，该类型是在stdarg.h头文件中定义的
- 使用int参数和va_start宏来初始化va_list变量为一个参数列表。宏va_start是在stdarg.h头文件中定义的
- 使用va_arg宏和va_list变量来访问参数列表中的每一个项
- 使用宏va_end来清理赋予va_list变量的内存

```c
-----------------------
Average of 2,3,4,5 = 3.500000

-----------------------
#include <stdio.h>
#include <stdarg.h>

double average(int num,...)
{
	va_list valist;
	double sum = 0.0;
	int i;

	va_start(valist, num);

	for (i=0; i<num; i++)
	{
	
		sum += va_arg(valist, int);
	
	
	}

	va_end(valist);

	return sum/num;


}


int main()
{

	printf("Average of 2,3,4,5 = %f\n",average(2,3,4,5));


}

```

## 27. 内存管理

- void *calloc(int num, int size)
    - 在内存中动态地分配num个长度为size的连续空间，并将每一个字节都初始化为0.所以它的结果是分配了num*size个字节长度的内存空间，并且每个字节都是0.
- void free (void *address)
    - 该函数释放address所指向的内存块，释放的是动态分配的内存空间。
- void *malloc(int num)
    - 在堆分配一块指定大小的内存空间，用来存放数据。这块内存空间在函数执行完成后不会初始化，它们的值是未知的。
- void *realloc(void *address, int newsizew)
    - 该函数重新分配内存，把内存扩展到newsize.


- 动态分配内存

```c
------------------------
Name = Zara Ali
Description :Zara ali a DPS student in class 10th
------------------------
#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{

	char name[100];
	char *description;

	strcpy(name, "Zara Ali");

	description = (char *)malloc(200 * sizeof(char));
	if(description == NULL)
	{
	
		fprintf(stderr, "Error - unable to allocate required memory\n");
	}
	else
	{
		strcpy(description, "Zara ali a DPS student in class 10th");
		
	
	}
	printf("Name = %s\n",name);
	printf("Description :%s\n",description);

	return 0;

}
```


- 重新调整内存的大小和释放内存

```c
-------------------------------------------------
Name = Zara Ali
Description :Zara ali a DPS student in class 10th
She is in class 10th
-------------------------------------------------


#include <stdio.h>
#include <stdlib.h>
#include <string.h>


int main()
{

	char name[100];
	char *description;

	strcpy(name, "Zara Ali");

	description = (char *)malloc(200 * sizeof(char));
	if(description == NULL)
	{
	
		fprintf(stderr, "Error - unable to allocate required memory\n");
	}
	else
	{
		strcpy(description, "Zara ali a DPS student in class 10th\n");
		
	
	}
	description = (char *)realloc(description, 100 * sizeof(char));
	if(description == NULL)
	{
		fprintf(stderr, "Error - unable to allocate required memory\n");	
	}
	else
	{
		strcat(description, "She is in class 10th\n");
	}



	printf("Name = %s\n",name);
	printf("Description :%s\n",description);

	free(description);

	return 0;

}

```

## 28. C 命令行参数

- argv[0] 存储程序的名称
- argv[1] 是一个指向第一命令行参数的指针
- * argv[n]是最后一个参数
- 多个命令行之间用空格分隔，但是如果参数本身带有空格，那么传递参数的时候应把参数放置在双引号""或单引号的内部。

```c
#include <stdio.h>

int main(int argc, char * argv[])
{
	if(argc == 2)
	{
	
		prin、tf("The argument supplied is %s\n",argv[1]);
	}
	else if(argc >2)
	{
		printf("Too many arguments supplied.\n");	
	}
	else
	{
		printf("One argument expected.\n");	
	}

}
```
