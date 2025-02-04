import axios from "axios";
const BASE_URL = "https://dev-api.giddaa.com"
import toast from "react-hot-toast";
import { getLocalUser, deleteLocalUser } from "../utils.ts/sesstions";
const axiosInstance = axios.create({
    baseURL: BASE_URL,
});

export const getRequest = async (url: string) => {
    try {
        const userData = "";
        let response;
        if (userData !== null) {
            response = await axiosInstance.get(url, {
                headers: { Authorization: `Bearer ${getLocalUser().token}` },
            });
        } else {
            response = await axiosInstance.get(url);
        }

        return response.data;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                toastError("Unauthorized! Re-login to continue");
                deleteLocalUser();
                window.location.href = "/login";
                return error.response.data;
            }
            if (error.response.data) {
                return error.response.data;
            }
        } else if (error.request) {
            toastError("Error in request");
            return { success: false, error: error.request };

        } else {
            toastError("Error in request");
            return { success: false, error: error };
        }
    }
};

export const postRequest = async (url: string, data?: any) => {
    try {
        const userData = getLocalUser();
        let response;
        if (userData !== null) {
            response = await axiosInstance.post(url, data, {
                headers: { Authorization: `Bearer ${getLocalUser().token}` },
            });
        } else {
            response = await axiosInstance.post(url, data);
        }
        return response.data;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                toastError("Unauthorized! Re-login to continue");
                deleteLocalUser();
                window.location.href = "/login";
                return;
            }
            if (error.response.data) {
                return error.response.data;
            }
        } else if (error.request) {
            toastError("Error in request");
            return { success: false, error: error.request };
        } else {
            toastError("Error in request");
            return { success: false, error: error };
        }
    }
};

export const patchRequest = async (url: string, data?: any) => {
    try {
        const userData = getLocalUser();
        let response;
        if (userData !== null) {
            response = await axiosInstance.patch(url, data, {
                headers: { Authorization: `Bearer ${getLocalUser().token}` },
            });
        } else {
            response = await axiosInstance.post(url, data);
        }
        return response.data;
    } catch (error: any) {
        if (error.response) {

            if (error.response.status === 401) {
                toastError("Error in request");
                deleteLocalUser();
                window.location.href = "/login";
                return;
            }
            if (error.response.data) {
                return error.response.data;
            }
        } else if (error.request) {

            toastError("Error in request");
            return { success: false, error: error.request };
        } else {

            toastError("Error in request");
            return { success: false, error: error };
        }
    }
};

export const putRequest = async (url: string, data?: any) => {
    try {
        const userData = getLocalUser();
        let response;
        if (userData !== null) {
            response = await axiosInstance.put(url, data, {
                headers: { Authorization: `Bearer ${getLocalUser().token}` },
            });
        } else {
            response = await axiosInstance.post(url, data);
        }
        return response.data;
    } catch (error: any) {
        if (error.response) {

            if (error.response.status === 401) {
                toastError("Unauthorized! Re-login to continue");
                deleteLocalUser();
                window.location.href = "/login";
                return;
            }
            if (error.response.data) {
                return error.response.data;
            }
        } else if (error.request) {

            toastError("Error in request");
        } else {
            toastError("Error in request");
            return { success: false, error: error };
        }
    }
};

export const deleteRequest = async (url: string, data?: any) => {
    try {
        const userData = getLocalUser();
        let response;
        if (userData !== null) {
            response = await axiosInstance.delete(url, {
                headers: { Authorization: `Bearer ${getLocalUser().token}` },
            });
        } else {
            response = await axiosInstance.post(url, data);
        }
        return response.data;
    } catch (error: any) {
        if (error.response) {
            if (error.response.status === 401) {
                toastError("Unauthorized! Re-login to continue");
                deleteLocalUser();
                window.location.href = "/login";
                return;
            }
            if (error.response.data) {
                return error.response.data;
            }
        } else if (error.request) {
            toastError("Error in request");
            return { success: false, error: error.request };
        } else {
            toastError("Error in request");
            return { success: false, error: error };
        }
    }
};

function toastError(arg0: string) {
    return toast.error(arg0);
}
