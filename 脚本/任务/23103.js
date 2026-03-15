var status = -1;

function start(c, b, a) {
    cm.forceStartQuest();
    cm.dispose()
}

function end(c, b, a) {
    if (c == 1) {
        status++
    } else {
        status--
    }
    if (status == 0) {
        cm.sendNext("没想到我们又在这里见面了，恭喜你成为反抗者，从一开始你的特殊能力就让人瞩目，我相信#p2151001#肯定也是在你身上感受到了什么，才会将你送来了这里。")
    } else {
        if (status == 1) {
            cm.sendNextPrev("既然你已经成为了反抗者，就得认真修炼，好好升级了吧？别担心，我会慢慢将反抗者该具备的素质一点点教给你的。")
        } else {
            if (status == 2) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};