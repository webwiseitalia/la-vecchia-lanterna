import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger)

export function useTextReveal(selector, options = {}) {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (hasAnimated.current) return

    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    elements.forEach((element) => {
      const split = new SplitType(element, { types: 'chars,words,lines' })

      gsap.set(split.chars, {
        y: '100%',
        opacity: 0,
      })

      ScrollTrigger.create({
        trigger: element,
        start: options.start || 'top 85%',
        once: true,
        onEnter: () => {
          gsap.to(split.chars, {
            y: '0%',
            opacity: 1,
            duration: options.duration || 0.8,
            stagger: options.stagger || 0.02,
            ease: options.ease || 'power3.out',
            delay: options.delay || 0,
          })
        },
      })
    })

    hasAnimated.current = true

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector, options])
}

export function useParallax(selector, speed = 0.5) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    elements.forEach((element) => {
      gsap.to(element, {
        y: () => window.innerHeight * speed * -1,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector, speed])
}

export function useRevealAnimation(selector, options = {}) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    elements.forEach((element, index) => {
      const direction = element.dataset.direction || 'up'
      const delay = options.staggerBase ? index * options.staggerBase : 0

      let fromVars = { opacity: 0, y: 60 }

      if (direction === 'left') fromVars = { opacity: 0, x: -80 }
      if (direction === 'right') fromVars = { opacity: 0, x: 80 }
      if (direction === 'scale') fromVars = { opacity: 0, scale: 0.85 }
      if (direction === 'rotate') fromVars = { opacity: 0, rotation: -5, y: 40 }

      gsap.set(element, fromVars)

      ScrollTrigger.create({
        trigger: element,
        start: options.start || 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(element, {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: options.duration || 1,
            delay: delay + (options.delay || 0),
            ease: options.ease || 'power3.out',
          })
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector, options])
}

export function useImageReveal(selector) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector)
    if (!elements.length) return

    elements.forEach((element) => {
      const img = element.querySelector('img')
      if (!img) return

      gsap.set(element, { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)' })
      gsap.set(img, { scale: 1.3 })

      ScrollTrigger.create({
        trigger: element,
        start: 'top 75%',
        once: true,
        onEnter: () => {
          const tl = gsap.timeline()

          tl.to(element, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            duration: 1.2,
            ease: 'power4.inOut',
          })

          tl.to(img, {
            scale: 1,
            duration: 1.4,
            ease: 'power3.out',
          }, '-=0.8')
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [selector])
}

export function useHorizontalScroll(containerSelector, trackSelector) {
  useEffect(() => {
    const container = document.querySelector(containerSelector)
    const track = document.querySelector(trackSelector)
    if (!container || !track) return

    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth)

    gsap.to(track, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${track.scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [containerSelector, trackSelector])
}
