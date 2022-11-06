export interface IUser {
    imageUrl: string
    prefix:string
    fullName: string
    nickName: string
    birthDay: number
    email: string
    tel: number
}

export interface ILogin {
    userName: string
    passWord: string
}

export interface IUesrDetail extends ISettingComponents { }

/*
SETTING
*/

export interface ISettingComponents {
    skills:ISkillDetail[]
    projects: IProjectDetail[]
    experiences: IExperienceDetail[]
    educationals: IEducationalDetail[]
    settings: ISettingComponentsDetail[]
}

// PROJECT
export interface ISkillDetail {
    imageUrl: string
}
// PROJECT
export interface IProjectDetail {
    imageUrl: string
    title: string
    linkTo: string
}
// EXPERIENCE
export interface IExperienceDetail {
    position: string
    companyName: string
    startWorkDate: number
    endWorkDate: number
    responsibilitys:string[]
}
// EDUCATION
export interface IEducationalDetail {
    imageUrl: string
    title: string
    linkTo: string
}

export interface ISettingComponentsDetail {
    useGrid: boolean
    gap: number
    grid: string
    components: IComponentsDetail[]
}

export interface IComponentsDetail {
    colSpan: number
    componentName: string
}

export interface IUserId {
    userId: string
}
