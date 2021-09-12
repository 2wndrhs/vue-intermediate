import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// 스토어에는 가급적 데이터 요청과 상태를 바꾸는 로직에 집중!
// 그 외 표현부와 관련된 로직은 컴포넌트 단에서 처리
export const store = new Vuex.Store({
	modules: {
		todoApp
	}
});