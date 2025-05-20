import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
  console.info("waiting now");
  await sleep(2000);
  console.info("continuing");
  return { stuff: "wahey!" };
}

export default function Home(props: Route.ComponentProps) {
  console.log("Home props", props);
  return <Welcome />;
}
