var status = -1;

function start(c, b, a) {
    if (c == -1) {
        cm.dispose()
    } else {
        if (c == 1) {
            status++
        } else {
            status--
        }
        if (status == 0) {
            cm.sendOk("是位新的旅行者吧？还很陌生吧？我是冒险岛运营员，好好听着，人物的各项属性都关系着以后的冒险经历生存，所以正确的选择职业，是很重要的。如果你还不知道应该选择什么职业。你可以到明珠港找#b坤#k谈谈，也许他会告诉你一些你想要知道的。");
            cm.forceCompleteQuest();
            cm.dispose()
        }
    }
};