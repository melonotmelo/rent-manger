import Vue from 'vue'
import { Button } from "element-ui";
import { Form,FormItem } from "element-ui";
import { Input } from "element-ui";
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

export default{
    install(Vue){
        // 定义全局过滤器
        Vue.filter('过滤器名称',function(value){

        })

        // 定义全局指令
        Vue.directive('fbind', function (el, binding) {

        });

        // 定义混入
        Vue.mixin();

        // 给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert("hello");
        }
    }
}