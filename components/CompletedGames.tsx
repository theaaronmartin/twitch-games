import { allGames, Game } from "../routes/api/games.ts";

const sortedGames = allGames.sort((a, b) => (a.name < b.name ? -1 : 1));

export function CompletedGames() {
    return (
        <div class="flex flex-col gap-10 align-center items-center">
            <h1 class="text-3xl text-purple-100">Completed Games</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 align-center gap-5 md:gap-6 lg:gap-7">
                {sortedGames.map((game: Game, index: number) => {
                    return (
                        game.isCompleted &&
                        (
                            <article
                                key={index}
                                class="card w-40 md:w-56 lg:w-64 xl:w-72"
                            >
                                <a href={`/${game.id}`}>
                                    <img
                                        class="self-center rounded-md"
                                        src={game.boxArt}
                                        alt={game.name}
                                    />
                                </a>
                            </article>
                        )
                    );
                })}
            </div>
        </div>
    );
}
