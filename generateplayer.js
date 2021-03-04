window.onload = choosePic;

var myPix = new Array(["cards/zhou_55.png","ZHOU - BRONZO"],["cards/zona_70.png","ZONA - FLASHBACK SBC"],["cards/serghio_70.png","SERGIO - ARGENTO"],["cards/aldinho_77.png","ALDINHO - FREEZE"],["cards/luigi_77.png","LUIGI - ARGENTO"],["cards/kekilia_79.png","KEKILIA - SQUAD FOUNDATIONS"],["cards/karzal_80.png","KARZAL - ORO"],["cards/leonetti_80.png","LEONETTI - ORO"],["cards/iryna_80.png","IRYNA - ORO"],["cards/scarfo_80.png","SCARFO - FUTURE STARS"],["cards/pozzetti_81.png","POZZETTI - FUTURE STARS"],["cards/contini_81.png","CONTINI - FUTURE STARS"],["cards/filippazzo_81.png","FILIPPAZZO - FUTURE STARS"],["cards/carugati_81.png","CARUGATI - SQUAD FOUNDATIONS"],["cards/meroni_82.png","MERONI - FUTURE STARS"],["cards/negri_82.png","NEGRI - FUTURE STARS"],["cards/cerea_82.png","CEREA - FUTURE STARS"],["cards/molinari_82.png","MOLINARI - FUTURE STARS"],["cards/carugati_84.png","CARUGATI - FREEZE"],["cards/barakko_84.png","BARAKKO - SQUAD FOUNDATIONS"],["cards/scarfo_84.png","SCARFO - FREEZE"],["cards/salvatico_86.png","SALVATICO - IF"],["cards/negri_87.png","NEGRI - IF"],["cards/moizi_87.png","MOIZI - IF"],["cards/cerrano_88.png","CERRANO - FLASHBACK SBC"],["cards/leonetti_88.png","LEONETTI - FLASHBACK SBC"],["cards/salvatico_88.png","SALVATICO - FREEZE"],["cards/contini_88.png","CONTINI - MID ICON"],["cards/semino_88.png","SEMINO - FREEZE"],["cards/zona_88.png","ZONA - AWARD WINNER"],["cards/meroni_89.png","MERONI - MID ICON"],["cards/serghio_89.png","SERGHIO - HEADLINERS"],["cards/semino_89.png","SEMINO - MOMENTS"],["cards/molinari_90.png","MOLINARI - MID ICON"],["cards/salvatico_90.png","SALVATICO - MOMENTS"],["cards/aleconti_90.png","A. CONTI - FLASHBACK SBC"],["cards/filippazzo_90.png","FILIPPAZZO - MID ICON"],["cards/semino_90.png","SEMINO - RULEBREAKERS"],["cards/cerea_90.png","CEREA - BABY ICON"],["cards/meroni_91.png","MERONI - FREEZE"],["cards/contini_92.png","CONTINI - PRIME ICON"],["cards/moizi_93.png","MOIZI - TOTY"],["cards/cerea_93.png","CEREA - TOTY"],["cards/meroni_93.png","MERONI - TOTY"],["cards/salvatico_93.png","SALVATICO - TOTY"],["cards/negri_93.png","NEGRI - TOTY"],["cards/pozzetti_93.png","POZZETTI - TOTY"],["cards/girelli_93.png","GIRELLI - HERO"],["cards/semino_93.png","SEMINO - TOTY"],["cards/molinari_93.png","MOLINARI - TOTY"],["cards/cerea_94.png","CEREA - PRIME ICON"],["cards/molinari_94.png","MOLINARI - PRIME ICON"],["cards/portella_95.png","PORTELLA - BUNDESLIGA POTM"],["cards/enzo_95.png","ENZO - HERO"],["cards/iryna_95.png","IRYNA - WHAT IF"],["cards/karzal_95.png","KARZAL - MOMENTS"],["cards/meroni_97.png","MERONI - PRIME MOMENTS"],["cards/cerea_98.png","CEREA - PRIME MOMENTS"],["cards/molinari_99.png","MOLINARI - PRIME MOMENTS"],["cards/serghio_99.png","SERGHIO - PRO PLAYER"]);

var totalovr = 0;


function choosePic() {

var i = 1;


while (i < 22) {



// GET THE RANDOM PLAYER AND ASSIGN IT TO CARD

var str1 = "player";
var res = str1.concat(i);
var randomNum = Math.floor((Math.random() * Math.random()) * myPix.length);
document.getElementById(res).src = myPix[randomNum][0];

var smallplayername = "playersmallname".concat(i);
var playernamedescr = "<hh1>"+myPix[randomNum][1].split(' - ')[0]+"<br>"+myPix[randomNum][1].split(' - ')[1]+"</hh1>"
document.getElementById(smallplayername).innerHTML = playernamedescr;

var newplayername = myPix[randomNum][0].slice(0, -7);


// REMOVE OTHER PLAYER OCCURRENCES FROM CARDS ARRAY:

var r = myPix.length
while (r--) {

    if (myPix[r][0].includes(newplayername)) { 
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
 document.getElementById("selectedplayersmallname".concat(position)).innerHTML = document.getElementById("playersmallname"+playertostore.replace('player','')).innerHTML;

}


function StartDraft(){
          document.getElementById('att1').style.display = "block";
	  document.getElementById('sdraft').style.display = "none";
}


function displaynext(next_row, previous_row){
          document.getElementById(next_row).style.display = "block";
	  document.getElementById(previous_row).style.display = "none";
}
