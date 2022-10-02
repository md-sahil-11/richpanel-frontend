export const fetchToken = ()=>{
    const token =  localStorage.getItem("access_token");
    return token ? token : null;
}

export const setTokenLocal = (token)=>{
    localStorage.setItem("access_token",token);
}