import Image from "next/image";

import App from "./App";

// async function waitFunction () {
//   await new Promise((resolve)=>(setTimeout(resolve, 10000)))
//   return
// }

export default async function Home() {
  return (
    <>
      <App/>
    </>
  );
}
