<template>
  <div class="bg-gray-100 flex justify-center items-center h-screen">
    <!-- Left: Image -->
    <div class="w-1/2 h-screen hidden lg:block">
      <img
        src="https://i.pinimg.com/564x/d7/4d/5e/d74d5e97eda1012ecf1c7b5333ae17be.jpg"
        alt="Placeholder Image"
        class="object-cover w-full h-full"
      />
    </div>

    <RouterView />
  </div>
</template>
