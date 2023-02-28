const paginate = (followers) => {
  const itemsPerPage = 8;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage); //always a round up number
  const nFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  //   console.log(nFollowers[2]);
  return nFollowers;
};

export default paginate;
