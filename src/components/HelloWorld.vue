<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <p>{{ test }} yoho</p> -->
    <p :data-value="msg">Wkakwkakwkka</p>
    <p v-if="false">now you see me</p>
    <p>The result of reversed name person is: {{ reversedNamePerson }}</p>
    <button @click="handleClickButton">Update Me</button>
    <button @click="clickValue++">You click Me {{ clickValue }} times</button>
    <p>This is random number generating by methods: {{ getRandomNumber() }}</p>
    <ul>
      <li v-for="list in lists" :key="list.id">
        {{ list.value }}
      </li>
    </ul>
    <button @click="callAlert">Call an Alert</button>
    <button @click="alertMessage('test dulu ges', $event)">Alert with Message</button>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data: function () {
    return {
      person: "Nesamoto Hanako",
      clickValue: 0,
      lists: [
        {
          id: 1,
          value: "Tambah lagi jadi 1",
        },
        {
          id: 2,
          value: "Tambah lagi jadi 2",
        },
        {
          id: 3,
          value: "Tambah lagi jadi 3",
        },
      ],
    };
  },
  created: function () {
    console.log("hai sayang");
    this.person = "Ivan ganteng";
    console.log(this.person);
  },
  watch: {
    // this function run  when person state change
    person: function (newValue, oldValue) {
      console.log("new valunya adalah", newValue);
      console.log("old valuenya adalah", oldValue);
    },
  },
  computed: {
    // this function only re create when person state change
    reversedNamePerson: {
      get: function () {
        return this.person.split("").reverse().join("");
      },
    },
  },
  methods: {
    // * this function not be cached, always re created when re render appears
    getRandomNumber: function () {
      return Math.random();
    },
    handleClickButton: function () {
      this.person = "Galih Sagala";
    },
    callAlert: function () {
      alert("hai sayang");
    },
    alertMessage: function (msg, event) {
      console.log(event)
      alert(msg)
    }
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
