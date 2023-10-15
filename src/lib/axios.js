import axios from "axios";

/**
 * Lista de IPs:
 * 
 * IP do Vitin na casa dele:                192.168.3.3
 * IP do Tiggas na AUPI:                    0.0.0.0
 * IP do Vitin na sala de segunda a quinta: 0.0.0.0
 * IP do Vitin na sala de sexta:            0.0.0.0
 */

const api = axios.create({
    baseURL: "http://192.168.3.3:15600",
    headers: {
        "Access-Control-Allow-Origin": "http://192.168.3.3:15600"
    }
});

export default api;
