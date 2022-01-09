declare module '@mdx-js/mdx' {

    declare type ParseSync = <T extends Record<string, any>>(content: string) => any

    declare const p: ParseSync

    declare export const createMdxAstCompiler: p
}