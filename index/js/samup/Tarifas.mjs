export class TarifasSumup{
    constructor(){
        this.visaMaster1m = {
            'nahora':{
                'debito': '1,0%',
                'credAvista':'1,0%',
                'cred-2x': 1.5,
                'cred-3x': 1.7
            },

            'aPrazo':{
               'credAvista': '1,0%',
               'credi-2x': 2, 
               'credi-3x': 3,
               'credi-4x': 4
            }
        }

        this.outrasBandeiras1m = {
            'nahora':{
                'debito': 1,
                'cred-avista':1,
                'cred-2x': 1.5,
                'cred-3x': 1.7
            },

            'aPrazo':{
               'cred-avista': 1,
               'credi-2x': 2, 
               'credi-3x': 3,
               'credi-4x': 4
            }
        }

        this.visaMasterD = {
            'nahora':{
                'debito': 1,
                'cred-avista':1,
                'cred-2x': 1.5,
                'cred-3x': 1.7
            },

            'aPrazo':{
               'cred-avista': 1,
               'credi-2x': 2, 
               'credi-3x': 3,
               'credi-4x': 4
            }
        }

        this.outrasBandeirasD = {
            'nahora':{
                'debito': 1,
                'cred-avista':1,
                'cred-2x': 1.5,
                'cred-3x': 1.7
            },

            'aPrazo':{
               'cred-avista': 1,
               'credi-2x': 2, 
               'credi-3x': 3,
               'credi-4x': 4
            }
        }
    }
}