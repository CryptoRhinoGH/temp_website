import { NextSeo } from 'next-seo';
import  siteMeta from '@/data/siteMeta'
import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
    <NextSeo
      title="Uses - Abhimanyu Sareen"
      description={siteMeta.description}
      canonical="https://asareen.in/uses"
      openGraph={{
        url: 'https://asareen.in/uses',
        images: [
          {
            url: `https://asareen.in/api/og?title=Uses&desc=Things I use every day to get my work done.`,
            width: 1200,
            height: 600,
            alt: 'Og Image Alt',
            type: 'image/jpeg',
          }
        ],
        siteName: 'asareen.in',
      }}
    />
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="13” MacBook Air, M1, 16GB RAM (2020)">
              I don&apos;t know how Apple makes such a tiny laptop so fast and responsive, no matter what load I put on it.
            </Tool>
            <Tool title="Raspberry Pi(s)">
              <b>Minipi:</b> 4GB RPi 4 running Home Assistant and various locally hosted tools<br/>
              <b>Megapi:</b> 8GB RPi 4 used as my Dev environment
            </Tool>
            <Tool title="HomeServer">
              An old pc with i5 and 4GB Ram
            </Tool>
          </ToolsSection>
          <ToolsSection title="Software">
            All my devices are connected to each other through Tailscale (I plan on transitioning to headscale instead soon)
            <Tool title="OS">
                Running Debian on the Raspberry Pis and the HomeServer<br/>
                Macos with a dual boot with NixOS (thanks to Asahi linux drivers for M1) on my Macbook
            </Tool>
            <Tool title="Docker">
                Running Home Assistant, MQTT on Minipi<br/>
                Running this website, a few selfhosted applications, a local jellyfin for improved speeds on Megapi<br/>
                Running Sonarr, Radarr, Jellyfin along with some self-created open source softwares, dockerized, on my HomeServer
            </Tool>
          </ToolsSection>

        </div>
      </SimpleLayout>
    </>
  )
}
