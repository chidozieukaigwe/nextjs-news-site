"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import Image from "next/image";
import { notFound, useRouter } from "next/navigation";

/**
 * Intercepting Routes in NextJs 13 allows us to intercept navigation to a specific route and render a different component instead. In this case, we are intercepting navigation to the /news/[slug]/image route and rendering a modal with the image instead of navigating to a new page.
 */
export default async function InterceptedImagePage({ params }) {
  const router = useRouter();

  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((item) => item.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog open className="modal">
        <div className="fullscreen-image">
          <Image
            src={`/images/news/${newsItem.image}`}
            alt={newsItem.title}
            height={500}
            width={500}
          />
        </div>
      </dialog>
    </>
  );
}
