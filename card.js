let duration = 1000;
let blockscontainer = document.querySelector(".memory-game-blocks");
let blocks = Array.from(blockscontainer.children);
let orderrang = [...Array(blocks.length).keys()];
//console.log(orderrang);

document.querySelector(".control-btn span").onclick = function() {
    let yorname = prompt("enter your name");
    if (yorname == null || yorname == "") {
        document.querySelector(".name span").innerHTML = "unknown"
    } else { document.querySelector(".name span").innerHTML = yorname }
    document.querySelector(".control-btn").remove();
}


shufle(orderrang)
    //console.log(orderrang);

blocks.forEach((block, indx) => {
    block.style.order = orderrang[indx];
    block.addEventListener("click", function() {
        flipblock(block);
    })
});
//flip
function flipblock(selectedBlock) {
    selectedBlock.classList.add('is-flipped');
    //collect all flipped blocks
    let allflibdblocks = blocks.filter(flipblock => flipblock.classList.contains("is-flipped"));
    //if two selected
    if (allflibdblocks.length === 2) {
        stopclick();
        checkBlock(allflibdblocks[0], allflibdblocks[1]);
    }

}

function stopclick() {
    blockscontainer.classList.add("no-click")

    setTimeout(() => {
        blockscontainer.classList.remove("no-click");
        //remove class "noclick" after 1sec
    }, duration);
}

function checkBlock(fblock, sblock) {
    let triesitem = document.querySelector(".tries span");
    if (fblock.dataset.anmie === sblock.dataset.anmie) {
        fblock.classList.remove("is-flipped");
        sblock.classList.remove("is-flipped");
        //
        fblock.classList.add("match");
        sblock.classList.add("match");

    } else {
        setTimeout(() => {
            fblock.classList.remove("is-flipped");
            sblock.classList.remove("is-flipped");
        }, duration)
    }
}













//shufle
function shufle(array) {
    let current = array.length,
        temp,
        random;
    while (current > 0) {
        random = Math.floor(Math.random() * current);
        current--;
        //console.log(random);
        //temp
        temp = array[current];
        //
        array[current] = array[random];
        //
        array[random] = temp;
    }
    return array;
}
//save current time in box
//current time=random itme
//random time=get current time from box