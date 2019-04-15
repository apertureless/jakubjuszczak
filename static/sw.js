importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08aee5ce2b68283d1c4b.js",
    "revision": "903abf2fcc746e95facde50c4f1209df"
  },
  {
    "url": "/_nuxt/0f70f19a348227b7be75.js",
    "revision": "723f8bcc6ef4be550db1a05eac0ef62a"
  },
  {
    "url": "/_nuxt/1ebd0f3cdb4d8bafc54d.js",
    "revision": "e304a65dc785f452f72d23113464a033"
  },
  {
    "url": "/_nuxt/3166bf3db548e3a813c4.js",
    "revision": "9ed18df2cc089b457ec10263c5f81881"
  },
  {
    "url": "/_nuxt/3b5b7818ac0cb8f0b6a6.js",
    "revision": "8446981a26ade976e025e8306a2f220e"
  },
  {
    "url": "/_nuxt/3e760738558616e5fa22.js",
    "revision": "882bcde49f7db35a58789520bc04cbfb"
  },
  {
    "url": "/_nuxt/3eabfb99ed0e11ecfed1.js",
    "revision": "f2fa64e8128c3fe6426ee4436c544f9f"
  },
  {
    "url": "/_nuxt/4797d1e584a57dcef30e.js",
    "revision": "e2a0cd66ea32cfae7d84ea857158ca65"
  },
  {
    "url": "/_nuxt/50699796fbb159434633.js",
    "revision": "08dd99e6efc206a642d49e56e695bfe6"
  },
  {
    "url": "/_nuxt/5c751fc54e544f20d762.js",
    "revision": "08f9e5768184869877de56681d1835f5"
  },
  {
    "url": "/_nuxt/5fab2f478bc621627b7e.js",
    "revision": "1f16fcb2d5d4709bed2ca3406b998736"
  },
  {
    "url": "/_nuxt/65486e78ad405dd0975e.js",
    "revision": "8726af21c85d6165a0aec0ebc4c94c2a"
  },
  {
    "url": "/_nuxt/b22c591e8b6f12bcb130.js",
    "revision": "ac23e771b08d222db826599735f5d354"
  },
  {
    "url": "/_nuxt/c343515b4699f6ca08ce.js",
    "revision": "d950549eb2d9af7ecb37b42fded09aff"
  },
  {
    "url": "/_nuxt/d898963ba7f58dbfbdd6.js",
    "revision": "18715471cf3d6754e3ea3f2bdac81dc2"
  },
  {
    "url": "/_nuxt/eba9906d2d8b3a5a618d.js",
    "revision": "3fcdcc55e3e184909ad0940e56d2f7a8"
  }
], {
  "cacheId": "jakubjuszczak",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
