module.exports = {
  ari: {
    url: 'http://tele:8088',
    username: 'rtpaudioserver',
    password: 'asterisk',
    appName: 'dialogflow',
  },
  rtpServer: {
    host: 'rtp',
    port: '7777',
    format: 'slin16',
  },
  asterisk: {
    // If set then Playback this Asterisk sound file before bridging to the dialogflow media.
    // Useful for debug and breaking media stand-offs.
    // playback: 'silence/1'
  },
  mqtt: {
    url: 'mqtt://mqtt',
    topicPrefix: 'dialogflow-asterisk',
  },
}
