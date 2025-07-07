import React from "react";

const Profile = () => {
  return (
    <div className="flex items-center justify-center w-full z-50">
      <div className="border-8 w-[124px] h-[124px] box-border  border-violet-300 shadow-xl rounded-full p-38  "
      style={{
        backgroundImage: `url('/me.jpeg')`,
        backgroundSize: '115%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      ></div>
    </div>
  );
};

export default Profile;
