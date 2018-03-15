/**
 * Created by ranck on 2018/3/13.
 */
import Vue from 'vue'
export default {
  change (word) {
    return Vue.http.get(`/text2audio?lan=zh&ie=UTF-8&spd=2`, {params: {text: `${word}`}})
  }
}
