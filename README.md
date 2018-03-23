# wxapp-slide-delete

### 小程序列表滑动显示删除按钮组件 ，使用步骤如下：（代码文件有具体例子，直接复制可以运行预览）

#### 1、复制 _components_ 目录下的 _slide-delete_ 文件夹到你的组件目录下

#### 2、复制以下代码到你要使用的地方，在  *在这里编写你自己的代码*   可完全自定义你自己的代码，slide-delete 组件上面也可以编写 class 类(如下)

```
<slide-delete class="list-wrap"
	wx:for="{{list}}"
	wx:key="*list" 
	del-class="list-del" 
	like="true" 
	like-class="list-like" 
	binddelete="_del" 
	bindlike="_like" 
	data-id="{{item.id}}">
	
    <!--  在这里编写你自己的代码  -->
	
</slide-delete>
```

### 属性说明：

##### 1、del-class：组件外编写删除按钮的样式类
##### 2、like-clas：组件外编写喜欢按钮的样式类
##### del-class、like-clas 这两个类需要注意下面几点

> 1、不能在这个类当中设置宽度，会对动画效果产生影响，因为我暂时找不到动态获取 view 宽度的方法

> 2、建议只修改按钮的背景与字体颜色跟字体大小

> 3、在引用组件页面下的 .wxss 文件编写按钮的样式要注意优先级

> 4、如要修改按钮文字，需要在 slide-delete.wxml 中修改

##### 3、like：显示喜欢按钮（Boolean），默认情况下是不显示，需要设置为 true ，喜欢按钮才显示
##### 4、binddelete：定义删除按钮的方法，方法名随意，这个方法的使用方式跟在引用页面的使用方法一致 （bindlike 属性同样） 
##### 5、bindlike：定义喜欢按钮的方法

### 注意：

#### 要使用该组件还有在引用页面的 .json 文件添加以下代码

```
"usingComponents": {
	"slide-delete": "/components/slide-delete/slide-delete"
}
```
	
