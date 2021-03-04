window.onload = choosePic;

var myPix = new Array("cards/zhou_55.png","cards/zona_70.png","cards/serghio_70.png","cards/aldinho_77.png","cards/luigi_77.png","cards/kekilia_79.png","cards/karzal_80.png","cards/leonetti_80.png","cards/iryna_80.png","cards/scarfo_80.png","cards/pozzetti_81.png","cards/contini_81.png","cards/filippazzo_81.png","cards/carugati_81.png","cards/meroni_82.png","cards/negri_82.png","cards/cerea_82.png","cards/molinari_82.png","cards/carugati_84.png","cards/barakko_84.png","cards/scarfo_84.png","cards/salvatico_86.png","cards/negri_87.png","cards/moizi_87.png","cards/cerrano_88.png","cards/leonetti_88.png","cards/salvatico_88.png","cards/contini_88.png","cards/semino_88.png","cards/zona_88.png","cards/meroni_89.png","cards/serghio_89.png","cards/semino_89.png","cards/molinari_90.png","cards/salvatico_90.png","cards/aleconti_90.png","cards/semino_90.png","cards/cerea_90.png","cards/meroni_91.png","cards/contini_92.png","cards/moizi_93.png","cards/cerea_93.png","cards/meroni_93.png","cards/salvatico_93.png","cards/negri_93.png","cards/pozzetti_93.png","cards/girelli_93.png","cards/semino_93.png","cards/molinari_93.png","cards/cerea_94.png","cards/molinari_94.png","cards/portella_95.png","cards/enzo_95.png","cards/filippazzo_90.png","cards/iryna_95.png","cards/karzal_95.png","cards/meroni_97.png","cards/cerea_98.png","cards/molinari_99.png","cards/serghio_99.png",);

var totalovr = 0;

function choosePic() {

var i = 1;


while (i < 22) {



// GET THE RANDOM PLAYER AND ASSIGN IT TO CARD

var str1 = "player";
var res = str1.concat(i);
var randomNum = Math.floor((Math.random() * Math.random()) * myPix.length);
document.getElementById(res).src = myPix[randomNum];

var newplayername = myPix[randomNum].slice(0, -7);


// REMOVE OTHER PLAYER OCCURRENCES FROM CARDS ARRAY:

var r = myPix.length
while (r--) {

    if (myPix[r].includes(newplayername)) { 
        myPix.splice(r, 1);
    } 
}


i++;   

		 }
		}



function storeplayer(position, playertostore) {

 document.getElementById(position).src = document.getElementById(playertostore).src;

 

 card_ovr = parseInt(document.getElementById(playertostore).src.split("_")[1].slice(0, -4));
 totalovr = (totalovr +  card_ovr);
 document.getElementById("current_overall").innerHTML = totalovr;

}


function StartDraft(){
          document.getElementById('att1').style.display = "block";
	  document.getElementById('sdraft').style.display = "none";
}


function displaynext(next_row, previous_row){
          document.getElementById(next_row).style.display = "block";
	  document.getElementById(previous_row).style.display = "none";
}
