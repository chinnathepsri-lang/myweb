"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto mt-5 flex max-w-5xl gap-4 rounded border border-gray-300 p-3">
      <div className="w-64 shrink-0 rounded border border-gray-300">
        <Image
          src="/home/me.png"
          alt="Profile Image"
          width={256}
          height={256}
          className="h-auto w-full rounded"
        />
        <div className="p-3 text-sm">
          <b>Chinnathep Srinin</b>, 23Y
          <br />
          Student ID: <b>68039294</b>
          <br />
          <b>Major:</b> Computer Science and Software Development
          <br />
          Sripatum University (<b>SPU</b>)
        </div>
      </div>
      <div className="text-justify">
        <p>
          <b>About Me</b> Interests & Hobbies: Passionate about survival MMO and open-world games RDR2, 
          game modding, reverse engineering, and working with archive formats like .pak files.
        </p>

        <ul className="my-3 list-disc space-y-2 pl-6">
          <li>
            <b>Web Development</b> I can build websites with HTML, CSS,
            JavaScript.
          </li>
        </ul>

        <p>
          <b>Thank you for visiting my page!</b>
        </p>
      </div>
    </div>
  );
}
