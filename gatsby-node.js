const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`)
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
              fields{
                  slug
              }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `).then(result => {
                if (result.errors) {
                    console.log(result.errors)
                    return reject(result.errors)
                }
                const blogTemplate = path.resolve('./src/templates/blog-post.js');
                result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogTemplate,
                        context: {
                            slug: node.fields.slug,
                        },
                    })
                })
                return result
            }) 
            .then((result)=>{
             
              const node = result.data.allMarkdownRemark.edges[0].node;
              console.log('this is the node!!!!!!', node);
              const resumeTemplate = path.resolve('./src/templates/resume-template.js');
              createPage({
                path: 'resume',
                component: resumeTemplate,
                context: {
                    slug: node.fields.slug,
                },
            })
            })
        )
    });
}


exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField, createNode } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
      
       
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
        createNodeField({
          node,
          name:'slug2',
          value:"work/dammit/now."
        })
    }
    if(node.internal.mediaType === `application/pdf`){

     createNodeField({
      node,
      name: `happiness`,
      value: `is sweet graphql queries`
    })
    
   
    }
}