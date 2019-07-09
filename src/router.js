import Vue from 'vue'
// 加载路由模块
import VueRouter from 'vue-router'
// 注册到vue中才可以使用
Vue.use(VueRouter)

// 导入英雄组件
import HeroList from './views/hero/HeroList.vue'
import HeroAdd from './views/hero/HeroAdd.vue'
import HeroEdit from './views/hero/HeroEdit.vue'

// 导入装备列表
import EquipList from './views/equip/EquipList.vue'
const router = new VueRouter({
  linkActiveClass:'active',
  routes:[
    {path:'/',redirect:{name:'hero'}},
    {name:"hero",path:'/hero',component:HeroList},
    {name:'heroadd',path:'/hero/add',component:HeroAdd},
    {name:'heroedit',path:'/hero/edit/:id',component:HeroEdit,props:true},
    {name:'equip',path:'/equip',component:EquipList}
  ]
})

export default router