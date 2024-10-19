import { Box } from "@mui/material";
import SearchBar from "../../component/SearchBar";
import { i18nMap } from "../../i18n/map";
import { useTranslation } from "react-i18next";


export default function Movies() {
const { t } = useTranslation();
const onSearch = (term: string) => {
console.log(term);
};
return (
<Box>
<SearchBar
placeholder={t(i18nMap.movies.searchBar.placeholder)}
onSearch={onSearch}
/>
</Box>
)}