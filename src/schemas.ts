import Joi from "joi";
import { NewPlace } from "./protocols";

export const validator = (schema, payload: NewPlace) =>
    schema.validate(payload, { abortEarly: false });

export const PlaceSchema = Joi.object({
    name: Joi.string().required(),
    category: Joi.string().required(),
});

export const RatingSchema = Joi.object({
    rating: Joi.valid("terrible", "bad", "ok", "good", "great").required(),
});