import AOS from 'aos'
import clsx from 'clsx'
import { type ReactNode, useEffect } from 'react'

import 'aos/dist/aos.css'

const Section = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: false,
      easing: 'ease-out-sine',
      duration: 600,
    })
  }, [])

  return (
    <section data-aos="fade-up" className={clsx('tw-w-full tw-h-[400px] tw-bg-red-100')}>
      {children}
    </section>
  )
}

export const AosSample = () => {


  return (
    <div className={clsx('tw-w-full', 'tw-flex tw-flex-col', 'tw-gap-8')}>
      <Section>1</Section>
      <Section>2</Section>
      <Section>3</Section>
      <Section>4</Section>
      <Section>5</Section>
    </div>
  )
}
