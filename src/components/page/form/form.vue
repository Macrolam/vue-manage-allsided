<template>
  <el-row class="form">
    <el-col :span="8">
      <el-form :model="params" :rules="rules" ref="params" label-width="100px" class="demo-params">
        <el-form-item label="名称" prop="name">
          <el-input v-model="params.name"></el-input>
        </el-form-item>
        <el-form-item label="区域" prop="region">
          <el-select v-model="params.region" placeholder="请选择区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="params.date1"
                              style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="params.date2"
                              style="width: 100%;"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="params.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="范围" prop="activityF">
          <el-input placeholder="请输入内容" v-model="params.activityF" class="input-with-select">
            <el-select v-model="params.aa" slot="prepend" placeholder="请选择">
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item label="性质" prop="type">
          <el-checkbox-group v-model="params.type">
            <el-checkbox label="美食/餐厅线上" name="type"></el-checkbox>
            <el-checkbox label="地推" name="type"></el-checkbox>
            <el-checkbox label="线下主题" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="params.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="范围">
          <el-cascader
            :options="arr"
            change-on-select
          ></el-cascader>
        </el-form-item>
        <el-form-item label="形式" prop="desc">
          <el-input type="textarea" v-model="params.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('params')">立即创建</el-button>
          <el-button @click="resetForm('params')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  import arr from 'static/other/tree.js'
  export default {

    // 组件名称
    name: '',

    // 父子通信
    props: {},

    // 注册组件
    components: {},

    // 数据绑定
    data() {
      return {
        arr: [],
        params: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写形式', trigger: 'blur'}
          ]
        }
      };
    },
    // 方法
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

    // 数据init
    created(){
      this.arr = arr ? arr.arr : []

    },

    // DOM加载完成
    mounted(){
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  /*定制自己的样式，顶级选择器挂上当前页id->#form*/
</style>
<style lang="less" rel="stylesheet/less">
  /*定制第三方库的样式，顶级选择器挂上当前页id->#form*/
</style>
