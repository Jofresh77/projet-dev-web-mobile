import { Component } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import {EChartsOption} from "echarts";
import {CoolTheme} from "../../shared/cool-theme.const";

@Component({
  selector: 'app-stats-alsace',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponentAlsace {

  constructor() { }

  theme: string | ThemeOption;

  coolTheme = CoolTheme;

  options: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {d}%'
    },
    legend: {
      data: ['La Petite France', 'Maison Pfister', 'Barrage Vauban', 'Château Saint-Ulrich']
    },
    calculable: true,
    series: [
      {
        name: 'area',
        type: 'pie',
        radius: [30, 110],
        roseType: 'area',
        data: [
          { value: 75, name: 'La Petite France' },
          { value: 35, name: 'Maison Pfister' },
          { value: 50, name: 'Barrage Vauban' },
          { value: 25, name: 'Château Saint-Ulrich' }
        ]
      }
    ]
  };

}
