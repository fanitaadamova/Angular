class Data {
    method: string;
    uri: string;
    version: string;
    message: string;
    response!: undefined;
    fulfilled: false;

    constructor( method: string,  uri: string,  version: string, message: string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }

}

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);