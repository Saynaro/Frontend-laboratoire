
// let currentElement = null;          //element choisi
// let isDragging = false;             // element est choisi?
// let isMouseDown = false;             //ADDED
// let dragStarted = false;            // ADDED

// // let offsetX = 0;
// // let offsetY = 0;


// //  creer la description
// const description = document.createElement('div');
// description.classList.add('description');
// document.body.appendChild(description);

// function showDescription(text, x, y) {
//     description.textContent = text;
//     description.style.left = x + 20 +'px';              //la distance entre le cursor et element
//     description.style.top  = y  + 'px';
//     description.style.opacity = 1;
//     description.style.visibility = 'visible';
// }

// function hideDescription() {
//     description.style.opacity = 0;
//     description.style.visibility = 'hidden';

// }






// document.addEventListener('mousedown', (event) => {
//     // si le click est sur placard return;
//     if (event.target.closest('.placard')) {
//         return;
//     }
//     // si le click n'est pas sur un element, supprimer 'selected'
//     if (!event.target.closest('.element')) {
//         document.querySelectorAll('.element.selected')
//             .forEach(elem => elem.classList.remove('selected'));

//         hideDescription();
//         currentElement = null;
//         isMouseDown = false;
//         isDragging = false;
//     }
// });





// //  commencer a deplacer    
// document.querySelectorAll('.element').forEach(element => {       // si on prend QuerySelector, il prend le parametre foreach comme object
//     element.homeSlot = element.parentElement;                   // la place reservé du element a l'placard
//     element.addEventListener('mousedown', (event) => {
//     event.preventDefault();   // pour supprimer la fonction standart du browser
//     event.stopPropagation();        // new added

//     // if (isDragging) {           // impossible de prendre le deuxieme element,
//     //     return;                 // si isDragging = true, le code en bas ne vas pas passer, le fonction va s'arreter
//     // }                           // ça veut dire si on a pris l'element
    




//     if (currentElement === element && element.classList.contains('selected')) {
//         element.classList.remove('selected');
//         hideDescription();

//         currentElement = null;
//         isMouseDown = false;
//         isDragging = false;

//         return;     // le fonction s'arrete
//     };

//         // supprimer la class 'selected' pour tous les elements en avance
//     document.querySelectorAll('.element.selected')
//         .forEach(elem => {
//             elem.classList.remove('selected');
//             hideDescription();
//         });



//     if (isDragging) {
//         return;
//     }


//     currentElement = element;
//     isDragging = false;
//     isMouseDown = true;
//     dragStarted = false;

//     // element choisi augmente
//     currentElement.classList.add('selected');


//         /* ADDED */
//     if (description.style.display === 'block') {
//         hideDescription();
//     } else {
//         showDescription(element.dataset.description, event.pageX, event.pageY); 
//     }

//     });
// });

// document.addEventListener('mousemove', event => {
//     if (!isMouseDown || !currentElement) {
//         return;
//     };




//     if (!isDragging) {
        
//         isDragging = true;
//         // isMouseDown = true

//         currentElement.classList.remove('selected');
//         currentElement.classList.add('dragging');
//         hideDescription();
//         hideSearch();

//         //new added
//     const placard = currentElement.closest('.placard');
//     if (placard) {
//         placard.classList.remove('zoomed');
//     };



    
//      const rect = currentElement.getBoundingClientRect();        // pour prendre la position exacte  de notre element en  rectangle
//         // event.pageX - la position du cursor 
//     // rect.left - la position du element
//     // memoriser la position du cursor



    
//     currentElement.style.position = 'absolute';

//     currentElement.style.left = rect.left + 'px';
//     currentElement.style.top  = rect.top  + 'px';

//     currentElement.style.zIndex = 1000;
//     currentElement.style.pointerEvents = 'none';

//     document.body.appendChild(currentElement);         // pour faire element - child  du body
//     hideDescription();
//     // showDescription(element.dataset.description, event.pageX, event.pageY);          // dataset.description - c'est l'information qu'on
    
// };                                                                              // a mis en HTML code

//         // Centrer l'image sous le cursor
//     currentElement.style.left = (event.pageX - currentElement.offsetWidth / 2) + 'px';
//     currentElement.style.top = (event.pageY - currentElement.offsetHeight / 2) + 'px';
    
// hideDescription();
//     // showDescription(currentElement.dataset.description, event.pageX, event.pageY);  
    
//     // pour montrer la descriptio d'un element

            
// });

// //          mouvement







// //       finir le mouvement
// document.addEventListener('mouseup', () => {
//     isMouseDown = false;

//     if (!isDragging || !currentElement){            // si isDragging = false ou currentElement = false, le fonction s'arrete
//         return;     
//     }   

//     if (currentElement) {
//         currentElement.classList.remove('selected');
//         currentElement.classList.remove('dragging'); 
//         hideDescription();
//     }


//     const table = document.getElementById('table');
//     const tableRect = table.getBoundingClientRect();                    // la rectangle de la table; la distance entre le coin du fenetre
//                                                                         // et le coin du tabl; et le cote du fenetre et le cote du table
//     const elementRect = currentElement.getBoundingClientRect();         // la rectangle d'un element; la distance entre le coin du 
//                                                                         // fenetre et le coin du element; et le cote du fenetre et le cote du element. Ex: tableRect.top - la distance entre la fenetre et la cote haut du table. Meme pour gauche, etc.

//     const isOnTable =
//     elementRect.right > tableRect.left &&       // si le cote droit d'element est plus que le cote gauche de la table.
//                                                 // ex: elementRect.right = 100px et tableRect.left = 80px => element est sur la table
//     elementRect.left < tableRect.right &&       // si le cote gauche d'element est moins que le cote droite de la table.
//                                                 // ex: elementRect.left = 80px et tableRect.right = 100px => element est sur la table
//     elementRect.bottom > tableRect.top &&       // etc.
//     elementRect.top < tableRect.bottom;         // verifier si l'element est sur la table




//     if (!isOnTable) {
        
//     // retourner sur placard
//     currentElement.style.position = 'relative';         // si on met left, top = 0, il va remettre les elements a l'placard
//     currentElement.style.left = '0';
//     currentElement.style.top  = '0';
    

//     currentElement.homeSlot.appendChild(currentElement);        // remettre l'element choisi a son place reservé a l'placard
//     hideDescription();
//     // document.querySelector('.placard').appendChild(currentElement);       // si l'element est hors de la table, remettre le a l'placard
//     }

//     // hideDescription();          // si on enleve ça la description va rester affiché
//     hideDescription();
//     currentElement.style.pointerEvents = 'auto';
//     currentElement.style.zIndex = 1;                    

//     currentElement = null;
//     isDragging = false;
//     dragStarted = false;
// });








// // /* SEARCH -  BARS */


// // const searchBar = document.querySelectorAll('placard-bar');

// // function showSearch() {
// //     searchBar.style.display = 'block';
// // }

// // function hideSearch() {
// //     searchBar.style.display = 'none';
// // }






// // // SUPPRIMER LE ZOOM EN CLICK EN SEARCH BARE
// // document.querySelectorAll('.search-bars').forEach(search => {
// //     search.addEventListener('click', event => {
// //         event.stopPropagation();
// //     });

// //     search.querySelectorAll('input').forEach(input => {
// //         input.addEventListener('mousedown', event => {
// //             event.stopPropagation();
// //         });
// //         input.addEventListener('click', event => {
// //             event.stopPropagation();
// //         });
// //     });
// // });



// // /* POUR CHERCHER JUST DANS SON PLACARD */

// // document.querySelectorAll('.placard').forEach(placard => {
// //     const input = placard.querySelector('.search-bars input');

// //     input.addEventListener('input', () => {
// //         const value = input.value.toLowerCase();

// //         placard.querySelectorAll('.element').forEach(elem => {
// //             const text = elem.dataset.description?.toLowerCase() || '';
// //             elem.style.display = text.includes(value) ? '' : 'none';
// //         });
// //     });
// // });












// // ZOOM PLACARD


// document.querySelectorAll('.placard').forEach(placard =>{
//     placard.addEventListener('mouseup', (event) => {

//         if (isDragging || isMouseDown) {
//             return;
//         } // pour ne pas zoomer en drag

//         if (event.target.classList.contains('element')) {
//             return;
//         };


//         event.stopPropagation();        // pour le click ne marche pas pour les autres
        
        
//         const isZoomed = placard.classList.toggle('zoomed');
//         document.querySelectorAll('.placard').forEach(plac =>{
//             if (plac !== placard) {
//                 plac.classList.remove('zoomed');
//             };
//         });


//         hideDescription();

//         if (isZoomed) {
//             showSearch();
//         } else {
//             hideSearch();
//         }
//     });
// });


// /*      SI ON CLICK DEHORS DU PLACARD ENLEVER LE ZOOM*/ 
// document.addEventListener('click', (event) => {

//     if (isDragging) {
//         return;                     // pour securiser si la fonction ne fonctionne correctement
//     }

//     if (event.target.closest('.placard')) {
//         return;
//     }

//         document.querySelectorAll('.placard.zoomed').forEach(plac => {
//             plac.classList.remove('zoomed');
            
//         });
//         hideDescription();
//         hideSearch();
//     });


    
















































let currentElement = null;          //element choisi
let isDragging = false;             // element est choisi?
let isMouseDown = false             //ADDED
let dragStarted = false;            // ADDED

// let offsetX = 0;
// let offsetY = 0;


//  creer la description
const description = document.createElement('div');
description.classList.add('description');
document.body.appendChild(description);

function showDescription(text, x, y) {
    description.textContent = text;
    description.style.left = x + 20 +'px';              //la distance entre le cursor et element
    description.style.top  = y  + 'px';
    description.style.opacity = 1;
    description.style.visibility = 'visible';
}

function hideDescription() {
    description.style.opacity = 0;
    description.style.visibility = 'hidden';

}




document.addEventListener('mousedown', (event) => {
    // si le click n'est pas sur un element, supprimer 'selected'
    if (!event.target.closest('.element')) {
        document.querySelectorAll('.element.selected')
            .forEach(elem => elem.classList.remove('selected'));

        hideDescription();
        currentElement = null;
        isMouseDown = false;
        isDragging = false;
    }
});





//  commencer a deplacer    
document.querySelectorAll('.element').forEach(element => {       // si on prend QuerySelector, il prend le parametre foreach comme object
    element.homeSlot = element.parentElement;                   // la place reservé du element a l'placard
    element.addEventListener('mousedown', (event) => {
    event.preventDefault();   // pour supprimer la fonction standart du browser
    event.stopPropagation();        // new added

    // if (isDragging) {           // impossible de prendre le deuxieme element,
    //     return;                 // si isDragging = true, le code en bas ne vas pas passer, le fonction va s'arreter
    // }                           // ça veut dire si on a pris l'element
    




    if (currentElement === element && element.classList.contains('selected')) {
        element.classList.remove('selected');
        hideDescription();

        currentElement = null;
        isMouseDown = false;
        isDragging = false;

        return;     // le fonction s'arrete
    };

        // supprimer la class 'selected' pour tous les elements en avance
    document.querySelectorAll('.element.selected')
        .forEach(elem => {
            elem.classList.remove('selected');
            hideDescription();
        });



    if (isDragging) {
        return;
    }


    currentElement = element;
    isDragging = false;
    isMouseDown = true;
    dragStarted = false;

    // element choisi augmente
    currentElement.classList.add('selected');


        /* ADDED */
    if (description.style.display === 'block') {
        hideDescription();
    } else {
        showDescription(element.dataset.description, event.pageX, event.pageY); 
    }

    });
});

document.addEventListener('mousemove', event => {
    if (!isMouseDown || !currentElement) {
        return;
    };




    if (!isDragging) {
        
        isDragging = true;

        // isMouseDown = true

        currentElement.classList.remove('selected');
        currentElement.classList.add('dragging');
        hideDescription();


        //new added
    const placard = currentElement.closest('.placard');
    if (placard) {
        placard.classList.remove('zoomed');

    };



    
     const rect = currentElement.getBoundingClientRect();        // pour prendre la position exacte  de notre element en  rectangle
        // event.pageX - la position du cursor 
    // rect.left - la position du element
    // memoriser la position du cursor



    
    currentElement.style.position = 'absolute';

    currentElement.style.left = rect.left + 'px';
    currentElement.style.top  = rect.top  + 'px';

    currentElement.style.zIndex = 1000;
    currentElement.style.pointerEvents = 'none';

    document.body.appendChild(currentElement);         // pour faire element - child  du body
    hideDescription();
    // showDescription(element.dataset.description, event.pageX, event.pageY);          // dataset.description - c'est l'information qu'on
    
};                                                                              // a mis en HTML code

        // Centrer l'image sous le cursor
    currentElement.style.left = (event.pageX - currentElement.offsetWidth / 2) + 'px';
    currentElement.style.top = (event.pageY - currentElement.offsetHeight / 2) + 'px';
    
hideDescription();
    // showDescription(currentElement.dataset.description, event.pageX, event.pageY);  
    
    // pour montrer la descriptio d'un element

            
});

//          mouvement







//       finir le mouvement
document.addEventListener('mouseup', () => {
    isMouseDown = false;

    if (!isDragging || !currentElement){            // si isDragging = false ou currentElement = false, le fonction s'arrete
        return;     
    }   

    if (currentElement) {
        currentElement.classList.remove('selected');
        currentElement.classList.remove('dragging'); 
        hideDescription();
    }


    const table = document.getElementById('table');
    const tableRect = table.getBoundingClientRect();                    // la rectangle de la table; la distance entre le coin du fenetre
                                                                        // et le coin du tabl; et le cote du fenetre et le cote du table
    const elementRect = currentElement.getBoundingClientRect();         // la rectangle d'un element; la distance entre le coin du 
                                                                        // fenetre et le coin du element; et le cote du fenetre et le cote du element. Ex: tableRect.top - la distance entre la fenetre et la cote haut du table. Meme pour gauche, etc.

    const isOnTable =
    elementRect.right > tableRect.left &&       // si le cote droit d'element est plus que le cote gauche de la table.
                                                // ex: elementRect.right = 100px et tableRect.left = 80px => element est sur la table
    elementRect.left < tableRect.right &&       // si le cote gauche d'element est moins que le cote droite de la table.
                                                // ex: elementRect.left = 80px et tableRect.right = 100px => element est sur la table
    elementRect.bottom > tableRect.top &&       // etc.
    elementRect.top < tableRect.bottom;         // verifier si l'element est sur la table




    if (!isOnTable) {
        
    // retourner sur placard
    currentElement.style.position = 'relative';         // si on met left, top = 0, il va remettre les elements a l'placard
    currentElement.style.left = '0';
    currentElement.style.top  = '0';
    

    currentElement.homeSlot.appendChild(currentElement);        // remettre l'element choisi a son place reservé a l'placard
    hideDescription();
    // document.querySelector('.placard').appendChild(currentElement);       // si l'element est hors de la table, remettre le a l'placard
    }

    // hideDescription();          // si on enleve ça la description va rester affiché
    hideDescription();
    currentElement.style.pointerEvents = 'auto';
    currentElement.style.zIndex = 1;                    

    currentElement = null;
    isDragging = false;
    dragStarted = false;
});











// zoom placard




document.querySelectorAll('.placard').forEach(placard =>{
    placard.addEventListener('click', (event) => {
        event.stopPropagation();        // pour le click ne marche pas pour les autres

        if (event.target.classList.contains('element')) {
            return;
        }

        document.querySelectorAll('.placard.zoomed').forEach(plac =>{
            if (plac !== placard) {
                plac.classList.remove('zoomed');
            };

        });

            placard.classList.toggle('zoomed');
            hideDescription();
        });
    });


document.addEventListener('click', (event) => {

    if (event.target.closest('.placard')) {
        return;
    };

        document.querySelectorAll('.placard.zoomed').forEach(plac => {
            plac.classList.remove('zoomed');
            


            // SI ON CLICK DEHORS LES ELEMENTS AFFICHE, LE SEARCH NE MARCHE PAS

            const input = plac.querySelector('.search-bars input');
            if (input) {
                input.value = '';
            };
            plac.querySelectorAll('.element').forEach(elem =>{
                elem.style.display = '';
            });

            hideDescription();
        });
    }); 




    


// ROBINET
function waterOpen() {
    const water = document.querySelector('.water');
    const buttonOuvrir = document.getElementById('ouvrir');

    let isOpened = false;

    function ouvrirEau() {
        isOpened = !isOpened;

        // water.style.height = isOpened ? '95px' : '0';        // version fonctionne mais a partir de la deuxieme fois

        if (isOpened) {
        water.style.height = '0';   // garantie de start


        // pour l'animation doucement
        // La fonction requestAnimationFrame() force le navigateur à afficher d'abord l'état actuel,
        // puis à animer le changement suivant.
        requestAnimationFrame(() => {              
            water.style.height = '95px';
        });
        
        } else {
            water.style.height = '0';
        };
    }

    buttonOuvrir.addEventListener('click', () => {
        ouvrirEau();
    });
};

waterOpen();








// PROFESSEUR
function showInstruction() {
    let conseil = document.querySelector('.conseil');
    const firstMessage = conseil.innerHTML;
    let secondMessage = "Clique sur les gants et les lunettes pour les équiper ! Une fois protégé, nous pourrons commencer l'expérience.";
    
    document.querySelector('.next-button').addEventListener('click', () => {
        conseil.innerHTML = secondMessage;
        secondMessage = conseil.innerHTML;
    });
    document.querySelector('.prevent-button').addEventListener("click", () => {
        conseil.innerHTML = firstMessage;
    });
    
};
showInstruction();





    // // /* SEARCH -  BARS */




// SUPPRIMER LE ZOOM EN CLICK EN SEARCH BARE
document.querySelectorAll('.search-bars').forEach(search => {
    search.addEventListener('click', event => {
        event.stopPropagation();
    });

    search.querySelectorAll('input').forEach(input => {
        input.addEventListener('mousedown', event => {
            event.stopPropagation();
        });
        input.addEventListener('click', event => {
            event.stopPropagation();
        });
    });

});


/* POUR CHERCHER JUST DANS SON PLACARD */

document.querySelectorAll('.placard').forEach(placard => {
    const input = placard.querySelector('.search-bars input');
    const form = placard.querySelector('.search-bars form');

    if (!input || !form){     
        return;
    };     // ❗ S'il n'y a pas de barre de recherche sur ce placard, quittez.


    input.addEventListener('input', () => {
        const value = input.value.toLowerCase();

        placard.querySelectorAll('.element').forEach(elem => {
            const text = elem.dataset.description.toLowerCase();






            // SI ELEMENT INCLUDES UN MOT DE DESCRIPTION MONTRER
            if (text.includes(value)) {
                elem.style.display = '';
            } else {
                elem.style.display = 'none';
            }
        });



        
       

        // SI LE SEARCH BAR EST VIDE AFFICHER TOUS
        if (value === '') {
            placard.querySelectorAll('.element').forEach(elem => {
                elem.style.display = '';
            });
            
        };



    });


    // SI ON CLICK LE BUTTON RESET TOUS LES ELEMENTES AFFICHE
    form.addEventListener('reset', () => {
        setTimeout(()=>{
            placard.querySelectorAll('.element').forEach(elem => {
                elem.style.display = '';
                
            });
        }, 0);
    });

});






