import DomHelper from "./DomHelper";

const {ccclass, property} = cc._decorator;
@ccclass
export default class Helloworld extends cc.Component {

    @property(DomHelper)
    domHelper: DomHelper = null;

    onLoad() {}

    start () {
        let myChart = echarts.init(this.domHelper.getDom());
        this.domHelper.echarts = myChart;
        var option = {
            title: {text: 'Line Chart'},
            tooltip: {},
            toolbox: {
                feature: {
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    },
                    restore: {}
                }
            },
            xAxis: {},
            yAxis: {},
            series: [{
                type: 'line',
                smooth: true,
                
                data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
            }]
        };
        myChart.setOption(option);
    }

    onClickShow() {
        this.domHelper.node.active = true;
    }
    onClickHide() {
        this.domHelper.node.active = false;

        
    }
}
