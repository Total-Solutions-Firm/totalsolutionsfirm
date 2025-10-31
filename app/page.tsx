'use client';
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Root() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if(pathname == '/'){
      router.push('/home');
    }
  },[pathname])

  if(pathname !== '/') return (
    <></>
  );
}
