import React from 'react';
import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from 'react-icons/fa';

import {DiMongodb, DiFirebase, DiJavascript} from 'react-icons/di'


export const frontEndStack = [
  {
    icon: <FaHtml5/>,
  },
  {
    icon: <FaReact/>,

  },
  {
    icon: <FaCss3Alt/>
  },
]

export const backEndStack = [
  {
    icon: <FaNodeJs/>,
  },
  {
    icon: <DiMongodb/>,

  },
  {
    icon: <DiFirebase/>
  },
  {
    icon: <DiJavascript/>
  },
]

export const aboutFrontEnd = `
My favorite part of working in the FrontEnd is the ability to use
the React frame work.  Jumping from creating websites with vanilla JavaScript 
was a huge game changer, and I am allways excited to learn about new patterns
such as React Hooks.
`;

export const aboutBackEnd =`
I really enjoy working on the BackEnd, especially since Node.js allows
JavaScript to run on server side code.  My experience in the back end includes
the following.
creating REST APIs and routes using Express. Setting up Mongo Databases and utilizing
Mongoose Schemas. Using Firebase for serverless applications. Hosting servers
on AWS Elastic Compute Cloud, and sites on AWS Simple Storage Service.
`;