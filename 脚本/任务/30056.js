var status = -1;
var quest = 30056;
var selectionLog = [];

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("蘑，蘑，蘑，蘑菇大臣回来了？！这可糟了！他不会是又想发动叛乱吧？在事情还没发生之前，必须马上抓住他……！嗯？那个蘑菇就是蘑菇大臣？我看着一点都不像啊。我可以肯定，那个蘑菇不是蘑菇大臣。", 32, 1302011, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(quest, "NpcSpeech=13020111");
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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("蘑菇大臣，看上去确实有点像。蘑菇盖的颜色和大小都很相似……所以你才会弄错。也许在人类看来，蘑菇们都长得差不多。", 32, 1302007, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(quest, "NpcSpeech=13020111/13020072");
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
        if (status === a++) {
            cm.sendNormalTalk_Bottom("蘑菇大臣回来了？警卫队长现在到底在干什么？必须马上把他抓起来……嗯？那个眼睛旁边有一颗痣的蘑菇？你是想逗我笑，所以在跟我讲笑话吗？那种事情一点都不好笑。", 32, 1302001, false, true)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(quest, "NpcSpeech=13020111/13020072/13020013");
                cm.forceCompleteQuest();
                cm.gainExp(51455);
                cm.warp(106031000, 0, true);
                cm.dispose()
            }
        }
    }
};