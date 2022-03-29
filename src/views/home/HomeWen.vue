<template>
  <div>
    <div class="btn">
      <div class="btn-left">
        <el-button type="primary">编辑添加，字段各种规则验证示例</el-button>
        <el-button type="primary">本地导出表格</el-button>
      </div>
      <div class="btn-right">
        <el-input v-model="input"
                  placeholder="请输入文章标题"></el-input>

        <el-dropdown>
          <el-button plain>
            请选择类型<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>招聘信息</el-dropdown-item>
            <el-dropdown-item>技术交流</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button type="success">查询</el-button>
        <el-button type="warning">重置</el-button>
      </div>
    </div>
    <el-table :data="arrs">

      <el-table-column prop="title"
                       label="文章标题">

      </el-table-column>
      <el-table-column prop="author"
                       label="作者">

      </el-table-column>
      <el-table-column prop="browse"
                       label="浏览量">

      </el-table-column>
      <el-table-column prop="reply"
                       label="回复">

      </el-table-column>
      <el-table-column label="操作">
        <!-- 编辑删除 -->
        <template slot-scope="scope">
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import instance from '../../api/index'
export default {
  name: "HomeWen",
  data () {
    return {
      arrs: null,
    }
  },
  methods: {
    async gethome () {
      let { data } = await instance.get("/homeindex")
      this.arrs = data
    },
    handleDelete (a, b) {//用户行为
      console.log(a, b)

      this.$confirm("您确定删除该条信息吗", "提示", {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteHomeIndex(a)

      }).catch(() => {

        console.log("你取消了")
      })

    },
    //删除业务
    async deleteHomeIndex (index) {
      let { data } = await instance.delete("/homeindex/" + index)
      console.log(data)
      this.gethome()
    },
  },

  created () {
    this.gethome()
  }
}
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
}
.btn-left {
  display: flex;
  margin: 10px 5px;
}
.btn-right {
  display: flex;
  margin: 10px 5px;
}
</style>