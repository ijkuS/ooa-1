import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { firebaseAuth } from './fbase-config';

export interface LoginFormValues {
    email: string;
    password: string;
}
export interface UserFormValues {
    email: string;
    password: string;
    displayName: string;
}

// login functionality
export const firebaseLogin = async ({ email, password }: LoginFormValues) => {
    const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
    return result;
};

// sign up functionality
export const firebaseSignUp = async ({ email, password }: UserFormValues) => {
    const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    return result;
};

// logout functionality
export const firebaseLogout = async () => {
    await signOut(firebaseAuth);
};
