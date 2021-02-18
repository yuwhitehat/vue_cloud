<template>
  <section class="main-content">
    <section class="test">
      <div class="title">
        <h2>test1</h2>
      </div>
      <div>
        <el-button size="medium" @click="add" type="danger" round
          >点击</el-button
        >

        <strong>你点击按钮的次数是：{{ count }}</strong>
      </div>
    </section>
    <section class="test">
      <div class="title">
        <h2>test2</h2>
      </div>
      <div>
        <strong>FullName: {{ fullName }}</strong>
        <div>
          <el-input
            v-model="firstName"
            placeholder="请输入firstName"
          ></el-input>
        </div>
      </div>
    </section>
    <section class="test">
      <div class="title">
        <h2>test3</h2>
      </div>
      <el-table
        :data="tableData"
        border
        :row-class-name="tableRowClassName"
        style="width: 40%"
      >
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="type" label="型号" width="180">
        </el-table-column>
        <el-table-column prop="price" label="价格"> </el-table-column>
        
      </el-table>
    </section>
    <section class="test">
      <div class="title">
        <h2>test4</h2>
      </div>
      <HelloWorld msg="Welcome" />
    </section>
    <section class="test">
      <div class="title">
        <h2>test5</h2>
      </div>
      <router-link to="/about">About</router-link>|
      <router-link to="/">Home</router-link>
      <router-view></router-view>
    </section>
  </section>
</template>
<script>
import HelloWorld from "./components/HelloWorld";

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      count: 0,
      firstName: "Liu",
      lastName: "Ziyu",
      fullName: "",
      tableData: [
        {
          name: "huawei",
          type: "nova SE",
          price: "2199",
        },
        {
          name: "huawei",
          type: "Mate 20",
          price: "3199",
        },
        {
          name: "huawei",
          type: "Mate 30e pro",
          price: "4399",
        },
      ],
    };
  },
  watch: {
    count(value, oldValue) {
      // 第一个参数为新值，第二个参数为旧值，不能调换顺序
      console.log(`新值：${value}`);
      console.log(`旧值：${oldValue}`);
    },
    firstName: {
      handler(newName) {
        this.fullName = newName + " " + this.lastName;
      },
      immediate: true,
    },
  },
  methods: {
    add() {
      this.count++;
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
  },
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}
.el-table .success-row {
  background: #95d474;
}
.test {
  margin: 50px 0;
}
.el-input {
  width: 300px;
}
</style>
