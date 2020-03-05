export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e6109003647ab6d3b51c11a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ypjzzvpn',
                  apiId: 'fe03ba80-ac19-40c8-8652-fed5a5cf930e'
                },
                {
                  buildHookId: '5e6109003a31e56765aa600d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7yo76c4k',
                  apiId: '897279ca-d21a-483c-8ad3-baab6dd50abb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dameradev/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7yo76c4k.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
