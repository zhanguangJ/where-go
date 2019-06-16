<template>
  <div class="car-list-container">
    <ul>
      <li class="car-list" v-for="(v,index) in goodsList" :key='index'>
        <div class="car-list__img">
          <img :src="v.url">
        </div>
        <div class="car-list__detail">
          <p class="car-list__detail__title">{{v.title}}</p>
          <p class="car-list__detail__number">
            数量：
            <button class="number--decrease" @click="delNum(index,v.title)">-</button>
            <input type="text" readonly  v-model="v.number">
            <button class="number--increase" @click="addNum(index,v.title)">+</button>
          </p>
          <p class="car-list__detail__type"><span></span></p>    
          <p class="car-list__detail__price">
            单价：
            <span>￥{{v.price}}</span>
          </p>
          <p class="car-list__detail__sum">
            小计：
            <span>￥{{v.price*v.number}}</span>
          </p>
        </div>
        <div class="car-list__operate">
          <span class="iconfont icon-shanchu delete-goods" @click="del(v.title,index)">X</span>
          <label>
            <input
              type="checkbox"
              name="goods"
              :checked="v.select==true" 
              @click="selectGoods(index)"
            >
            <span></span>
          </label>
        </div>
      </li>
    </ul>
    <div class="car-foot-nav">
      <button class="sum-price">总额：￥{{sum}}</button>
      <router-link :to="{name:'home'}" class="continue-shopping" tag="button">继续购物</router-link>
      <button class="to-pay">去结算</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "car",
  data() {
    return {
      sum:0, //默认总价
      allselect: false,
      goods: [], //与后台交互获取的当前用户购物车商品列表
    };
  },
  computed: {
    goodsList() {
      return this.goods;
    }
  },
  methods: {
    //计算价格
    hh: function() {
      var price1 = 0;
      var list = this.goods;
      for (var i = 0; i < list.length; i++) {
        if (list[i].select) {
          price1 += list[i].number * list[i].price;
        }
        this.sum = price1;
      }
    },
    //单选
    selectGoods( index) {
      var list = this.goods;
      // console.log(list);
      list[index].select = !list[index].select;
      this.hh();
    },
    //修改数量
    //减
    delNum(index, title) {
      let localgoods = this.goods;
      // console.log(localgoods)
      localgoods.map(item => {
        if (item.title == title) {
          item.number--;
          if (item.number < 1) {
            item.number = 1;
          }
          // console.log(this.goods[index]);
          this.goods[index].number = item.number;
          // console.log(1)
        }
      });
      // console.log(localgoods);
      localStorage.setItem("goodsinfo", JSON.stringify(localgoods));
      this.hh();
    },
    //加
    addNum(index, title) {
      let localgoods = this.goods;
      //let gid = this.goods[num].id;
      //console.log(gid)
      localgoods.map(item => {
        if (item.title == title) {
          item.number++;
          this.goods[index].number = item.number;
        }
      });
      localStorage.setItem("goodsinfo", JSON.stringify(localgoods));
      this.hh();
    },
    //删除
    del(title,index){
      let localgoods = this.goods ;
      localgoods.map(item => {
        if (title == item.title) {
          // console.log(localgoods.splice(localgoods.indexOf(item), 1))
          localgoods.splice(localgoods.indexOf(item), 1);
        }
      });
      localStorage.setItem("goodsinfo", JSON.stringify(localgoods));
    }
  },
  mounted(){
    this.goods = JSON.parse(localStorage.getItem("goodsinfo"));
  }

};
</script>
<style lang="scss" scoped>
.car-list-container > ul {
  padding-bottom: 1.11rem;
}
.car-list {
  padding: 0.3125rem;
  position: relative;
  border-bottom: 0.0312rem solid #ddd;
  display: flex;
  .car-list__img {
    width: 2.8rem;
    height: 2.8rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .car-list__detail {
    flex: 1;
    padding: 0 0.35rem;
    p {
      font-size:12px;
      padding: 0.0312rem 0;
      color: #888;
      text-overflow: hidden;
      span {
        color: #77b59c;
      }
      &.car-list__detail__title {
        padding-bottom: 0.08rem;
      }
      &.car-list__detail__number {
        button {
          width: 0.6344rem;
          height: 0.6344rem;
          font-size:14px;
          border: 1px solid #aaa;
          background: #fff;
          color: #666;
          text-align: center;
          vertical-align: middle;
          &.number--decrease {
          }
        }
        input {
          border: 1px solid #aaa;
          border-left: none;
          border-right: none;
          box-sizing: border-box;
          width: 1rem;
          height: 0.6344rem;
          text-align: center;
          vertical-align: middle;
          color: #666;
        }
      }
    }
  }
  .car-list__operate {
    width: 0.5rem;
    .delete-goods {
     font-size:20px;
      color: #bbb;
      position: absolute;
      top: 0.3125rem;
      right: 0.3125rem;
    }
    label {
      position: absolute;
      bottom: 1.3125rem;
      right: 0.3125rem;
      input {
        display: none;
        &:checked + span {
          background: url(../../assets/select.png) no-repeat center/cover;
        }
      }
      span {
        display: inline-block;
        width: 0.525rem;
        height: 0.525rem;
        border: 1px solid #aaa;
      }
    }
  }
}

.car-foot-nav {
  position: fixed;
  bottom: 64px;
  width: 100%;
  border-top: 0.0156rem;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    flex: 1;
    height: 1.11rem;
    border: none;
    font-size:15px;
    &.sum-price {
      background: #fff;
      font-size:14px;
      width: 40%;
      flex: none;
      color: #77b59c;
    }
    &.continue-shopping {
      background: orange;
      color: #fff;
    }
    &.to-pay {
      background: red;
      color: #fff;
    }
  }
}
</style>
