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