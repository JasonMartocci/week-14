var orm = require('./config/orm.js');

/* The following commands will run every time once the Node server is started.*/

//console log all the party_name's
//select(whatToSelect, tableInput);
orm.select('party_name', 'parties');

//console log all the client_name's
//select(whatToSelect, tableInput);
orm.select('client_name', 'clients');

//console log all the parties that have a party-type of grown-up
//selectWhere(tableInput, colToSearch, valOfCol)
orm.selectWhere('parties', 'party_type', 'grown-up');
	
//console log the client who has the most parties
//leftJoin(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol)
orm.leftJoin('*', 'clients', 'parties', 'id', 'client_id');
