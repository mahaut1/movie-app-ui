import { Tab, Tabs } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { i18nMap } from "../../i18n/map"; 

export default function NavBar() {
    const { t } = useTranslation();
const isHomePage = !!useMatch("/");
const isMoviesPage = !!useMatch("/movies/*");
const [value, setValue] = useState(0);
useEffect(() => {
let selectedIndex = 0;
if (isHomePage) selectedIndex = 0;
if (isMoviesPage) selectedIndex = 1;
setValue(selectedIndex);
}, [isHomePage, isMoviesPage]);
const handleChange = useCallback(
(_: React.SyntheticEvent, newIndex: number) => {
setValue(newIndex);
},
[setValue]
);
const navigate = useNavigate();
const goto = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
      event.preventDefault();
      navigate(href);
    },
    [navigate]
  );
return (
<Tabs role="navigation" value={value} onChange={handleChange}>
<Tab
label={t(i18nMap.navBar.home)}
component="a"
aria-current={isHomePage}
onClick={(e) => goto(e, "/")}
/>
<Tab
label={t(i18nMap.navBar.movies)}
component="a"
aria-current={isMoviesPage}
onClick={(e) => goto(e, "/movies")}
/>
</Tabs>
);
}