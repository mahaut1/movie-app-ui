import { Typography } from "@mui/material";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";
import { i18nMap } from "../../i18n/map";

export default function DefaultErrorBoundary({ children }: PropsWithChildren<{}>) {
  const { t } = useTranslation();

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <Typography>
          {t(i18nMap.error.defaultMessage)} {/* Translated error message */}
        </Typography>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}
