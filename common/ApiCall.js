
export const postData = async (endPoint = '', data = {}) => {
    const url = `https://health-be.onrender.com/${endPoint}`;
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