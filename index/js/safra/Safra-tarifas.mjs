export class Taxas{
    constructor(){
        this.visaMastercard = {
            'receberHora': {
                'debito': 0.0198,
                'credito': 0.0379
            },
            'receber1dia': {
                'debito': 0.0168,
                'credito': 0.0345
            },
            'semAntecipacao': {
                'debito': 0.0148,
                'credito': 0.0314
            }
        }

        this.visaMasterTarifa = {
            'receberHora': {
                'debito': '1,98%',
                'credito': '3,79%'
            },
            'receber1dia': {
                'debito': '1,68%',
                'credito': '3,45%'
            },
            'semAntecipacao': {
                'debito': '1,48%',
                'credito': '3,14%'
            }
        }

        this.outrasMaquininhas = {
            'receberHora': {
                'debito': 0.0298,
                'credito': 0.0459
            },
            'receber1dia': {
                'debito': 0.0248,
                'credito': 0.0455
            },
            'semAntecipacao': {
                'debito': 0.0248,
                'credito': 0.0411
            }
        }

        this.outrasMaqTarifas = {
            'receberHora': {
                'debito': '2,98%',
                'credito': '4,59%'
            },
            'receber1dia': {
                'debito': '2,48%',
                'credito': '4,55%'
            },
            'semAntecipacao': {
                'debito': '2,48%',
                'credito': '4,11%'
            }
        }
    }
}