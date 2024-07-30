import { MotionDiv } from '../lib/motion'

import { Github, Linkedin, Contact2Icon } from 'lucide-react'

const iconSize = { width: 28, height: 28 }

const socialData = [
  {
    link: 'https://github.com/MateoMor',
    icon: <Github width={iconSize.width} height={iconSize.height} />
  }, 
  {
    link: 'https://www.linkedin.com/in/mateo-morales-ramirez/',
    icon: <Linkedin width={iconSize.width} height={iconSize.height} />
  },
  {
    link: 'https://gold-ursuline-96.tiiny.site/',
    icon: <Contact2Icon width={iconSize.width} height={iconSize.height} />
  }
]

export const Footer = () => {
  return (
    <footer className="px-10 sm:px-6">
      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.3 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between border-t py-8 text-lg sm:flex-col sm:gap-y-6"
      >
        <p>Mateo Morales</p>
        <div className="flex items-center gap-4">
          {socialData.map((social, index) => (
            <a
              key={index}
              className="transition hover:-translate-y-1 hover:text-target"
              target="_blank"
              href={social.link}
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </MotionDiv>
    </footer>
  )
}
