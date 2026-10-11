import React from 'react';
import About from '../pages/about/About';
import Academics from '../pages/academics/Academics';
import Admissions from '../pages/admissions/Admissions';
import Gallery from '../pages/gallery/Gallery';
import NotFound from '../pages/not-found/NotFound';
import Contact from '../pages/contact/Contact';
import Apply from '../pages/apply/Apply';

export const pageRoutes = [
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'academics',
    element: <Academics />,
  },
  {
    path: 'admissions',
    element: <Admissions />,
  },
  {
    path: 'gallery',
    element: <Gallery />,
  },
  {
    path: 'contact',
    element: <Contact />,
  },
  {
    path: 'apply',
    element: <Apply />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];
