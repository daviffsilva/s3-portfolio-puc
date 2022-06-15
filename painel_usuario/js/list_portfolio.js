let db_portfolio = {
    "portfolio": [
        {
            "id": 1,
            "nome": "Empresa pequena",
            "data": "05/05/2022",
            "tamanho": "0.006 mb",
            "arquivo": "data:application/pdf;base64,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"
        },
        {
            "id": 2,
            "nome": "empresa média",
            "data": "05/05/2022",
            "tamanho": "0.006 mb",
            "arquivo": "data:application/pdf;base64,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"
        },
        {
            "id": 3,
            "nome": "FOTOS CASAMENTO",
            "data": "05/05/2022",
            "tamanho": "0.006 mb",
            "arquivo": "data:application/pdf;base64,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"
        },
        {
            "id": 4,
            "nome": "Fotos cardapio",
            "data": "05/05/2022",
            "tamanho": "0.006 mb",
            "arquivo": "data:application/pdf;base64,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"
        }
    ]
}

localStorage.setItem('db_portfolio', null);
let dbInitValues = JSON.parse(localStorage.getItem('db_portfolio'));
if (!dbInitValues) {
    dbInitValues = db_portfolio;
    localStorage.setItem('db_portfolio', JSON.stringify(dbInitValues));
};

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


const page = {
    currentSwal: null,
    database: new Database('db_portfolio'),
    init: e => {
        page.listPortfolios();
        $("#submit").click(page.insertPortfolio); 
        setInterval(page.loadingText, 500);
    },
    loadingText: () => {
        const loadingElement = $(".loading-text");
        if(loadingElement.text().indexOf("...") != -1){
            loadingElement.text(loadingElement.text().replace('...', ''));
        }else{
            loadingElement.text(loadingElement.text() + '.');
        }
        
    },
    listPortfolios: () => {
        const db = page.database;
        let portfolios = db.read('portfolio');
        const tableElement = $("#tablePortfolios");
        let tableBody = '';
        let row;
        if(portfolios.length == 0){
            tableBody += `<tr><td class="text-center" colspan="5">Nenhum registro encontrado</td></tr>`;
        }else{
            portfolios.forEach(portfolio => {
                row = `
                    <tr data-id="${portfolio.id}">
                        <td>${portfolio.id}</td>
                        <td>${portfolio.nome}</td>
                        <td>${portfolio.data}</td>
                        <td>${portfolio.tamanho}</td>
                        <td class="text-center">
                            <div class="btn-group w-100 btn-group-sm" role="group">
                                <a title="Baixar" class="btn btn-success btn-sm btnDownload" role="button"><i class="fa fa-download" aria-hidden="true"></i></a>
                                <a title="Editar" class="btn btn-warning btn-sm btnEdit" role="button"><i class="fa fa-edit" aria-hidden="true"></i></a>
                                <a title="Deletar" class="btn btn-danger btn-sm btnDelete" role="button"><i class="fa fa-trash" aria-hidden="true"></i></a>
                            </div>
                        </td>
                    </tr>
                `;
                tableBody += row;
            })
        }
        tableElement.html(tableBody);

        $(".btnDownload").off('click');
        $(".btnEdit").off('click');
        $(".btnDelete").off('click');
        $(".btnDownload").click(page.downloadPortfolio);
        $(".btnEdit").click(page.editPortfolio);
        $(".btnDelete").click(page.deletePortfolio);
    },
    insertPortfolio: (e) => {
        const $form = $("form");
        const $inputNome = $("#nome");
        const $inputArquivo = $("#arquivo");

        let fr = new FileReader();
        fr.readAsDataURL($inputArquivo.get(0).files[0]);

        fr.onload = (e) => {
            console.log(e);
            const data = {
                nome: $inputNome.val(),
                arquivo: e.target.result,
                data: new Date().toDateString(),
                tamanho: (e.loaded / Math.pow(10, 6)).toFixed(3) + ' mb'
            }
            
            page.database.create('portfolio', data);
            page.database.commit();
            page.listPortfolios();
            
            Swal.close();
            Swal.fire({
                icon: 'success',
                title: 'Registro inserido',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true
            })
        }

        Swal.fire({
            title: 'Inserindo',
            html: 'Inserindo seu registro',
            allowEnterKey: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        })
    },
    downloadPortfolio: (e) => {
        const parentRow = e.currentTarget.parentNode.parentNode.parentNode;
        const rowId = $(parentRow).data('id');
        const arquivo = page.database.read('portfolio', rowId).arquivo;
        
        let pdfWindow = window.open("");
        pdfWindow.document.write(
            "<iframe width='100%' height='100%' src='" + page.database.read('portfolio', rowId).arquivo + "'></iframe>"
        )
    },
    deletePortfolio: (e) => {
        let parentRow = e.currentTarget.parentNode.parentNode.parentNode;
        let rowId = $(parentRow).data('id');
        page.database.delete('portfolio', rowId);
        page.database.commit();
        page.listPortfolios();
    }
}
// const db = new Database();
$(document).ready(page.init);