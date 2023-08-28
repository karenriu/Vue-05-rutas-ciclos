const isAuthenticatedguard = async (to, from, next) => {
  return new Promise(() => {
    const random = Math.random() * 100;
    if (random > 50) {
      console.log("esta autenticado");
      next();
    } else {
      console.log("bloquedo por el isAuthenticatedGuard", random);
      next({ name: "pokemon-home" });
    }
  });

  //console.log({ to, from, next });
};

export default isAuthenticatedguard;
