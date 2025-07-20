import type { LangOptionsType } from "~/constants/types/LocalesType"

export type UserDataType = {
    user_id: number | null,
    details: {
        fullname: string | null,
        email: string | null,
        phone: string | null,
        birthday: string | null,
        bio: string | null,
        email_registered: string | null,
        preferred_lang: LangOptionsType | null,
        profile_photo_id: string | null
    }
}
