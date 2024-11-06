<template>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4 mt-4">Registrarse</h1>
    <form ref="father" @submit.prevent="formData" method="POST">
      <!-- Username Input -->
      <div class="">
        <label for="name" class="block text-gray-600 font-bold">Nombre</label>
        <input
          v-model="data.name"
          ref="nameInputElement"
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
          v-model="data.lastname"
          ref="lastNameInputElement"
          type="text"
          id="apellido"
          name="apellido"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>

      <div class="">
        <label for="cedula" class="block text-gray-600 font-bold">Cedula</label>
        <input
          v-model="data.ci"
          ref="ciInputElement"
          type="text"
          id="ci"
          name="cedula"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <div class="mb-2">
        <label for="username" class="block text-gray-600 font-bold">Usuario</label>
        <input
          v-model="data.user"
          ref="userInputElement"
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
          v-model="data.password"
          ref="passwordInputElement"
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
          v-model="data.passwordRepeat"
          ref="passwordRepeatInputElement"
          type="password"
          id="password-repeat"
          name="password-repeat"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
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

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { createUser } from '../actions';
import { useToast } from 'vue-toastification';

const data = reactive({
  name: '',
  lastname: '',
  ci: '',
  user: '',
  password: '',
  passwordRepeat: '',
});
const nameInputElement = ref<HTMLInputElement | null>(null);
const lastNameInputElement = ref<HTMLInputElement | null>(null);
const ciInputElement = ref<HTMLInputElement | null>(null);
const userInputElement = ref<HTMLInputElement | null>(null);
const passwordInputElement = ref<HTMLInputElement | null>(null);
const passwordRepeatInputElement = ref<HTMLDivElement | null>(null);
const father = ref<HTMLElement | null>(null);

const toast = useToast();

const formData = async () => {
  // console.log(Object.keys(data));

  const array: string[] = [
    data.name,
    data.lastname,
    data.ci,
    data.user,
    data.password,
    data.passwordRepeat,
  ];
  const arrayInputs = [
    nameInputElement,
    lastNameInputElement,
    ciInputElement,
    userInputElement,
    passwordInputElement,
    passwordRepeatInputElement,
  ];

  for (let i = 0; i < array.length; i++) {
    if (array[i].trim() === '') {
      return arrayInputs[i].value?.focus();
    }
  }

  const r = await createUser(parseInt(data.ci), data.name, data.lastname, data.user, data.password);
  console.log(r);

  toast.success('Usuario/contraseña no son correctos');
};
</script>
