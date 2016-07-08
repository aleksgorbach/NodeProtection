/// <reference path="../../../typings/tsd.d.ts" />


import {Promise} from 'es6-promise';
import $ = require('jquery');

export class RestHelper {
    get<T> (url: string) {
        return new Promise<T>(function (success, error) {
            $.ajax({
                url: url,
                dataType: "json",
                success: success,
                error: error
            })
        });
    }
}