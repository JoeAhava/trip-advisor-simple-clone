import { Schema, model, SchemaTypes } from "mongoose";

const PlaceSchema = Schema({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
	thumbnail: {
		type: SchemaTypes.String,
	},
	images: [
		{
			type: SchemaTypes.String,
		},
	],
	category: {
		type: SchemaTypes.ObjectId,
		ref: "Category",
		required: true,
	},
});

const Place = model("Place", PlaceSchema);

export default Place;
