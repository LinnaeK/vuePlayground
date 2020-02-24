<template>
    <div>
        <b-nav>
            <b-nav-item disabled><b>Quiz App</b></b-nav-item>
            <b-nav-item disabled>Counter: {{correct}}/{{totalAnswers}}</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    props: [
        'correct',
        'totalAnswers'
        ]
}
</script>