export default app =>{
    /** 首页的 Echarts */
    app.router.get('/dashboard/echarts', app.controller.dashboard.get_EchartsData)
}