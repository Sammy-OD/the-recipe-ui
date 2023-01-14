import { ApolloClient, InMemoryCache } from '@apollo/client';
import Link from 'next/link';
import { GET_ALL_POSTS } from '../graphql/queries';

export default function Home({posts}) {
  return (
    <>
      <header>
        <h1><span>THERECIPE</span> is dedicated to bringing you delicious and easy-to-follow recipes for all ocassions. From weeknight meals to special occasion dishes, we've got you covered. We believe that cooking should be fun and accesible to everyone, so we strive to provide simple and clear instructions for every recipe. <br/> Whether you're an experienced home cook or just starting out, you'll find something to love on our recipe blog. Join us in the kitchen and let's cook something delicious together!</h1>
      </header>
      <main>
        <h3 className='title'>All Recipes</h3>
        <div className='card-container'>
          {posts.map((post, index) => (
            <div key={index} className='card'>
              <div className='image'>
                <img src={post.attributes.imageUrl} />
              </div>
              <div className='text'>
                <h3>{post.attributes.title}</h3>
                <p>{post.attributes.description}</p>
                <Link href={post.attributes.urlSlug}>Continue Reading &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: process.env.APP_URI,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: GET_ALL_POSTS
  });

  return {
    props: {
      posts: data.blogPosts.data
    },
    revalidate: 10
  }
}