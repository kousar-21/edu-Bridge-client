import React, { Suspense } from 'react';
import useAuth from '../../CustomHook/useAuth';
import Tutorials from './Tutorials';
import { myTutorialPromise } from '../../Api/MyTutorialApi';
import LoaderSpinner from '../../Component/Spinner/LoaderSpinner';
import FavoritesTable from './FavoritesTable';

const MyTutorials = () => {
    const { users } = useAuth()

    return (
        <div className='pt-32 pb-10 min-h-[calc(100vh-80px-324px)]'>
            <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                <Tutorials myTutorialPromise={myTutorialPromise(users.email)}></Tutorials>
            </Suspense>

            <div>
                <h1 className='text-center text-lg md:text-2xl lg:text-3xl font-bold py-10'>Favourite Tutor</h1>
                <FavoritesTable></FavoritesTable>
            </div>
        </div>
    );
};

export default MyTutorials;