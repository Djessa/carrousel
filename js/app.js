$(function(){
    var $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);
    $img.css('display', 'none');
    $currentImg.css('display', 'block');
    $carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');
    $('.next').click(function(){ // image suivante
        i++; // on incrémente le compteur
        if( i <= indexImg ){
            $img.css('display', 'none'); // on cache les images
            $currentImg = $img.eq(i); // on définit la nouvelle image
            $currentImg.css('display', 'block'); // puis on l'affiche
        }
        else{
            i = indexImg;
        }
    });
    $('.prev').click(function(){ // image précédente
        i--;
        if( i >= 0 ){
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else{
            i = 0;
        }
    });
    function slideImg(){
        setTimeout(function(){ // on utilise une fonction anonyme index
            if(i < indexImg){ // si le compteur est inférieur au dernier
                i++; // on l'incrémente
            }
            else{ // sinon, on le remet à 0 (première image)
                i = 0;
            }
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
            slideImg(); // on oublie pas de relancer la fonction à la fin
        }, 7000); 
    }// on définit l'intervalle à 7000 millisecondes (7s)
    slideImg(); // enfin, on lance la fonction une première fois
})