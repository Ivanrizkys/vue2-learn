<template>
  <div>
    <section class="app-bar">
      <div class="app-bar-desc">
        <div class="d-flex items-center">
          <router-link to="/vehicle">
            <img src="@/assets/images/tabler-icon/arrow-left.svg" alt="Arrow Left" height="32" width="32">
          </router-link>
          <img
            width="60"
            height="60"
            src="https://res.cloudinary.com/draaoe7rc/image/upload/v1715312969/Property_1_Grand_Bike_-_Hitam_zcavpk.png"
            alt="vehicle"
          />
          <div>
            <h1 class="vehicle-name">DEMO 1- ADV 160 - VT90Z</h1>
            <button class="vehicle-plat">MO 1- ADV 160 - VT90Z</button>
          </div>
        </div>
        <div class="desc-item-wrapper">
          <div>
            <p class="app-bar-desc-item">
              {{ $t('management_detail.expired_gsm') }} : <span class="bold">31-12-2022</span>
            </p>
          </div> 
          <div>
            <p class="app-bar-desc-item">
              <span class="blue">Official GSM</span>081987654321
            </p>
          </div>
          <div>
            <p class="app-bar-desc-item">
              {{ $t('management_detail.subscription') }} : <span class="bold">Yes</span>
            </p>
          </div>
        </div>
      </div>
      <div class="app-bar-tab">
        <vs-tabs color="#003575" v-model="activeTab">
          <vs-tab :label="$t('management_detail.setting_parameter')"></vs-tab>
          <vs-tab :label="$t('management_detail.vehicle_information')"></vs-tab>
          <vs-tab :label="$t('management_detail.vehicle_document')"></vs-tab>
        </vs-tabs>
      </div>
    </section>
    <section class="content">
      <swiper
        class="swiper-no-swiping"
        noSwipingClass="swiper-no-swiping"
        ref="slider"
      >
        <swiper-slide>
          <setting-parameter />
        </swiper-slide>
        <swiper-slide>
          <vehicle-information />
        </swiper-slide>
        <swiper-slide>
          <vehicle-document />
        </swiper-slide>
      </swiper>
    </section>
  </div>
</template>

<script>
import { BCol, BRow } from 'bootstrap-vue'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import SettingParameter from './SettingParameter.vue'
import VehicleInformation from './VehicleInformation.vue'
import VehicleDocument from './VehicleDocument.vue'
import { RouterLink } from 'vue-router'

export default {
  components: {
    BRow,
    BCol,
    swiper,
    swiperSlide,
    SettingParameter,
    VehicleInformation,
    VehicleDocument,
    RouterLink
  },
  data() {
    return {
      activeTab: 0
    }
  },
  computed: {
    swiper() {
      return this.$refs.slider.swiper
    }
  },
  watch: {
    activeTab: function (value) {
      this.swiper.slideTo(value, 500)
    }
  }
}
</script>

<style>
.app-bar {
  font-family: 'Poppins';
  background: #ffffff;
}
.app-bar-desc {
  color: #1a1a1a;
  padding: 28px 28px 16px 28px;
  border-bottom: 1px solid #dfdfe3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 50px;
  row-gap: 28px;
  flex-wrap: wrap
}
.desc-item-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  row-gap: 8px;
}
.vehicle-name {
  font-weight: 600;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
}
.vehicle-plat {
  font-size: 14px;
  padding: 4px 16px;
  border-radius: 4px;
  border: 1px solid #dbdade;
  background: #f7f7f9;
}
.app-bar-desc-item {
  font-size: 16px;
}
.app-bar-desc-item .bold {
  font-weight: 600;
}
.app-bar-desc-item .blue {
  color: #003575;
  font-weight: 600;
  padding: 2px 17px;
  background: #00cfe8;
  border: 1px solid #003575;
  border-radius: 4px;
  margin-right: 8px;
}
.app-bar-tab {
  padding: 28px 28px 0 28px;
  box-shadow: 0px 10px 20px 0px #a5a3ae66;
}
.content {
  padding-top: 28px;
}
.vs-tabs--content {
  padding: 5px !important;
}

@media screen and (max-width: 767.98px) {
  .vehicle-name {
    font-weight: 600;
    margin-bottom: 4px;
    white-space: unset;
    overflow: unset;
  }
}
</style>
