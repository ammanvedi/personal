import { readdirSync, readFileSync } from "fs";
import {join} from 'path';
import * as Layout from '../component/layout'
import { readMDXMeta } from "../component/mdx";
import { PostMeta } from "../component/post-meta";


type PostMeta = {
    title: string,
    date: number,
    linkPath: string,
}

type Props = {
    posts: Array<PostMeta>
}

export default function Home({
    posts
}: Props) {
    const preText = `/**
 * typeerror
 * 
 * I'm Amman a web developer from London, interested 
 * in functional programming, design systems and 
 * mechanical keyboards
 * 
 * <a href="https://twitter.com/AmmanV" target="_blank" rel="noopener noreferrer">twitter</a>, <a href="https://github.com/ammanvedi" target="_blank" rel="noopener noreferrer">github</a>, <a href="https://www.linkedin.com/in/ammanvedi/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://www.npmjs.com/~ammanvedi" target="_blank" rel="noopener noreferrer">npm</a>
 */
    `;

    const preTextMobile = `/**
 * typeerror
 * 
 * I'm Amman a web developer from
 * London, interested in functional
 * programming, design systems and 
 * mechanical keyboards
 * 
 * <a href="https://twitter.com/AmmanV" target="_blank" rel="noopener noreferrer">twitter</a>, <a href="https://github.com/ammanvedi" target="_blank" rel="noopener noreferrer">github</a>, <a href="https://www.linkedin.com/in/ammanvedi/" target="_blank" rel="noopener noreferrer">linkedin</a>, <a href="https://www.npmjs.com/~ammanvedi" target="_blank" rel="noopener noreferrer">npm</a>
 */
        `;
    return (
        <Layout.Layout>
            <Layout.HomeHeaderDesktop dangerouslySetInnerHTML={{__html: preText}} />
            <Layout.HomeHeaderMobile dangerouslySetInnerHTML={{__html: preTextMobile}} />
            <Layout.HomeHeaderHeading>
                {`/* thoughts */`}
            </Layout.HomeHeaderHeading>
            <Layout.PostList>
                {posts.map(p => (
                    <Layout.PostListItem key={p.title}>
                        <PostMeta {...p} />
                    </Layout.PostListItem>
                ))}
            </Layout.PostList>
        </Layout.Layout>
    )
}


export async function getStaticProps() {

    const postBase = join('pages', 'post')
    const posts = readdirSync(postBase).map(p => {
        const path = join(postBase, p);
        const linkPath = `/post/${p.replace('.mdx', '')}`
        const content = readFileSync(path).toString();
        const meta = readMDXMeta<PostMeta>(content);

        if(!meta) {
            throw new Error('Meta parse failed on post ' + p)
        }

        const {title, date} = meta

        return {
            title,
            date,
            linkPath,
        }
    }).sort((a, b) => {
        return b.date - a.date
    })

    return {
      props: {
          posts
      },
    }
  }