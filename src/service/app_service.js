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
        options.url = UrlService.API_BASE_PATH + UrlService.CAMPAIGN;
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

    static getPublicCampaigns () {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.GET_PUBLIC_CAMPAIGNS;
        options.params = null;
        options.authenticated = false;      
        return request.get(options);
    }

    static getAdminCampaigns () {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.GET_ADMIN_CAMPAIGNS;
        options.params = null;
        options.authenticated = true;      
        return request.get(options);
    }

    static getCampaignById (id) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.CAMPAIGN+"/"+id;
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


    

    
    static donate (params) {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.CONTRIBUTION;
        options.params = params;
        options.authenticated = true;      
        return request.post(options);
    }

    static getDonations () {
        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.GET_CONTRIBUTIONS;
        options.params = null;
        options.authenticated = true;      
        return request.get(options);
    }
    
    static uploadonly (params) {        
        const formData = new FormData();
        formData.append('file', params.upload);

        let options = Object();
        options.url = UrlService.API_BASE_PATH + UrlService.FILE_UPLOAD;
        options.formData = true;
        options.params = formData;  
        options.authenticated = true;

        return request.post(options);
    }
    
}

export default AppService;
