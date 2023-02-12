"use client";

import { Categories } from "@components/ui/Categories";
import { News } from "@components/ui/News";
import { Slider } from "@components/ui/Slider";

import styles from "./styles/Home.module.scss";

const HomePage = () => {
  return (
    <>
      <Categories />
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          facilis temporibus voluptas corrupti quisquam alias necessitatibus,
          rem reprehenderit recusandae consequuntur minima enim, architecto ex
          aliquam neque ipsa asperiores impedit atque.
        </p>
      </div>
      {/* <Slider /> */}
      {/* <News /> */}
    </>
  );
};

export default HomePage;
