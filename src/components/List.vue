<template>
  <div>
    <h1>To Do List</h1>
    <br>
    <input type="text" v-model="newItem">
    <button @click="addItemToList">Add</button>
    <ul>
      <li v-for="(item, index) in listItems" :key="index">{{ item}}</li>
    </ul>
  </div>
</template>

<script>
  
  export default {
    name: 'list',
    data () {
      return {
        listItems: ['buy food', 'play games', 'sleep'],
        newItem: ''
      }
    },
    methods: {
      addItemToList () {
        this.listItems.push(this.newItem)
        this.newItem = ''
      }
    }
  }
</script>