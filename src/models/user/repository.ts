import { getDocs, limit, query, where } from 'firebase/firestore/lite'
import { BaseRepository } from '../base/repository'
import { User } from './entity'

export class UserRepository extends BaseRepository<User> {
  get collectionName() {
    return 'users'
  }

  async findByUid(uid: string) {
    const key: keyof User = 'uid'
    const snap = await getDocs(query(this.collectionReference, where(key, '==', uid), limit(1)))
    const [doc] = snap.docs
    return { ...(doc.data() as User), id: doc.id }
  }
}
