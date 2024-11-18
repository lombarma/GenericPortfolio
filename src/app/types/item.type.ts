export interface Item {
  type: string;
  title?: string;
  description: string;
  skills: string[];
  url?: string;
  years?: string;
  picture?: Picture;
}

export interface Picture{
  path: string;
  altDescrption: string;
}
