
.PHONY: clean
# target 目标
## 如果 make 没指定 target ，就执行这个
a.txt: b.txt c.txt
	cat b.txt c.txt > a.txt

## 需要上面去申明 PHONY
clean:
	rm *.txt
# prerequisites 前置条件
## 第二次执行会报错，make: `result.txt' is up to date.
result.txt: source.txt
	cp source.txt result.txt

## 这里是依赖上面的 result.txt 的 target,如果上面不成立，就执行这个 target
source.txt:
	echo "this is the source" > source.txt

## TODO 为啥没有 > 一次性生成 file1，file2，file3 三个文件 ????
source: file1 file2 file3

# commands 命令
## 多行使用分号；或者 换行符 + \ 隔开，或者在顶部加
.ONESHELL:
var-lost:
	export foo=bar; echo "foo=[$$foo]"

# 文件的语法

# echoing 回声
echo_test:
	@echo "no echo"

# 变量和赋值符
v1 = Hello
v2 = $(v1)
.ONESHELL:
var_test:
	@echo ${v2}
