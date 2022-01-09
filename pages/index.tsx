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
    return (
        <Layout.Layout>
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