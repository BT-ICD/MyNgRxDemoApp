import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IEmp } from "src/app/Shared/Types/emp-type";

export interface State{
    emps:IEmp;
}
const initialState: State={
    emps:null
}
export const setCurrentEmp = createAction(
        '[emp] selected',
        props<{empData:IEmp}>()
        );
export const clearCurrentEmp = createAction(
    '[emp] clear current emp'
    );
export const empReducer = createReducer<State>(
   initialState as State,
    on(setCurrentEmp, (state, action):State=>{
        console.log('original state: ' + JSON.stringify(state));
        return {
            ...state,
            emps:action.empData
            
        };
    }),
    on(clearCurrentEmp,(state):State=>{
        return{
            ...state,
            emps:null
        }
    })
);