import useCurrentLang from "../../../i18n/hooks/useCurrentLang";
export class TmdbApiService{
    private readonly baseUrl="https://api.themoviedb.org/3";
    private readonly apiKey="ee7a69014cdc87395359ec51a10a0232"
    public search(term: string, lang: string) {
        fetch(
        `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=${useCurrentLang}
        &query=${term}&page=1&include_adult=false`
        )
        .then((r) => r.json())
        .then((d) =>
            d.results.forEach((m: any) =>
             console.log(`${m.title}: ${m.overview}`))
        )
        .then(console.log);
        }
}