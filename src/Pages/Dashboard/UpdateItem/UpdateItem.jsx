import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const { name, category, recipe, price, _id } = useLoaderData();

    console.log(name, category, recipe, price, _id);

    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic();

    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data)
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                ' content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            if (menuRes.data.modifiedCount > 0) {
                // reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} Updated to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    }


    return (
        <div className="mt-12">

            <div className="mt-5 w-4/5 p-12 p mx-auto bg-gray-100">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                >

                    <div className="form-control w-full mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe name*</span>
                        </label>
                        <input {...register("name", { required: true })}
                            defaultValue={name}
                            type="text"
                            placeholder="Recipe name"
                            className="input input-bordered w-full" />
                    </div>

                    <div className="flex items-center gap-6 mb-6">

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue={category} {...register("category", { required: true })}
                                className="select select-bordered w-full">
                                <option disabled value="default">Category</option>
                                <option value="dessert">dessert</option>
                                <option value="pizza">pizza</option>
                                <option value="salad">salad</option>
                                <option value="soup">soup</option>
                                <option value="drinks">drinks</option>
                            </select>
                        </div>


                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input {...register('price', { required: true })}
                                type="number"
                                defaultValue={price}
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </div>

                    </div>

                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea defaultValue={recipe}
                            {...register('recipe', { required: true })}
                            className="textarea textarea-bordered h-24"
                            placeholder="Recipe Details">
                        </textarea>
                    </div>

                    <div className="text-center">
                        <button
                            className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white border-none">
                            Update Recipe Details
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default UpdateItem;