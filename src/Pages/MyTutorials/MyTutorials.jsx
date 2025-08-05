import React, { Suspense } from 'react';
import useAuth from '../../CustomHook/useAuth';
import Tutorials from './Tutorials';
import { myTutorialPromise } from '../../Api/MyTutorialApi';
import LoaderSpinner from '../../Component/Spinner/LoaderSpinner';

const MyTutorials = () => {
    const { users } = useAuth()

    return (
        <div className='py-10 min-h-[calc(100vh-80px-324px)]'>
            <Suspense fallback={<LoaderSpinner></LoaderSpinner>}>
                <Tutorials myTutorialPromise={myTutorialPromise(users.email)}></Tutorials>
            </Suspense>
        </div>
    );
};

export default MyTutorials;