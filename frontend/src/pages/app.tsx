import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const protectedRoutes = ['/profile', '/upload'];

useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem('user') || 'null');
  setUser(storedUser);
  if (!storedUser && protectedRoutes.includes(router.pathname)) {
    router.push('/login');
  }
}, [router.pathname]);
