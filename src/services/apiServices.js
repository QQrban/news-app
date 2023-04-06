
export const getCategoryNews = async () => {
    try {
        const response = await fetch('https://63c164d699c0a15d28e89cfb.mockapi.io/pety/menu');
        return response.json()
    } catch (err) {
        console.log(err);
    }
}

export const getNews = async (link) => {
    try {
        const response = await fetch(link);
        return response.json()
    } catch (err) {
        console.log(err);
    }
}