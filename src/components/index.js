// 把components中所有的组件进行全局化注册
//通过插件的方式
import ImageView from "@/components/ImageView.vue";
import XtxSku from "@/components/XtxSku/index.vue";

export const componentsPlugin = {
    install(app){
        //app.component('组件名字',配置对象)
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',XtxSku)
    }
}