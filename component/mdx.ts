import {createMdxAstCompiler} from '@mdx-js/mdx';
import {Parser as JSParser} from 'acorn';

export const readMDXMeta = <T extends Record<string, any>>(content: string): T | null => {
    const compiler = createMdxAstCompiler({ remarkPlugins: [] });
    const ast = compiler.parse(content)

    const firstExport = ast.children.find((o: any) => o.type === 'export')

    const jsAst = JSParser.parse(firstExport.value, {ecmaVersion: 2020, sourceType: 'module'});
    const values = (jsAst as any).body[0].declaration.declarations[0].init.properties
    return values.reduce((acc: Record<string, any>, astVal: any) => {
        acc[astVal.key.name] = astVal.value.value;
        return acc
    }, {} as T);
}