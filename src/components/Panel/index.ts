import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    cname: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
})
export default class Panel extends Vue {
  public panelClass: string = 'btn';
}
