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
            cm.sendNormalTalk("#h0#，为了欢迎你来到圣地，我想送你一份小礼物。装备道具的方法很简单。请按#b#e快捷键I#k#n。那样你的背包窗就会打开。稍等一下，你的性子还挺急的嘛？请听我说完之后再试。因为帽子还在我的手中。用快捷键I打开背包窗后，双击帽子，即可把它装备到身上。你想现在试试吗？", 1, 1102101, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(20824, "");
                cm.effect_OnUserEff("UI/tutorial.img/6");
                cm.gainItem(1003769, 1);
                cm.dispose()
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/20824.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            cm.forceCompleteQuest(20824);
            cm.sendNormalTalk("穿戴装备的方法很简单吧？\r\n#h0#，你的力量越强大，就越需要与之相匹配的武器和衣服，装备会让你变得更加强大。\r\n", 0, 1102101, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("奇努来了呢，他会向你说明你所必须知道的内容的，虽然会有些无聊，不过还请你一定要认真听。", 0, 1102101, true, true);
                cm.dispose()
            }
        }
    }
};