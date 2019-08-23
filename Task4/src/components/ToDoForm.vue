<template>
    <form id="to-do-form">
        <input v-model="task" placeholder="Задание" size="25px" /> <br />
        <textarea v-model="description" rows="6" cols="23" placeholder="Описание"></textarea> <br />
        <input type="datetime-local" v-model="deadline" placeholder="Дедлайн" /> <br />
        <button type="button" @click="sendToDo()">Записать</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                task: '',
                deadline: '',
                description: ''
            }
        },
        methods:{
            sendToDo(){
                let year = this.deadline.slice(0, 4);
                let monthNumber = this.deadline.slice(5, 7);
                let month;
                switch (monthNumber) {
                    case '01': month = 'Января'; break;
                    case '02': month = 'Февраля'; break;
                    case '03': month = 'Марта'; break;
                    case '04': month = 'Апреля'; break;
                    case '05': month = 'Мая'; break;
                    case '06': month = 'Июня'; break;
                    case '07': month = 'Июля'; break;
                    case '08': month = 'Августа'; break;
                    case '09': month = 'Сентября'; break;
                    case '10': month = 'Октября'; break;
                    case '11': month = 'Ноября'; break;
                    case '12': month = 'Декабря'; break;
                    default: break;
                }
                let day = this.deadline.slice(8, 10);
                let hour = this.deadline.slice(11, 13);
                let minute = this.deadline.slice(14, 16);
                let todoNew = {
                    "task": this.task,
                    "description": this.description,
                    "deadline": {
                        "year": year,
                        "month": month,
                        "month-number": monthNumber,
                        "day": day,
                        "hour": hour,
                        "minute": minute
                    }
                };
                this.$emit('add-todo-finish', todoNew);
            }
        }
    }
</script>

<style scoped>
    #to-do-form {
        margin-left: 20px;
    }
</style>