<template>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4 mt-4">Registrarse</h1>
    <form ref="father" @submit.prevent="formData" method="POST">
      <!-- Username Input -->
      <div class="">
        <label for="name" class="block text-gray-600 font-bold">Nombre</label>
        <input
          v-on:input="evaluateIfEmpty()"
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
          v-on:input="evaluateIfEmpty()"
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
          v-on:input="evaluateIfEmpty()"
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
          v-on:input="evaluateIfEmpty()"
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
          v-on:input="evaluateIfEmpty()"
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
          v-on:input="evaluateIfEmpty()"
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
        v-bind:disabled="evaluatebooleanButton()"
        v-bind:class="evaluateButton()"
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
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

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

const buttonChange: [boolean, number] = [false, 0];
const count = ref(0);

const evaluatebooleanButton = () => {
  if (count.value === 6) {
    return false;
  } else {
    return true;
  }
};

const evaluateIfEmpty = () => {
  const arrayEmpty: string[] = [
    data.name,
    data.lastname,
    data.ci,
    data.user,
    data.password,
    data.passwordRepeat,
  ];
  count.value = 0;
  for (let i = 0; i < arrayEmpty.length; i++) {
    if (arrayEmpty[i].trim() === '') {
      buttonChange[i] = 0;
      count.value = 0;
      break;
    } else {
      count.value = count.value + 1;
      buttonChange[1]++;
    }
  }

  buttonChange[1] = 0;
};

const evaluateButton = () => {
  return count.value === 6
    ? 'bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full'
    : 'bg-gray-300 text-white font-semibold rounded-md py-2 px-4 w-full';
};

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
      buttonChange[1] = 0;
      return arrayInputs[i].value?.focus();
    } else {
      buttonChange[1] = buttonChange[1] + 1;
    }
  }

  const r = await createUser(parseInt(data.ci), data.name, data.lastname, data.user, data.password);

  if (r === 'Usuario creado') {
    toast.success(r);
    router.replace({ name: 'home' });
  } else {
    return toast.error(r);
  }
};
</script>
