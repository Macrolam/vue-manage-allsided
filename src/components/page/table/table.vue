<template>
  <div>
  <el-row class="table">
    <el-col :span="24">
      <el-table
        height="550"
        :data="tableData"
        border
        :default-sort="{prop: 'date', order: 'descending'}"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          fixed
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          label="图片"
          width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <img :src='scope.row.pic' alt=""><!--hover后显示的-->
              <div slot="reference" class="name-wrapper">
                <img :src='scope.row.pic' alt="" width="80"><!--table中显示-->
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
  <el-row style="margin-top: 20px;">
    <el-col :span="12" style="opacity: 0;">占位</el-col>
    <el-col :span='12' >
      <el-pagination
        style="float: right;"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-col>
  </el-row>
</div>
</template>
<style>
  .table {
    background: #fff;
  }
</style>
<script>
  import {restful} from '@/script/restful/restful'
  import axios from 'axios'
  export default{
    components: {},
    computed: {},
    data(){
      return {
        currentPage: 1,
        total: null,
        tableData: [
          {
            date: '2018-12-02',
            name: '麦壳儿',
            address: '广州市白云区机场路918号'
          }, {
            date: '2018-12-04',
            name: '麦壳儿',
            address: '广州市白云区机场路918号'
          }, {
            date: '2018-12-01',
            name: '麦壳儿',
            address: '广州市白云区机场路918号'
          }
        ],
      }
    },
    methods: {
      getMock(){
        let self = this
        axios.get('/table/table',{params:{page:1,pageSize:20}}).then((res) => {
          console.log(res.data.table.articles,"table-mock:")
          self.tableData = res.data.table.articles || []
          self.total = self.tableData.length || 0;
      });
       //
//        restful.get({
//          url:"/news/index",
//          callback(res){
//            debugger
//            res
//            self.data = res.data.articles || []
//          }
//        })
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    created(){
      this.getMock()
    },
    mounted(){
    },
  }
</script>
