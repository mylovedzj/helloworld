<template>
<div>
    <div class="box">
           <div id="main" class="chart_box"></div>  
           <div id="pie" class="chart_box"></div>
    </div>
    <div class="box">
          <div id="line" class="chart_box"></div>
          <div id="char_3D" class="chart_box"></div>
    </div>
</div>
</template>
<script>
// 引入柱状图图表，图表后缀都为 Chart
import {
    BarChart,LineChart,PieChart
} from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
    VisualMapComponent,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {CanvasRenderer} from 'echarts/renderers';
import {Line3DChart} from 'echarts-gl/charts';
import {Grid3DComponent} from 'echarts-gl/components';
var data_3D = [];
// Parametric curve
for (var t = 0; t < 25; t += 0.001) {
    var x = (1 + 0.25 * Math.cos(75 * t)) * Math.cos(t);
    var y = (1 + 0.25 * Math.cos(75 * t)) * Math.sin(t);
    var z = t + 2.0 * Math.sin(75 * t);
    data_3D.push([x, y, z]);
};
export default {
  data(){
     return {
       id:'',
       option_bar:{
            title: {
                text: '报表DEMO'
            },
            color: [
                 '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
                 '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
           ],
            legend: {},
            tooltip: {},
            dataZoom: {},
            toolbox: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
         option_line:{
            title: {
                text: '报表DEMO'
            },
            color: [
                 '#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
                 '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
           ],
            legend: {},
            tooltip: {},
            dataZoom: {},
            toolbox: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20]
            }]
        },
        option_3D:{
    tooltip: {},
    backgroundColor: '#fff',
    visualMap: {
        show: false,
        dimension: 2,
        min: 0,
        max: 30,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        }
    },
    xAxis3D: {
        type: 'value'
    },
    yAxis3D: {
        type: 'value'
    },
    zAxis3D: {
        type: 'value'
    },
    grid3D: {
        viewControl: {
            projection: 'orthographic'
        }
    },
    series: [{
        type: 'line3D',
        data: data_3D,
        lineStyle: {
            width: 4
        }
    }]
  },
        option_pie:{
            tooltip: {},
            series : [
             {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data:[
                {value:235, name:'鸡饲料'},
                {value:274, name:'鸭饲料'},
                {value:310, name:'牛饲料'},
                {value:335, name:'羊饲料'},
                {value:400, name:'鱼饲料'}
             ]
            }
          ]
        }
     }
  }, 
  mounted:function(){
    this.drawLine();
  },
  methods:{
     drawLine(){
         // 注册必须的组件
        this.$echarts.use([ VisualMapComponent, Grid3DComponent, Line3DChart,TitleComponent,PieChart,ToolboxComponent,DataZoomComponent, 
        LegendComponent,TooltipComponent, GridComponent, BarChart,LineChart,CanvasRenderer]);
        // 接下来的使用就跟之前一样，初始化图表，设置配置项
        let myChart = this.$echarts.init(document.getElementById('main'));
        let myChart_pie = this.$echarts.init(document.getElementById('pie'));
        let myChart_line = this.$echarts.init(document.getElementById('line'));
        let myChart_3D = this.$echarts.init(document.getElementById('char_3D'));
        myChart.setOption(this.option_bar);
        myChart_pie.setOption(this.option_pie);
        myChart_line.setOption(this.option_line);
        myChart_3D.setOption(this.option_3D);
     }
  }
}
</script>
<style lang="scss" scoped>
.box{
    font-size: 40px;
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    align-content: center;
    margin-top:20px;
    .chart_box{
        width: 200px;
        height: 200px;
    }
}
</style>