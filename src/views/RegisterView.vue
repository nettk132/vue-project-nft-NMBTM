<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title text-center mb-4">Register</h2>
                        <div class="mb-4 text-center">
                            <div class="d-flex justify-content-center">
                                <div class="registration-option" :class="{ 'selected': registrationType === 'email' }"
                                    @click="setRegistrationType('email')">
                                    E-mail
                                </div>
                                <div class="registration-option" :class="{ 'selected': registrationType === 'phone' }"
                                    @click="setRegistrationType('phone')">
                                    Phone
                                </div>
                            </div>
                        </div>
                        <div class="input-group">
                            <label for="username" class="input-label">Username</label>
                            <div class="underlined-input-container">
                                <input id="username" v-model="username" class="underlined-input" placeholder=" " />
                            </div>
                        </div>
                        <div class="input-group" v-if="registrationType === 'email'">
                            <label for="email" class="input-label">E-mail</label>
                            <div class="underlined-input-container">
                                <input id="email" v-model="email" class="underlined-input" placeholder=" " />
                            </div>
                        </div>
                        <div class="input-group" v-else-if="registrationType === 'phone'">
                            <label for="phone" class="input-label">Phone</label>
                            <div class="underlined-input-container">
                                <input id="phone" v-model="phone" class="underlined-input" placeholder=" "
                                    @input="handlePhoneInput" />
                            </div>
                        </div>
                        <div class="input-group position-relative">
                            <label for="password" class="input-label">Password</label>
                            <div class="underlined-input-container">
                                <input id="password" v-model="password" :type="inputType" class="underlined-input"
                                    placeholder=" " />
                                <i :class="eyeIconClass"
                                    class="fa position-absolute top-50 end-0 translate-middle-y eye-icon"
                                    @click="togglePasswordVisibility" style="margin-right: 10px;"></i>
                            </div>
                        </div>
                        <div class="input-group position-relative">
                            <label for="confirmPassword" class="input-label">Confirm Password</label>
                            <div class="underlined-input-container">
                                <input id="confirmPassword" v-model="confirmPassword" :type="confirmInputType"
                                    class="underlined-input" placeholder=" " @input="checkPasswordMatch" />
                            </div>
                            <div v-if="confirmPassword" class="mt-2"
                                :class="{ 'text-danger': !passwordsMatch, 'text-success': passwordsMatch }">
                                {{ passwordsMatch ? 'Password match' : 'Passwords do not match' }}
                            </div>
                        </div>
                        <button @click="Register" class="btn btn-primary w-100 mt-4">Register</button>
                        <p class="text-center mt-3" style="margin-bottom: 40px">Sign in with </p>
                        <div class="d-flex justify-content-center mt-2">
                            <i class="fa-brands fa-facebook fa-2xl" alt="Facebook"></i>
                            <i class="fa-brands fa-x-twitter fa-2xl" alt="Twitter"></i>
                            <i class="fa-brands fa-google-plus fa-2xl" alt="Google"></i>
                        </div>
                        <br><br>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br>
</template>
  
<script>
export default {
    data() {
        return {
            username: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
            showPassword: false,
            showConfirmPassword: false,
            registrationType: "email",
            passwordsMatch: false,
        };
    },
    computed: {
        inputType() {
            return this.showPassword ? "text" : "password";
        },
        confirmInputType() {
            return this.showConfirmPassword ? "text" : "password";
        },
        eyeIconClass() {
            return this.showPassword ? "fa-eye" : "fa-eye-slash";
        },
        confirmEyeIconClass() {
            return this.showConfirmPassword ? "fa-eye" : "fa-eye-slash";
        },
    },
    methods: {
        setRegistrationType(type) {
            this.registrationType = type;
        },
        togglePasswordVisibility() {
            this.showPassword = !this.showPassword;
        },
        register() {
        },
        toggleConfirmPasswordVisibility() {
            this.showConfirmPassword = !this.showConfirmPassword;
            this.checkPasswordMatch();
        },
        handlePhoneInput() {
            this.phone = this.phone.replace(/\D/g, '');
            if (this.phone.length > 10) {
                this.phone = this.phone.slice(0, 10);
            }
        },
        checkPasswordMatch() {
            this.passwordsMatch = this.password === this.confirmPassword;
        },
        Register() {
            if (this.username && ((this.registrationType === 'email' && this.email) || (this.registrationType === 'phone' && this.phone)) && this.passwordsMatch) {
                this.$router.push("/userinfo");
            }
        },
    },
};
</script>
  
<style scoped>
.password-input {
    position: relative;
}

.eye-icon {
    cursor: pointer;
}

.password-input i {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
}

input[type="password"]::-ms-reveal,
input[type="password"]::-webkit-contacts-auto-fill-button,
input[type="password"]::-webkit-credentials-auto-fill-button {
    display: none;
}

.registration-option {
    cursor: pointer;
    border-width: 1px 0;
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: -1px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.registration-option:first-child {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right-width: 1px;
}

.registration-option:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left-width: 1px;
}

.selected {
    background-color: #007bff;
    color: #fff;
    border-color: #007bff;
}

.input-group {
    position: relative;
    margin-bottom: 20px;
}

.input-label {
    position: absolute;
    top: -20px;
    left: 0;
    font-size: 14px;
    color: #777;
}

.underlined-input-container {
    position: relative;
    width: 100%;
    margin-bottom: 10px;
}

.underlined-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    font-size: 16px;
    padding: 10px 0;
    background-color: transparent;
    outline: none;
}

.underlined-input:focus {
    border-bottom: 2px solid #007bff;
}
</style>