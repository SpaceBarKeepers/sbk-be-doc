
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/sbk-be-doc/__docusaurus/debug',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug','401'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/config',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/config','970'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/content',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/content','17f'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/globalData',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/globalData','8c6'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/metadata',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/metadata','7d6'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/registry',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/registry','a81'),
    exact: true
  },
  {
    path: '/sbk-be-doc/__docusaurus/debug/routes',
    component: ComponentCreator('/sbk-be-doc/__docusaurus/debug/routes','2af'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog',
    component: ComponentCreator('/sbk-be-doc/blog','251'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/archive',
    component: ComponentCreator('/sbk-be-doc/blog/archive','27f'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/first-blog-post',
    component: ComponentCreator('/sbk-be-doc/blog/first-blog-post','ef9'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/long-blog-post',
    component: ComponentCreator('/sbk-be-doc/blog/long-blog-post','379'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/mdx-blog-post',
    component: ComponentCreator('/sbk-be-doc/blog/mdx-blog-post','bcb'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/tags',
    component: ComponentCreator('/sbk-be-doc/blog/tags','5ad'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/tags/docusaurus',
    component: ComponentCreator('/sbk-be-doc/blog/tags/docusaurus','9b8'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/tags/facebook',
    component: ComponentCreator('/sbk-be-doc/blog/tags/facebook','f40'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/tags/hello',
    component: ComponentCreator('/sbk-be-doc/blog/tags/hello','f5e'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/tags/hola',
    component: ComponentCreator('/sbk-be-doc/blog/tags/hola','9f1'),
    exact: true
  },
  {
    path: '/sbk-be-doc/blog/welcome',
    component: ComponentCreator('/sbk-be-doc/blog/welcome','605'),
    exact: true
  },
  {
    path: '/sbk-be-doc/markdown-page',
    component: ComponentCreator('/sbk-be-doc/markdown-page','7d8'),
    exact: true
  },
  {
    path: '/sbk-be-doc/docs',
    component: ComponentCreator('/sbk-be-doc/docs','5ae'),
    routes: [
      {
        path: '/sbk-be-doc/docs/admin-frontend/component-structure',
        component: ComponentCreator('/sbk-be-doc/docs/admin-frontend/component-structure','e5c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/sbk-be-doc/docs/intro',
        component: ComponentCreator('/sbk-be-doc/docs/intro','b37'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/sbk-be-doc/',
    component: ComponentCreator('/sbk-be-doc/','182'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
