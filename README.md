# wxapp-slide-delete

### 小程序列表滑动删除组件 ，使用步骤如下

#### 1、复制 components 目录下的 slide-delete 文件夹到你的组件目录下

#### 2、复制以下代码到你要使用的地方

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
    <view class='list-cont' bindtap='detail' data-id="{{item.id}}">
        <image class='list-img' src='{{item.img}}' mode='winthFix'></image>
        <view class='list-main'>
            <view class='list-name'>{{item.name}}</view>
            <view class='list-size'>规格：{{item.size}}</view>
        </view>
    </view>
    <!--  在这里编写你自己的代码 end  -->
</slide-delete>
```	
