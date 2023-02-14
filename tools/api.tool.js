const axios = require('axios');
const ROUTE_METHODS = require('../contants/route-methods.const');

module.exports.get = async(url, source, api_key) => {
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
}

module.exports.post = async(url, payload, source, api_key) => {
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
}

module.exports.patch = async(url, payload, source, api_key) => {
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
}


module.exports.delete = async(url, source, api_key) => {
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
}
