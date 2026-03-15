var status = -1;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("这一切全都是因为黑魔法师。拥有黑魔法师的力量的国王虽然被你打败了，但只是暂时变弱了而已，并没有完全消失。因为他的灵魂和黑魔法师捆绑在一起。请你不断地杀死他……直到他灵魂深处残留的黑魔法师的影响力全部消失为止。")
        } else {
            if (status == a++) {
                cm.dispose();
                cm.forceCompleteQuest()
            }
        }
    }
};