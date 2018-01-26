import JHeader from '@/components/JHeader/index.vue';
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    JHeader,
  },
})
export default class App extends Vue {
  public msg = 'Hello,';
  public mounted() {
    setTimeout(() => {
      this.sayHello();
    }, 3000);
  }
  public sayHello() {
    this.msg += ' 3 seconds left';
  }
  public log() {
    alert('hello vue');
  }
  get myName() {
    return `${this.msg} TopGrd`;
  }
}
