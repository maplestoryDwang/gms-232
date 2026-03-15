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
            cm.sendNormalTalk("我！如果你认为是我要吃这个的话，你就大错特错了。这个，这是…… 这是给我们家隔壁的奶奶的孙女的幼儿园里的朋友的。是那样的。", 0, 1022002, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("……", 2, 1022002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("相信我！！！！", 0, 1022002, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline("嗯嗯，收好你的眼神，回到奥斌那里去吧。\r\n我感觉奥斌肯定为你准备了什么。我会帮你回到奥斌那里的。\r\n那你现在要立刻回到奥斌那里吗？\r\n\r\n#r(接受的话，将自动移动到奥斌所在的金银岛大树升降场。)#k", 1, 1022002)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(26421, "");
                            cm.playerMessage(-1, "麦吉无比害羞地将你送到了金银岛大树升降场。");
                            cm.dispose();
                            cm.warp(104020100, 1, false)
                        }
                    }
                }
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b %SCRIPT_PATH%#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("骑宠使用得还好吗？你没有什么不适吧？", 0, 9072000, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("糖果转交给他了吗？你，在这之前…！我的智能骑宠怎么样了？！没事吧？！没有带你去奇怪的地方吧？", 1, 9072000)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(26421);
                    cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2431757# #t2431757# 1个#k \r\n\r\n哦耶！成功啦！果不其然！嗯？你问我为什么这么高兴？为什么不生气？！", 0, 9072000, false, true);
                    cm.gainItem(2431757, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("嗯…… 实际上，你是第三个使用我的智能骑宠的。换句话说就是，你是第三个试飞的。其实，麦吉的这个秘密爱好只是个借口。谢谢你了。#r飞行时没有失踪，平安地回来了……#k", 0, 9072000, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("喔喔，不要那么生气嘛！结局好不就代表一切都好嘛？第三次飞行成功啦！现在也该将它流入市场了！我要发财啦！", 0, 9072000, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("(虽然不知道奥斌能不能发财，等他发财之后，我应该问他要点治疗费。突然觉得脖子有点酸。)", 2, 9072000, true, false)
                            } else {
                                if (status === a++) {
                                    cm.dispose()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};