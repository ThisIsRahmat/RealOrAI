import {
  Form,
  Links,
  LiveReload,
  Outlet,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import Footer from './components/footer' 
import Header from './components/header' 

import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];


export default function Root() {
  return (
    <html lang="en">
      <head>
        <Links />
        <Meta />
      </head>
      <body className="h-screen">
      <Header/>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <Footer/>
      </body>
    </html>
  );
}
