var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendOk_New("竟然有讨厌冒险的旅行者…真是独特的人。");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true);
        cm.setStandAloneMode(true);
        cm.sendNextS("这里是哪里？", 57)
    } else {
        if (status == 1) {
            cm.setInGameDirectionMode(false);
            cm.setStandAloneMode(false);
            cm.askYesNo("跟异世界连结的时空的隙缝。异世界跟枫之谷世界是完全不同的世界。只有拥有特别之力的人才能透过时空的隙缝来移动到异世界. 可以从你的身上感觉到那种力量. 你也是否要去新的冒险呢?")
        } else {
            if (status == 2) {
                cm.sendOk_New("不是谁都有这样的机会，所以请好好的享受此冒险。那如果要出发，跟我说声唷。");
                cm.forceCompleteQuest();
                cm.gainExp(1000);
                cm.dispose()
            } else {
                cm.dispose()
            }
        }
    }
};