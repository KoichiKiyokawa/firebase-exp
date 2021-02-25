import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../plugins/firebase'

export class AuthService {
  static async login(email: string, password: string): Promise<void> {
    await signInWithEmailAndPassword(auth, email, password)
  }

  static async logout(): Promise<void> {
    await auth.signOut()
  }
}
