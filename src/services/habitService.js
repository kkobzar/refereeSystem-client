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
  }
}
