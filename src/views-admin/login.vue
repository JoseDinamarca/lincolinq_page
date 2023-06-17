<template>
    <div class="login-box">
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                imagen_linco.jpg
            </div>
        </div>

        <div class="card-body">
            <p class="login-box-msg">Ingrese sus datos para iniciar sesion</p>

            <form @submit.prevent="loginByAuth">
                <app-input
                    icon="envelope"
                    class="mb-3"
                    type="email"
                    placeholder="Email"
                    autocomplete="off"
                    v-model="email"
                
                />
            </form>
        </div>   
    </div>
</template>

<script>

</script>