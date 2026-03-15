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
            cm.sendNormalTalk("还以为吃了时间之蛋就可以变成大人……看来时间之蛋里的时间太少了。我都吃了100个感觉也没什么变化。我真的没办法成为大人了吗？", 0, 2470007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("到底为什么想成为大人呢？做大人有多累啊。", 4, 2400005, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我们也还没有长大呢。", 4, 2400006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("……我是说精神年龄，精神年龄。一直被关在神殿的你的确是个小孩，但是经过千锤百炼的我，难道不觉得像个大人吗？", 4, 2400005, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("(摇摇头)反正他好像有什么心事。怎么看都不像是个小孩子的抱怨。", 4, 2400006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("这我也同意。但是毕竟和我没关系。", 4, 2400005, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……阿尔法……", 4, 2400006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("干嘛用那种眼神看着我？……我知道了，去帮帮他不就行了。咳，先去问问周围的人，克林到底有什么心事。那样才知道该怎么帮助他，不是吗？都怪你我的脑细胞都快用完了！", 4, 2400005, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.updateInfoQuest(41311, "");
                                            cm.forceStartQuest(41311, "");
                                            cm.dispose()
                                        }
                                    }
                                }
                            }
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
            cm.updateInfoQuest(41311, "NpcSpeech=24700031");
            cm.dispose()
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
            cm.updateInfoQuest(41311, "NpcSpeech=24700031/24700102");
            cm.dispose()
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
            cm.updateInfoQuest(41311, "NpcSpeech=24700031/24700102/24700063");
            cm.dispose()
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
            cm.updateInfoQuest(41311, "NpcSpeech=24700031/24700102/24700063/24700044");
            cm.dispose()
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
            cm.updateInfoQuest(41311, "NpcSpeech=24700031/24700102/24700063/24700044/24700085");
            cm.dispose()
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