import Button from "@/components/resusables/Button";
import UploadedPosts from "@/components/resusables/UploadedPosts";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-4xl text-center pb-4">Posts</h1>
      <div className="w-96 h-56 border border-gray-800 rounded-lg flex flex-col pt-2 mb-64">
        <form className="flex justify-center">
          <input
            type="text"
            placeholder="What's on your mind ...!"
            className="w-72 outline-none h-12 px-4"
          />
        </form>
        <div className="px-8 pt-14 text-center">
          <Button />
        </div>
        <UploadedPosts />
      </div>
    </div>
  );
};

export default page;
