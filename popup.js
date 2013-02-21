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

var bg;

function init() {
	bg = chrome.extension.getBackgroundPage();
	var table = document.getElementById('tab');
	table.innerHTML = '';

	document.getElementById('refresh').addEventListener('click', function() {console.log('ok');bg['doRequest']();window.location.reload();});
	document.getElementById('monitor').addEventListener('click', function() {bg['openTab']();window.close();});
	
	if (bg.jobs) {
		for (var i in bg.jobs) {
			var tr = table.insertRow(i);
			var sym = tr.insertCell(0);
			sym.innerHTML = getImage(STATUSES[bg.jobs[i].color]);
			var lnk = tr.insertCell(1);
			lnk.innerHTML = bg.jobs[i].name.link(bg.jobs[i].url);
		}
	} else {
		var p = document.createElement('p');
		p.innerHTML = 'Please check the <a href="options.html">configuration</a>.';
		document.getElementById('wrapper').replaceChild(p, table);
	}
}

function getImage(status) {
	if (status == 0) {
		return '<img src="images/grey19.png" height="19" width="19"/>';
	} else if (status == 1) {
		if (bg.green) {
			return '<img src="images/green19.png" height="19" width="19"/>';
		} else {
			return '<img src="images/blue19.png" height="19" width="19"/>';
		}
	} else if (status == 2) {
		return '<img src="images/yellow19.png" height="19" width="19"/>';
	} else if (status == 3) {
		return '<img src="images/red19.png" height="19" width="19"/>';
	} else {
		return '?';
	}
}

document.addEventListener('DOMContentLoaded', init);
