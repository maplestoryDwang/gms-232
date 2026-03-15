var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("You can play the Game of Yut #b10 more times today.#k\r\nYou can play the Kite Rider game #r10 more times today#k.\r\nCheck out these awesome New Year's games!");
        cm.dispose()
    }
};