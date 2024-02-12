
import logoAmazon from '@/images/logos/aws.svg'
import logoClarity from '@/images/logos/clarity.jpg'
import logoMicrosoft from '@/images/logos/azure.svg'
import logoCadence from '@/images/logos/cadence.png'
import logoXOR from '@/images/logos/xor.jpg'
import logoVanilla from '@/images/logos/vanilla.svg'
import logoFleek from '@/images/logos/fleeksvg.svg'
import logoUblue from '@/images/logos/ublue.png'
import logoTN from '@/images/logos/tronninjas.png'

import logoGolang from '@/images/logos/icons8-golang.svg'
import logoKubernetes from '@/images/logos/kubernetes.svg'
import logoCaptainhook from '@/images/logos/captainhook.svg'  
const siteMeta = {
    title: "Abhi Sareen",
    description: "Abhi is a Computer Science Student with a Flair for Cybersecurity, DevOps, Self Hosting + Open Source & IOT",
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
    // {
    //   company: 'Cadence Design Systems',
    //   title: 'Intern',
    //   logo: logoAmazon,
    //   start: 'May 2023',
    //   end: {
    //     label: 'Present',
    //     dateTime: new Date().getFullYear(),
    //   },
    // },
    {
      company: 'Cadence Design Systems',
      title: 'Intern',
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
    name: 'Fleek',
    description:
      'Install and manage all the tools you need to be productive.',
    link: { href: 'https://getfleek.dev', label: 'getfleek.dev' },
    logo: logoFleek,
  },
  {
    name: 'Universal Blue',
    description:
      'Custom Operating System images based on Fedora.',
    link: { href: 'https://ublue.it', label: 'Universal Blue' },
    logo: logoUblue,
  },
  {
    name: 'Bluefin',
    description:
      'The next generation Linux workstation. Built for cloud-native, using cloud-native.',
    link: { href: 'https://projectbluefin.io', label: 'Bluefin' },
    logo: logoUblue,
  },
  {
    name: 'Vanilla OS',
    description:
      'Vanilla OS is an immutable and atomic Ubuntu Linux-based Point Release distribution, that receives updates at the right time, neither before nor after, without sacrificing security and functionality.',
    link: { href: 'https://vanillaos.org', label: 'vanillaos.org' },
    logo: logoVanilla,
  },
  {
    name: 'Captain Hook',
    description:
      'Custom commands as webhooks.',
    link: { href: 'https://github.com/bketelsen/captainhook', label: 'github.com' },
    logo: logoCaptainhook,
  },
  {
    name: 'Kubernetes',
    description:
      'Production-Grade Container Scheduling and Management',
    link: { href: 'https://github.com/kubernetes/kubernetes', label: 'github.com' },
    logo: logoKubernetes,
  },
  {
    name: 'Go',
    description:
      'Build fast, reliable, and efficient software at scale',
    link: { href: 'https://go.dev', label: 'go.dev' },
    logo: logoGolang,
  },


]


export default siteMeta;