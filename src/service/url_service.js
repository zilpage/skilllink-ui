const UrlService =  {
    
    BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:7080" : "http://skilllink.org",

    API_BASE_PATH : process.env.NODE_ENV !== 'production' ? "http://localhost:7080/api/v1/skilllink" : "http://skilllink.org/api/v1/skilllink",
    
    // user management
    LOGIN: "/users/login",
    SIGN_UP: "/users/create",
    CREATE_CAMPAIGN: "/campaign",
    GET_CAMPAIGNS: "/campaigns",
    GET_PUBLIC_CAMPAIGNS: "/public/campaigns",
    ACTIVATE_CAMPAIGN: "/activate/campaign",
    CONTRIBUTION: "/contribution",
    GET_CONTRIBUTIONS: "/public/contributions",


};

export default UrlService