import fs from "fs";
import path from 'path';
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';

import MDXComponents from '../components/MDXComponents';


const root = process.cwd() + '/src';

export async function getFiles(type) {
  return fs.readdirSync(path.join(root, 'data', type))
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'data', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const {data, content} = matter(source);
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles')
      ],
      rehypePlugins: [mdxPrism]
    }
  });
  console.log('mdxSource', mdxSource)

  return {
    mdxSource,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      slug: slug || null,
      ...data
    }
  }
}