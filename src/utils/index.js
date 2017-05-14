import urlencode from 'urlencode';

const TODO_QUERY = '?todos=';

// TODO: pass "from query" and "to query" as params se we can extract todos AND visibilityFilter etc...

function readPropsFromQueryTest(queryString, defaultData) {
	return _readPropsFromQuery(queryString, defaultData);
}

function readPropsFromQuery(defaultData) {
	return _readPropsFromQuery(location.search, defaultData);
}

function _readPropsFromQuery(query, defaultData) {
	var queryProps = defaultData;
	
	if (query) {
		var i = query.indexOf(TODO_QUERY);
		if (i > -1) {
			try {
				queryProps = JSON.parse(urlencode.decode(query.substring(TODO_QUERY.length)));
			} catch (e) {
				console.log(e);
			}
		}
	}
	return queryProps;
}

function createLinkFromTodos(todos) {
	return _createLinkFromTodos(todos, location.origin);
}

function createLinkFromTodosTest(todos, testOrigin) {
	return _createLinkFromTodos(todos, testOrigin);
}

function _createLinkFromTodos(todos, origin) {
	var queryString = TODO_QUERY + urlencode(JSON.stringify(todos));

	return origin + queryString;
}

function readFromSessionStorage(key, defaultData) {	
	return _readFromSessionStorage(window.sessionStorage, key, defaultData);
}

function writeToSessionStorage(key, sessionData) {
	_writeToSessionStorage(window.sessionStorage, key, sessionData)
}

function readFromSessionStorageTest(sessionStorage, key, defaultData) {	
	return _readFromSessionStorage(sessionStorage, key, defaultData);
}

function writeToSessionStorageTest(sessionStorage, key, sessionData) {
	_writeToSessionStorage(sessionStorage, key, sessionData)
}

function _readFromSessionStorage(sessionStorage, key, defaultData) {
	var sessionData =  null;
	if (sessionStorage) {
		try {
			sessionData = JSON.parse(sessionStorage.getItem(key));
		} catch (ignored) { }
	} 

	if (null === sessionData) {
		sessionData = defaultData;
	}
	
	return sessionData;
}

function _writeToSessionStorage(sessionStorage, key, sessionData) {
	if (sessionStorage) {
		try {
			sessionStorage.setItem(key, JSON.stringify(sessionData));
		} catch (igonored) {}
	}
}

export { 
	readFromSessionStorage, 
	writeToSessionStorage, 
	readPropsFromQuery, 
	createLinkFromTodos, 
	readPropsFromQueryTest, 
	createLinkFromTodosTest,
	readFromSessionStorageTest, 
	writeToSessionStorageTest 
};