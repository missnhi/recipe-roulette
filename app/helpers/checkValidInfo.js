import prisma from "@/prisma/prisma";
async function checkValidInfo(email, password) {
  return prisma.user
    .findUnique({
      where: {
        email: email,
      },
    })
    .then((user) => {
      return user && user.password === password ? true : false;
    })
    .catch((error) => {
      console.error("Error checking user info: ", error);
      return false;
    });
};
export {checkValidInfo};