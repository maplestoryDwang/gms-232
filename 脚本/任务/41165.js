var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.forceStartQuest(41165, "");
            cm.updateInfoQuest(41165, "");
            cm.gainItem(4033823, 5);
            cm.dispose()
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("今天怎么是你？也对，原来的配送工因为修炼的时候受伤，也没办法来。我还以为今天喝不了这暖暖的桔梗汁，多亏了你今天也可以喝上了。", 1, 2440007, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage1(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("噢噢，我正等着你呢。年纪大了，为预防各种疾病要多补补身子。可以的话，我建议你也每天吃一个吧，桔梗汁对年轻人也很有好处哦。", 1, 2440014, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071/24400142");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage2(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("我盼的眼珠都快跳出来了。一天不喝这暖暖的桔梗汁，我就会感到皮肤失去了生命似的。", 1, 2440008, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071/24400142/24400083");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage3(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("这暖暖的桔梗汁就是纳兰美白肌肤的秘诀哦。你也每天坚持喝桔梗汁，肯定和纳兰一样拥有美白肌肤的！", 1, 2440006, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071/24400142/24400083/24400064");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage4(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("嘿嘿，我肯定也能做的出来好过桔梗汁的药。但是我这才能，让我去做健康食品是不是太浪费了？", 1, 2440004, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071/24400142/24400083/24400064/24400045");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("今天怎么是你？也对，原来的配送工因为修炼的时候受伤，也没办法来。我还以为今天喝不了这暖暖的桔梗汁，多亏了你今天也可以喝上了。", 1, 2440007, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("今天怎么是你？也对，原来的配送工因为修炼的时候受伤，也没办法来。我还以为今天喝不了这暖暖的桔梗汁，多亏了你今天也可以喝上了。", 1, 2440007, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41165, "NpcSpeech=24400071");
                cm.gainItem(4033823, -1);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};