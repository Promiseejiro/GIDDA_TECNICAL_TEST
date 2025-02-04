
const userDetails = "user-details"

export const storeLocalUser = (data: any | null) => {
    sessionStorage.setItem(userDetails, JSON.stringify(data));
}

export const getLocalUser = () => {
    return sessionStorage.getItem("user-details")
        ? (JSON.parse(sessionStorage.getItem("user-details")!))
        : null;
}

export const deleteLocalUser = () => {
    sessionStorage.removeItem(userDetails);
}
