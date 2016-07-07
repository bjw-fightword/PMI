$(function(){
    /*加载地图*/
    mapObj = new AMap.Map("container",{
        center:new AMap.LngLat(116.39100556,39.99855833),
        level:16
    });
    mapObj.plugin(["AMap.MapType"],function(){
      //地图类型切换
      var type= new AMap.MapType({
        defaultType:0 //使用2D地图
        });
        mapObj.addControl(type); 
    });
    /*鹰眼*/
    mapObj.plugin(["AMap.OverView"],function(){
        view = new AMap.OverView();
        mapObj.addControl(view);
    });
    //比例尺
    mapObj.plugin(["AMap.Scale"],function(){
        var scale = new AMap.Scale();
        mapObj.addControl(scale);  
    });
    //导航定位视野缩放选择
    mapObj.plugin(["AMap.ToolBar"],function(){
        //加载工具条
        var tool = new AMap.ToolBar();
        mapObj.addControl(tool);   
    });
})