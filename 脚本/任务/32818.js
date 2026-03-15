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
            cm.sendNormalTalk_Bottom("啊，起来。", 57, 1530145, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("呃呃……妈妈我再睡5分钟……都说不吃早饭了。", 37, 1530140, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗨哟！喂，找妈妈的话回家找去，赶紧起来。", 57, 1530145, true, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(32818, "");
                        cm.sendNormalTalk_Bottom("这，这里是科学室？那么……人类，是你将我召唤来的吧。你知道召唤魔王的代价有多大吗？赶紧献上祭物……", 37, 1530140, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("差不多就行了吧。你不是说有办法让麦格纳斯老师昏倒吗？要是再说黑魔术什么的，我绝饶不了你。", 57, 1530145, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("你最近是不是对我太粗鲁了？哼，反正我已经制作好了。那是用我的炼金术制作的灵药。吃了我的药的话，纵然是龙也是会倒下的。", 37, 1530140, true, false);
                                cm.dispose()
                            }
                        }
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
            cm.warp(330002323, 0);
            cm.dispose()
        }
    }
};