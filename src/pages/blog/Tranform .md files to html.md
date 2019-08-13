---
title: 'Gatsy Series(1): transform .md files to html'
description: Using Gatsby gatsby-transformer-remark plugin to transform md files to html
date: '2019-07-12'
image: 'cacoon.jpg'
attachements: '../../data/Resume.pdf'
---

# About
This series is about what I learned while creating my blog with Gatsby, however the skills covered in this servies go well beyond creating a blog.  This post is about transforming markdown files to html, a crucial step in programmatically creating pages with Gatsby.

# Introducing Gatsby Data Layer
The `data layer` is where all of your data is stored, and later on this data can be accessed using GraphQL.  I like to think of the data layer almost as what the Redux store is to typical React projects.
In order to place data into the Gatsby `data layer`, plugins are setup in the root file `gatsby-config.js`.  We are going to be creaing a markdown file that is added to the Gatsby `data layer`, and then later on the markdown file is used to create renderable html.

#Introducing Source Plugins
Source plugins are used to add data to the data layer.  Data can come from APIs, documents etc.  We will be using the source plugin `gastsby-source-filesystem` to add the .md file into the data layer, first check if you have installed the plugin as a dependancy.  It can be installed via 
```
npm i gatsby-source-filesystem
```
The next step is to go to the `gatsby-config.js` and adding the plugin.  Your config file at the very least should look like this.
```
module.exports{
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'pages',
        path: `${__dirname}/src/pages`,
      },
    },
  ]
}
```
Under the options object, the path should point to the folder that the the contents of which you want to add to the data layer.  The name can be used to filter results when you get to fetching the data from the data layer.



#Introducing Transformer plugins
In order to transform the .md file to a html file, we will be using the transformer plugin `gatsby-transformer-remark`.  In order to start using this plugin, first it needs to be installed as a dependency, with npm the installation looks like this.
```
npm i gatsby-transformer-remark
```
The second step is to add the plugin to `gatsby-config.js`.  Note that the exmple below is simplified, and your gatsby-config.js file will likely have plenty of additional plugins.
```
module.exports = {
module.exports{
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:'pages',
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-remark`,
  ]
}
```
This plugin will search for all .md files in the data layer and convert them html files.  Note that if the `gatsby-source-file-system` was not used to add the .md file into the data layer, then the plugin will not find the .md file and therefore will not transform it into an html file.

#Accessing Data Within the Data Layer
The following blog post in this series will cover how to programmatically create pages using the html document that we just created from the .md file.

In the mean while if you want to experiment with using GraphQL to view the html documen created in this article, you can paste the following query in the QraphiQL.

```
{
  markdownRemark {
    html
  }
}
```




