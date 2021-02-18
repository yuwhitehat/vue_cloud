<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in optionList"
        :key="item.value"
        :value="item.value"
        :label="item.label"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: "",
      optionList: [
        {
          value: "1",
          label: "黄金糕",
        },
        {
          value: "2",
          label: "双皮奶",
        },
        {
          value: "3",
          label: "蚵仔煎",
        },
        {
          value: "4",
          label: "龙须面",
        },
        {
          value: "5",
          label: "北京烤鸭",
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
