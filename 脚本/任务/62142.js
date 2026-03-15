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
            cm.sendNormalTalk_Bottom("看来你做好心理准备了啊。\r\n现在，我们的敌人不就是僵尸嘛！", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("距今三四百年前……那个时候有很多道士。那时候也和现在一样，僵尸十分猖獗。不，应该说那时的情况比现在更严重。\r\n事实上，当初为了把在战场上战死的人运回故乡，人们就在死者的尸体上贴上符咒，并施以法术，使其可以按指令移动。可突然自某一天起，开始不断有僵尸摆脱人类的控制。那些僵尸不但可以自行移动，而且还会攻击人类，变得非常可怕。", 37, 9310540, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我们与僵尸之间的战斗从那时起便开始了……\r\n哎，以前的故事太长了，一时半会儿讲不完。\r\n我还是先跟你说说僵尸讨厌什么东西吧。", 37, 9310540, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("从前，在僵尸横行的那段时期！你知道那些不会武功的平民们是怎么对付僵尸的吗？\r\n#e那就是泼洒#t4034643:#！", 37, 9310540, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("…？(这不是人人都知道的事情么？)", 57, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("嘘，你小声点，当心别被别人听见。", 37, 9310540, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo_Bottom("往僵尸身上泼洒#t4034643:#的话，就能赶跑僵尸。现在必须先搜集用于制作#t4034643:#的材料，请你搜集10个#t4034641:#和10个#t4034642:#吧。", 37, 9310540)
                                } else {
                                    if (status === a++) {
                                        cm.forceStartQuest(62142, "");
                                        cm.sendNormalTalk_Bottom("很好，前往上海外围的#m701102010#的话，就能找到红豆和稻子了。你去各收集10个，带回来吧。", 37, 9310540, false, false);
                                        cm.effect_NormalSpeechBalloon("(还是先把他说的那些东西搜集来吧……)", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId())
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
            cm.sendNormalTalk_Bottom("哦，你带来了啊。干得不错。", 37, 9310540, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62142);
                cm.forceStartQuest(62143, "");
                cm.updateInfoQuest(62142, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 1);
                cm.sendNormalTalk_Bottom("不过，光有这些还无法消灭僵尸。\r\n我们需要的是#t4034643:#！你去找豫园的厨师#p9310536#，他会帮忙把这些东西制成#t4034643:#的，你快去吧！", 37, 9310540, true, false)
            } else {
                if (status === a++) {
                    cm.dispose()
                }
            }
        }
    }
};