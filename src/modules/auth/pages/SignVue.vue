<template>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4 mt-4">Registrarse</h1>
    <form action="#" method="POST">
      <!-- Username Input -->
      <div class="">
        <label for="name" class="block text-gray-600 font-bold">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <div class="mb-2">
        <label for="apellido" class="block text-gray-600 font-bold">Apellido</label>
        <input
          type="text"
          id="apellido"
          name="apellido"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <div class="mb-2">
        <label for="username" class="block text-gray-600 font-bold">Usuario</label>
        <input
          type="text"
          id="username"
          name="username"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Password Input -->

      <div class="mb-2">
        <label for="password" class="block text-gray-600 font-bold">Clave</label>
        <input
          type="password"
          id="password"
          name="password"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <div class="mb-2">
        <label for="password" class="block text-gray-600 font-bold">Repetir clave</label>
        <input
          type="password"
          id="password-repeat"
          name="password-repeat"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Remember Me Checkbox -->
      <div class="mb-2 flex items-center">
        <input type="checkbox" id="remember" name="remember" class="text-blue-500" />
        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
      </div>
      <!-- Forgot Password Link -->
      <div class="mb-4 text-blue-500">
        <a href="#" class="hover:underline">Forgot Password?</a>
      </div>
      <!-- Login Button -->
      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Login
      </button>
    </form>
    <!-- Sign up  Link -->
    <div class="mt-4 text-blue-500 text-center">
      <RouterLink :to="{ name: 'login' }" class="hover:underline">Iniciar Sesion</RouterLink>
    </div>
  </div>
</template>
