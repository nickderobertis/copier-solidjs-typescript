import type { Component } from "solid-js";
import { SignUp } from "./SignUp";

const Home: Component = () => {
  return (
    <div>
      <section class="mb-40">
        <div class="px-6 py-12 md:px-12 bg-gray-100 text-gray-800 text-center lg:text-left">
          <div class="container mx-auto xl:px-32">
            <div class="grid lg:grid-cols-2 gap-12 flex items-center">
              <div class="mt-12 lg:mt-0">
                <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  The best offer <br />
                  <span class="text-blue-600">for your business</span>
                </h1>
                <p class="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </div>
              <div class="mb-12 lg:mb-0">
                <SignUp />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
