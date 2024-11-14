import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { allGames } from "../routes/api/games.ts";

export default function Game(props: PageProps) {
    const id = props.params.id;
    const game = allGames.find((game) => game.id == Number(id));
    return (
        <>
            <Head>
                <title>{game?.name}</title>
            </Head>
            <div class="flex flex-col gap-20 align-center items-center bg-[#090909]">
                <h1 class="text-3xl text-purple-100 mt-16">{game?.name}</h1>
                <div class="grid grid-cols-1 align-center gap-8">
                    <article class="card w-128">
                        <a href={game?.link} target="_blank">
                            <img
                                class="self-center rounded-md"
                                src={game?.boxArt}
                                alt={game?.name}
                            />
                        </a>
                    </article>
                    {game?.rating != undefined && game?.rating > 0 && (
                        <div class="rating justify-center items-center">
                            {[...Array(game?.rating)].map((_e, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    disabled
                                    class="mask mask-star-2 bg-orange-400"
                                />
                            ))}
                            {[...Array(5 - game?.rating)].map((_e, i) => (
                                <input
                                    key={i}
                                    type="radio"
                                    disabled
                                    class="mask mask-star-2 bg-orange-400 bg-opacity-20"
                                />
                            ))}
                        </div>
                    )}
                    {game?.isCompleted && (
                        <div>
                            <p class="text-purple-100 text-center">
                                Completed on: {game?.completedOn}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
