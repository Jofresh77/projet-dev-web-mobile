import { Component } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import {EChartsOption} from "echarts";
import {CoolTheme} from "../../shared/cool-theme.const";

@Component({
  selector: 'app-stats-lorraine',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponentLorraine {

  constructor() { }

  theme: string | ThemeOption;

  coolTheme = CoolTheme;

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {d}%'
    },
    legend: {
      data: ['Fort de Douaumont', 'Parc Archéologique', 'Citadelle de Bitche', 'Les hautes Mynes']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 20, name: 'Fort de Douaumont' },
          { value: 35, name: 'Parc Archéologique' },
          { value: 50, name: 'Citadelle de Bitche' },
          { value: 10, name: 'Les hautes Mynes' }
        ]
      }
    ]
  };

}

