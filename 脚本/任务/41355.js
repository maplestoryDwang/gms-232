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
            cm.forceStartQuest();
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
            cm.askAcceptDecline("嗯哼？#r卡奥#k……不对，你是受失去记忆的神官委托，才到这来的吧？是的，我出售记忆。准确地说，应该是#r恢复记忆的药水#k……总之，你要不要买#r恢复记忆的药水#k？", 0, 2480005)
        } else {
            if (status === a++) {
                cm.updateInfoQuest(41355, "NpcSpeech=24800051");
                cm.sendNormalTalk("好吧，那就给你#r#t4033873##k。这里……咦？药水呢？一个都没有了？怎么办？我把药水都卖光了，而且制作药水的材料也都用完了……", 0, 2480005, false, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("啊，这样吧。你去把材料找过来，我就免费为你制作药水……我这人也是有良心的。啊？不不，我自言自语罢了。那么你去寻来#r30个#t4033872##k吧？#r#t4033872##k可以从#b#MDmirrorD_328_0_##k那里获得。", 0, 2480005, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(41356, "");
                        cm.forceStartQuest(41356, "");
                        cm.dispose()
                    }
                }
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