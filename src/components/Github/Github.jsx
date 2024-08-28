import React, { useState, useEffect } from "react";

function Github() {
  const [username, setUsername] = useState("facebook"); // Default username
  const [data, setData] = useState(null); // State to store the fetched data

  useEffect(() => {
    const fetchData = async () => {
      if (username) {
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        setData(data);
      }
    };

    fetchData();
  }, [username]); // Re-fetch data when the username changes

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub Username"
        className="border-2 border-gray-300 rounded px-2 py-1"
      />
      {data && (
        <div className="bg-gray-500 py-5 text-center text-2xl text-white mt-4">
          GitHub Followers: {data.followers}
          <br />
          GitHub Following: {data.following}
          <br />
          GitHub Public Repos: {data.public_repos}
          <br />
          GitHub Public Gists: {data.public_gists}
          <br />
          GitHub Name: {data.login}
          <br />
          Company: {data.company || "N/A"}
          <br />
          <img src={data.avatar_url} alt="" width={200} height={200} />
        </div>
      )}
    </>
  );
}

export default Github;