/*
 * Copyright 2010 Henning Hoefer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const REFRESH_DEFAULT = 10; // 10 minutes default
const REQUEST_TIMEOUT = 10 * 1000; // 10s timeout
const STATUSES = {
	'aborted': 0,
	'aborted_anime': 0,
	'disabled': 0,
	'disabled_anime': 0,
	'grey': 0,
	'grey_anime': 0,
	'blue': 1,
	'blue_anime': 1,
	'yellow': 2,
	'yellow_anime': 2,
	'red': 3,
	'red_anime': 3
}

