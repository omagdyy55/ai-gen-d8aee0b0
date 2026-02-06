"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page on initial load
    router.push('/login');
  }, [router]);

  return null; // No content to render, just redirecting
};

export default Home;
