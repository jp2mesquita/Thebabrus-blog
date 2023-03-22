type Base = {
  _createdAt: string
  _id: string
  _rev: string
  _type: string
  _updatedAt: string
}

interface Span {
  _key: string
  _type: 'span'
  marks: string[]
  text: string
}

interface Block {
  _key: string
  _type: 'block'
  children: Span[]
  markDefs: any[]
  style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote'
}

interface Reference {
  _ref: string
  _type: 'reference'
}

interface Image {
  _type: 'image'
  asset: Reference
}

interface Slug {
  _type: 'slug'
  current: string
}

interface Author extends Base {
  bio: Block[]
  image: Image
  name: string
  slug: Slug
}

interface Category extends Base {
  description: string
  title: string
}

export interface MainImage {
  _type: 'image'
  asset: Reference
}

export interface Title {
  _type: 'string'
  current: string
}

export interface Post extends Base {
  author: Author
  body: Block[]
  categories: Category[]
  mainImage: Image
  title: string
  description: string
  slug: Slug
}
