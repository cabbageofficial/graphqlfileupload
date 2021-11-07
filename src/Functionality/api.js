import axios from "axios"
import FormData from "form-data"

export const singleUploadApi = async (data) => {
    var formData = new FormData();

    formData.append('operations', '{"query" : "mutation singleUpload($file: Upload!) {singleUpload(file: $file){message}}", "variables" : {"file": null}}');
    formData.append('map', '{"0": ["variables.file"]}');
    formData.append('0', data.picture[0]);
    await axios.post("http://localhost:3001/graphql", formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}


export const multipleUploadApi = async (data) => {
    console.log(data);
    var formData = new FormData();
    formData.append('operations', `{ "query": "mutation multipleUpload($file:[ Upload]!) {multipleUpload(file: $file){message}}", "variables": { "file": [${new Array(data.picture.length).fill('null')}] } }`);
    if (data.picture.length > 0) {
        const map = {};
        Array.from(data.picture).forEach((file, i) => {
            map[i] = [`variables.file.${i}`]
        });
        formData.append('map', JSON.stringify(map));
        Array.from(data.picture).forEach((file, i) => {
            formData.append(`${i}`, file);
        });
    }
    await axios.post("http://localhost:3001/graphql", formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => console.log(res))
        .catch(err => console.log(err))

}
