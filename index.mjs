import { Extension, Image, Video } from 'talkops'

const extension = new Extension()

function enableAlarm() {
  extension.enableAlarm()
  return 'Done.'
}

function receiveRandomDice() {
  return String(Math.floor(Math.random() * 6) + 1)
}

async function receiveRandomDiceAsynchronously() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
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

extension
  .setName('Playground NodeJS')
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
  .start()
