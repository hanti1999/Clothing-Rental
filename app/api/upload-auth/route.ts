import { getUploadAuthParams } from '@imagekit/next/server';
import config from '@/lib/config';

export async function GET() {
  const { token, expire, signature } = getUploadAuthParams({
    privateKey: config.env.imagekit.privateKey as string,
    publicKey: config.env.imagekit.publicKey as string,
  });

  return Response.json({
    token,
    expire,
    signature,
    publicKey: config.env.imagekit.publicKey,
  });
}
