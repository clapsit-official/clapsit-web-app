export type UserDataType = {
    user_id: number | null,
    details: {
        fullname: string | null,
        email: string | null,
        phone: string | null,
        birthday: string | null,
        bio: string | null,
        email_registered: string | null,
        preferred_lang: string | null,
        profile_photo_id: string | null
    }
}
