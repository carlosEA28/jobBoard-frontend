import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("signUp", "routes/signup.tsx"),
  route("signIn", "routes/signin.tsx"),
] satisfies RouteConfig;
