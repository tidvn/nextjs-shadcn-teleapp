'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from './ui/button';
import { Icons } from './icons';

export default function GoogleSignInButton() {
  const router = useRouter()
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  return (
    <Button
      className="w-full"
      variant="outline"
      type="button"
      onClick={() => router.push("/dashboard")}
    >
      <Icons.gitHub className="mr-2 h-4 w-4" />
      Continue with Github
    </Button>
  );
}
