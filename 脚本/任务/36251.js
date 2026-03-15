var status = -1;
var selectionLog = [];
function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('#fc0xFFbfbfbf#（我收到了一封信，发件人是万神殿的狼牙，\r\n他曾是大神殿的神官，他为何会突然找我呢？）', 56, 0, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#事关重大，就不必再注重那些繁文缛节了，\r\n我要为有能力为我们诺巴出一份力的勇士送上这封信。', 36, 3000001, true, true, 1);
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom('#face0#诺巴一直都在为了从暴君麦格纳斯手中夺回首都而奋战，\r\n而现在机会总算来了，请助我们一臂之力。', 36, 3000001, 1);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('有人正承受暴君统治的痛苦折磨？那我当然该出马帮忙了。\r\n……哎哟，不过……还有下一张呢？', 56, 0, false, true, 1);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('#face0#具体情况去找赫里希安反攻总部的#b#p3000002##k了解吧，\r\n那我这就送你去万神殿。', 36, 3000001, true, true, 1);
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(36251, '');
                                cm.dispose();
                                cm.warp(400000000, 0, false);
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
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo('');
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose();
            }
        }
    }
}
function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return;
    }
    d == 1 ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose();
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom('我叫啦啦，是个很出色的道士。', 56, 0, false, true, 1);
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom('#face0#我已经听说了，你说你是在冒险岛世界修炼的阿尼玛的勇士？\r\n呵呵……我还以为阿尼玛都过着隐居生活呢……', 36, 3000002, true, true, 1);
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom('那什么，毕竟眼下这个世界也在瞬息万变，\r\n所谓的常识也是需要定期更新的吧？', 56, 0, true, true, 1);
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom('#face0#唔……你当我是老人家吗？', 36, 3000002, true, true, 1);
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom('哎！这怎么可能，您还这么年轻呢？', 56, 0, true, true, 1);
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom('#face0#你这人倒是挺会开玩笑的，我喜欢。\r\n那我就信你一次，交给你了，你是叫啦啦吧？', 36, 3000002, true, true, 1);
                            } else {
                                if (status === a++) {
                                    cm.forceCompleteQuest(36251);
                                    cm.dispose();
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}