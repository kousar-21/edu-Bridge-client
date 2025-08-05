export const myTutorialPromise = (email) => {
    console.log(email)
    return fetch(`https://language-club-orcin.vercel.app/addTutors?email=${email}`).then(res => res.json())

}