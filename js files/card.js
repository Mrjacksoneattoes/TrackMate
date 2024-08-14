let blanc = document.querySelector(".couleurs .blanche");
let noir = document.querySelector(".couleurs .noir");
let bleu = document.querySelector(".couleurs .bleu");
let violet = document.querySelector(".couleurs .violet");
let turquoise = document.querySelector(".couleurs .turquoise");
let image = document.getElementById("blanc");
let petitimage = document.querySelector(".container1 #blanc");
let text = document.getElementById("mini");
let boutonplus1 = document.getElementById("plus");
let boutonplus2 = document.getElementById("plus2");
let boutonplus3 = document.getElementById("plus3");
let petite1 = document.querySelector(".peitte .premiere");
let petite2 = document.querySelector(".peitte .seconde");
let petite3 = document.querySelector(".peitte .derniere");
let para1 = null;
let para2 = null;
let para3 = null;

function changeImage(){
    noir.addEventListener("click", (e)=>{
        image.src = "/assets/noir.png"
        petitimage.src = "/assets/noir.png"
        noir.classList.add("border")
        blanc.classList.remove("border")
        violet.classList.remove("border")
        bleu.classList.remove("border")
        turquoise.classList.remove("border")
        text.textContent = "couleur: noir"
    })
    blanc.addEventListener("click", (e)=>{
        image.src = "/assets/blanc.png"
        petitimage.src = "/assets/blanc.png"
        noir.classList.remove("border")
        violet.classList.remove("border")
        bleu.classList.remove("border")
        turquoise.classList.remove("border")
        blanc.classList.add("border")
        text.textContent = "couleur: blanc"

    })
    bleu.addEventListener("click", (e)=>{
        image.src = "/assets/bleu.png"
        petitimage.src = "/assets/bleu.png"
        bleu.classList.add("border")
        noir.classList.remove("border")
        violet.classList.remove("border")
        blanc.classList.remove("border")
        turquoise.classList.remove("border")
        text.textContent = "couleur: bleu"


    })
    violet.addEventListener("click", (e)=>{
        image.src = "/assets/violet.png"
        petitimage.src = "/assets/violet.png"
        bleu.classList.remove("border")
        noir.classList.remove("border")
        violet.classList.add("border")
        blanc.classList.remove("border")
        turquoise.classList.remove("border")
        text.textContent = "couleur: violet"
    })
    turquoise.addEventListener("click", (e)=>{
        image.src = "/assets/turquoise.png"
        petitimage.src = "/assets/turquoise.png"
        bleu.classList.remove("border")
        noir.classList.remove("border")
        violet.classList.remove("border")
        blanc.classList.remove("border")
        turquoise.classList.add("border")
        text.textContent = "couleur: turquoise"

    })
   
}

function ajoutplus(){


    boutonplus1.addEventListener("click", (e)=>{
        if (boutonplus1.textContent === "+"){
            boutonplus1.textContent = "-"
            para1 = document.createElement("p");
            para1.textContent = "Détails de l'article. C'est l'espace idéal pour présenter les caractéristiques de votre article : taille, matière, instructions de lavage, etc. Vous pouvez également expliquer ce qui rend votre article spécial et comment vos clients peuvent en bénéficier."
            para1.classList.add("endessous")
            petite1.appendChild(para1)
        }else{
            boutonplus1.textContent = "+"
            petite1.removeChild(para1)
         
            
        }
    
    })
    boutonplus2.addEventListener("click", (e)=>{
        if (boutonplus2.textContent === "+"){
            boutonplus2.textContent = "-"
            para2 = document.createElement("p");
            para2.textContent = "Politique d'échange et de remboursement. Informez vos visiteurs des conditions d'échange et de remboursement de votre boutique en ligne. Proposez une politique claire afin d'établir une relation de confiance avec vos clients et leur permettre d'acheter sereinement sur votre site"
            para2.classList.add("endessous");
            petite2.appendChild(para2)
            
        }else{
            boutonplus2.textContent = "+"
            petite2.removeChild(para2)
        }
    })
    boutonplus3.addEventListener("click", (e)=>{
        if (boutonplus3.textContent === "+"){
            boutonplus3.textContent = "-";
            para3 = document.createElement("p");
            para3.textContent = "Politique de livraison. C'est l'espace idéal pour ajouter des détails supplémentaires sur vos modes de livraison, options d'emballage et prix. Proposez une politique de livraison claire afin de rassurer vos clients et leur permettre d'acheter sereinement sur votre site."
            para3.classList.add("endessous");
            petite3.appendChild(para3)
        }else{
            petite3.removeChild(para3);
            boutonplus3.textContent = "+";
        }
    })
}


function fonctionnement(){
    changeImage()
    ajoutplus()
}
fonctionnement()