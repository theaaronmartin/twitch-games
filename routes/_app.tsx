import { type PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  return (
    <html style={"font-family: Oswald"} lang={"en"}>
      <head>
        <meta charset="utf-8" />
        <meta
          name="description"
          content="PlageZaddy's list of previously streamed games and games that are upcoming"
        />
        <meta
          name="keywords"
          content="PlagueZaddy, Twitch, Stream, Deno, Fresh"
        />
        <meta name="author" content="PlagueZaddy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PlagueZaddy's Games</title>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.14/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="h-screen bg-[#090909]">
        <Component />
      </body>
      {
        /* {document.title == "PlagueZaddy's Games" && (
        <footer
          className={"bg-[#090909] flex align-center justify-center pt-8 pb-8"}
        >
          {console.log(document.title)}
          <div className={"flex align-center"}>
            Made with 💜 by&nbsp;
            <a href={"https://www.twitch.tv/plaguezaddy"} target={"_blank"}>
              PlagueZaddy
            </a>
          </div>
        </footer>
      )} */
      }
    </html>
  );
}
