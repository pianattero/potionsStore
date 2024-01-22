import axios from 'axios'
import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'

export abstract class HTTPBaseService {
    protected instance: AxiosInstance

    public constructor() {
        this.instance = axios.create({
            baseURL: 'https://api.potterdb.com/v1'
        })
        this.initializeRequestInterceptor()
        this.initializeResponseInterceptor()
    }

    private initializeRequestInterceptor = () => {
        this.instance.interceptors.request.use((requestConfig) => {
            return this.handleRequest(requestConfig)
        })
    }

    private initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use((response) => {
            return response
        }, this.handleError)
    }

    private handleRequest = (config: InternalAxiosRequestConfig) => {
        return config
    }

    private handleError = async (error: AxiosError) => {
        const originalRequest = error.config as InternalAxiosRequestConfig
        
        return Promise.reject(error)
    }
}










