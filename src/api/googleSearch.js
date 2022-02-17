import { API_KEY, ENGINE_ID } from '../key.js'

export const searchData = async (term) => {
    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${ENGINE_ID}&q=${term}`);
    const result = data.json();
    return result;
}