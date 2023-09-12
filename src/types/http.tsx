interface IHttpError {
  error: {
    message: string;
    name: string;
    stack: string;
    config: {
      transitional: {
        silentJSONParsing: true;
        forcedJSONParsing: true;
        clarifyTimeoutError: false;
      };
      adapter: string[];
      transformRequest: any[];
      transformResponse: any[];
      timeout: number;
      xsrfCookieName: string;
      xsrfHeaderName: string;
      maxContentLength: number;
      maxBodyLength: number;
      env: any;
      headers: {
        Accept: string;
      };
      baseURL: string;
      withCredentials: boolean;
      method: string;
      url: string;
    };
    code: string;
    status: number;
  };
}
