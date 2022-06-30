import EleUploadImage from './VueElementUploadImage'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(EleUploadImage.name, EleUploadImage)
}

export default EleUploadImage
