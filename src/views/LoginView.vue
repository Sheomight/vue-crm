<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input 
        id="email"
        type="text"
        v-model.trim="v$.email.$model"
        :class="{
          invalid: v$.email.$error
        }"
        >
        <label for="email">Email</label>
        <template v-for="error in v$.email.$errors" :key="error.$uid">
          <small 
          class="helper-text invalid"
          v-if="error.$uid === 'email-required'"
          >
            Пожалуйста введите Email
          </small>
          <small 
          class="helper-text invalid"
          v-else-if="error.$uid === 'email-email'"
          >
            Пожалуйста введите корректный Email
          </small>
        </template>
      </div>
      <div class="input-field">
        <input 
        id="password" 
        type="password" 
        v-model="v$.password.$model"
        :class="{
          invalid: v$.password.$error
        }"
        >
        <label for="password">Пароль</label>
        <template v-for="error in v$.password.$errors" :key="error.$uid">
          <small 
          class="helper-text invalid"
          v-if="error.$uid === 'password-required'"
          >
            Пожалуйста введите пароль
          </small>
          <small 
          class="helper-text invalid"
          v-else-if="error.$uid === 'password-minLength'"
          >
            Пароль должен содержать не менее {{ v$.password.minLength.$params.min }} символов
          </small>
        </template>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button 
        class="btn waves-effect waves-light auth-submit" 
        type="submit"
        >
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { email, required, minLength } from '@vuelidate/validators'
import messages from '@/common/messages'

export default {
  name: 'login-view',
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  validations() {
    return {
      email: { email, required },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async onSubmit() {
      
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/')
        // eslint-disable-next-line
      } catch (e) {}
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  }
}
</script>