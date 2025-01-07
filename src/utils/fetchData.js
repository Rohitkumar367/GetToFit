
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-Rapidapi-Host': 'exercisedb.p.rapidapi.com',
        'X-Rapidapi-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

export const fetchData = async(URL, options) => {
    const response = await fetch(URL, options);
    const data = await response.json();

    return data;
}
