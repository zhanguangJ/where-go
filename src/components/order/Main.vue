<template>
  <div  ref='list'>
    <a v-for="(item,index) of DataList" :key="index">
      <div class="title">
        {{item.title}}
        <div class="tag">
        </div>
      </div>
      <dl class="clearfix">
        <dt>
          <img
            :src="item.imgs"
          >
        </dt>
        <dd>
          <div
            class="summary"
          >{{item.content}}</div>
          <div class="extra">
            {{item.num}}
            <div class="author">{{item.author}}</div>
          </div>
        </dd>
      </dl>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import request from '../../libs/request.js'
export default Vue.extend({
    data(){
        return {
            DataList:[],
            timer : null,
            offsetHeight : 0
        }
    },
    created(){
        this.getDataList();
        this.$nextTick(()=>{
            this.offsetHeight = this.$refs.list.offsetHeight;
        })
    },
    methods:{
        async getDataList(){
            const {g,p} = request;
            const data = await g({
                url : 'https://www.easy-mock.com/mock/5cf5001e6e18ad42e9052ce1/example/Where-Go-Order'
            });
            this.DataList = [...this.DataList,...data.data.data.hotCities]
        },
        handleFun(){
            if (window.scrollY + window.innerHeight >= this.$refs.list.offsetHeight) {
                this.getDataList() 
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleFun)
    },
    beforeDestroy(){
        window.removeEventListener('scroll',this.handleFun)
    }
});
</script>
<style lang="scss" scoped>
a {
  display: block;
  background: repeat-x;
  background-position: 0 bottom;
  background-size: 5px 1px;
}
.title {
  padding: 0.3rem 1.5rem 0 0.4rem;
  font-size: 0.506rem;
  color: #111;
  line-height: 1.4em;
  max-height: 1.3rem;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title .tag {
  position: absolute;
  right: 0;
  top: 0.4rem;
  line-height: 1em;
}
.title img {
  height: 0.56rem;
  width: auto;
}
img {
  vertical-align: middle;
}
dl {
  padding: 0.24rem 0.4rem 0.4rem;
}
dt {
  width: 3.466rem;
  float: left;
}
dt img {
  width: 3.466rem;
  height: 2.4rem;
}
dd {
  margin-left: 3.893rem;
  color: #999;
  height: 2.4rem;
  position: relative;
}
dd .summary {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.3em;
  font-size: 0.373rem;
  padding: 0.14rem 0 0;
}
dd .extra {
  height: 0.533rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 0.32rem;
  line-height: 0.533rem;
}
.author {
  position: absolute;
  right: 0;
  top: -0.04rem;
}
</style>
