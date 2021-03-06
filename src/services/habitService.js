import $api from "@/http/index";

export default {
  async addHabit(title, question) {
    await $api.post("/core/addHabit", {
      title,
      question,
    });
  },
  async getHabits() {
    const res = await $api.get("/core/userHabits");
    return res.data;
  },
  async editHabit(id, title = "", question = "") {
    const res = await $api.post("/core/editHabit", {
      habitId: id,
      title,
      question,
    });
    if (res.status === 200) return res.data;
    else return false;
  },
  async getHabitChecks(habitId) {
    const res = await $api.get("/core/userHabitChecks/" + habitId);
    if (res.status === 200) return res.data.map(i=>new Date(i.checkDate));
    else return false;
  },
  async checkHabit(habitId,time){
    const res = await $api.post("/core/toggleHabit",{
      habitId,
      date:time
    });
    return res.status === 200;
  }
};
