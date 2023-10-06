import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promtopia",
  description: "Discover & Share AI Prompts",
  icon: "/assets/images/logo.svg",
  content: "/assets/images/home.png",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content={metadata.content} />
        <link rel="icon" href={metadata.icon} />
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
