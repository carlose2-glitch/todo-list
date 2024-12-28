<template>
  <!-- Right: Login Form -->
  <div class="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
    <h1 class="text-2xl font-semibold mb-4">Iniciar sesion</h1>
    <form @submit.prevent="formData" method="POST">
      <!-- Username Input -->
      <div class="mb-4">
        <label for="username" class="block text-gray-600 font-bold">Usuario</label>
        <input
          v-on:input="evaluateIfEmpty()"
          v-model="data.user"
          type="text"
          id="username"
          name="username"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Password Input -->
      <div class="mb-4">
        <label for="password" class="block text-gray-600 font-bold">Clave</label>
        <input
          v-on:input="evaluateIfEmpty()"
          v-model="data.password"
          type="password"
          id="password"
          name="password"
          class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
          autocomplete="off"
        />
      </div>
      <!-- Remember Me Checkbox -->
      <div class="mb-4 flex items-center">
        <input
          v-model="data.rememberMe"
          type="checkbox"
          id="remember"
          name="remember"
          class="text-blue-500"
        />
        <label for="remember" class="text-gray-600 ml-2">Remember Me</label>
      </div>
      <!-- Forgot Password Link -->
      <div class="mb-6 text-blue-500">
        <a href="#" class="hover:underline">Forgot Password?</a>
      </div>
      <!-- Login Button -->
      <button
        v-bind:disabled="habilityButton"
        v-bind:class="colorButton()"
        type="submit"
        class="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
      >
        Login
      </button>
    </form>
    <!-- Sign up  Link -->
    <div class="mt-6 text-blue-500 text-center">
      <routerLink :to="{ name: 'sign' }" class="hover:underline">Registrarse</routerLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { loginUser } from '../actions/loginActions';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();
const user = ref('');
const pass = ref('');

const data = reactive({
  user: user,
  password: pass,
  rememberMe: false,
});

const habilityButton = ref<boolean>(true);

//cambia el color del boton de acuerdo al valor boolean
const colorButton = () => {
  return habilityButton.value === true
    ? 'bg-gray-300 text-white hover:bg-gray-500 font-semibold rounded-md py-2 px-4 w-full'
    : 'bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full';
};

//evalua que ninguno de los inputs esten vacios
const evaluateIfEmpty = () => {
  if (data.user.trim() !== '' && data.password.trim() !== '') {
    habilityButton.value = false;
  } else {
    habilityButton.value = true;
  }
};

const formData = async () => {
  console.log(data.user);
  console.log(data.password);
  console.log(data.rememberMe);

  const form: readonly [string, string, boolean] = [data.user, data.password, data.rememberMe];

  const r = await loginUser(form[0], form[1]);

  if (r === 'Contraseña incorrecta' || r === 'Usuario no existe') {
    toast.error(r);
  } else {
    localStorage.setItem('token', r.token);

    if (form[2] === true) {
      localStorage.setItem('user', JSON.stringify({ user: form[0], pass: form[1] }));
    } else {
      localStorage.removeItem('user');
    }

    router.replace({ path: `/listTask/${r.id}` });
  }
};

const extractUser = JSON.parse(localStorage.getItem('user'));

if (extractUser !== null) {
  user.value = extractUser.user;
  pass.value = extractUser.pass;
}

habilityButton.value = user.value.trim() === '' && pass.value.trim() === '' ? true : false;
</script>
