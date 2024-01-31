import Image from "next/image";
import { apiCall } from "./app";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Image
              src="/logo.jpg"
              alt="Logo"
              className=""
              width={100}
              height={24}
              priority
            />
        </div>
        <div className="relative flex place-items-center">

        <div>
          <form action={apiCall()}>
            <input type="text" id="prompt" name="Prompt" className="text-black"/>
            <button type="submit">Generate</button>
          </form>
        </div>

      </div>
      </div>
    </main>
  );
}
