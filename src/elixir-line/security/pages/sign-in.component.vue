<script>

export default {
  name: "sing-in",

  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },


  methods: {
    onSingIn(){

    }
  }


}

</script>

<template>

  <div class="flex flex-row justify-center flex-1" >

    <!--  ======================================= Panel 1 ======================================= -->
    <div class="contenido-panel-1 w-full h-full flex justify-center flex-1 overflow-hidden"
         style="background-color: var(--panel-color);" >

      <div class="flex flex-column items-center justify-center gap-1 flex-1 w-full h-full">


        <div class="w-full text-center pt-4">
          <h1>
            <span class="color-text-elixir"> Elixir </span>
            <span class="color-text-line"> Line </span>
          </h1>
        </div>

        <!-- Tarjeta centrada -->
        <div class="w-full h-full justify-center pl-8 pr-8">
          <pv-card class="w-full h-full justify-content-center"
                   style="background-color: #8B0000; border-radius: 2% 2% 0 0;">

            <template #content>
              <div class="font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white" >
                <p>"Hacemos que el proceso fluya como un buen vino"</p>
              </div>
            </template>

            <template #footer>
              <div class="align-center justify-content-center">
                <img src="../../../assets/login.png" alt="image"
                     class="responsive-image" />
              </div>
            </template>
          </pv-card>
        </div>
      </div>
    </div>


    <!--  ======================================= Panel 2 ======================================= -->
    <div class="contenido-panel-2 w-full h-full flex justify-center flex-1">

      <div
          class="card-login flex flex-column w-full h-full sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] bg-white p-8 justify-content-center">

        <!-- 🔙 Botón de regresar -->
        <div class="flex justify-center">
          <i class="pi pi-arrow-left text-gray-500 text-xl cursor-pointer"></i>
        </div>

        <!-- Textos -->
        <div class="mb-4 justify-center">
          <h3 class="flex flex-colum text-green-700 text-lg font-semibold">Vitivinicultor</h3>
          <h1 class="text-3xl font-bold text-red-900 text-center">Iniciar Sesión</h1>
        </div>

        <!-- 🔑 Formulario de inicio de sesión -->
        <div class="form-sign-in w-full">
          <form @submit.prevent="onSingIn" class="content-form">
            <div class="p-fluid">
              <div class="field mt-5">
                <pv-float-label class="flex flex-column">
                  <label for="username">Username</label>
                  <pv-input-text id="username" v-model="username" :class="{'p-invalid': !username }"/>
                  <!--<small v-if="!username" class="p-invalid">Username is required.</small>-->
                </pv-float-label>
              </div>
              <div class="field mt-5">
                <pv-float-label class="flex flex-column">

                  <label for="password">Password</label>
                  <pv-input-text id="password" v-model="password" :class="{'p-invalid': !password }" type="password"/>
                  <!--<small v-if="!password" class="p-invalid">Password is required.</small>-->
                </pv-float-label>
              </div>
              <div class="flex flex-column p-field mt-5" >
                <div class="justify-center">

                  <pv-button type="submit"
                             class="w-full text-black font-bold border border-red-900 w-6" >
                    Iniciar sesión</pv-button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- 🔗 Links de registro y recuperar contraseña -->
        <div class="link-register">
          <div class="mt-4 text-center text-sm text-gray-700">
            <p>¿Aún no tienes una cuenta?
              <span class="font-bold text-black cursor-pointer">Regístrate</span></p>
          </div>
          <div class="text-center text-sm font-bold text-gray-800 cursor-pointer">
            <p>Olvidé mi contraseña</p>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped>


.color-text-elixir{
  color: #8B0000
}

.color-text-line{
  color: #CFAE75
}


.responsive-image {
  max-width: 100%;
  max-height: 100%;

}




</style>