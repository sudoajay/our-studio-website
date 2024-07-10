// src/types.ts
export interface Service {
  title: string
  imageUrl: string
}

export interface Portfolio {
  id: string
  title: string
  imageUrl: string
  type: string
  responsibility: string[]
  credit: string
}

export interface Advantage {
  title: string
  description: string
  imageUrl: string
}

export interface Testimonial {
  name: string
  company: string
  testimoni: string
  imageUrl: string
}

export interface TeamMember {
  name: string
  position: string
  imageUrl: string
}

export interface LandingPageData {
  service: Service[]
  portfolio: Portfolio[]
  advantage: Advantage[][]
  testimonial: Testimonial[]
  team: TeamMember[]
}
