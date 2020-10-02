const UrlService =  {
    
    BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:7080" : "http://skilllink.org",

    API_BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:7080/api/v1/skilllink" : "http://skilllink.org/api/v1/skilllink",
    
    // user management
    LOGIN: "/users/login",
    SIGN_UP: "/users/create",
    CREATE_CAMPAIGN: "/campaign",
    GET_CAMPAIGNS: "/campaigns",
    ACTIVATE_CAMPAIGN: "/activate/campaign",


};

export default UrlService