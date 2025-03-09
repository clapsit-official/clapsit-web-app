export type LoginDataType = {
    access_token: string | null, 
    refresh_token: string | null, 
    expires_in: Date | string | null
};

export type AuthStateType = {
    loginData: LoginDataType;
    emailConfirmRequired: Boolean
}
