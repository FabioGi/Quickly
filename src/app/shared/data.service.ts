import { Injectable } from "@angular/core";

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
             question: "Selectionnez:'couteau'",
             answer: "knife",
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
             question: "Selectionnez:'verre'",
             answer: "glass",
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
             question: "choisissez la traduction correcte",
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
             question: "Selectionnez:'pain'",
             answer: "bread",
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
          },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un couteau",
             answer: "It's coffee",
             suggestions:[
                            "This is a knife",
                            "This is a fork",
                            "This is a spoon",
                            "This is a glass"
                         ]
          },
          {
             id: 8,
             type: "Switch",
             question: "Selectionnez:'cuillère'",
             answer: "spoon",
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
             question: "Selectionnez:'oiseau'",
             answer: "bird",
             suggestions:[
                            {
                               id: 1,
                               name: "cat",
                               image:"chat.jpg",
                               media: "chat.mp3"
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
             question: "Selectionnez:'chien'",
             answer: "dog",
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
             question: "Selectionnez:'thé'",
             answer: "tea",
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
                            "cuillère",
                         ]
          },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un chat",
             answer: "It's a cat",
             suggestions:[
                            "This is a dog",
                            "This is a rabbit",
                            "This is a bird",
                            "This is a cat"
                         ]
          },
          {
             id: 8,
             type: "Switch",
             question: "Selectionnez:'lapin'",
             answer: "spoon",
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
             question: "Selectionnez:'singe'",
             answer: "monkey",
             suggestions:[
                            {
                               id: 1,
                               name: "elephant",
                               image:"éléphant.jpg",
                               media:"éléphant.mp3"
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
                               image:"zèbre.jpg",
                               media:"zèbre.mp3"
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
             question: "Selectionnez:'tigre'",
             answer: "tiger",
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
                               image:"monkey.jpg",
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
                            "fourchette",
                            "zèbre"
                         ]
          },
          {
             id: 5,
             type: "4x4",
             question: "Selectionnez:'café'",
             answer: "coffee",
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
          },
          {
             id: 7,
             type: "QCM",
             question: "choisissez la traduction correcte",
             statement: "C'est un singe",
             answer: "This is a monkey",
             suggestions:[
                            "This is a monkey",
                            "This is a zebra",
                            "This is an elephant",
                            "This is a tiger"
                         ]
          },
          {
             id: 8,
             type: "Switch",
             question: "Selectionnez:'zèbre'",
             answer: "zebra",
             suggestions:[
                            {
                               id: 1,
                               name: "elephant",
                               image:"éléphant.jpg",
                               media: "éléphant.mp3"
                            },
                            {
                               id: 2,
                               name: "zebra",
                               image:"zèbre.jpg",
                               media:"zèbre.mp3"
                            }
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
    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Item 1",
            description: "Description for Item 1"
        },
        {
            id: 2,
            name: "Item 2",
            description: "Description for Item 2"
        },
        {
            id: 3,
            name: "Item 3",
            description: "Description for Item 3"
        },
        {
            id: 4,
            name: "Item 4",
            description: "Description for Item 4"
        },
        {
            id: 5,
            name: "Item 5",
            description: "Description for Item 5"
        },
        {
            id: 6,
            name: "Item 6",
            description: "Description for Item 6"
        },
        {
            id: 7,
            name: "Item 7",
            description: "Description for Item 7"
        },
        {
            id: 8,
            name: "Item 8",
            description: "Description for Item 8"
        },
        {
            id: 9,
            name: "Item 9",
            description: "Description for Item 9"
        },
        {
            id: 10,
            name: "Item 10",
            description: "Description for Item 10"
        },
        {
            id: 11,
            name: "Item 11",
            description: "Description for Item 11"
        },
        {
            id: 12,
            name: "Item 12",
            description: "Description for Item 12"
        },
        {
            id: 13,
            name: "Item 13",
            description: "Description for Item 13"
        },
        {
            id: 14,
            name: "Item 14",
            description: "Description for Item 14"
        },
        {
            id: 15,
            name: "Item 15",
            description: "Description for Item 15"
        },
        {
            id: 16,
            name: "Item 16",
            description: "Description for Item 16"
        },
        {
            id: 17,
            name: "Item 17",
            description: "Description for Item 17"
        },
        {
            id: 18,
            name: "Item 18",
            description: "Description for Item 18"
        },
        {
            id: 19,
            name: "Item 19",
            description: "Description for Item 19"
        },
        {
            id: 20,
            name: "Item 20",
            description: "Description for Item 20"
        }
    );
    // currentLesson: { id: number; name: string; title: string; Exercices: ({ id: number; type: string; question: string; answer: string; suggestions: { id: number; name: string; image: string; media: string; }[]; statement?: undefined; media?: undefined; } | { ...; } | { ...; })[]; Categorie?: undefined; } | { ...; };

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
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

}


// getLessonOrderbyTitle(title)
// getExerciceListeOrderByLessonTitle()
// getExerciceDetailsOrderByType












