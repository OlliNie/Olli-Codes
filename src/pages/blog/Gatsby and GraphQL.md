---
title: "Learning about Gatsby and GraphQL"
description: My Experience with creating a blog with Gatsby
date: '2019-06-08'
image: ''
attachements: '../../data/Resume.pdf'
---
I have been working with React for the past year, and while starting to think about creating my portfolio website, I learned about Gatsby ( React based static site generator powered by GraphQL ).  Learning GraphQL has also been on my to do list, so creating my personal site with Gatsby seemed like the perfect opportunity to learn about both.  This article highlights some key components of GraphQL, and how it is implemented in Gatsby. 

## GraphQL
Previous to this project the only thing I knew about GraphQL is that by using it one could limit the number of calls when fetching from an API, however it is so much more than that.  

GraphQL has a schema that you can request that gives you all the information that the API is capable of providing.   Using this schema you can then create your own custom API call that fetches only the data that you care about.  Getting the schema is called introspection.  To learn more information on this topic visit the following site. https://graphql.org/learn/schema/.  Now that you know what you can fetch from the API, the ability to fetch only the data that you want on a single API call is huge.  No longer will you need to dig deep into a returned JSON to find the information that you are after, and you will save the end user from having to download data that they are not interested in!  Look for a future blog post on creating a GraphQL API using Express middleware.

## Gatsby
One of the bigger differences I found in Gatsby Vs. React was that instead of sharing data with Redux,  all data is handled by GraphQL.  What this means then is that all of your assets (images, PDF documents, etc...)  are placed in what Gatsby calls their "data layer", and in order for you to have access to them you will be using GraphQL to import the data that you want in each of your components.   The way I think of GraphQL with Gatsby is like using the store in Redux without all the code needed to build reducers, actions etc which in turn ends up saving time from both programming and testing perspective.

Gatsby provides two different types of queries that can be utilized to pull data to your components.  These are static queries and page queries.  Page queries have the additional ability to take variables making them more dynamic,however they are limited to page components (more on these later) while all other components will need to get by with the use of static queries. 

To answer the question of what makes a page component...Gatsby runs some under the hood magic on all components that are located in the folder src/pages.  So for example www.base-url/page-component.com would render a page component named page-component and all of its associated child components.  
If a regular component needs information that requires a page query, a page component can pass that information down to the child component as props.  As a side note, you can see that if you are making single page apps, you no longer need to specify routes.  All you need to do is use <Link to='page-component-name'></link> to render a new page component, and the url changes accordingly.  

## Conclusion
I really enjoyed the challenge of creating my portfolio site with Gatsby and learning some GraphQL to get the project done.  You can refer to my GitHub Repo for more information on this project.
