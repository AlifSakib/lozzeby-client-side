import React from "react";
import { Link } from "react-router-dom";
import image2 from "../../../assets/blog-image/inheritance.png";
import image4 from "../../../assets/blog-image/rav.png";
import image1 from "../../../assets/blog-image/react.png";
import image3 from "../../../assets/blog-image/unirtest.png";
const Blogs = () => {
  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img src={image1} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 h-full">
              <a
                href="/"
                aria-label="Category"
                title="Simple is better"
                className="inline-block mb-3 text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                What are the different ways to manage a state in a React
                application?
              </a>
              <p className="mb-2 text-gray-700">
                There are four main types of state you need to properly manage
                in your React apps: <br /> Local state <br /> Global state{" "}
                <br /> Server state URL state <br />
                Local (UI) state – Local state is data we manage in one or
                another component. <br />
                Global (UI) state – Global state is data we manage across
                multiple components. <br />
                Server state – Data that comes from an external server that must
                be integrated with our UI state. <br />
                URL state – Data that exists on our URLs, including the pathname
                and query parameters.
              </p>
              <Link
                to="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
            <img src={image2} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 h-full">
              <a
                href="/"
                aria-label="Category"
                title="Film It!"
                className="inline-block mb-3 text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                How does prototypical inheritance work?
              </a>
              <p className="mb-2 text-gray-700">
                The Prototypal Inheritance is a feature in javascript used to
                add methods and properties in objects. It is a method by which
                an object can inherit the properties and methods of another
                object. Traditionally, in order to get and set the [[Prototype]]
                of an object, we use Object. getPrototypeOf and Object.
              </p>
              <Link
                to="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
            <img src={image3} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0 h-full">
              <Link
                to="#"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                What is a unit test? Why should we write unit tests?
              </Link>
              <p className="mb-2 text-gray-700">
                The main objective of unit testing is to isolate written code to
                test and determine if it works as intended. Unit testing is an
                important step in the development process, because if done
                correctly, it can help detect early flaws in code which may be
                more difficult to find in later testing stages.
              </p>
              <Link
                to="#"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Read more
              </Link>
            </div>
          </div>
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm ">
            <img src={image4} className="object-cover w-full h-64" alt="" />
            <div className="p-5 border border-t-0">
              <Link
                to="#"
                aria-label="Category"
                title="Visit the East"
                className="inline-block mb-3 text-2xl font-bold leading-6 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                React vs. Angular vs. Vue?
              </Link>
              <p className="mb-2 text-gray-700">
                React : React can be used as a UI library to render elements,
                without enforcing a specific project structure, and that’s why
                it’s not strictly a framework. React Elements are the smallest
                building blocks of React apps. They are more powerful than DOM
                elements because the React DOM makes sure to update them
                efficiently whenever something changes. Components are larger
                building blocks that define independent and reusable pieces to
                be used throughout the application. They accept inputs called
                props and produce elements that are then displayed to the user.
                <br />
                Vue : The Vue.js core library focuses on the View layer only.
                It’s called a progressive framework because you can extend its
                functionality with official and third-party packages, such as
                Vue Router or Vuex, to turn it into an actual framework.
                <br />
                Anguler : Angular is a TypeScript-based free and open-source web
                application framework led by the Angular Team at Google and by a
                community of individuals and corporations. Angular is a complete
                rewrite from the same team that built AngularJS.
              </p>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
