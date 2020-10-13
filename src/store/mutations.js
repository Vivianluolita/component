import * as types from './mutation-type'
const mutations = {
    [types.SET_TABLEDATE](state, tableData) {
        debugger
        state.tableData = tableData
    },
    [types.DEL_TABLEDATA](state, index) {
        debugger
        state.tableData = state.tableData.filter((v, i) => i !== index)
        console.log("tableData"+state.tableData)
    },
    [types.DELETE_CONFIRMDATA](state, index) {
        debugger
        state.confirmData = state.confirmData.filter((v, i) => i !== index)
        console.log("tableData"+state.confirmData)
    },
    [types.SET_COFIRMDATA](state, confirmData) {
        debugger
        state.confirmData = confirmData
        console.log("confirmData"+state.confirmData)
    },
    [types.SET_CONCELDATA](state, cancelData) {
        debugger
        state.confirmData = cancelData
        console.log("confirmData"+state.confirmData)
    },
    [types.SET_CANCELCHECKED](state,confirmData,tableData) {
        debugger
        if(state.tableData.length > state.confirmData.length){
            state.cancelChecked = state.tableData.filter(function(el){
                return state.confirmData.indexOf(el) < 0
            })
        }else {
            state.cancelChecked = state.confirmData.filter(function(el){
                return state.tableData.indexOf(el) < 0
            })
        }
        
        console.log("cancelChecked"+state.cancelChecked)
    },
    [types.SET_CLEARCHECKED](state) {
        debugger
        state.cancelChecked = []
    },
    // 分页
    [types.UPDATE_TOTAL] (state, total) {
        state.pager = { ...state.pager, total }
    },
    // 分页 查询
    [types.UPDATE_SEARCH] (state, { pager, pageParam }) {
        state.pager = pager
        if (pageParam) state.pageParam = pageParam
    }
}
export default mutations