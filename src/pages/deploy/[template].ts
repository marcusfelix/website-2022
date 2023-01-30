import type { APIRoute } from "astro";

export const get: APIRoute = ({ params, request, redirect }) => {
  return redirect("https://github.com/login/oauth/authorize?client_id=fae5f54c6c1a2166263c", 307);
};