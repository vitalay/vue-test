//счетчик
const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  mounted() {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}

//дата

Vue.createApp(Counter).mount('#counter')

const AttributeBinding = {
  data() {
    return {
      message: 'Страница загружена ' + new Date().toLocaleString()
    }
  }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')


//директиву v-on
const EventHandling = {
  data() {
    return {
      message: 'Привет, Vue.js!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message
        .split('')
        .reverse()
        .join('')
    }
  }
}

Vue.createApp(EventHandling).mount('#event-handling')


//директиву v-model
const TwoWayBinding = {
  data() {
    return {
      message: 'Привет, Vue!'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

//дириктива v-if

const ConditionalRendering = {
  data() {
    return {
      seen: true
    }
  }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
  
  //дириктива v-for

  const listRendering ={
data() {
  return{
    todos: [
      { text: 'Я учу JavaScript', level: '6' },
      { text: 'Я учу Vue', level: '2' },
      { text: 'Я учу Frontend', level: '5' },
      { text: 'Я учу Git', level: '3' }
    ]
  }
}
  }
  Vue.createApp(listRendering).mount('#list-rendering')

  //Компоненты
  const TodoItem = {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
  }
  const TodoList = {
    data() {
      return {
        groceryList: [
          { text: 'Овощи'},
          { text: 'Сыр'},
          { text: 'Мясо'},
          { text: 'Фрукты'},
          { text: 'Что еще люди должны есть'}
        ]
      }
    },
    components: {
      TodoItem //Регестрируем новый компонент
    }
  }
  //Создаем Vue приложение
  const app = Vue.createApp(TodoList)
  //Монтируем приложение Vue
  app.mount('#todo-list-app')