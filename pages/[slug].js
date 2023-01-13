import { ApolloClient, InMemoryCache } from '@apollo/client';
import { GET_ALL_SLUGS, GET_INDIVIDUAL_POST } from '../graphql/queries';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import Loader from '../components/Loader/Loader';

const client = new ApolloClient({
  uri: process.env.APP_URI,
  cache: new InMemoryCache()
});

export default function Post({post}) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <div className='post'>
      <div className='hero'>
        <img src={post.imageUrl} />
        <div className='overlay'></div>
        <h1 className='title'>{post.title}</h1>
      </div>
      <div className='content'>
        <p className='desc'>{post.desc}</p>
        <h3 className='step'>how to prepare {post.title}</h3>
        <span><MDXRemote {...post.content} /></span>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const {data} = await client.query({query: GET_ALL_SLUGS});

  const paths = data.blogPosts.data.map((post) => {
    return {params: {slug: post.attributes.urlSlug}}
  });

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const {data} = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slugUrl: params.slug }
  });

  const attrs = data.blogPosts.data[0].attributes;

  const html = await serialize(attrs.content);

  return {
    props: {
      post: {
        title: attrs.title,
        imageUrl: attrs.imageUrl,
        desc: attrs.description,
        content: html
      },
      revalidate: 10
    }
  }
}