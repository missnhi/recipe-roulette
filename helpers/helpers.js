
const checkValidInfo = function(email, password, prisma) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  })
  .then(user => {
    user && user.password === password ? true : false;
  })
  .catch(error => {
    console.error("Error checking user info: ", error);
    return false;
  })
}


module.exports = {
  checkValidInfo,
}