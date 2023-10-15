<template>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-body">
                        <br>
                        <h2 class="card-title text-center mb-4">Your Information</h2>
                        <form @submit.prevent="submitForm" @keydown.enter.prevent="">
                            <h6>CONTACT</h6>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="Name_Last" v-model="Name_Last" class="underlined-input"
                                        placeholder="ชื่อ-นามสกุล" />
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="Phone" v-model="Phone" class="underlined-input"
                                        placeholder="เบอร์โทร" />
                                </div>
                            </div>
                            <h6>ADDRESS</h6>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="จังหวัด" v-model="จังหวัด" class="underlined-input"
                                        placeholder="จังหวัด" />
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="อำเภอ" v-model="อำเภอ" class="underlined-input" placeholder="อำเภอ" />
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="postal_code" v-model="postal_code" class="underlined-input"
                                        placeholder="รหัสไปรษณีย์" />
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="email" v-model="email" class="underlined-input"
                                        placeholder="E-mail" />
                                </div>
                            </div>
                            <div class="input-group">
                                <div class="underlined-input-container">
                                    <input id="more_detail" v-model="more_detail" class="underlined-input"
                                        placeholder="เพิ่มเติม" />
                                </div>
                            </div>
                            <br>
                            <button type="submit" class="btn btn-primary w-100" :v-model="isSubmitDisabled">ยืนยันข้อมูล</button>
                        <br><br><br>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<br>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const Name_Last = ref('')
const Phone = ref('')
const จังหวัด = ref('')
const อำเภอ = ref('')
const postal_code = ref('')
const email = ref('')
const more_detail = ref('')

// สร้าง ref สำหรับตรวจสอบความถูกต้องของข้อมูล
const isSubmitDisabled = ref(true)

const router = useRouter()

const submitForm = () => {
  // ส่งข้อมูล input ไปยังหน้า OrderHistory โดยใช้ query parameters
  router.push({
    name: 'OrderHistory',
    query: {
      Name_Last: Name_Last.value,
      Phone: Phone.value,
      จังหวัด: จังหวัด.value,
      อำเภอ: อำเภอ.value,
      postal_code: postal_code.value,
      email: email.value,
      more_detail: more_detail.value,
    },
  })
}

// สร้างฟังก์ชันเพื่อตรวจสอบความถูกต้องของข้อมูล
const validateForm = () => {
  isSubmitDisabled.value = !(
    Name_Last.value &&
    Phone.value &&
    จังหวัด.value &&
    อำเภอ.value &&
    postal_code.value &&
    email.value
  )
}

// เรียก validateForm เมื่อมีการเปลี่ยนแปลงในข้อมูล
validateForm()


</script>

<style scoped>
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
    padding: 10px 10px 10px 20px;
    background-color: transparent;
    outline: none;
}

.underlined-input:focus {
    border-bottom: 2px solid #007bff;
}

.card {
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-title {
    font-size: 24px;
}

.form-label {
    font-weight: bold;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}
</style>