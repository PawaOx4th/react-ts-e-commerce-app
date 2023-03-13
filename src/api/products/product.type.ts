export type ProductsType = {
  data?: ProductDataType[];
  meta?: ProductMetaType;
};

export type ProductDataType = {
  id?: number;
  name?: string;
  desc?: string;
  isNew?: boolean;
  price?: number;
  stock?: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  slug?: null;
  img?: ProductImgType;
  categories?: CategoryType[];
};

export type CategoryType = {
  id?: number;
  title?: string;
  desc?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type ProductImgType = {
  id?: number;
  name?: string;
  alternativeText?: null;
  caption?: null;
  width?: number;
  height?: number;
  formats?: ProductImageFormatType;
  hash?: string;
  ext?: EXTType;
  mime?: MIMEType;
  size?: number;
  url?: string;
  previewURL?: null;
  provider?: ProviderType;
  providerMetadata?: ProviderMetadataType;
  createdAt?: string;
  updatedAt?: string;
};

export enum EXTType {
  PNG = ".png",
  Webp = ".webp",
}

export type ProductImageFormatType = {
  small?: ProductImageFormatDetailType;
  thumbnail?: ProductImageFormatDetailType;
  large?: ProductImageFormatDetailType;
  medium?: ProductImageFormatDetailType;
};

export type LargeType = {
  ext?: EXTType;
  url?: string;
  hash?: string;
  mime?: MIMEType;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  providerMetadata?: ProviderMetadataType;
};

export enum MIMEType {
  ImagePNG = "image/png",
  ImageWebp = "image/webp",
}

export type ProviderMetadataType = {
  publicID?: string;
  resourceType?: ResourceType;
};

export enum ResourceType {
  Image = "image",
}

export type ProductImageFormatDetailType = {
  ext?: EXTType;
  url?: string;
  hash?: string;
  mime?: MIMEType;
  name?: string;
  path?: null;
  size?: number;
  width?: number;
  height?: number;
  providerMetadata?: ProviderMetadataType;
};

export enum ProviderType {
  Cloudinary = "cloudinary",
}

export type ProductMetaType = {
  pagination?: PaginationType;
};

export type PaginationType = {
  page?: number;
  pageSize?: number;
  pageCount?: number;
  total?: number;
};
