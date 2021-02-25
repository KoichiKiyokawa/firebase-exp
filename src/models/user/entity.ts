export type User = {
  name: string
  birthday: Date
  gender: 'male' | 'female' | 'unknown'
  uid: string
}

export class UserEntity {
  constructor(private readonly user: User) {}

  get isChild() {
    return this.user.birthday.getFullYear() - new Date().getFullYear() <= 20
  }
}

const user:User = {name:'', birthday: new Date(1999, 4 - 1, 26) , gender: 'male', uid:'uid1'}
new UserEntity(user).isChild
