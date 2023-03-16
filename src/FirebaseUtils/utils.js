import { collection, doc, getDoc, getDocs, limit, orderBy, query, startAt } from "firebase/firestore";
import db from "./config";

const getRandomArtists = async (required = 24) => {
    let q = query(collection(db, "artists"), limit(required));
    let querySnap = await getDocs(q);
    let data = [];
    querySnap.docs.forEach(doc => {
        data.push(doc.data());
    })
    return data;
}

const getRandomSongs = async (required = 24) => {
    let q = query(collection(db, "songs"), limit(required));
    let querySnap = await getDocs(q);
    let data = [];
    querySnap.docs.forEach(doc => {
        data.push(doc.data());
    })
    return data;
}

const getRandomAlbums = async (required = 24) => {
    let q = query(collection(db, "albums"), limit(required));
    let querySnap = await getDocs(q);
    let data = [];
    querySnap.docs.forEach(doc => {
        data.push(doc.data());
    })
    return data;
}

const ArtistsPagination = async (page = 1, required = 24) => {
    let totalRef = await getDoc(doc(db, "artists", "total"));
    let total = totalRef.data().value;
    let totalPages = Math.ceil(total / required);
    if (page < 1 || page > total) {
        return {data: []}
    }
    let offset = required * (page - 1);
    let q = query(collection(db, "artists"), orderBy("index"), startAt(offset), limit(required));
    let querySnap = await getDocs(q);
    let data = [];
    querySnap.docs.forEach(doc => {
        data.push(doc.data());
    })
    let prev = page - 1;
    prev = prev <= 0 ? null: prev;

    let next = page + 1;
    next = (next > totalPages) ? null : next;
    return {
        next,
        prev,
        data,
    };
}

export { getRandomArtists, getRandomSongs, getRandomAlbums, ArtistsPagination }; 