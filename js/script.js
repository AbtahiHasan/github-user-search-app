const defaultName = "abtahihasan";
const userData = async (username) => {
    try {
    const url = `https://api.github.com/users/${username}`
    const response = await fetch(url);
    const userInfo = await response.json();
    console.log(userInfo)
    const dateOption = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
    document.getElementById("user").innerHTML = `
    <!-- img  -->
    <div>
      <img class="rounded-full" src="${userInfo.avatar_url}" alt="" />
    </div>
    <!-- info  -->
    <div class="col-span-4">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">${userInfo.name ? userInfo.name : "Not Availavble"}</h1>
        <span class="font-bold">Joined ${new Date(userInfo.created_at).toLocaleDateString("en-US", dateOption)}</span>
      </div>
      <h3 class="mt-3 text-blue-700">${userInfo.login}</h3>
      <p class="mt-3">${userInfo.bio ? userInfo.bio : "Not Availavble"}</p>
      <!-- foller showing card -->
      <div
        class="mt-5 bg-slate-800 p-5 flex justify-between gap-5 rounded-xl"
      >
        <div>
          <span class="text-center">Repos</span>
          <h3 class="text-center font-bold">${userInfo.public_repos ? userInfo.public_repos : "Not Availavble"}</h3>
        </div>
        <div>
          <span class="text-center">Followers</span>
          <h3 class="text-center font-bold">${userInfo.followers}</h3>
        </div>
        <div>
          <span class="text-center">Following</span>
          <h3 class="text-center font-bold">${userInfo.following}</h3>
        </div>
      </div>
      <!-- basic info  -->
      <div class="grid grid-cols-2 gap-3 mt-5">
        <p class="flex gap-2 items-center">
          <i class="fa-solid fa-location-dot"></i><span>${userInfo.location ? userInfo.location : "Not Availavble"}</span>
        </p>
        <p class="flex gap-2 items-center">
          <i class="fa-brands fa-twitter"></i><span>${userInfo.twitter_username ? userInfo.twitter_username : "Not Availavble"}</span>
        </p>
        <p class="flex gap-2 items-center">
          <i class="fa-solid fa-link"></i><span>${userInfo.blog ? userInfo.blog : "Not Availavble"}</span>
        </p>
        <p class="flex gap-2 items-center">
          <i class="fa-regular fa-building"></i><span>${userInfo.company ? userInfo.company : "Not Availavble"}</span>
        </p>
      </div>
    </div>
    ` 

} catch(error) {
    alert("please Enter valid url");
}

   
}

window.addEventListener("load", () => {
    userData(defaultName);
})

const searchForm = document.getElementById("search-from");

searchForm.onsubmit = (e) => {
    e.preventDefault();
    const searchInput = document.getElementById("search-input");
    userData(searchInput.value);
    searchInput.value = "";
}