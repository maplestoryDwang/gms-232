function enter() {
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
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
            cm.sendNormalTalk("我……是#r格里梅尔博士#k的实验体。名字叫#b贝比蒂#k……虽然不知道你是怎么到这里来的，不过请你快点出去!要是被格里梅尔发现的话就完了!", 0, 2159006, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("实验体？格里梅尔？你到底在说什么啊？这里到底……是什么地方？你为什么在那个里面？", 2, 2159006, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你不知道格里梅尔？格里梅尔博士……是黑色之翼的疯狂科学家!这里是格里梅尔的实验室。格里梅尔在这里进行人体实验……", 0, 2159006, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("人体……实验？", 2, 2159006, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是的，人体实验。要是你也被抓住，说不定会被当作实验材料!快点逃走吧!", 0, 2159006, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("什么？逃，逃走……？但是你……!", 2, 2159006, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("……嘘!小声点!格里梅尔博士来了!", 0, 2159006, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.updateInfoQuest(23007, "exp3=1;exp4=1;vel00=2");
                                        cm.dispose();
                                        cm.warp(931000011, 0, false)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};