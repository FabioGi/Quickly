import { Injectable } from "@angular/core";
import { SpeedPub } from "../home/modal";

export interface DataItem {
    id: number;
    name: string;
    description: string;
}
const lessons =
   {
    Author:"LiveLondon",
    Date:"2020-10-10",
    Lesson:[
            {
               id: 1,
               name:"Lesson1",
               title:"A table",
                Exercices:[
          {
             id: 1,
             type: "4x4",
             question: "Selectionnez: couteau",
             answer: "knife",
             answer_image: "couteau.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "glass",
                               image:"verre.jpg",
                               media: "verre.mp3"
                            },
                            {
                               id: 2,
                               name: "knife",
                               image:"couteau.jpg",
                               media: "couteau.mp3"
                            },
                            {
                               id: 3,
                               name: "spoon",
                               image:"cuillere.jpg",
                               media: "cuillere.mp3"
                            },
                            {
                               id: 4,
                               name: "fork",
                               image:"fourchette.jpg",
                               media: "fourchette.mp3"
                            }
                       ]
          },
          {
             id: 2,
             type: "Switch",
             question: "Verre",
             answer: "glass",
             answer_image: "verre.jpg",
             answer_media: "verre.mp3",
             suggestions:[
                            {
                               id: 1,
                               name: "knife",
                               image:"couteau.jpg",
                               media: "couteau.mp3"
                            },
                            {
                               id: 2,
                               name: "glass",
                               image:"verre.jpg",
                               media: "verre.mp3"
                            }
                         ]
          },
          {
             id: 3,
             type: "QCM",
             question: "Choisissez la traduction correcte",
             statement: "c'est du cafe",
             answer: "It's coffee",
             suggestions:[
                            "It's coffee",
                            "It's tea",
                            "It's bread",
                            "It's water"
                         ]
          },
          {
             id: 4,
             type: "Appariement",
             question: "Traduiser cette phrase",
             statement: "This is a fork",
             answer: "c'est une fourchette",
             media: "this_is_a_fork.mp3",
             suggestions:[
                            "une",
                            "c'est",
                            "verre",
                            "un",
                            "fourchette",
                         ]
          },
          {
             id: 5,
             type: "4x4",
             question: "Selectionnez: pain",
             answer: "bread",
             answer_image: "eau.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "water",
                               image:"eau.jpg",
                               media: "eau.mp3"
                            },
                            {
                               id: 2,
                               name: "coffee",
                               image:"cafe.jpg",
                               media: "cafe.mp3"
                            },
                            {
                               id: 3,
                               name: "tea",
                               image:"the.jpg",
                               media: "the.mp3"
                            },
                            {
                               id: 4,
                               name: "bread",
                               image:"pain.jpg",
                               media: "pain.mp3"
                            }
                       ]
          },
          {
            id: 6,
            type: "Switch",
            question: "Cuillère'",
            answer: "spoon",
            answer_image: "cuillere.jpg",
            answer_media: "cuillere.mp3",
            suggestions:[
                           {
                              id: 1,
                              name: "fork",
                              image:"fourchette.jpg",
                              media: "fourchette.mp3"
                           },
                           {
                              id: 2,
                              name: "spoon",
                              image:"cuillere.jpg",
                              media: "cuillere.mp3"
                           }
                        ]
         },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un couteau",
             answer: "This is a knife",
             suggestions:[
                            "This is a knife",
                            "This is a fork",
                            "This is a spoon",
                            "This is a glass"
                         ]
          },
          {
            id: 8,
            type: "Appariement",
            question: "Traduiser cette phrase",
            statement: "This is a spoon",
            answer: "c'est une cuillère",
            media: "this_is_a_spoon.mp3",
            suggestions:[
                           "une",
                           "c'est",
                           "verre",
                           "un",
                           "cuillère",
                        ]
         }

  ]
            },
            {

             name:"Lesson 2",
             title: "Les animaux familiers",
             Categorie: "Animals",
    Exercices:[
          {
             id: 1,
             type: "4x4",
             question: "Selectionnez: oiseau",
             answer: "bird",
             answer_image: "oiseau.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "cat",
                               image:"cat.jpg",
                               media: "cat.mp3"
                            },
                            {
                               id: 2,
                               name: "dog",
                               image:"chien.jpg",
                               media: "chien.mp3"
                            },
                            {
                               id: 3,
                               name: "rabbit",
                               image:"lapin.jpg",
                               media: "lapin.mp3"
                            },
                            {
                               id: 4,
                               name: "bird",
                               image:"oiseau.jpg",
                               media: "oiseau.mp3"
                            }
                       ]
          },
          {
             id: 2,
             type: "Switch",
             question: "Chien",
             answer: "dog",
             answer_image: "chien.jpg",
             answer_media: "chien.mp3",
             suggestions:[
                            {
                               id: 1,
                               name: "dog",
                               image:"chien.jpg",
                               media: "chien.mp3"
                            },
                            {
                               id: 2,
                               name: "chat",
                               image:"cat.jpg",
                               media: "cat.mp3"
                            }
                         ]
          },
          {
             id: 3,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un chien",
             answer: "It's a dog",
             suggestions:[
                            "It's a cat",
                            "It's a bird",
                            "It's a dog",
                            "It's a rabbit"
                         ]
          },
          {
             id: 4,
             type: "Appariement",
             question: "Traduiser cette phrase",
             statement: "This is a rabbit",
             answer: "c'est un lapin",
             media: "this_is_a_rabbit.mp3",
             suggestions:[
                            "une",
                            "c'est",
                            "lapin",
                            "un",
                            "fourchette",
                         ]
          },
          {
             id: 5,
             type: "4x4",
             question: "Selectionnez: thé",
             answer: "tea",
             answer_image: "the.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "water",
                               image:"eau.jpg",
                               media: "eau.mp3"
                            },
                            {
                               id: 2,
                               name: "coffee",
                               image:"cafe.jpg",
                               media: "cafe.mp3"
                            },
                            {
                               id: 3,
                               name: "tea",
                               image:"the.jpg",
                               media: "the.mp3"
                            },
                            {
                               id: 4,
                               name: "bread",
                               image:"pain.jpg",
                               media: "pain.mp3"
                            }
                       ]
          },
          {
            id: 6,
            type: "Switch",
            question: "Lapin",
            answer: "rabbit",
            answer_image: "lapin.jpg",
            answer_media: "lapin.mp3",
            suggestions:[
                           {
                              id: 1,
                              name: "bird",
                              image:"oiseau.jpg",
                              media: "oiseau.mp3"
                           },
                           {
                              id: 2,
                              name: "rabbit",
                              image:"lapin.jpg",
                              media: "lapin.mp3"
                           }
                        ]
         },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un chat",
             answer: "It's a cat",
             suggestions:[
                            "It's a dog",
                            "It's a rabbit",
                            "It's a bird",
                            "It's a cat"
                         ]
          },
          {
            id: 8,
            type: "Appariement",
            question: "Traduiser cette phrase",
            statement: "This is a bird",
            answer: "c'est un oiseau",
            media: "this_is_a_bird.mp3",
            suggestions:[
                           "une",
                           "c'est",
                           "verre",
                           "un",
                           "oiseau",
                        ]
         }


  ]
 },
             {
                name:"Lesson 3",
                title: "Les animaux sauvages",
                Categorie: "Animals",
    Exercices:[
          {
             id: 1,
             type: "4x4",
             question: "Selectionnez: singe",
             answer: "monkey",
             answer_image: "singe.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "elephant",
                               image:"elephant.jpg",
                               media:"elephant.mp3"
                            },
                            {
                               id: 2,
                               name: "monkey",
                               image:"singe.jpg",
                               media: "singe.mp3"
                            },
                            {
                               id: 3,
                               name: "zebra",
                               image:"zebre.jpg",
                               media:"zebra.mp3"
                            },
                            {
                               id: 4,
                               name: "tiger",
                               image:"tigre.jpg",
                               media: "tigre.mp3"
                            }
                       ]
          },
          {
             id: 2,
             type: "Switch",
             question: "Tigre",
             answer: "tiger",
             answer_image: "tigre.jpg",
             answer_media: "tigre.mp3",
             suggestions:[
                            {
                               id: 1,
                               name: "tiger",
                               image:"tigre.jpg",
                               media: "tigre.mp3"
                            },
                            {
                               id: 2,
                               name: "singe",
                               image:"singe.jpg",
                               media: "monkey.mp3"
                            }
                         ]
          },
          {
             id: 3,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un chien",
             answer: "It's a dog",
             suggestions:[
                            "It's a cat",
                            "It's a bird",
                            "It's a dog",
                            "It's a rabbit"
                         ]
          },
          {
             id: 4,
             type: "Appariement",
             question: "Traduiser cette phrase",
             statement: "This is a zebra",
             answer: "c'est un zèbre",
             media: "this_is_a_zebra.mp3",
             suggestions:[
                            "une",
                            "c'est",
                            "lapin",
                            "un",
                            "zèbre"
                         ]
          },
          {
             id: 5,
             type: "4x4",
             question: "Selectionnez: café",
             answer: "coffee",
             answer_image: "cafe.jpg",
             suggestions:[
                            {
                               id: 1,
                               name: "water",
                               image:"eau.jpg",
                               media: "eau.mp3"
                            },
                            {
                               id: 2,
                               name: "coffee",
                               image:"cafe.jpg",
                               media: "cafe.mp3"
                            },
                            {
                               id: 3,
                               name: "tea",
                               image:"the.jpg",
                               media: "the.mp3"
                            },
                            {
                               id: 4,
                               name: "bread",
                               image:"pain.jpg",
                               media: "pain.mp3"
                            }
                       ]
          },
          {
            id: 6,
            type: "Switch",
            question: "Zèbre",
            answer: "zebra",
            answer_image: "zebre.jpg",
            answer_media: "zebra.mp3",
            suggestions:[
                           {
                              id: 1,
                              name: "elephant",
                              image:"elephant.jpg",
                              media: "elephant.mp3"
                           },
                           {
                              id: 2,
                              name: "zebra",
                              image:"zebre.jpg",
                              media:"zebra.mp3"
                           }
                        ]
         },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un singe",
             answer: "It's is a monkey",
             suggestions:[
                            "It's is a monkey",
                            "It's is a zebra",
                            "It's is an elephant",
                            "It's is a tiger"
                         ]
          },
          {
            id: 8,
            type: "Appariement",
            question: "Traduiser cette phrase",
            statement: "This is an elephant",
            answer: "c'est un éléphant",
            media: "this_is_a_elephant.mp3",
            suggestions:[
                           "éléphant",
                           "c'est",
                           "verre",
                           "un"
                        ]
         }

  ]
 }
           ]
 }

@Injectable({
    providedIn: "root"
})
export class DataService {

    public globalData: any ;
    public currentLesson: any;
    private score: number = 0;
    public score1 = 0;
    public score2 = 0;
    public score3 = 0;
    speedPub: SpeedPub;
    constructor(){
        this.speedPub = new SpeedPub()
    }

    // currentLesson: { id: number; name: string; title: string; Exercices: ({ id: number; type: string; question: string; answer: string; suggestions: { id: number; name: string; image: string; media: string; }[]; statement?: undefined; media?: undefined; } | { ...; } | { ...; })[]; Categorie?: undefined; } | { ...; };

    // getItems(): Array<DataItem> {
    //     return this.items;
    // }

    // getItem(id: number): DataItem {
    //     return this.items.filter((item) => item.id === id)[0];
    // }
    /**
     * Quickly service
     */
    getLessonOrderbyTitle(title){
        return lessons.Lesson.filter((item) => item.title === title)[0];
    }

    getExerciseOrderById(id,title){
        this.currentLesson = this.getLessonOrderbyTitle(title)
        return this.currentLesson.Exercices[id];
    }

    getAllLessons(){
        return lessons.Lesson ;
    }

    imagePath(index,data){
        return '~/assets/media/'+data[index].image;
    }
    getScore(){
        return this.score ;
    }
    setScore(score){
        this.score += score;
    }
    initScore(){
        this.score = 0;
    }

    displayPub(){
        setTimeout(()=> {
            this.speedPub.publicite();
        },
        5000);
    }
}












