import {
    INC,
    DEC,
    RESET,
    INC_CUSTOM,
    INC_TWO,
    DEC_TWO,
    RESET_TWO,
    INC_CUSTOM_TWO,
    ON_USERS_LOADED,
    ON_ADD_TO_BAD, ON_REMOVE_FROM_BAD,
} from '../action-types'
export const photoAction = (payload) => ({type: ON_USERS_LOADED, payload })
export const incAction = () => ({type: INC, INC_TWO})
export const incCustomAction = (payload) => ({type: INC_CUSTOM, INC_CUSTOM_TWO, payload})
export const decAction = () => ({type: DEC, DEC_TWO})
export const resetAction = () => ({type: RESET, RESET_TWO})
export const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload })
export const onRemoveFromBad = (payload) => ({type: ON_REMOVE_FROM_BAD, payload })

// export const incAction = () => ({type: INC_TWO})
// export const  incCustomAction = (payload) => ({type: INC_CUSTOM_TWO, payload})
// export const  decAction = () => ({type: DEC_TWO})
// export const  resetAction = () => ({type: RESET_TWO})



