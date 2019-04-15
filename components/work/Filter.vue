<template>
  <div class="Filter__group">
    <div class="Filter__item">
      <select
        :value="value"
        name="projectfilter"
        @input="$emit('input', $event.target.value)">
        <option value="">All Projects</option>
        <option value="client">Client</option>
        <option value="games">Games</option>
        <option value="talks">Talks</option>
        <option value="open source">Open Source</option>
      </select>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProjectFilter',
    props: {
      value: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
@import "~@nextindex/next-scss/next-scss";

.Filter__group {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: rem(24) 0 rem(64) 0;
}

.Filter__item {
  position: relative;
  select {
    height: rem(50);
    width: rem(300);
    font-size: rem(18);
    border: none;
    background: #fff;
    font-weight: bold;
    appearance: none;
    padding: rem(16) rem(16) rem(16) rem(32);
    box-shadow: 0 rem(4) rem(15) rgba(0, 0,0, .15);
  }

  &:before {
    content: '#';
    position: absolute;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: rem(20);
    color: #FC6263;
    font-weight: bold;
    left: rem(16);
    top: 50%;
    transform: translateY(-50%)
  }
}
</style>
