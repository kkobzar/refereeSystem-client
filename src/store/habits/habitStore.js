import habitService from "@/services/habitService";
export default {
  state: {
    habits: [],
    habitsChecks: {},
  },
  mutations: {
    addHabit(state, habit) {
      state.habits = habit;
    },
    editHabit(state,habit){
      state.habits[state.habits.findIndex(i=>i.id === habit.id)] = habit;
    }
  },
  actions: {
    // eslint-disable-next-line no-empty-pattern
    async addHabit({}, { title, question }) {
      await habitService.addHabit(title, question);
    },
    async getHabits({ commit }) {
      const res = await habitService.getHabits();
      if (!res) return;

      commit("addHabit", res);
    },
    async editHabit({commit}, {id,title,question}){
      const res = await habitService.editHabit(id,title,question)
      if (res)
        commit('editHabit',res);
    }
  },
  getters: {
    userHabits(state) {
      return state.habits;
    },
  },
};
