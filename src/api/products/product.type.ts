export type ProductsType = {
  data?: ProductDataType[]
  meta?: ProductMetaType
}

export type ProductDataType = {
  id?: number
  name?: string
  desc?: string
  isNew?: boolean
  price?: number
  stock?: number
  createdAt?: string
  updatedAt?: string
  publishedAt?: string
  slug?: null
  img?: ProductImgType
}

export type ProductImgType = {
  id?: number
  name?: string
  alternativeText?: null
  caption?: null
  width?: number
  height?: number
  formats?: ProductImageFormatType
  hash?: string
  ext?: EXT
  mime?: MIME
  size?: number
  url?: string
  previewURL?: null
  provider?: Provider
  providerMetadata?: ProviderMetadata
  createdAt?: string
  updatedAt?: string
}

export enum EXT {
  PNG = ".png",
  Webp = ".webp",
}

export type ProductImageFormatType = {
  small?: ProductImageFormatDetailType
  thumbnail?: ProductImageFormatDetailType
  large?: ProductImageFormatDetailType
  medium?: ProductImageFormatDetailType
}

export type Large = {
  ext?: EXT
  url?: string
  hash?: string
  mime?: MIME
  name?: string
  path?: null
  size?: number
  width?: number
  height?: number
  providerMetadata?: ProviderMetadata
}

export enum MIME {
  ImagePNG = "image/png",
  ImageWebp = "image/webp",
}

export type ProviderMetadata = {
  publicID?: string
  resourceType?: ResourceType
}

export enum ResourceType {
  Image = "image",
}

export type ProductImageFormatDetailType = {
  ext?: EXT
  url?: string
  hash?: string
  mime?: MIME
  name?: string
  path?: null
  size?: number
  width?: number
  height?: number
  providerMetadata?: ProviderMetadata
}

export enum Provider {
  Cloudinary = "cloudinary",
}

export type ProductMetaType = {
  pagination?: Pagination
}

export type Pagination = {
  page?: number
  pageSize?: number
  pageCount?: number
  total?: number
}
