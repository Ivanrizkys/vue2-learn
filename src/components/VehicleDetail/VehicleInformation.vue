<template>
  <div class="vehicle-information-wraper">
    <div class="button-group">
      <button v-if="!editMode" @click="editMode = true" class="button btn-edit">
        {{ $t('management_detail.edit_vehicle_information') }}
      </button>
      <template v-else>
        <button @click="editMode = false" class="button btn-cancel-edit">
          {{ $t('management_detail.cancel') }}
        </button>
        <button class="button btn-save-edit">{{ $t('management_detail.save_vehicle_information') }}</button>
      </template>
    </div>
    <div class="form-group">
      <vs-input :disabled="!editMode" :label="$t('management_detail.license_plate')" color="#003575" />
      <vs-input :disabled="!editMode" :label="$t('management_detail.device_name')" color="#003575" />
      <vs-input :disabled="!editMode" :label="$t('management_detail.imei')" color="#003575" />
      <vs-input :disabled="!editMode" :label="$t('management_detail.gsm_number')" color="#003575" />
      <div class="input-double">
        <vs-select :disabled="!editMode" :label="$t('management_detail.vehicle_type')" color="#003575" width="100%">
          <vs-select-item value="mortorcycle" text="Motorcycle" />
          <vs-select-item value="mortorcycle2" text="Motorcycle 1" />
          <vs-select-item value="mortorcycle3" text="Motorcycle 2" />
        </vs-select>
        <vs-select :disabled="!editMode" :label="$t('management_detail.vehicle_icon')" color="#003575" width="100%">
          <vs-select-item value="mortorcycle" text="Motorcycle" />
          <vs-select-item value="mortorcycle2" text="Motorcycle 1" />
          <vs-select-item value="mortorcycle3" text="Motorcycle 2" />
        </vs-select>
      </div>
      <div class="input-double">
        <vs-select :disabled="!editMode" :label="$t('management_detail.vehicle_brand')" color="#003575" width="100%">
          <vs-select-item value="mortorcycle" text="Motorcycle" />
          <vs-select-item value="mortorcycle2" text="Motorcycle 1" />
          <vs-select-item value="mortorcycle3" text="Motorcycle 2" />
        </vs-select>
        <vs-select :disabled="!editMode" :label="$t('management_detail.vehicle_list')" color="#003575" width="100%">
          <vs-select-item value="mortorcycle" text="Motorcycle" />
          <vs-select-item value="mortorcycle2" text="Motorcycle 1" />
          <vs-select-item value="mortorcycle3" text="Motorcycle 2" />
        </vs-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vehicle-information',
  data() {
    return {
      editMode: false
    }
  }
}
</script>

<style>
.vehicle-information-wraper .form-group .vs-input--label {
  font-weight: 600 !important;
  color: #4A4A4A !important;
  font-size: 16px !important;
}
.vehicle-information-wraper .form-group .vs-select--label {
  font-weight: 600 !important;
  color: #4A4A4A !important;
  font-size: 16px !important;
}
</style>

<style scoped>
.vehicle-information-wraper {
  padding: 28px;
  background: #ffffff;
  border-radius: 8px;
  font-family: Poppins;
}
.button-group {
  display: flex;
  gap: 8px;
}
.button {
  padding: 8px 16px;
  border-radius: 4px;
  display: flex;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  font-family: Poppins;
}
.btn-edit {
  background: #ffffff;
  border: 1px solid #003575;
  color: #003575;
}
.btn-cancel-edit {
  color: #db4437;
  border: 1px solid #ea5455;
  background: #ffffff;
}
.btn-save-edit {
  color: #ffffff;
  background: #28c76f;
  border: none;
}
.form-group {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 32px;
  margin-top: 32px;
}
label {
  font-weight: 600;
  color: #4A4A4A;
  font-size: 16px;
}
.vs-con-input-label {
  width: 100%
}
input {
  color: #1A1A1A !important;
}
.input-double {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>
