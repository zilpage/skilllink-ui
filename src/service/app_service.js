import request from './request_service';
import UrlService from './url_service';
import AuthenticationService from './authentication_service'
class AppService {

    


    static signup (params) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.SIGN_UP;
        options.params = params;
        options.authenticated = false;      
        return request.post(options);
    }

    static login (params) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.LOGIN;
        options.params = params;
        options.authenticated = false;      
        return request.post(options);
    }

    

    static createCampaign (params) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.CREATE_CAMPAIGN;
        options.params = params;
        options.authenticated = true;      
        return request.post(options);
    }

    static getCampaigns () {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.GET_CAMPAIGNS;
        options.params = null;
        options.authenticated = true;      
        return request.get(options);
    }


    static activateCampaign (param) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.ACTIVATE_CAMPAIGN;
        options.params = param;
        options.authenticated = true;      
        return request.put(options);
    }


    


    
    
    
}

export default AppService;
