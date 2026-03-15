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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的开始脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57446.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57446.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("……不愧是师父。我头脑里的漩涡瞬间平静了下来。", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("师父说得没错。就算清楚了光秀的阴谋，我所要完成的任务也没有发生丝毫变化。为了阻止这些来自日本的坏人继续迫害冒险岛，我只需努力培养力量，将他们打败即可。不管对手是光秀，是兰丸，还是信长，我要做的事情都是一样的。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("回到日本之后，我要继续辅佐姬儿，重新复兴松山家族……直到我的生命走到尽头。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("为了实现这个目标，我只要拼尽自己的最大力量就足够了……好了！接下来要去哪里呢？", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#神那。迅速返回枫叶山丘。详细情况等你回来之后再告诉你。我会等你的。　 樱乃姬", 37, 9130021, false, true)
                        } else {
                            if (status === a++) {
                                cm.askYesNo_Bottom("这是怎么回事？姬儿居然会催得这么紧急……看来我还是尽快返回枫叶山丘吧。", 57, 0)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(57447, "");
                                    cm.forceCompleteQuest(57446);
                                    cm.gainExp(1536020);
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