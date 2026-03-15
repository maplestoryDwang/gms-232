var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("作为高级度假村，我们一向对专用海滩管理得很好，但是最近的海鸥迪波让人非常头疼。它们把各种各样东西叼到这里，把海滩弄得脏兮兮的。请你到#e金海滩海岸3#n去消灭#b海鸥迪波#k。消灭掉80个左右的话，应该就差不多了。")
    } else {
        if (status == 1) {
            cm.forceStartQuest();
            cm.dispose()
        }
    }
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendOk("真是谢谢你。你帮了我这么多忙……真不知道该怎么表示感谢。我把你送回度假村去吧。")
    } else {
        if (status == 1) {
            cm.sendOk("你看见贝扎明了吗？如果见到了贝扎明，我有话要跟他说……是在#m120041200#吗……")
        } else {
            if (status == 2) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};