import { Extension, Image, Parameter, Video } from 'talkops'

const extension = new Extension()
  .setName('Node.js Playground')
  .setIcon('https://talkops.app/images/extensions/playground-nodejs.png')
  .setCategory('utility')
  .setDemo(true)
  .setFeatures([
    'Enable the alarm',
    'Receive a random dice',
    'Receive a random dice asynchronously',
    'Receive a random dice as message',
    'Receive a random dice as notification',
    'Receive a random image',
    'Receive a random video',
  ])

const color = new Parameter('COLOR')
  .setDescription('The color used for test.')
  .setDefaultValue('blue')
  .setType('select')
  .setAvailableValues(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'])

const email = new Parameter('EMAIL')
  .setDescription('The email used for test.')
  .setDefaultValue('john.doe@example.com')
  .setType('text')

function enableAlarm() {
  extension.enableAlarm()
  return 'Done.'
}

function receiveRandomDice() {
  return String(Math.floor(Math.random() * 6) + 1)
}

async function receiveRandomDiceAsynchronously() {
  await new Promise((resolve) => setTimeout(resolve, 10000))
  return String(Math.floor(Math.random() * 6) + 1)
}

function receiveRandomDiceMessage() {
  extension.sendMessage(String(Math.floor(Math.random() * 6) + 1))
  return 'Done.'
}

function receiveRandomDiceNotification() {
  extension.sendNotification(String(Math.floor(Math.random() * 6) + 1))
  return 'Done.'
}

function receiveRandomImage() {
  const seed = Math.floor(Math.random() * 100) + 1
  extension.sendMedias([new Image(`https://picsum.photos/seed/${seed}/640/480`)])
  return 'Done.'
}

function receiveRandomVideo() {
  const videos = [
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  ]
  const randomVideo = videos[Math.floor(Math.random() * videos.length)]
  extension.sendMedias([new Video(randomVideo)])
  return 'Done.'
}

function onEnable(language) {
  console.log('onEnable')
  console.log(language)
  console.log(color.getValue())
  console.log(email.getValue())
}

function onBoot(language) {
  console.log('onBoot')
  console.log(language)
  console.log(color.getValue())
  console.log(email.getValue())
}

function onDisable(language) {
  console.log('onDisable')
  console.log(language)
  console.log(color.getValue())
  console.log(email.getValue())
}

function onLanguage(language) {
  console.log('onLanguage')
  console.log(language)
  console.log(color.getValue())
  console.log(email.getValue())
}

function onSession(language) {
  console.log('onSession')
  console.log(language)
  console.log(color.getValue())
  console.log(email.getValue())
}

extension
  .setParameters([color, email])
  .setFunctionSchemas([
    {
      name: 'enableAlarm',
      description: 'Enable the alarm.',
    },
    {
      name: 'receiveRandomDice',
      description: 'Receive a random dice.',
    },
    {
      name: 'receiveRandomDiceAsynchronously',
      description: 'Receive a random dice asynchronously.',
    },
    {
      name: 'receiveRandomDiceMessage',
      description: 'Receive a random dice as message.',
    },
    {
      name: 'receiveRandomDiceNotification',
      description: 'Receive a random dice as notification.',
    },
    {
      name: 'receiveRandomImage',
      description: 'Receive a random image.',
    },
    {
      name: 'receiveRandomVideo',
      description: 'Receive a random video.',
    },
  ])
  .setFunctions([
    enableAlarm,
    receiveRandomDice,
    receiveRandomDiceAsynchronously,
    receiveRandomDiceMessage,
    receiveRandomDiceNotification,
    receiveRandomImage,
    receiveRandomVideo,
  ])
  .on('enable', onEnable)
  .on('boot', onBoot)
  .on('disable', onDisable)
  .on('language', onLanguage)
  .on('session', onSession)
  .start()
