import React from 'react'
import { useParams } from 'react-router';
function User() {
    const { userId } = useParams();
  return (
    <div class="flex my-[50px] w-full items-center justify-center bg-gray-500">
      <span class="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl box-content font-extrabold text-transparent text-center select-none"></span>
      <h1 class="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-6xl font-extrabold text-transparent text-center select-auto">
        userId : {userId}
      </h1>
    </div>
  );
}

export default User;