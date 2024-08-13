import Link from "next/link";
import React from "react";

export function TryTheDemo() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted shadow-sm">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Secure Your Data with Our Algorithm
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed">
            Experience the power of encryption and decryption with our
            easy-to-use demo. Protect your sensitive information and keep your
            data safe.
          </p>
          <Link
            href="/try"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Try the Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
