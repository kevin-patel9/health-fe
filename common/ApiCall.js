
export const postData = async (endPoint = '', data = {}) => {
    const url = `http://192.168.0.103:9000/${endPoint}`;
    let headers = {
        'Content-Type': 'application/json',
    }

    try {
        let response = {};
        response = await fetch(url, {
            body: JSON.stringify(data),
            method: 'POST',
            headers,
        });

        return response.json();
    } catch (e) {
        console.log('error on POST -> ', e);
    }
}