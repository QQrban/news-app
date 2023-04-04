
export const getTopNews = async () => {
    try {
        const response = fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha')
        const result = (await response).json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getSportsNews = async () => {
    try {
        const response = fetch('https://api.nytimes.com/svc/news/v3/content/nyt/sports.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha')
        const result = (await response).json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getEntertainNews = async () => {
    try {
        const response = fetch('https://api.nytimes.com/svc/news/v3/content/nyt/magazine.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha')
        const result = (await response).json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getScienceNews = async () => {
    try {
        const response = fetch('https://api.nytimes.com/svc/news/v3/content/nyt/science.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha')
        const result = (await response).json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

export const getFoodNews = async () => {
    try {
        const response = fetch('https://api.nytimes.com/svc/news/v3/content/nyt/food.json?api-key=x4cRbv0vVnmBqQxaEPCx6rfsqo27y8ha')
        const result = (await response).json();
        return result;
    } catch (err) {
        console.log(err);
    }
}