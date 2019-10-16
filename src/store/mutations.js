import * as types from './mutation-type'
const mutations = {
    [types.SET_TABLEDATE](state, tableData) {
        state.tableData = tableData
    },
    [types.DEL_TABLEDATA](state, index) {
        state.tableData = state.tableData.filter((v, i) => i !== index)
        console.log("111"+state.tableData)
    },
    // 分页
    [UPDATE_TOTAL] (state, total) {
        state.pager = { ...state.pager, total }
    },
    // 分页 查询
    [UPDATE_SEARCH] (state, { pager, pageParam }) {
        state.pager = pager
        if (pageParam) state.pageParam = pageParam
    }
}
export default mutations