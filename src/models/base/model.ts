import { collection, CollectionReference, doc, DocumentReference, getDoc, updateDoc } from 'firebase/firestore/lite'
import { db } from '../../plugins/firebase'

type ID = string | number

// ここを参考に ActiveRecord likeにする
// https://stackoverflow.com/questions/52518125/workaround-for-accessing-class-type-arguments-in-static-method-in-typescript
class BaseModel<T extends Record<string, unknown>> {
  static get collectionName(): string {
    return ''
  }

  static firestore = db

  static get collectionReference() {
    return collection(this.firestore, this.collectionName)
  }

  protected static getDocumentReferenceByID(id: ID) {
    return doc(this.firestore, `${this.collectionName}/${id}`)
  }

  constructor(public data: T & { id?: ID }) {}

  static async find<T extends Record<string, unknown>>(id: ID) {
    const snap = await getDoc(BaseModel.getDocumentReferenceByID(id))
    const data = snap.data()
    return new BaseModel({ ...(data as T), id: snap.id })
  }

  async save() {
    await updateDoc(BaseModel.getDocumentReferenceByID(this.data.id), this.data)
  }
}

type User = { name: string }

class UserModel extends BaseModel<User> {
  static get collectionName() {
    return 'users'
  }

  get isLongName() {
    return this.data.name.length >= 10
  }
}

;(async () => {
  const user = await UserModel.find('hoge')
  user.isLongName
})()
