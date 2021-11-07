/** @jsxImportSource theme-ui */
import { Container, Flex, Box, Image, Heading, Paragraph } from "theme-ui";

import Logo from "Assets/cabbage.png"

const Navigation = () => {
    return (
        <Container>
            <Flex sx={{ alignItems: "center" }}>
                <Box sx={{ flex: "0 0 40%" }}>
                    <Image sx={{ width: "100px" }} src={Logo} alt="Siam Ahnaf" />
                </Box>
                <Box sx={{ flex: "0 0 20%", textAlign: "center" }}>
                    <Paragraph as="p" sx={styles.Paragragh}>cabbage.gq</Paragraph>
                </Box>
                <Box sx={{ flex: "0 0 40%", textAlign: "right" }}>
                    <Heading sx={styles.Title} as="h3"> by Siam Ahnaf</Heading>
                </Box>
            </Flex>
            <Box sx={styles.Divider}></Box>
        </Container>
    );
};

export default Navigation;

const styles = {
    Title: {
        fontSize: "25px",
        fontWeight: 400
    },
    Divider: {
        width: "100%",
        height: "10px",
        background: "linear-gradient(to right, #43789B, #F3D031)",
        borderRadius: "3px",
        marginTop: "6px"
    },
    Paragragh: {
        background: "linear-gradient(to right, #43789B, #F3D031)",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        cursor: "pointer"
    }
}