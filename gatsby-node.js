const _ = require(`lodash`)
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {

    const { createPage } = actions

    return new Promise((resolve, reject) => {

        graphql(`
        {
            allContentfulPage(limit: 100){
              edges{
                node{
                  id
                  contentful_id
                  slug
                  prefix
                  index
                }
              }
            }
        }
        `)
        .then( result => {

            const template = path.resolve(`./src/components/template/page.jsx`)

            _.each(result.data.allContentfulPage.edges, edge => {
                
                let prefix = `/${edge.node.prefix}`

                if(edge.node.prefix === 'none')
                    prefix = ''

                const page = {
                    path: edge.node.index ? `/` : `${prefix}/${edge.node.slug}`,
                    component: slash(template),
                    context: {
                        id: edge.node.id,
                        contentful_id:  edge.node.contentful_id,
                        slug: edge.node.slug,
                    }
                }

                createPage(page)
                
                console.log("CREATING PAGE...")
                console.log(page)

            })

            resolve()

        })

    })

}