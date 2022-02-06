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
  },
  getters: {
    userHabits(state) {
      return state.habits;
    },
  },
};
