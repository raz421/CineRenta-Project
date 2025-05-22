export default function getMovieImage(name) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}
