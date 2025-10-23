import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites, removeFavorite } from "../../Redux/slices/favoritesSlice";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import NoData from "../../Component/NoData/NoData";

const FavoritesTable = () => {
    const { users } = useContext(AuthContext);
    const dispatch = useDispatch();
    const { items: favorites, loading } = useSelector((state) => state.favorites);

    const [allFavorites, setAllFavorites] = useState([]);

    // Fetch favorites when email is available
    useEffect(() => {
        if (users?.email) {
            dispatch(fetchFavorites(users.email));
        }
    }, [users?.email, dispatch]);

    // Sync local state with Redux store
    useEffect(() => {
        setAllFavorites(favorites);
    }, [favorites]);

    // Handle delete favorite
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(removeFavorite(id));
                toast.success("Removed from favorites!");
                setAllFavorites(allFavorites.filter(fav => fav._id !== id));
            }
        });
    };

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!allFavorites.length) return <NoData />;

    return (
        <div className="overflow-x-auto border border-gray-300 w-11/12 md:w-10/12 mx-auto bg-base-200 dark:bg-gray-700 rounded-2xl p-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th></th>
                        <th>Language</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Review</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allFavorites.map((fav, index) => (
                        <tr key={fav._id}>
                            <th>{index + 1}</th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={fav.tutorDetails.photo} alt={fav.tutorDetails.name} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{fav.tutorDetails.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <span className="badge badge-ghost badge-sm">{fav.tutorDetails.language}</span>
                            </td>
                            <td>
                                <span className='text-orange-700 dark:text-white'>${fav.tutorDetails.price}</span>
                            </td>
                            <td>
                                <abbr title={fav.tutorDetails.description}>
                                    {fav.tutorDetails.description.slice(0, 20)}...
                                </abbr>
                            </td>
                            <td>{fav.tutorDetails.review}</td>
                            <th>
                                <button
                                    onClick={() => handleDelete(fav._id)}
                                    className="btn btn-error btn-xs hover:scale-105 transition-transform duration-200"
                                >
                                    <FaTrash />
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FavoritesTable;
