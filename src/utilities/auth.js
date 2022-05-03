
export const FakeAuth = () =>
new Promise((resolve) => {
  setTimeout(() => resolve('random'), 250);
});

const Auth = "authenticated";
export default Auth;