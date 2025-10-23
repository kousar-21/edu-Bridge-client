import axios from "axios";
import React, { useContext, useEffect } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
    addFavorite,
    fetchFavorites,
    removeFavorite,
} from "../../Redux/slices/favoritesSlice";

const TutorDetails = () => {
    const { users } = useContext(AuthContext);
    const tutorPages = useLoaderData();
    const dispatch = useDispatch();
    const { items: favorites } = useSelector((state) => state.favorites);


    useEffect(() => {
        if (users?.email) {
            dispatch(fetchFavorites(users.email));
        }
    }, [users?.email, dispatch]);


    const isFavorite = favorites?.some(
        (fav) => fav.tutorId === tutorPages._id
    );

    console.log("favourite tutor", favorites)

    const handleBookedTutor = () => {
        const bookingInfo = {
            ...tutorPages,
            tutorId: tutorPages?._id,
            tutorEmail: tutorPages?.email,
            email: users?.email,
        };

        axios
            .post(`https://language-club-orcin.vercel.app/bookedTutors`, bookingInfo)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "You have successfully booked your Tutor!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => toast.error(error.message));
    };


    const handleFavorite = () => {
        if (!users?.email) {
            return toast.error("Please login to save favorites!");
        }

        if (isFavorite) {
            const existingFavorite = favorites.find(
                (fav) => fav.tutorId === tutorPages._id
            );
            if (existingFavorite?._id) {
                dispatch(removeFavorite(existingFavorite._id));
                toast.success("Removed from favorites!");
            }
        } else {
            dispatch(addFavorite({ userEmail: users.email, tutorId: tutorPages._id }));
            toast.success("Added to favorites!");
        }
    };

    return (
        <div className="pb-10 pt-32 min-h-[calc(100vh-80px-324px)]">
            <div className="bg-base-200 border border-gray-300 rounded-3xl w-11/12 md:w-10/12 mx-auto py-10 px-6 transition-colors duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Tutor Image */}
                    <div className="w-full md:w-1/3 lg:w-1/4 flex justify-center">
                        <img
                            src={tutorPages.photo}
                            alt={tutorPages.name}
                            className="rounded-2xl w-60 h-60 object-cover"
                        />
                    </div>

                    {/* Tutor Info */}
                    <div className="w-full md:w-2/3 space-y-3">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl md:text-4xl font-bold">
                                {tutorPages.name}
                            </h1>

                            {/* Favorite Button */}
                            <button
                                onClick={handleFavorite}
                                className="transition-transform duration-200 hover:scale-110"
                            >
                                {isFavorite ? (
                                    <FaHeart className="text-red-500 text-2xl" />
                                ) : (
                                    <FaRegHeart className="text-gray-400 text-2xl hover:text-red-500" />
                                )}
                            </button>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2">
                            <FaStar className="text-yellow-400" />
                            <span className="text-lg font-medium">{tutorPages.review}</span>
                        </div>

                        {/* Tutor Info Details */}
                        <p className="text-base-content/80">
                            <span className="font-semibold">Language:</span>{" "}
                            {tutorPages.language}
                        </p>
                        <p className="text-base-content/80">
                            <span className="font-semibold">Price:</span>{" "}
                            <span className="text-orange-600 dark:text-orange-400 font-semibold">
                                ${tutorPages.price}
                            </span>
                        </p>

                        <p className="text-base-content/70 leading-relaxed">
                            {tutorPages.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <button
                                onClick={handleBookedTutor}
                                className="btn btn-primary w-full sm:w-auto hover:scale-105 transition-transform duration-200"
                            >
                                Book Now
                            </button>
                            <button
                                onClick={handleFavorite}
                                className={`btn ${isFavorite ? "btn-error text-white" : "btn-outline"
                                    } w-full sm:w-auto hover:scale-105 transition-transform duration-200`}
                            >
                                {isFavorite ? "Added to Favorites" : "Add to Favorites"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDetails;
