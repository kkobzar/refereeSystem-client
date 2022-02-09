import $api from "@/http/index"

export default {
  async addHabit(title, question) {
    await $api.post("/core/addHabit", {
      title,
      question,
    });
  },
  async getHabits() {
    const res = await $api.get("/core/userHabits")
    return res.data;
  },
  async editHabit(id,title = "",question = ""){
    const res = await $api.post("/core/editHabit",{
      habitId:id,
      title,
      question,
    });
    if (res.status === 200)
      return res.data;
    else
      return false;
  }
}
