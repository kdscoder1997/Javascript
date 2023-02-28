const container = document.querySelector(".container");

const display = (followers) => {
  //   console.log(followers);
  const followersDetails = followers
    .map((person) => {
      const { avatar_url, login, html_url } = person;
      // console.log(avatar_url, login, html_u/rl);
      return `<article class="card"> 
    <img src="${avatar_url}" alt="${login}"/>
    <h4>${login}</h4>
    <a href="${html_url}" class="btn">view profile</a>
    </article>`;
    })
    .join("");
  //   console.log(followersDetails);
  container.innerHTML = followersDetails;
};

export default display;
