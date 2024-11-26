import { createElement } from "https://esm.sh/v128/preact@10.22.0/src/index.js";
import { allGames, Game } from "../routes/api/games.ts";

const sortedGames = allGames.sort((a, b) => (a.name < b.name ? -1 : 1));

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

export function ContinuedGames() {
    return (
        <div class="flex flex-col gap-10 align-center items-center">
            <h1 class="text-3xl text-purple-100">To Be Continued Games</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 align-center gap-5 md:gap-6 lg:gap-7">
                {sortedGames.map((game: Game, index: number) => {
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
                        game.toBeContinued &&
                        (
                            <article
                                key={index}
                                class="card w-40 md:w-56 lg:w-64 xl:w-72"
                            >
                                <a href={`${game.link}`} target={"_blank"}>
                                    <img
                                        class="self-center rounded-md"
                                        src={game.boxArt}
                                        alt={game.name}
                                    />
                                </a>
                                <div
                                    key={index}
                                    class="rating rating-md rating-half justify-center items-center mt-4 mb-2"
                                >
                                    {ratings}
                                    {emptyRatings}
                                </div>

                                <div>
                                    <p class="text-purple-100 text-center">
                                        {game?.completedOn}
                                    </p>
                                </div>
                            </article>
                        )
                    );
                })}
            </div>
        </div>
    );
}
