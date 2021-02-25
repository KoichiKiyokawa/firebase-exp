import {
  getDocs,
  collection,
  CollectionReference,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  DocumentReference,
} from 'firebase/firestore/lite'
import { db } from '../../plugins/firebase'

type ID = string | number

export abstract class BaseRepository<T extends Record<string, unknown>> {
  /**
   * e.g. 'users', 'posts'
   */
  abstract get collectionName(): string

  get collectionReference() {
    return collection(this.firestore, this.collectionName) as CollectionReference<T>
  }

  constructor(private readonly firestore = db) {}

  protected getDocumentReferenceByID(id: ID) {
    return doc(this.firestore, `${this.collectionName}/${id}`) as DocumentReference<T>
  }

  async find(id: ID): Promise<T & { id: ID }> {
    const snap = await getDoc(this.getDocumentReferenceByID(id))
    const data = snap.data()
    return { ...(data as T), id: snap.id }
  }

  async all(...args: any[]): Promise<(T & { id: ID })[]> {
    const snap = await getDocs(this.collectionReference)
    return snap.docs.map((doc) => ({ ...(doc.data() as T), id: doc.id }))
  }

  async update(id: ID, data: Partial<T>): Promise<void> {
    await updateDoc(this.getDocumentReferenceByID(id), data)
  }

  async destroy(id: ID): Promise<void> {
    await deleteDoc(this.getDocumentReferenceByID(id))
  }
}
