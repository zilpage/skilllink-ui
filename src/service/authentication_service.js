var _ = require('lodash');

class AuthenticationService {


    static setSession(token, id, name) {

        this.setToken(token);
        this.setId(id);
        this.setName(name);
    }


    static clearLocalstorage() {
        localStorage.clear();
    }

    static getToken() { return localStorage.getItem('app:auth:token'); }

    static setToken(token) {

        if (_.isNull(token)) {
            localStorage.removeItem('app:auth:token');
        } else {
            localStorage.setItem('app:auth:token', token);
        }

    }

    static getId() { return localStorage.getItem('app:auth:id'); }

    static setId(id) {

        if (_.isNull(id)) {
            localStorage.removeItem('app:auth:id');
        } else {
            localStorage.setItem('app:auth:id', id);
        }

    }

    static getName() { return localStorage.getItem('app:auth:name'); }

    static setName(name) {

        if (_.isNull(name)) {
            localStorage.removeItem('app:auth:name');
        } else {
            localStorage.setItem('app:auth:name', name);
        }

    }

}

export default AuthenticationService;