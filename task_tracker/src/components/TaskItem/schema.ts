import {z} from "zod"

export const validationScheme =  z.object({taskName:z.string().min(1,"Name is required"),description:z.string(), priority:z.string().min(1), date:z.string()})