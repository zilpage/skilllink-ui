const UrlService =  {
    
    // API_BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:8083" : "http://209.188.7.238:8083",
    BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:8083" : "http://209.188.7.238:8083",

    API_BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:7080/api/v1/skilllink" : "http://209.188.7.238:8084/api/v1/payment",
    
    // user management
    LOGIN: "/users/login",
    SIGN_UP: "/users/create",
    CREATE_CAMPAIGN: "/campaign",
    GET_CAMPAIGNS: "/campaigns",
    ACTIVATE_CAMPAIGN: "/activate/campaign",


};

export default UrlService