/**
 * Action types
 */
export enum ApplicationsTypes {
    'LOAD_REQUEST' = '@applications/LOAD_REQUEST',
    'LOAD_SUCCESS' = '@applications/LOAD_SUCCESS',
    'LOAD_FAILURE' = '@applications/LOAD_FAILURE'
}

/**
 *Data types
 */

 export interface Application {
     id: number
     name: string
     url: string
     active: boolean
     picture: string
 }

 /** 
  *  State type
  */

  export interface ApplicationsState {
      readonly data: Application[]
      readonly loading: boolean
      readonly error: boolean
  }

