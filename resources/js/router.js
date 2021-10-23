import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import TaskListComponent from "./components/TaskListComponent.vue";
import TaskDetailComponent from "./components/TaskDetailComponent.vue";
import TaskEditComponent from "./components/TaskEditComponent.vue";

export default new VueRouter({
    mode: 'history',
    base: '/vuetutorial/',
    routes: [
        {
            path: '/tasks',
            name: 'task.list',
            component: TaskListComponent
        },
        {
            path: '/tasks/:taskId',
            name: 'task.detail',
            component: TaskDetailComponent,
            props: true
        },
        {
            path: '/tasks/:taskId/edit',
            name: 'task.edit',
            component: TaskEditComponent,
            props: true
        }
    ]
});
