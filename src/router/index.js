import Vue from "vue";
import VueRouter from "vue-router";
import Create from "@/views/Create.vue";
import List from "@/views/List";
import Task from "@/views/Task";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Create",
    component: Create
  },
  {
    path: "/list",
    name: "List",
    component: List
  },
  {
    path: "/task/:id",
    name: "Task",
    component: Task
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
