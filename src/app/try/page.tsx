"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  return (
    <footer className="p-6 w-full">
      <div className="container max-w-7xl flex flex-col items-center gap-4 text-center">
        <h3 className="text-lg font-bold">Developed by</h3>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <div>
              <Link
                href={"https://soham901.me"}
                className="font-medium hover:underline"
              >
                Soham
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <Link
                href={"https://soham901.me"}
                className="font-medium hover:underline"
              >
                Ehsaas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Page() {
  const [isEncrypted, setIsEncrypted] = useState(false);

  return (
    <div className="">
      <div className="w-full flex flex-col justify-center items-center min-h-screen bg-background">
        <main className="container px-4 md:px-6 flex flex-col items-center justify-center h-[83vh]">
          <div className="grid max-w-2xl gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Chaos Cipher
            </h1>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Protect your sensitive information with ease.
            </p>
          </div>
          <div className="grid w-full max-w-xl gap-4 mt-8">
            <Card className="p-4 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    Enter your {isEncrypted ? "plain text" : "cipher text"}
                  </CardTitle>
                  <Switch onCheckedChange={setIsEncrypted} />
                </div>
                <CardDescription>
                  Enter your text below to see it encrypted and decrypted.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Textarea
                    placeholder="Enter your text here..."
                    className="resize-none"
                  />
                  <Button size="lg">Try It Now</Button>
                  <div className="text-md text-center text-gray-600">
                    Convert{" "}
                    {isEncrypted ? <PlainTextLabel /> : <CipherTextLabel />} it
                    to {isEncrypted ? <CipherTextLabel /> : <PlainTextLabel />}{" "}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

const CipherTextLabel = () => (
  <span className="bg-red-500 px-1 text-white">cipher text</span>
);

const PlainTextLabel = () => (
  <span className="bg-blue-500 px-1 text-white">plain text</span>
);
