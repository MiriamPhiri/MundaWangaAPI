
export type AccountRequestDto = {

request: 'Account-Deletion' | 'Password-Reset',

fulfilled: boolean,

user: {
    username: string,
},
}