import { Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";
import { createElement } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import { allGames } from "../routes/api/games.ts";

const RatingHalfLeft = () => (
    <input
        type="radio"
        disabled
        class="mask mask-star-2 mask-half-1 bg-orange-400"
    />
);

const RatingHalfRight = () => (
    <input
        type="radio"
        disabled
        class="mask mask-star-2 mask-half-2 bg-orange-400"
    />
);

const EmptyRatingHalfLeft = () => (
    <input
        type="radio"
        disabled
        class="mask mask-star-2 mask-half-1 bg-orange-400 bg-opacity-20"
    />
);

const EmptyRatingHalfRight = () => (
    <input
        type="radio"
        disabled
        class="mask mask-star-2 mask-half-2 bg-orange-400 bg-opacity-20"
    />
);

export default function Game(props: PageProps) {
    const id = props.params.id;
    const game = allGames.find((game) => game.id == Number(id));

    const ratings: createElement.JSX.Element[] = [];
    if (game?.rating != undefined) {
        for (let i = 0; i <= game.rating; i += 0.5) {
            if (i == game.rating) {
                break;
            } else if (i % 1 == 0) {
                ratings.push(<RatingHalfLeft />);
            } else if (i % 1 != 0) {
                ratings.push(<RatingHalfRight />);
            }
        }
    }

    const emptyRatings: createElement.JSX.Element[] = [];
    if (game?.rating != undefined) {
        if ((5 - game.rating) % 1 == 0) {
            for (let i = 1; i <= 5 - game.rating; i++) {
                emptyRatings.push(<EmptyRatingHalfLeft />);
                emptyRatings.push(<EmptyRatingHalfRight />);
            }
        } else {
            emptyRatings.push(<EmptyRatingHalfRight />);
            for (let i = 1; i <= 4 - game.rating + 0.5; i++) {
                emptyRatings.push(<EmptyRatingHalfLeft />);
                emptyRatings.push(<EmptyRatingHalfRight />);
            }
        }
    }

    return (
        <>
            <Head>
                <title>{game?.name}</title>
            </Head>
            <div class="flex flex-col gap-20 align-center items-center bg-[#090909]">
                <h1 class="text-3xl text-purple-100 mt-16">{game?.name}</h1>
                <div class="grid grid-cols-1 align-center gap-8">
                    <article class="card w-80 xl:w-auto">
                        <a href={game?.link} target="_blank">
                            <img
                                class="self-center rounded-md"
                                src={game?.boxArt}
                                alt={game?.name}
                            />
                        </a>
                    </article>
                    {game?.rating != undefined && game?.rating > 0 && (
                        <div class="rating rating-lg rating-half justify-center items-center">
                            {ratings}
                            {emptyRatings}
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
