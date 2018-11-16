const auth = {
    isAuthenticated: false,
    authenticate(username,password,cb) {
        console.log("u",username,"p",password)
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};
export default auth;