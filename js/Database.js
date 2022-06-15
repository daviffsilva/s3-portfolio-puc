class Database {
    database;
    database_data;

    constructor(database){
        this.database = database;
        const db_parsed = JSON.parse(localStorage.getItem(this.database) || '{}');
        this.database_data = db_parsed;
    }

    commit = () => {
        this.setData(this.database_data);
    }
    getNextId = table => {
        return (this.read(table).map(v => v.id).sort((a, b) => b - a)[0] ?? 0) + 1;
    }
    create = (table, data) => {
        data.id = this.getNextId(table);
        this.database_data[table].push(data);
    }        
    read = (table, id) => {
        if(!this.database_data[table]) console.error('Tabela não existe');
        if(!id){
            return this.database_data[table];
        }else {
            let filteredData = (this.database_data[table] || []).filter(v => v.id == id);
            return filteredData.length > 0 ? filteredData[0] : null;
        }
    }
    update = (table, id, data) => {
        if(!this.database_data[table]) console.error('Tabela não existe');
        this.database_data[table] = this.database_data[table].map(v => v.id == id ? data : v);
    }
    delete = (table, id) => {
        if(!this.database_data[table]) console.error('Tabela não existe');
        this.database_data[table] = this.database_data[table].filter(v => v.id != id);
    }
    setData = newTableData => {
        return localStorage.setItem(this.database, newTableData);
    }
}