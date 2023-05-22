const api_key ="a5ef75e2b16d74714061e2553df0c9f2";
const Request = {
    fetchTrending:`/trending/all/week?api_key=${api_key}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${api_key}&language=en-US`,
    fetchTopRated:`/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchActionMovies:`/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchRomanceMovies:`/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchComedyMovies:`/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchDocumentries:`/discover/movie?api_key=${api_key}&with_genres=99`,
    fetchAnimation:`/discover/movie?api_key=${api_key}&with_genres=16`,
    fetchDrama:`/discover/movie?api_key=${api_key}&with_genres=18`,
    fetchTVSeries:`/discover/tv?api_key=${api_key}&with_genres=10765`,
    fetchUpComing:`/movie/upcoming?api_key=${api_key}&language=en-US&page=1`
}
export default Request;
// /movie/list?api_key=${api_key}&with_genres=27
