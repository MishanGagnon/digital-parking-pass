/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    API_KEY : "AIzaSyCc-5PRo7pt1N9Az7WxflE0tU1rtB_oCLU",
    AUTH_DOMAIN : "shc-parking-pass.firebaseapp.com",
    PROJECT_ID : "shc-parking-pass",
    STORAGE_BUCKET : "shc-parking-pass.appspot.com",
    MESSAGE_SENDER_ID : "325856591129",
    APP_ID : "1:325856591129:web:4c692e76c87fddda855988",
    MEASUREMENT_ID : "G-XPBPVWFPVM"
  }
  
}

module.exports = nextConfig
