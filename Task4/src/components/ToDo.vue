<template>
    <div>
        <ul>
            <li v-for="(todo, index) in todos" :key="index" >
                {{ todo.task }}
                <ul>
                    <li> {{ todo.description }}</li>
                    <li> Дедлайн: {{ todo.deadline.day }} {{ todo.deadline.month }} {{ todo.deadline.year }} {{ todo.deadline.hour }}:{{ todo.deadline.minute }} </li>
                </ul>
                <button type="button" @click="deleteToDo(index)">Сделано</button>
                <button v-if="index != 0" type="button" @click="moveUp(index)">Повысить приоритет</button>
                <button v-if="index != todos.length - 1" type="button" @click="moveDown(index)">Понизить приоритет</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: ['todos'],
        methods: {
            deleteToDo(index){
                this.$emit('delete-todo', index);
            },
            moveUp(index){
                this.$emit('move-up', index);
            },
            moveDown(index){
                this.$emit('move-down', index);
            }
        }
    }
</script>

<style scoped>
</style>