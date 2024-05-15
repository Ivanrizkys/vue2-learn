<template>
  <div class="setting-wraper">
    <div class="button-group">
      <button v-if="!editMode" @click="editMode = true" class="button btn-edit">
        {{ $t('management_detail.edit_parameter') }}
      </button>
      <template v-else>
        <button @click="editMode = false" class="button btn-cancel-edit">
          {{ $t('management_detail.cancel') }}
        </button>
        <button class="button btn-save-edit">{{ $t('management_detail.save_parameter') }}</button>
      </template>
    </div>
    <div class="content-wraper">
      <div class="first-row">
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  maxParking.active ? 'logo-active' : 'logo-off'
                ]"
              >
                <img src="@/assets/images/management-detail/parking.svg" alt="Parking Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.max_parking') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="maxParking.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>{{ $t('management_detail.minute') }}</p>
          </div>
        </div>
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  maxStop.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/stop.svg" alt="Stop Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.max_stop') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="maxStop.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>{{ $t('management_detail.hour') }}</p>
          </div>
        </div>
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  maxSpeed.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/spedometer.svg" alt="Speedometer Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.max_speed') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="maxSpeed.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>Km/h</p>
          </div>
        </div>
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  maxDriving.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/steering-wheel.svg" alt="Steering Wheel Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.max_driving') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="maxDriving.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>{{ $t('management_detail.hour') }}</p>
          </div>
        </div>
      </div>
      <div class="second-row">
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  minTemperature.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/temperature-grey.svg" alt="Temperature Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.min_temperature') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="minTemperature.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>Celcius</p>
          </div>
        </div>
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  maxTemperature.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/temperature-white.svg" alt="Temperature Icon" width="24" height="24">
            </div>
              <h3>{{ $t('management_detail.max_temperature') }}</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="maxTemperature.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div
            :class="[
              'parameter-card-input-wraper',
              editMode ? 'input-active' : 'input-off'
            ]"
          >
            <input type="text" :disabled="!editMode" />
            <p>Celcius</p>
          </div>
        </div>
      </div>
      <div class="working-hours">
        <div
          :class="[
            'parameter-card',
            editMode ? 'parameter-card-active' : 'parameter-card-off'
          ]"
        >
          <div class="parameter-card-header">
            <div>
              <div
                :class="[
                  'parameter-card-logo-wraper',
                  workingHour.active ? 'logo-active' : 'logo-off'
                ]"
              >
              <img src="@/assets/images/management-detail/calendar-one.svg" alt="Calendar Icon" width="24" height="24">
            </div>
              <h3>Working Hours</h3>
            </div>
            <div>
              <vs-switch color="#28C76F" v-model="workingHour.active" :disabled="!editMode">
                <span slot="on">On</span>
                <span slot="off">Off</span>
              </vs-switch>
            </div>
          </div>
          <div class="parameter-card-divider"></div>
          <div class="working-hours">
            <div class="working-hour-item">
              <div class="working-hour-action" v-if="editMode">
                <button @click="deleteWorkingHour.modal=true">
                  <img src="@/assets/images/management-detail/trash.svg" alt="Trash Icon" width="32" height="32">
                </button>
                <button @click="editWorkingHour.modal=true">
                  <img src="@/assets/images/management-detail/edit.svg" alt="Edit Icon" width="32" height="32">
                </button>
              </div>
              <div class="working-hour-content">
                <div class="working-hour-day-wraper">
                  <div class="working-hour-day">
                    Senin
                  </div>
                  <div class="working-hour-day">
                    Senin
                  </div>
                </div>
                <p>06:00 - 09:00</p>
              </div>
            </div>
            <button v-if="editMode" class="add-working-hour" @click="addWorkingHour.modal=true"><span>+</span>Add Working Hours</button>
          </div>
        </div>
      </div>
    </div>

    <!-- popup element -->
    <!-- add working hours -->
    <vs-popup :title="$t('management_detail.add_working_hours')" :active.sync="addWorkingHour.modal" class="modal-header-blue">
      <div class="select-working-wrapper">
        <div class="select-working-item">
          <h4>{{ $t('management_detail.select_day') }}</h4>
          <div class="select-working-input-wrapper">
            <input type="checkbox" id="edit-senin" value="Senin" v-model="addWorkingHour.data.day">
            <label for="edit-senin">Senin</label>
            <input type="checkbox" id="edit-selasa" value="Selasa" v-model="addWorkingHour.data.day">
            <label for="edit-selasa">Selasa</label>
            <input type="checkbox" id="edit-rabu" value="Rabu" v-model="addWorkingHour.data.day">
            <label for="edit-rabu">Rabu</label>
            <input type="checkbox" id="edit-kamis" value="Kamis" v-model="addWorkingHour.data.day">
            <label for="edit-kamis">Kamis</label>
            <br />
            <input type="checkbox" id="edit-jumat" value="Jumat" v-model="addWorkingHour.data.day">
            <label for="edit-jumat">Jumat</label>
            <input type="checkbox" id="edit-sabtu" value="Sabtu" v-model="addWorkingHour.data.day">
            <label for="edit-sabtu">Sabtu</label>
            <input type="checkbox" id="edit-minggu" value="Minggu" v-model="addWorkingHour.data.day">
            <label for="edit-minggu">Minggu</label>
          </div>
        </div>
        <div class="select-working-item">
          <h4>{{ $t('management_detail.select_hour') }}</h4>
          <div class="select-working-input-wrapper">
            <div class="input-icon-wrapper">
              <img width="16" height="17" src="@/assets/images/management-detail/calendar-one-black.svg" alt="Calendar icon">
              <vs-input class="input-pick-hour" @click="handleSelectHourAdd()" color="#003575" :placeholder="$t('management_detail.input_your_value')" />
            </div>
          </div>
        </div>
        <button class="btn-add" disabled>{{ $t('management_detail.add_working_hour') }}</button>
      </div>
    </vs-popup>
    <!-- hour picker pop up -> for add working hour  -->
    <vs-popup :title="$t('management_detail.select_hour')" :active.sync="hourPickerAdd.modal" class="modal-header-blue">
        <div class="hour-picker-wrapper">
          <h4>{{ $t('management_detail.select_start') }}</h4>
          <div class="hour-picker-content">
            <flat-pickr v-model="hourPickerAdd.data.startHour" :placeholder="$t('management_detail.select_hour')" name="starthour" :config="hourPickerConfig"></flat-pickr>
            <p>{{ $t('management_detail.to') }}</p>
            <flat-pickr v-model="hourPickerAdd.data.endHour" :placeholder="$t('management_detail.select_hour')" name="starthour" :config="hourPickerConfig"></flat-pickr>
          </div>
          <button @click="handleSaveHourAdd()" class="hour-picker-button">
            {{ $t('management_detail.save_hour') }}
          </button>
        </div>
    </vs-popup>
    <vs-popup :title="$t('management_detail.edit_working_hours')" :active.sync="editWorkingHour.modal" class="modal-header-blue">
      <div class="select-working-wrapper">
        <div class="select-working-item">
          <h4>{{ $t('management_detail.select_day') }}</h4>
          <div class="select-working-input-wrapper">
            <input type="checkbox" id="add-senin" value="Senin" v-model="editWorkingHour.data.day">
            <label for="add-senin">Senin</label>
            <input type="checkbox" id="add-selasa" value="Selasa" v-model="editWorkingHour.data.day">
            <label for="add-selasa">Selasa</label>
            <input type="checkbox" id="add-rabu" value="Rabu" v-model="editWorkingHour.data.day">
            <label for="add-rabu">Rabu</label>
            <input type="checkbox" id="add-kamis" value="Kamis" v-model="editWorkingHour.data.day">
            <label for="add-kamis">Kamis</label>
            <br />
            <input type="checkbox" id="add-jumat" value="Jumat" v-model="editWorkingHour.data.day">
            <label for="add-jumat">Jumat</label>
            <input type="checkbox" id="add-sabtu" value="Sabtu" v-model="editWorkingHour.data.day">
            <label for="add-sabtu">Sabtu</label>
            <input type="checkbox" id="add-minggu" value="Minggu" v-model="editWorkingHour.data.day">
            <label for="add-minggu">Minggu</label>
          </div>
        </div>
        <div class="select-working-item">
          <h4>{{ $t('management_detail.select_hour') }}</h4>
          <div class="select-working-input-wrapper">
            <div class="input-icon-wrapper">
              <img width="16" height="17" src="@/assets/images/management-detail/calendar-one-black.svg" alt="Calendar icon">
              <vs-input class="input-pick-hour" @click="handleSelectHourEdit()" color="#003575" :placeholder="$t('management_detail.input_your_value')" />
            </div>
          </div>
        </div>
        <div class="edit-action">
          <button @click="editWorkingHour.modal=false" class="edit-action-cancel">{{ $t('management_detail.cancel') }}</button>
          <button disabled class="edit-action-save">{{ $t('management_detail.save') }}</button>
        </div>
      </div>
    </vs-popup>
    <!-- hour picker pop up -> for edit working hour  -->
    <vs-popup :title="$t('management_detail.select_hour')" :active.sync="hourPickerEdit.modal" class="modal-header-blue">
        <div class="hour-picker-wrapper">
          <h4>{{ $t('management_detail.select_start') }}</h4>
          <div class="hour-picker-content">
            <flat-pickr v-model="hourPickerEdit.data.startHour" :placeholder="$t('management_detail.select_hour')" name="starthour" :config="hourPickerConfig"></flat-pickr>
            <p>{{ $t('management_detail.to') }}</p>
            <flat-pickr v-model="hourPickerEdit.data.endHour" :placeholder="$t('management_detail.select_hour')" name="starthour" :config="hourPickerConfig"></flat-pickr>
          </div>
          <button @click="handleSaveHourEdit()" class="hour-picker-button">
            {{ $t('management_detail.save_hour') }}
          </button>
        </div>
    </vs-popup>
    <vs-popup :active.sync="deleteWorkingHour.modal" class="delete-modal">
      <div class="delete-working-wrapper">
        <img src="https://res.cloudinary.com/draaoe7rc/image/upload/v1715581349/Schedule-amico_1_xw6cqj.png" alt="Delete" width="320" height="320">
        <h4>{{ $t('management_detail.are_you_sure_to_delete_this_schedule') }}</h4>
        <div class="delete-working-button-wraper">
          <button @click="deleteWorkingHour.modal=false">{{ $t('management_detail.cancel') }}</button>
          <button>{{ $t('management_detail.delete') }}</button>
        </div>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
// import test from "../../../assets/images/management-detail"

export default {
  name: 'setting-parameter',
  components: {
    flatPickr
  },
  data() {
    return {
      editMode: false,

      // * popup state
      addWorkingHour: {
        modal: false,
        data: {
          day: [],
          hour: ""
        }
      },
      hourPickerAdd: {
        modal: false,
        data: {
          startHour: "",
          endHour: ""
        }
      },
      editWorkingHour: {
        modal: false,
        data: {
          day: [],
          hour: ""
        }
      },
      hourPickerEdit: {
        modal: false,
        data: {
          startHour: "",
          endHour: ""
        }
      },
      deleteWorkingHour: {
        modal: false,
        id: ""
      },

      // * parameter state
      maxParking: {
        active: false,
        value: 0
      },
      maxStop: {
        active: false,
        value: 0
      },
      maxStop: {
        active: false,
        value: 0
      },
      maxSpeed: {
        active: false,
        value: 0
      },
      maxDriving: {
        active: false,
        value: 0
      },
      minTemperature: {
        active: false,
        value: 0
      },
      maxTemperature: {
        active: false,
        value: 0
      },
      workingHour: {
        active: false,
        value: [{
          day: ["Senin", "Selasa", "Rabu"],
          hour: "05:00 - 17:00"
        }]
      },

      
      // * hour picker flatpickr config
      hourPickerConfig: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true
      },
    }
  },
  watch: {
    addWorkingHour: {
      handler(val) {
        console.log("valuenya adalah", val)
      },
      deep: true
    },
    'hourPickerAdd.modal': function (val) {
      if (!val) {
        this.addWorkingHour.modal = true
      }
    },
    'hourPickerEdit.modal': function (val) {
      if (!val) {
        this.editWorkingHour.modal = true
      }
    },
  },
  methods: {
    handleSelectHourAdd() {
      this.addWorkingHour.modal = false
      this.hourPickerAdd.modal = true
    },
    handleSaveHourAdd() {
      this.hourPickerAdd.modal = false
      this.addWorkingHour.modal = true
    },
    handleSelectHourEdit() {
      this.editWorkingHour.modal = false
      this.hourPickerEdit.modal = true
    },
    handleSaveHourEdit() {
      this.hourPickerEdit.modal = false
      this.editWorkingHour.modal = true
    }
  }
}
</script>

<style>
/* style modifier for popup element */
.modal-header-blue .vs-popup--header {
  background: #003575 !important;
}
.modal-header-blue .vs-popup--header div h3 {
  color: #FFFFFF;
  text-align: center;
}
.delete-modal .vs-popup--header {
  background: #FFFFFF !important;
}
.delete-modal .vs-popup--header div h3 {
  color: #FFFFFF;
  text-align: center;
}
.vs-popup--content .input-icon-wrapper .vs-input--input.normal {
  padding-left: 36px !important;
  width: 100%;
}
.vs-popup--content .input-icon-wrapper .vs-input--placeholder.normal {
  padding-left: 36px !important;
}
</style>

<style scoped>
.setting-wraper {
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
  background: #003575;
}
.content-wraper {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 28px;
  font-family: Poppins;
  font-weight: 600;
  margin-top: 28px;
}
.content-wraper .first-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 4fr));
  gap: 28px;
}
.content-wraper .second-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 2fr));
  gap: 28px;
}
.parameter-card {
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #f7f7f9;
  box-shadow: 0px 10px 20px 0px #a5a3ae66;
}
.parameter-card-active {
  background: #f7f7f9;
}
.parameter-card-off {
  background: #ffffff;
}
.parameter-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.parameter-card-logo-wraper {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-active {
  background: linear-gradient(45deg, #ea5455 0%, #f08182 100%);
}
.logo-off {
  background: linear-gradient(45deg, #82868b 0%, #9ca0a4 100%);
}
.parameter-card-header h3 {
  color: #1a1a1a;
  font-size: 16px;
  margin-top: 4px;
  margin-bottom: 0;
}
.parameter-card-divider {
  width: 100%;
  height: 1px;
  background: #dfdfe3;
  margin: 16px 0;
}
.parameter-card-input-wraper {
  widows: 100%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  overflow: hidden;
}
.input-off {
  background: #f8f8f8;
  border: 1px solid #dfdfe3;
}
.input-active {
  background: #ffffff;
  border: 1px solid #003575;
}
.parameter-card-input-wraper input {
  padding: 16px 8px 16px 16px;
  color: #1a1a1a;
  font-size: 12px;
  width: 100%;
  border: none;
  text-align: center;
}
.parameter-card-input-wraper p {
  font-size: 12px;
  color: #1a1a1a;
  font-weight: 600;
  padding-right: 16px;
  margin-bottom: 0;
}
.working-hours {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
}
.working-hour-item {
  display: flex;
  gap: 32px;
}
.working-hour-action {
  display: flex;
  gap: 16px;
  align-items: center;
}
.working-hour-action button {
  background: none;
  outline: none;
  border: none;
}
.box {
  width: 32px;
  height: 32px;
  background: #BABABA;
  border-radius: 8px;
}
.working-hour-content {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid #DFDFE3;
  width: 100%;
}
.working-hour-day-wraper {
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  font-family: Poppins;
  font-weight: 600;
}
.working-hour-day {
  padding: 5px 24px;
  border-radius: 4px;
  background: linear-gradient(45deg, #28C76F 0%, #48DA89 100%);
  color: #FFFFFF;
  font-size: 12px;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
}
.working-hour-content p {
  font-size: 24px;
  color: #1A1A1A;
  margin-top: 16px;
  margin-bottom: 0;
  text-align: center;
}
.add-working-hour {
  padding: 8px;
  background: none;
  border: none;
  font-size: 16px;
  font-family: Poppins;
  display: inline-block;
}
.add-working-hour span {
  margin-right: 8px;
}

/* style for add working hour popup */
.vs-popup--content .select-working-wrapper {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;
}
.vs-popup--content .select-working-item h4 {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color:#1A1A1A;
  margin-top: 0;
  margin-bottom: 8px;
}
.vs-popup--content .select-working-input-wrapper {
  padding: 16px;
  background: #F7F7F9;
}
.vs-popup--content .select-working-input-wrapper input[type=checkbox] {
  display: none;
}
.vs-popup--content .select-working-input-wrapper label {
  margin-right: 16px;
  padding: 4px 24px;
  background: #FFFFFF;
  border: 1px solid #DBDADE;
  border-radius: 4px;
  color: #7A7A7A;
  font-size: 12px;
  font-family: Poppins;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  cursor: pointer;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
}
.vs-popup--content .select-working-input-wrapper label::before {
  content: url("../../../assets/images/management-detail/browser-x.svg");
  width: 20px;
  height: 20px;
}
.vs-popup--content .select-working-input-wrapper input[type=checkbox]:checked+label {
  background: linear-gradient(45deg, #28C76F 0%, #48DA89 100%);
  color: #FFFFFF;
}
.vs-popup--content .select-working-input-wrapper input[type=checkbox]:checked+label::before {
  content: url("../../../assets/images/management-detail/browser-check.svg");
}
.vs-popup--content .input-pick-hour {
  width: 100% !important;
}
.vs-popup--content .input-icon-wrapper {
  position: relative;
}
.vs-popup--content .input-icon-wrapper img {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}
.vs-popup--content .select-working-wrapper .btn-add {
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background: #003575;
}
.vs-popup--content .select-working-wrapper .btn-add:disabled {
  background: #BABABA;
  color: #FFFFFF;
}
.vs-popup--content .select-working-wrapper .edit-action {
  display: flex;
  gap: 16px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
}
.vs-popup--content .select-working-wrapper .edit-action .edit-action-cancel {
  width: 30%;
  color: #DB4437;
  background: #FFFFFF;
  border: 1px solid #DB4437;
  padding: 16px;
  border-radius: 8px;
}
.vs-popup--content .select-working-wrapper .edit-action .edit-action-save {
  width: 70%;
  background: linear-gradient(0deg, #28C76F, #28C76F), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));
  color: #FFFFFF;
  border: none;
  padding: 16px;
  border-radius: 8px;
}
.vs-popup--content .select-working-wrapper .edit-action .edit-action-save:disabled {
  background: #BABABA;
  color: #FFFFFF;
}

/* hour picker popup */
.vs-popup--content .hour-picker-wrapper h4 {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color:#1A1A1A;
  margin-top: 0;
  margin-bottom: 8px;
}
.vs-popup--content .hour-picker-wrapper .hour-picker-content {
  background: #F7F7F9;
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.vs-popup--content .hour-picker-wrapper .hour-picker-content p {
  margin: 0;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color: #1A1A1A;
}
.vs-popup--content .hour-picker-wrapper .hour-picker-content input {
  width: 100%;
  text-align: center
}
.vs-popup--content .hour-picker-wrapper .hour-picker-button {
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  background: #003575;
  margin-top: 32px;
}
.vs-popup--content .delete-working-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
.vs-popup--content .delete-working-wrapper h4 {
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin: 0;
}
.vs-popup--content .delete-working-wrapper .delete-working-button-wraper {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
} 
.vs-popup--content .delete-working-button-wraper button {
  width: 100%;
  padding: 16px;
  border-radius: 8px;
}
.vs-popup--content .delete-working-button-wraper button:nth-child(1) {
  color: #003575;
  background: #FFFFFF;
  border: 1px solid #003575;
}
.vs-popup--content .delete-working-button-wraper button:nth-child(2) {
  color: #FFFFFF;
  background: #DB4437;
}

@media screen and (max-width: 1199.98px) {
  .content-wraper .first-row {
    grid-template-columns: repeat(2, minmax(0, 4fr));
  }
}

@media screen and (max-width: 767.98px) {
  .content-wraper .first-row {
    grid-template-columns: repeat(1, minmax(0, 4fr));
  }
  .content-wraper .second-row {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 2fr));
    gap: 28px;
  }
}
</style>
