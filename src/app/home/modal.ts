import { RouterExtensions } from '@nativescript/angular';
import { confirm } from '@nativescript/core/ui/dialogs';

export class SpeedPub {
    private pub = ["Offre speciale 50% de reduction sur les cours en ligne du 02 au 26 fevrier",
                    "Gagnez en compétence et faites valoir votre qualification au sein de votre entreprise !"+
                    "Nous vous formons au passage du TOEIC, CPF, BULATS, IELTS, CAMBRIDGE, CECRL, DELE et bien d'autres.",
                    "5 conseils pour reussir", "Nos forfaits sont"+
                    "100% FLEXIBLES non-nominatifs et consommables à tout moment"+
                    "Nos professeurs natifs s'adaptent à vos disponibilités, mais nous vous assurons également"+
                    "que votre forfait peut être utilisé par tous les membres de votre entreprise ou de votre famille. C est ça l esprit Live London Cours Center !",
                    "Une formation en anglais par visioconférence 100% prise en charge",
                    "Cours d'anglais par visioconférence En immersion avec un professeur natif, en direct de Londres"+
                    "disponible sous 24h, 7 jours sur 7, de 7h à 23h !",
                    "Tester 1h de cours gratuit sur live london",
                    "Tarifs de nos cours individuels d'anglais par visioconférence A partir de 29,90€/heure"]
    constructor() {
    }


    public displayAlertConnection(msg?: string) {
        let options = {
            title: "Attention !",
            message: msg ? msg : "Souhaitez vous vraiment quittez la leçon ? vous risquez de perdre votre score",
            okButtonText: "oui",
            neutralButtonText: "Non"
        };
        return confirm(options)
    }

    getRandomInt() {
        return Math.floor(Math.random() * this.pub.length);
      }

    publicite() {
        let options = {
            title: "Promo du moment ! !",
            message: this.pub[this.getRandomInt()],
            okButtonText: "Ok"
        };
        return confirm(options)
    }
}
