<template>
  <div>
    <header class="mt-2">
      <div class="py-4 px-2 lg:mx-4 xl:mx-12 text-center">
        <div class="">
          <nav class="flex items-center justify-between flex-wrap">
            <div
              id="main-nav2"
              class="w-full flex-grow lg:flex items-center lg:w-auto"
            >
              <div
                class="text-sm lg:flex-grow mt-2 animated jackinthebox xl:mx-8"
              >
                <slot></slot>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style>
</style>