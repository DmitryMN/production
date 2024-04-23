enum ArticleBlockType {
    TEXT = 'TEXT',
    CODE = 'CODE',
    IMAGE = 'IMAGE' 
}

interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

interface ArticleBlockText extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    title?: string;
    paragraphs: string[];
}

interface ArticleBlockImage extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    title: string;
    src: string;
}

interface ArticleBlockCode extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export type ArticleBlock = ArticleBlockText | ArticleBlockImage | ArticleBlockCode;

export enum ArticleTypes {
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export interface Article {
    id: string;
    title: string;
    subtitle: string;
    img: string;
    views: number;
    createAt: string;
    type: ArticleTypes[];
    blocks: ArticleBlock[]
}