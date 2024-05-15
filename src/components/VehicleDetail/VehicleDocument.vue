<template>
  <div class="vehicle-document-wraper">
    <div class="button-group">
      <button v-if="!editMode" @click="editMode = true" class="button btn-edit">
        {{ $t('management_detail.edit_vehicle_document') }}
      </button>
      <template v-else>
        <button @click="editMode = false" class="button btn-cancel-edit">
          {{ $t('management_detail.cancel') }}
        </button>
        <button class="button btn-save-edit">{{ $t('management_detail.save_vehicle_document') }}</button>
      </template>
    </div>
    <div class="form-group">
      <vs-input :disabled="!editMode" :label="$t('management_detail.branch')" color="#003575" />
      <vs-input :disabled="!editMode" :label="$t('management_detail.owner')" color="#003575" />
      <vs-input :disabled="!editMode" :label="$t('management_detail.imei')" color="#003575" />
      <div class="input-date">
        <label>{{ $t('management_detail.production_year') }}</label>
        <div class="input-icon-wrapper">
          <img width="16" height="17" src="@/assets/images/management-detail/calendar-one-black.svg" alt="Calendar icon">
          <flat-pickr :disabled="!editMode" name="starthour"></flat-pickr>
        </div>
        <!-- <datetime type="datetime" v-model="time" class="theme-blue" format="dd:MM:yyyy"></datetime> -->
      </div>
      <div class="input-double">
        <div>
          <label>{{$t('management_detail.expired_kir')}}</label>
          <div class="input-icon-wrapper">
            <img width="16" height="17" src="@/assets/images/management-detail/calendar-one-black.svg" alt="Calendar icon">
            <flat-pickr :disabled="!editMode" name="starthour"></flat-pickr>
          </div>
        </div>
        <div>
          <label>{{$t('management_detail.expired_stnk')}}</label>
          <div class="input-icon-wrapper">
            <img width="16" height="17" src="@/assets/images/management-detail/calendar-one-black.svg" alt="Calendar icon">
            <flat-pickr :disabled="!editMode" name="starthour"></flat-pickr>
          </div>
        </div>
      </div>
      <div class="input-double">
        <vs-input :disabled="!editMode" :label="$t('management_detail.engine_number')" color="#003575" />
        <vs-input :disabled="!editMode" :label="$t('management_detail.chasis_number')" color="#003575" />
      </div>
    </div>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

import { Datetime } from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'vehicle-document',
  components: {
    flatPickr,
    Datetime
  },
  data() {
    return {
      editMode: false,
    }
  }
}
</script>

<style>
.vehicle-document-wraper .form-group .vs-input--label {
  font-weight: 600 !important;
  color: #4A4A4A !important;
  font-size: 16px !important;
}
.vehicle-document-wraper .form-group .vs-select--label {
  font-weight: 600 !important;
  color: #4A4A4A !important;
  font-size: 16px !important;
}
.vehicle-document-wraper .input-date .vdatetime-overlay {
  background: none !important;
}
.theme-blue .vdatetime-popup__header,
.theme-blue .vdatetime-calendar__month__day--selected > span > span,
.theme-blue .vdatetime-calendar__month__day--selected:hover > span > span {
  background: #003575 !important;
}
.theme-blue .vdatetime-year-picker__item--selected,
.theme-blue .vdatetime-time-picker__item--selected,
.theme-blue .vdatetime-popup__actions__button {
  color: #003575 !important;
}
</style>

<style scoped>
.vehicle-document-wraper {
  padding: 28px;
  background: #ffffff;
  border-radius: 8px;
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
.form-group label {
  font-weight: 600;
  color: #4A4A4A;
  font-size: 16px;
}
.vs-con-input-label {
  width: 100%;
}
input {
  color: #1a1a1a !important;
}
.input-date {
  display: flex;
  flex-direction: column;
}
.input-icon-wrapper {
  position: relative;
}
.input-icon-wrapper img {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.input-icon-wrapper input {
  padding-left: 36px;
  width: 100%;
}
.input-icon-wrapper .flatpickr-input.active {
  border: 1px solid #003575;
}
.input-double {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>
