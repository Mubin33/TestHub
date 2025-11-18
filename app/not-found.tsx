"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-9999 flex h-screen w-screen flex-col items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="flex flex-col items-center text-center space-y-6 p-6">
        <h1 className="text-6xl font-bold tracking-tight">404</h1>

        <p className="text-lg text-gray-300 max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Button
          onClick={() => router.push("/")}
          className="font-normal px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-sm sm:text-base"
          variant="default"
        >
          Go Home
        </Button>
      </div>

      <div className="absolute bottom-6 text-sm text-gray-500">
        © {new Date().getFullYear()} TasteHub — All Rights Reserved
      </div>
    </div>
  );
}
