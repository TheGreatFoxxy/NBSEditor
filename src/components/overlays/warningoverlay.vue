<template>
  <div>
    <h3>!!WARNING!!</h3>
    <p>Now we may have new instruments, and its cool that we do, but using them will render your song uncompatible with minecraft!</p>
    <p>USE AT YOUR WORN RISK!</p>
    <button @click="hide">Acknowledge and close</button>
  </div>
</template>

<script>
export default {
  inject: ["hide"],
  props: {
    options: Object,
  },
}
</script>

<style>
h3 {
color: white;
background-color: red;
font-family: sans-serif;
}
</style>
