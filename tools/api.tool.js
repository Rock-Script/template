const axios = require('axios');
const ROUTE_METHODS = require('../contants/route-methods.const');

module.exports.get = async(url, source, api_key) => {
    try {
        const config = {
            url: url,
            method: ROUTE_METHODS.GET,
            headers: {
                "x-api-source": source,
                "x-api-key": api_key
            }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(`
            url: ${url}
            source: ${source}
            ${error.message}
        `);
    }
}

module.exports.post = async(url, payload, source, api_key) => {
    try {
        const config = {
            url: url,
            method: ROUTE_METHODS.POST,
            data: payload,
            headers: {
                "x-api-source": source,
                "x-api-key": api_key
            }
        }
        const response = await axios(config);
        return response.data; 
    } catch (error) {
        console.error(`
            url: ${url}
            source: ${source}
            payload: ${JSON.stringify(payload)}
            ${error.message}
        `);
    }
}

module.exports.patch = async(url, payload, source, api_key) => {
    try {
        const config = {
            url: url,
            method: ROUTE_METHODS.PATCH,
            data: payload,
            headers: {
                "x-api-source": source,
                "x-api-key": api_key
            }
        }
        const response = await axios(config);
        return response.data; 
    } catch (error) {
        console.error(`
            url: ${url}
            source: ${source}
            payload: ${JSON.stringify(payload)}
            ${error.message}
        `);
    }
}


module.exports.delete = async(url, source, api_key) => {
    try {
        const config = {
            url: url,
            method: ROUTE_METHODS.DELETE,
            headers: {
                "x-api-source": source,
                "x-api-key": api_key
            }
        }
        const response = await axios(config);
        return response.data;
    } catch (error) {
        console.error(`
            url: ${url}
            source: ${source}
            ${error.message}
        `);
    }
}
