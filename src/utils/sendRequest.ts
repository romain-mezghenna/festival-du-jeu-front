import axios, { AxiosRequestConfig } from 'axios';

// URL de base de l'API
const API_BASE_URL = 'https://festivaldujeuapi.onrender.com/festivaldujeu/api';

/**
 * Exécute une requête HTTP avec Axios en utilisant l'URL de base de l'API.
 * 
 * @param endpoint Le endpoint de l'API.
 * @param method La méthode HTTP sous forme de chaîne ('get', 'post', 'put', etc.).
 * @param data L'objet JavaScript à envoyer comme corps de la requête pour les méthodes POST et PUT.
 * @param token Le jeton d'authentification (facultatif).
 * @param callback La fonction de rappel à exécuter avec la réponse ou l'erreur.
 */
export function sendRequest(
    endpoint: string,
    method: string,
    data: any = null,
    token: string = '',
    callback: (error: any, response: any) => void
): void {
    const config: AxiosRequestConfig = {
        method: method,
        url: `${API_BASE_URL}/${endpoint}`, // Concaténation de l'URL de base avec le endpoint
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        data: data
    };

    axios(config)
    .then(response => callback(null, response.data))
    .catch(error => callback(error.response || error.message, null));
}
