import db from '@/lib/db';
import getSession from '@/lib/session';
import { formatToWon } from '@/lib/utils';
import { UserIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getIsOwner(userId: number) {
  const session = await getSession();
  if (session.id) {
    return session.id === userId;
  }

  return false;
}

async function getProduct(id: number) {
  const product = db.product.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          username: true,
          avatar: true,
        },
      },
    },
  });

  return product;
}

export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) {
    return notFound();
  }
  const product = await getProduct(id);
  if (!product) {
    return notFound();
  }
  const isOwner = await getIsOwner(product.userId);

  const onDelete = async () => {
    'use server';
    await db.product.delete({
      where: {
        id,
      },
      select: null,
    });
  };
  return (
    <>
      <div>
        <div className="relative aspect-square">
          <Image
            className="object-cover"
            fill
            src={product.photo}
            alt={product.title}
          />
        </div>
        <div className="p-5 flex items-center gap-3 border-b border-neutral-600">
          <div className="size-10 rounded-full">
            {product.user.avatar !== null ? (
              <Image
                className="rounded-full"
                src={product.user.avatar}
                alt={product.title}
                width={40}
                height={40}
              />
            ) : (
              <UserIcon />
            )}
          </div>
          <div>
            <h3>{product.user.username}</h3>
          </div>
        </div>
        <div className="p-5">
          <h1 className="text-2xl font-semibold">{product.title}</h1>
          <p>{product.description}</p>
        </div>
        <div className="fixed w-full bottom-0 left-0 p-5  bg-neutral-800 flex justify-between items-center">
          <span className="font-semibold text-lg">
            {formatToWon(product.price)}원{' '}
          </span>
          {isOwner ? (
            <form action={onDelete}>
              <button className="bg-neutral-700 px-5 py-2.5 rounded-md active:bg-neutral-800 font-semibold">
                삭제하기
              </button>
            </form>
          ) : null}
          <Link
            className="bg-orange-500 px-5 py-2.5 rounded-md text-white font-semibold active:bg-orange-400"
            href={``}
          >
            채팅하기
          </Link>
        </div>
      </div>
    </>
  );
}
