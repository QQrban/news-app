
export const getTopNews = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dd0107476b8f4e46b60758bd6c8906c1');
    return response.json();
}