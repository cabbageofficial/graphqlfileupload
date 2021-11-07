/** @jsxImportSource theme-ui */
import { useState } from "react"
import { Container, Box, Button, Heading, Input, Label, Image } from "theme-ui";
import { useForm } from "react-hook-form";

import { multipleUploadApi } from "Functionality/api";

const MultipleUpload = () => {
    const [image, setImage] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onPreviewImage = (e) => {
        const files = Array.from(e.target.files);
        setImage([]);
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImage(oldArray => [...oldArray, reader.result]);
                }
            }
            reader.readAsDataURL(file);
        })
    }
    const onSubmt = (data, e) => {
        multipleUploadApi(data);
    }
    return (
        <Container>
            <Heading as="h1" sx={styles.Title}>Multiple File Upload</Heading>
            <Box as="form" onSubmit={handleSubmit(onSubmt)}>
                <Box sx={styles.FileInput}>
                    <Input
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        {...register("picture")}
                        onChange={onPreviewImage}
                    />
                    <Label htmlFor="images">Choose Images</Label>
                </Box>
                <Box sx={styles.PreviewImage} className="previewImage">
                    {image && image.length > 0 &&
                        image.map((img, i) => (
                            <Image key={i} src={img} alt="Preview Images" />
                        ))
                    }
                </Box>
                <Button sx={styles.Button} type="submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
};
export default MultipleUpload;

const styles = {
    Title: {
        fontWeight: 500,
        fontSize: "30px",
        mt: "15px"
    },
    PreviewImage: {
        width: "105px",
        mt: "10px",
        img: {
            borderRadius: "5px",
            width: "100%",
            height: "100%",
            objectFit: "cover"
        }
    },
    FileInput: {
        flex: "0 0 75%",
        position: "relative",
        input: {
            opacity: 0
        },
        label: {
            fontSize: ["12px", "unset"],
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            border: "1px solid #0000004d",
            py: "8px",
            paddingLeft: "10px",
            borderRadius: "4px",
            opacity: 0.5,
            cursor: "pointer",
            "&:after": {
                content: '"Browser"',
                position: "absolute",
                right: "0",
                top: "0",
                fontSize: ["12px", "16px"],
                background: "#e9ecef",
                bottom: "0",
                display: "flex",
                placeItems: "center",
                px: "10px",
                borderRadius: "0 4px 4px 0",
                borderLeft: "1px solid #0000004d"
            }
        }
    },
    Button: {
        bg: "#FF5A5F",
        marginTop: "5px",
        fontWeight: 700,
        cursor: "pointer"
    }
}