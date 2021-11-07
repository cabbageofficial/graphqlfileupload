/** @jsxImportSource theme-ui */
// Theme-ui & Next Head
import { Container, Image, Box } from "theme-ui";
import Head from 'next/head';
// Subscribe Image
import Youtube from "Assets/Youtube.png";

// Components--Navigation--SingleUpload--MultipleUplaod
import Navigation from "utitls/Navigation";
import SingleUpload from 'components/singleUpload';
import MultipleUpload from 'components/multipleUpload';

export default function Home() {
  return (
    <Container px={"340px"} sx={{ position: "relative" }}>
      <Head>
        <title>File upload to graphql apollo server from next js application</title>
        <meta name="description" content="Created by Siam Ahnaf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={styles.PageContainer}>
        <Navigation />
        <SingleUpload />
        <Box sx={styles.Divider}></Box>
        <MultipleUpload />
      </Box>
      <Box sx={styles.Subscribe}>
        <Image src={Youtube} alt="youtube" />
      </Box>
    </Container>
  )
}


const styles = {
  PageContainer: {
    background: "white",
    boxShadow: "0 0 20px #0000001a",
    padding: "15px 2.5rem",
    borderRadius: "10px",
    mt: "2.5rem"
  },
  Divider: {
    width: "100%",
    height: "5px",
    background: "linear-gradient(to right, #43789B, #F3D031)",
    borderRadius: "3px",
    mt: "20px"
  },
  Subscribe: {
    position: "absolute",
    left: "1em",
    bottom: "-4.5em",
    width: "100px",
    img: {
      width: "100%"
    }
  }
}