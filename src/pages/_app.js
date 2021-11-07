import { ThemeProvider } from "theme-ui";
import theme from "theme/index";
import "@fontsource/baloo-da-2"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
