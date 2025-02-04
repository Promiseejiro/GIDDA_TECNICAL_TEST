import { InferType, object, string, number, mixed } from "yup";

export const LoginSchema = object({
    email: string()
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Invalid email address"
        )
        .required("Email is required"),
    password: string().required("Password is required"),
});

export type LoginFormInterface = InferType<typeof LoginSchema>;

export const createEstateSchema = object({
    name: string().required("Name is required"),
    cityId: string().required("City is required"),
    state: string().required("State is required"),
    address: string().required("Address is required"),
    videoUrl: string().optional(),
    ownerType: string().required("Owner is required"),
    description: string().optional(),
    completionStatus: string().required("Status is required"),
    completionDate: mixed().required("Date is required"),
    completionLevel: number().optional(),
    landmark: number().optional(),
    longitude: number().optional(),
    latitude: number().optional(),
    landSize: number().optional(),
    country: string().required("cuntry is required")
})