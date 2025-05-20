import type { Route } from "./+types/home";
import { NavLink } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "New React Router App"},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

function sleep(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}

// export function HydrateFallback(props: Pick<Route.ComponentProps, 'loaderData'>) {
//   console.info('Hydrating props', props)
//   return <div>LOADING...</div>
// }

// clientLoader.hydrate = false as const; // `as const` for type inference

export async function clientLoader() {
  console.info("waiting now (home2)");
  await sleep(2000);
  console.info("continuing (home2)");
  return {stuff: "wahey!"};
}

export default function Home(props: Route.ComponentProps) {
  console.log("Home 2 props", props);
  return (<>
    <h1>Page 2</h1>
    <NavLink to="/" end>
      Home
    </NavLink>
  </>)
}
