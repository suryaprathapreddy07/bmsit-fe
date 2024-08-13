'use client'
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname)

  useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) {
        if (pathname !== '/auth/signup') {
            router.push('/auth/login'); // Redirect to login if not authenticated and not on signup page
          }
    } else {
      if(pathname === '/auth/login' || pathname === '/auth/signup')router.push('/home'); // Redirect to main page if authenticated
      else router.push(pathname); // Redirect to main page if authenticated
    }
  }, [session, status, router,pathname]);

  return (
    <div>{children}</div>
  );
}