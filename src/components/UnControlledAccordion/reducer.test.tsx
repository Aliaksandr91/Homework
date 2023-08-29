import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducer should change value to opposite value', () => {
    //data
const state: StateType = {
    collapsed: false
}
   //action
const newState =  reducer(state,{type:TOGGLE_COLLAPSED})
    //expection
    expect(newState.collapsed).toBe(true)
})


test('reducer should be throw error', () => {
const state: StateType = {
    collapsed: true
}
const newState =  reducer(state,{type:TOGGLE_COLLAPSED})
    expect(newState.collapsed).toBe(false)
})
test('collapsed should be Error', () => {
const state: StateType = {
    collapsed: true
}
    expect(()=> reducer(state,{type:'FAKE_TYPE'})).toThrowError()
})