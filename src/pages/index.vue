<script setup lang="ts">
import { closeToast, showLoadingToast } from 'vant';


const { t } = useI18n()

const baseURL = "https://hqk10.xyz:3000/api/v1/qrcode"

const id = useRoute().query?.id


scanCode()

const router = useRouter()

const handleConfirm = async () => {
  await useFetch(`${baseURL}/confirm/${id}`, {
    beforeFetch: () => {
      showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
    }
  })
  closeToast()
  router.replace("/result?login=true")
}

const handleCancel = async () => {
  await useFetch(`${baseURL}/cancel/${id}`, {
    beforeFetch: () => {
      showLoadingToast({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      });
    },
  })

  closeToast()
  router.replace("/result?login=false")

}

async function scanCode() {
  if (!id) return
  useFetch(`${baseURL}/scan/${id}`)
}

</script>

<template>
  <div pt-4>
    <div class="text-[#999] text-40 dark:text-white">
      <div i-carbon:screen inline-block mt-10 />
    </div>
    <div class="text-#666 text-xl pt-1 dark:text-white">{{ t('intro.desc') }}</div>
    <div class="absolute left-4 right-4 bottom-30">
      <van-button size="large" type="primary" block @click="handleConfirm">{{ t('button.confirm') }}</van-button>
      <div mt-6>
        <van-button size="large" block @click="handleCancel">{{ t('button.cancel') }}</van-button>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
