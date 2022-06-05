import { Component, OnInit } from '@angular/core';
import { PluginsHttpService } from './plugins-http.service';
import { Plugins } from './plugins.model';
import { faPlayCircle, faCopy } from '@fortawesome/free-solid-svg-icons';

import { parse, stringify } from 'yaml';


@Component({
  selector: 'app-plugins',
  templateUrl: './plugins.component.html',
  styleUrls: ['./plugins.component.scss']
})
export class PluginsComponent implements OnInit {



  plugins: Plugins[] = [];
  faPlayCircle = faPlayCircle;
  faCopy = faCopy;

  yamlValue = { "name": "Test & Build", "jobs": { "builds": { "runs-on": "ubuntu-latest" } } };
  yamlValueOut: string;


  constructor(private _pluginsHttpService: PluginsHttpService) { }

  ngOnInit(): void {

    this.yamlValueOut = `
      name: Lint, Test & Build

      on: [push]

      jobs:
        builds:
          runs-on: ubuntu-latest
    `;
    //this.yamlValueOut = this.renderJSON(this.yamlValue);

    //console.log("yaml -> ", this.yamlValueOut);

    this._pluginsHttpService.getPlugins().subscribe((response) => {
      let temp: any = response;
      this.plugins = temp.list;
      console.log("plugins-> ", this.plugins);
    }, (error) => {
      console.log('error is ', error)
    });

  }



  renderJSON(obj) {
    'use strict';
    var keys = [],
      retValue = "";
    for (var key in obj) {
      if (typeof obj[key] === 'object') {
        retValue += "<div class='tree'>" + key;
        retValue += this.renderJSON(obj[key]);
        retValue += "</div>";
      } else {
        retValue += "<div class='tree'>" + key + " = " + obj[key] + "</div>";
      }

      keys.push(key);
    }
    return retValue;
  }

}
