/*
   Copyright 2010 Henning Hoefer

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var saveButton;
var urlInput;
var errorImage;
var refreshDropdown;
var authCheckbox;
var usernameInput;
var passwordInput;
var sortByName;
var sortByStatus;
var sortDesc;


function init() {
    // All text inputs onKeyup = makeDirty
    var inputs = document.querySelectorAll('input[type=text]');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', markDirty);
    }

    // All other inputs onChange = makeDirty
    var inputs = document.querySelectorAll('input[type=password], input[type=checkbox], input[type=radio], select');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', markDirty);
    }

    // Set up save and cancel buttons
    saveButton = document.getElementById('save');
    cancelButton = document.getElementById('cancel');

    saveButton.addEventListener('click', save);
    cancelButton.addEventListener('click', init);
    
    urlInput = document.getElementById('url');
    errorImage = document.getElementById('error');
    urlInput.value = localStorage.url || 'http://';
    if (!urlInput.value.match(/https?:\/\/\S+/i)) {
        errorImage.style.visibility = 'visible';
    } else {
        errorImage.style.visibility = 'hidden';
    }
    
    refreshDropdown = document.getElementById('refresh');
    var refreshTime = localStorage.refreshTime || REFRESH_DEFAULT;
    for (var i = 0; i < refreshDropdown.options.length; i++) {
        if (refreshDropdown.options[i].value == refreshTime) {
            refreshDropdown.selectedIndex = i;
            break;
        }
    }
    
    authCheckbox = document.getElementById('auth');
    usernameInput = document.getElementById('username');
    passwordInput = document.getElementById('password');
    if (typeof localStorage.username == 'string') {
        authCheckbox.checked = true;
        usernameInput.value = localStorage.username || '';
        passwordInput.value = localStorage.password || '';
    } else {
        authCheckbox.checked = false;
        usernameInput.value = '';
        passwordInput.value = '';
        usernameInput.disabled = true;
        passwordInput.disabled = true;
    }
    
    sortByName = document.getElementById('sortByName');
    sortByStatus = document.getElementById('sortByStatus');
    sortDesc = document.getElementById('sortDesc');
    if (localStorage.sorting == 'status') {
        sortByStatus.checked = true;
    } else {
        sortByName.checked = true;
    }
    if (typeof localStorage.desc == 'string')
        sortDesc.checked = true;
    
    greenBalls = document.getElementById('greenBalls');
    if (typeof localStorage.green == 'string')
        greenBalls.checked = true;
    
    markClean();
}

function save() {
    if (urlInput.value != '' && urlInput.value != 'http://') {
        localStorage.url = urlInput.value.charAt(urlInput.value.length - 1) == '/' ? urlInput.value : urlInput.value + '/';
    } else {
        delete localStorage.url;
    }
    
    if (refreshDropdown.value != REFRESH_DEFAULT) {
        localStorage.refreshTime = refreshDropdown.value;
    } else {
        delete localStorage.refreshTime;
    }
    
    if (authCheckbox.checked) {
        localStorage.username = usernameInput.value;
        localStorage.password = passwordInput.value;
    } else {
        delete localStorage.username;
        delete localStorage.password;
    }
    
    if (sortByStatus.checked == true) {
        localStorage.sorting = 'status';
    } else {
        delete localStorage.sorting;
    }
    if (sortDesc.checked == true) {
        localStorage.desc = 'true';
    } else {
        delete localStorage.desc;
    }
    
    if (greenBalls.checked == true) {
        localStorage.green = 'true';
    } else {
        delete localStorage.green;
    }
    
    init();
    chrome.extension.getBackgroundPage()["init"]();
}

function markDirty() {
    if (!urlInput.value.match(/https?:\/\/\S+/i)) {
        errorImage.style.visibility = 'visible';
    } else {
        errorImage.style.visibility = 'hidden';
    }
    
    if (authCheckbox.checked == true) {
        usernameInput.disabled = false;
        passwordInput.disabled = false;
    } else {
        usernameInput.disabled = true;
        passwordInput.disabled = true;
    }
    
    saveButton.disabled = false;
}

function markClean() {
    saveButton.disabled = true;
}

document.addEventListener('DOMContentLoaded', init);
