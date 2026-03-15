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
            cm.forceStartQuest(3314, "");
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
            cm.askMenu("呼呼呼呼.... 看你面色苍白看来真的很有效果啊．这次的实验成功了！呃哈哈哈哈！果然可以用在能打倒洛伊德的坚强的人身上！\r\n#L0##b(果然真的是人体实验嘛!)#k#l", 0, 2111009)
        } else {
            if (status === a++) {
                cm.askMenu("很惊讶的表情嘛？不用太担心．不是很危险的药…不，虽然是危险的药但是有解毒药…呼呼呼呼...\r\n#L0##b(给病又给药…天啊!)#k#l", 0, 2111009)
            } else {
                if (status === a++) {
                    cm.askMenu("如此一来，任意改变人体的状态会变得更为容易…这样...搞不好可以帮那家伙达成愿望...\r\n#L0##b那家伙？#k#l", 0, 2111009)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("是的……在生命炼金方面，他是第一人，他的能力比任何人都要强……只要有他在的话，这种研究很快就能解决……但是他失踪了……\r\n\r\n#fUI/UIWindow2.img/QuestIcon/5/0#\r\n\r\n#fUI/UIWindow2.img/QuestIcon/8/0#  12500 exp\r\n\r\n#fUI/UIWindow2.img/QuestIcon/11/0# 洞察力 40", 0, 2111009, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(3314);
                            cm.gainExp(12500);
                            cm.sendNormalTalk("谁都不知道那家伙为什么会消失．不知从什么时候开始那家伙就变得暴躁，人们不知道他到底在做什么实验．那家伙大概半年左右一直是疯疯癫癫的状态．研究，研究，研究…不断地在做实验．有关生命炼金的...结果，#b那个事件#k终于发生了…", 0, 2111009, true, true)
                        } else {
                            if (status === a++) {
                                cm.gainItem(2050004, 10);
                                cm.gainItem(2022199, 20);
                                cm.sendNormalTalk("就算是号称练金术士之村的玛加提亚…也未曾发生过像那样的剧烈爆炸事件…不晓得那家伙到底做了什么实验，我怎么猜也猜不透…他到底是在做什么惊人的研究呢？既然已经对他家进行了调查，我想协会会长应该知道些什么，但他也不肯透露…", 0, 2111009, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("这项研究..其实一开始也是和他一起合作，但他却消失无踪，而这项研究也无法继续下去。我对药物虽然还算有自信，但还真不容易啊！既然是和那家伙一起开始的，虽然断断续续还在持续下去，但是…那家伙为什么会想要研究改变人体的状态呢？", 0, 2111009, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("那家伙应该还活着…那家伙…有活下去的理由！", 0, 2111009, true, false);
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
};