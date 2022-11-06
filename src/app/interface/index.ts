import { IDate } from "./type-app";
import { IUserId, ILogin, IUesrDetail, IUser } from "./type-user";

export namespace User{
    export type UserCreate = IUser & ILogin
    export type UserUpdate = IUser & IUesrDetail & IUserId
    export type UserDetail = IUser & IUesrDetail & IUserId & IDate
}