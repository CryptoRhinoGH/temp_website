import Image from 'next/future/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/home/headshot.JPG'
import siteMeta from '@/data/siteMeta'
import { NextSeo } from 'next-seo';


function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="flex text-sm font-medium transition group text-zinc-800 hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="flex-none w-6 h-6 transition fill-zinc-500 group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
    const headingStyle = {
        fontSize: '1.5em', // Adjust the relative font size as needed
        fontWeight: 'bold',
    };
  return (
    <>
      <NextSeo
        title="About - Abhimanyu Sareen"
        description={siteMeta.description}
        canonical="https://asareen.in/about"
        openGraph={{
          url: 'https://asareen.in/about',
          images: [
            {
              url: `https://asareen.in/api/og?title=About&desc=${siteMeta.description}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'asareen.in',
        }}
      />
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                I&apos;m Abhi, Bridging Worlds with Code, Security, and Open Source Dedication.
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
                <p>
                Hello, I&apos;m Abhimanyu (I prefer me Abhi!), a Computer Science junior at Penn State with a keen eye on the future of technology. My academic path is enriched by a minor in Cybersecurity, reflecting my commitment to safeguarding our digital tomorrow. My explorations in open-source software and the Internet of Things (IoT) are not just academic pursuits but passions that light up my world.
                </p>
                <p>
                <b>From Concept to Creation:</b> The pinnacle of my technical journey so far has been developing an advanced IoT home automation system. This endeavor wasn't just about programming a Raspberry Pi or integrating various devices. It was about creating a seamless ecosystem where technology intuitively responds to human needs. By merging the capabilities of Home Assistant with the power of Google Cloud Platform, working along with self created IoT devices and sensors, I transformed a concept into a living, breathing digital assistant that enhances the comfort and efficiency of home environments.
                </p>
                <p>
                <b>A Future Forged in Code:</b> Looking ahead, my ambitions stretch far beyond the confines of academia. I envision a career where I can continue to contribute to the forefront of technology, particularly in open-source initiatives. With every project I undertake, I aim to push the boundaries of what's possible, crafting solutions that not only solve today's challenges but also anticipate the needs of tomorrow.
                </p>
                <p>
                <b>Won Tron Hackathon Season 1</b> in the GameFi category with the TronNinjas Team, securing a $50,000 prize.
                </p>
                <p>
                <b>Achieved 1st runner-up in GameFi</b> and <b>2nd runner-up in Web3 category</b> during Hackathon Season 2, with a $15,000 prize.
                </p>
                <p>
                Passionate about Open Source, pushing the boundaries of tech, and sharing knowledge with the community.
                </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href={siteMeta.author.twitter} icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink> */}
              {/* <SocialLink href={siteMeta.author.mastodon} icon={MastodonIcon} className="mt-4">
                Follow on Mastodon
              </SocialLink> */}
              {/* <SocialLink href={siteMeta.author.instagram} icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href={siteMeta.author.github} icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href={siteMeta.author.linkedin} icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href={`mailto:${siteMeta.author.email}`}
                icon={MailIcon}
                className="pt-8 mt-8 border-t border-zinc-100 dark:border-zinc-700/40"
              >
                {siteMeta.author.email}
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
