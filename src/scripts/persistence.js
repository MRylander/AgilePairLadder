/*
 Copyright 2012 Michael Rylander

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Description of Purpose: Persistence interface for pair stair
 */

const COOKIE_NAME_PAIRING_DATA = "pair_cookie";
const COOKIE_NAME_DEV_NAME_LIST = "dev_names_cookie"

var persistedDevNameList = new pairStairCookie(COOKIE_NAME_DEV_NAME_LIST);
var persistedPairingDataList = new pairStairCookie(COOKIE_NAME_PAIRING_DATA);

function pairStairCookie(cookieName) {
    this.cookieName = cookieName;
    this.expires = "; expires=Wednesday, 01-Aug-2040 08:00:00 GMT";
    this.setData = function setCookieData(data) {
        document.cookie = this.cookieName + "=" + data + this.expires;
        return;
    };
    this.getData = function getCookieData() {
        try {
            var startOfCookieName = document.cookie.indexOf(cookieName);
            if (startOfCookieName != -1) {
                var startOfData = document.cookie.indexOf("=", startOfCookieName) + 1;
                var endOfData = document.cookie.indexOf(";", startOfCookieName);
                if (endOfData == -1) {
                    endOfData = document.cookie.length;
                }
                var data = document.cookie.substring(startOfData, endOfData);
                return data.split(",");
            }
        } catch (err) {
            return null;
        }
    };
}
