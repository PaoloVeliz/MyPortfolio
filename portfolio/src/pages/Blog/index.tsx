import type { ReactElement } from 'react'
import Layout from '@/components/Layout/Layout'
import type { NextPageWithLayout } from '../_app'
import { Inter } from 'next/font/google'
import styles from './Blog.module.css';
import Card from '@/components/Card/Card';


import axios from 'axios';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  attributes: {
    Title: string;
    content: string;
    subtitle: any;
    updatedAt: string;
    publishedAt: string;
  };
}

const inter = Inter({ subsets: ['latin'] })
const Page: NextPageWithLayout = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(process.env.NEXT_PUBLIC_STRAPI_URL!, {
        headers: {
          Authorization:
          'Bearer '+process.env.NEXT_PUBLIC_STRAPI_API_KEY,
        },
      });
      setPosts(response.data.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.main}>
      <h1>Posts</h1>
      <div className={styles.gridContainer}>
      {posts.map(post => (
        <div key={post.id}>
        <Card  tittle={post.attributes.Title} Content={post.attributes.content} subtitle={post.attributes.subtitle} />
        </div>
        // <h3 key={post.id}>{post.attributes.Title}</h3>
      ))}
      </div>
      
    </div>
  );
}


Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}  
    </Layout>
  )
}

export default Page