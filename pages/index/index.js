//index.js
//获取应用实例
const app = getApp();
const winW = wx.getSystemInfoSync().screenWidth; // 屏幕宽度
const ratio = 750/winW //px && rpx 单位转换

Page({
    data: {
        offset: 0,
        start: 0,
        move: 0,
        list:[
            {
                id:'464sa64',
                name: '商品名称商品名称商品名称商品名称商品名称商品名称1',
                size:'300g',
                img:'/img/1.jpg'
            }, {
                id: 'sgas3g1s1',
                name: '矿泉水矿泉水矿泉水矿泉水矿泉水矿泉水商品名称2',
                size: '600g',
                img: '/img/1.jpg'
            }
        ],
        list2: [
            {
                id: '464sa64',
                name: '商品名称商品名称商品名称商品名称商品名称商品名称1',
                size: '300g',
                img: '/img/1.jpg'
            }, {
                id: 'sgas3g1s1',
                name: '矿泉水矿泉水矿泉水矿泉水矿泉水矿泉水商品名称2',
                size: '600g',
                img: '/img/1.jpg'
            }
        ]
    },

    onLoad: function () {
        // console.log(750 / winW)
        //获得dialog组件
        this.dialog = this.selectComponent("#dialog");
    },

    // 删除
    _del: function(e){
        var that = this;
        var id = e.currentTarget.dataset.id
        console.log(id)
        that.data.list.forEach((val,index,arr)=>{
            if(id == val.id){
                arr.splice(index,1)
            }
        });
        that.setData({
            list: that.data.list
        })
    },

    // 喜欢
    _like: function(e){
        var that = this;
        var id = e.currentTarget.dataset.id
        console.log(id)
    },

    // 进入商品详情
    detail:function(e){
        var id = e.currentTarget.dataset.id
        console.log(id)
    }
})
