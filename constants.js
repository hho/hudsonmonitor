/*
 * Hudson Monitor Chrome Extension
 * Copyright 2010 by Henning Hoefer
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
