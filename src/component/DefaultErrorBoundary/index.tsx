import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { i18nMap } from "../../i18n/map";

type Props = PropsWithChildren;

export default function DefaultErrorBoundary({ children }: Props) {
  const { t } = useTranslation();

  return (
    <ErrorBoundary
      fallback={<Typography>{t(i18nMap.error.defaultMessage)}</Typography>}
    >
      {children}
    </ErrorBoundary>
  );
}