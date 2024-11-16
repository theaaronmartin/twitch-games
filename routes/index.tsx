import { CompletedGames } from "../components/CompletedGames.tsx";
import { QueuedGames } from "../components/QueuedGames.tsx";

export default function Home() {
  return (
    <div class="flex flex-col gap-20 align-center items-center bg-[#090909] pb-16">
      <a href="https://www.twitch.tv/plaguezaddy" target="_blank">
        <img
          class="w-64 md:w-72 lg:w-96 mt-16"
          src="https://res.cloudinary.com/ddz9c0wp9/image/upload/v1731716770/purple-ghost-transparent_gshtz8.webp"
          alt="Logo"
        />
      </a>
      <CompletedGames />
      <QueuedGames />
    </div>
  );
}
