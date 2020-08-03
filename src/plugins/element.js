// import { Button } from 'element-ui';
// import { Form,FormItem } from 'element-ui'
// import { Input } from 'element-ui'
// // 导入弹框提示
// import {Message} from 'element-ui'

import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

