import { Schema, model, SchemaTypes } from "mongoose";

const CategorySchema = Schema({
	name: {
		type: SchemaTypes.String,
		required: true,
	},
});

const Category = model("Category", CategroySchema);

export default Category;
