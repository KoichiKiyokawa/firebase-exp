import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from '../env'

const firebaseApp = initializeApp(firebaseConfig)

export const db = getFirestore(firebaseApp)
export const auth = getAuth(firebaseApp)
