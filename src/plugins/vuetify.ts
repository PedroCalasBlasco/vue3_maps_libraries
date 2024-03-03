import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const light = {
  dark: false,
  colors: {
    primary: '#a21e25',
    secondary: '#577CA0',
    error: '#ff5252',
    background: '#f1f4f8',
    surface_variant: '#FFFFFF',
    dark: '#212121',
    border: '#e7e7e7'
  }
}

const dark = {
  dark: true,
  colors: {
    primary: '#a21e25',
    secondary: '#577CA0',
    error: '#ff5252',
    background: '#000000',
    surface_variant: '#212121',
    dark: '#212121',
    border: '#393939'
  }
}

const inputStyles = {
  variant: 'outlined',
  hideDetails: true
}

const booleanInputStyles = {
  hideDetails: true,
  color: 'primary'
}

export default createVuetify({
  theme: {
    themes: {
      light,
      dark
    }
  },
  defaults: {
    VTextField: inputStyles,
    VSelect: inputStyles,
    VTextArea: inputStyles,
    VSwitch: booleanInputStyles,
    VCheckbox: booleanInputStyles
  }
})
