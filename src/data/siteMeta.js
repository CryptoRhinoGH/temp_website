import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'
import logoUblue from '@/images/logos/ublue.png'

import logoTronVanity from '@/images/logos/tron.png'
import logoMIT from '@/images/logos/MIT.svg'
import logoCadence from '@/images/logos/cadence.png'
import logoShareMyFile from '@/images/logos/sharemyfile.png'
import logoClipboardExtension from '@/images/logos/clipboard-extension.png'
import logoIoT from '@/images/logos/iot.png'
import logoNRG from '@/images/logos/NRGLogo.png'
import logoTelegramBots from '@/images/logos/telegram.svg'
import logoTN from '@/images/logos/tronninjas.png'
const siteMeta = {
    title: "Abhi Sareen",
    description: "I am a Computer Science Student with a Flair for Cybersecurity, DevOps, Self Hosting + Open Source & IOT",
    copyright: "Abhimanyu Sareen, CC-BY-SA",
    author: {
        name: "Abhimanyu Sareen",
        email: "avs7412@psu.edu",
        // twitter: "https://twitter.com/bketelsen",
        // mastodon: "https://tty0.social/@bketelsen",
        // instagram: "https://instagram.com/bketelsen",
        github: "https://github.com/CryptoRhinoGH/",
        linkedin: "https://linkedin.com/in/abhimanyu-sareen",
        // twitch: "https://twitch.tv/bketelsen",
        // youtube: "https://youtube.com/@bketelsen",
    },
    siteUrl: "https://asareen.in"
}
export const resume = [
    {
      company: 'Massachusetts Institute of Technology',
      title: 'Research Assistant',
      logo: logoMIT,
      start: 'February 2024',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
        company: 'Cadence Design Systems',
        title: 'Software Engineering Intern',
        logo: logoCadence,
        start: 'May 2023',
        end: 'August 2023',
    },
    {
        company: 'TronNinjas',
        title: 'Lead Blockchain Development Engineer',
        logo: logoTN,
        start: 'Oct 2021',
        end: 'April 2023',
    },
    // {
    //   company: 'Clarity Services, Inc.',
    //   title: 'COO',
    //   logo: logoClarity,
    //   start: '2008',
    //   end: '2014',
    // },
]

export const projects = [
    {
        name: 'TronNinjas',
        description:
        'Created Tron Blockchain\'s first NFT Staking platform. Also created token staking and NFT minting contracts, implementing Play2Earn GameFi',
        link: { href: 'https://tronninjas.com', label: 'TronNinjas.com' },
        logo: logoTN,
    },
    {
        name: 'Energy Sale Platform',
        description:
        'Developed an innovative energy sale platform using smart contracts on the Tron blockchain, streamlining the sale and management of blockchain resources.',
        link: { href: 'https://tronnrg.com/Home/EnergyService', label: 'TronNRG.com' },
        logo: logoNRG,
    },
    {
        name: 'ShareMyFile',
        description:
        'An open-source file-sharing platform using PHP and JavaScript. Features include password-protected uploads and file size/extension restrictions, dockerized for easy deployment.',
        link: { href: 'https://abhi.cloud/sharemyfile', label: 'ShareMyFile' },
        logo: logoShareMyFile,
    },
    {
        name: 'Telegram Bots',
        description:
        'Created resource-selling and rewards notification bots for the Tron blockchain, handling over 1500 daily transactions and servicing over 5000 daily users.',
        link: { href: 'https://t.me/buyenergybot', label: 'Buy Energy Bot' },
        link2: { href: 'https://t.me/voterrewardsbot', label: 'Voter Rewards Bot' },
        logo: logoTelegramBots,
    },
    {
        name: 'TronVanity Address Generator',
        description:
        'A custom address generator for the Tron blockchain, facilitating the creation of personalized wallet addresses.',
        link: { href: 'https://github.com/CryptoRhinoGH/tronVanity', label: 'GitHub - TronVanity' },
        logo: logoTronVanity,
    },
    {
        name: 'Chrome Extension - Upload from Clipboard',
        description:
        'Developed a Chrome extension that allows users to upload images directly from the clipboard into upload fields, enhancing user experience and workflow efficiency.',
        link: { href: 'https://github.com/CryptoRhinoGH/UploadFromClipboard', label: 'GitHub - UploadFromClipboard' },
        logo: logoClipboardExtension,
    },
    {
        name: 'IoT for ESP32',
        description:
        'Designed and programmed IoT solutions for ESP32 controllers, involving RGB LED controls and switch functionalities over an MQTT server.',
        link: { href: '#', label: 'Link Coming Soon' },
        logo: logoIoT,
    },
]

// export const projects = [
//   {
//     name: 'Fleek',
//     description:
//       'Install and manage all the tools you need to be productive.',
//     link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
//     logo: logoFleek,
//   },
//   {
//     name: 'Universal Blue',
//     description:
//       'Custom Operating System images based on Fedora.',
//     link: { href: 'https://ublue.it', label: 'Universal Blue' },
//     logo: logoUblue,
//   },
//   {
//     name: 'Bluefin',
//     description:
//       'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
//     link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
//     logo: logoUblue,
//   },
//   {
//     name: 'Vanilla OS',
//     description:
//       'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
//     link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
//     logo: logoVanilla,
//   },
//   {
//     name: 'Captain Hook',
//     description:
//       'Custom commands as webhooks.',
//     link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
//     logo: logoCaptainhook,
//   },
//   {
//     name: 'Kubernetes',
//     description:
//       'Production-Grade Container Scheduling and Management',
//     link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
//     logo: logoKubernetes,
//   },
//   {
//     name: 'Go',
//     description:
//       'Build fast, reliable, and efficient software at scale',
//     link: { href: 'https://go.dev', label: 'go.dev' },
//     logo: logoGolang,
//   },


// ]


export default siteMeta;