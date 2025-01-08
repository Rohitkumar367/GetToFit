
export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-Rapidapi-Host': 'exercisedb.p.rapidapi.com',
        'X-Rapidapi-Key': process.env.REACT_APP_RAPID_API_KEY
    }
};

export const fetchData = async(URL, options, limit=0, offset=0) => {
    const paginatedURL = `${URL}?limit=${limit}&offset=${offset}`;
    const response = await fetch(paginatedURL, options);
    const data = await response.json();

    return data;
}
