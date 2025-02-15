import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="mb-[500px] pt-24 flex items-center justify-center flex-col space-y-8">
      <h1 className="text-4xl">Profiles</h1>
      <div className="flex items-center justify-center gap-8">
        <Image
          src="/filthidp.jpg"
          width={3024}
          height={4032}
          alt="profiledp"
          className="w-[100px] h-[100px] object-cover rounded-full border cursor-pointer"
        />
        <div>
          <h1>Filthi</h1>
          <h1>Programmer Filthi</h1>
          <h1 className="flex items-center gap-1">
            Online <span className="text-[8px]">🟢</span>
          </h1>
        </div>
      </div>
      <button
        type="button"
        className="bg-gray-600 w-40 h-10 cursor-pointer rounded-md active:opacity-80"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default page;
