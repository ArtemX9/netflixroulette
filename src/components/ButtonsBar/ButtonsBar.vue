<template>
  <ul v-if="buttons.length" v-on:click="handleClick" class="buttons-bar">
    <li
      v-for="button in buttons"
      :key="button.id"
      :data-id="button.id"
      :class="{ selected: isSelected(button.id) }"
    >
      {{ button.title | capitalize }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "ButtonsBar",
  props: {
    buttons: {
      type: Array,
      required: true
    },
    selectedId: {
      type: String
    }
  },
  methods: {
    handleClick: function({ target }) {
      this.$emit("buttonClick", target.dataset.id);
    },
    isSelected: function(id) {
      return id === this.selectedId;
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      return value.toUpperCase();
    }
  }
};
</script>

<style scoped>
.buttons-bar {
  display: inline-block;
  margin: 0;
  padding: 0;
  font-family: "Trueno Ultra Light", Helvetica, Arial, sans-serif;
}
.buttons-bar li {
  display: inline-block;
  padding: 8px 20px;
  color: white;
  cursor: pointer;
  background-color: rgba(255, 254, 254, 0.2);
}
.buttons-bar li:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.buttons-bar li:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

.selected {
  background-color: #f75160 !important;
}
</style>
