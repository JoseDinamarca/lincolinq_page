<template>
    <div class="login-box">
        <!-- /.login-logo -->
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <router-link to="/" class="h1"></router-link>
            </div>
            <div class="card-body">
                <p class="login-box-msg">Ingrese sus datos</p>

                <form @submit.prevent="loginByAuth">
                    <app-input
                        icon="envelope"
                        class="mb-3"
                        type="email"
                        placeholder="Email"
                        autocomplete="off"
                        v-model="email"
                    />
                    <app-input
                        icon="lock"
                        class="mb-3"
                        type="password"
                        placeholder="Password"
                        autocomplete="off"
                        v-model="password"
                    />

                    <div class="row">
                        <div class="col-7">
                            <pf-checkbox type="icheck" v-model="rememberMe">
                                Recuerdame
                            </pf-checkbox>
                        </div>
                        <!-- /.col -->
                        <div class="col-5">
                            <pf-button
                                type="submit"
                                block="true"
                                :loading="isAuthLoading"
                            >
                            Ingresar
                            </pf-button>
                        </div>
                        <!-- /.col -->
                    </div>
                </form>
                
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    </div>
</template>

<script>

export default class Login {
    email = '';
    password = '';
    rememberMe = false;
    isAuthLoading = false;
    toast = useToast();
}

</script>