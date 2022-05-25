/**
 *  
 * @param url 
 * @param baseUrl 
 * @returns Promise<Object>
 */
export function get(url: string, baseUrl = process.env.REACT_APP_API_URL){
    const path = baseUrl + url;
    return fetch(path)
        .then(response => response.json())
}

export default get;