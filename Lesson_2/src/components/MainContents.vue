<template>
  <el-row>
    <el-col :xs="24" :sm="18" :md="14" :lg="10" id="main">
      创建者：{{info.creator}}
      <el-input v-model="info.creator" placeholder="请输入创建人"></el-input>
      待办事项：{{info.items}}
      <el-input v-model="info.items" placeholder="请输入待办事项"></el-input>

      <el-button @click="create" type="success">创建</el-button>
      <template>
        <el-table :data="tabledata" align="left">
          <el-table-column label="创建者" prop="creator"></el-table-column>
          <el-table-column label="待办事项" prop="items"></el-table-column>
          <el-table-column label="创建时间" prop="create_time"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="a">
              <el-button type="danger" size="mini" @click="del(a.$index)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </el-col>
  </el-row>
</template>

<script>
import Storage from "../store/store";
export default {
  data() {    
    return {
      info: {
        creator: "",
        items: "",
        create_time: "",
      },
      tabledata: Storage.fetch(),
    };
  },
  methods: {
    create() {
      if(this.info.items.length==0)
      {

      }
      this.info.create_time = Date();
      this.tabledata.push(this.info);
      this.info = { creator: "", items: "", create_time: "" };
    },
    del(index) {
      this.tabledata.splice(index, 1);
    },
  },
  watch: {
    tabledata: {
      handler(items) {
        Storage.save(items);
      },
      deep: true,
    },
  },
};
</script>


<style>
#main {
  float: none;
  margin: 0 auto;
}
.el-input {
  padding-bottom: 5px;
}
.btn-auto {
  width: 100%;
  margin-top: 12px;
}
</style>
