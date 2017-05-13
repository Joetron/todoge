import urlencode from 'urlencode';

const TODO_QUERY = '?todos=';

// TODO: pass "from query" and "to query" as params se we can extract todos AND visibilityFilter etc...
function readPropsFromQuery() {
	var queryProps = null;
	if (location && location.search) {
		try {
			var q = location.search;
			var i = q.indexOf(TODO_QUERY);
			if (i > -1) {
				queryProps = JSON.parse(urlencode.decode(q.substring(TODO_QUERY.length)));
			}
		} catch(ignored) {}
	}
	return queryProps;
}

function createLinkFromTodos(todos) {
	return location.origin + TODO_QUERY + urlencode(JSON.stringify(todos));
}

function readFromSessionStorage(key, defaultData) {
	var sessionData;
	if (sessionStorage && sessionStorage.hasOwnProperty(key)) {
		try {
			sessionData = JSON.parse(sessionStorage.getItem(key));
		} catch (e) {
			sessionData = defaultData;
		}
	} else {
		sessionData = defaultData;
	}
	
	return sessionData;
}

function writeToSessionStorage(key, sessionData) {
	if (sessionStorage) {
		try {
			sessionStorage.setItem(key, JSON.stringify(sessionData));
		} catch (igonored) {}
	}
}

export { readFromSessionStorage, writeToSessionStorage, readPropsFromQuery, createLinkFromTodos };