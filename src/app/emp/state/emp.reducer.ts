import { createAction, createFeatureSelector, createReducer, createSelector, on, props } from "@ngrx/store";
import { IEmp } from "src/app/Shared/Types/emp-type";

export interface EmpState{
    emps:IEmp;
}
const initialState: EmpState={
    emps:null
}
export const setCurrentEmp = createAction(
        '[emp] selected',
        props<{empData:IEmp}>()
        );
export const clearCurrentEmp = createAction(
    '[emp] clear current emp'
    );

const getEmpFeatureState = createFeatureSelector<EmpState>('emps');
export const getCurrentEmp =  createSelector(
    getEmpFeatureState,
    state=> state.emps      //Projector function to get result of selector function
);
export const empReducer = createReducer<EmpState>(
   initialState ,
    on(setCurrentEmp, (state, action):EmpState=>{
        console.log('original state: ' + JSON.stringify(state));
        return {
            ...state,
            emps:action.empData
        };
    }),
    on(clearCurrentEmp,(state):EmpState=>{
        return{
            ...state,
            emps:null
        }
    })
);