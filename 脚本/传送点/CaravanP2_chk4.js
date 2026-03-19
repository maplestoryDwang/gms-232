function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(mode, type, selection) {
    status++;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status === i++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.monadForceMove("0", 0, 3000);
            cm.onSetBackEffect("0", 1, 0, 0, 0);
            cm.monadForceMove("1", 0, 3000);
            cm.onSetBackEffect("1", 1, 0, 0, 0);
            cm.monadForceMove("2", 1, 3000);
            cm.onSetBackEffect("2", 1, 1, 0, 0);
            cm.monadForceMove("3", 0, 3000);
            cm.onSetBackEffect("3", 1, 0, 0, 0);
            cm.useItem(2210209, false);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400592, "自告奋勇代替斯洛克殿后的阿尔西走上前来。他刚走近，就一股浓浓的酒味直冲鼻腔。“那个……我在观察……嗝……观察暴风雪的动态……”他一边看我脸色，一边继续说道。“目前……嗯……暴风雪离我们很远……你不用担心……”\r\n           #i4036367#\r\n#b\r\n#L0#“你喝酒了吗？”( - ) #l\r\n#L1#派其他人去队伍末尾观察暴风雪的动态。( - ) #l\r\n#L2#“多谢。接下来也麻烦你好好观察”( - ) #l")
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#你也……你也把我当成酒鬼！嗝！", 37, 9400592, true, true, 1)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#b我不是这个意思。我是担心你喝了酒不好负责殿后……", 57, 0, true, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#……我就喝了一丁点儿，现在清醒得很……嗝……", 37, 9400592, true, true, 1)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk_Bottom("#b……知道了。接下来也拜托你了，务必好好保护好队伍末尾。", 57, 0, true, true, 1)
                } else {
                    var reactor = "action分支2";
                    eval(reactor)(mode, type, selection, i)
                }
            }
        }
    }
}

function action分支1(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#你也……你也把我当成酒鬼！嗝！", 37, 9400592, true, true, 1)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#b我不是这个意思。我是担心你喝了酒不好负责殿后……", 57, 0, true, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#……我就喝了一丁点儿，现在清醒得很……嗝……", 37, 9400592, true, true, 1)
            } else {
                if (status === i++) {
                    cm.sendNormalTalk_Bottom("#b……知道了。接下来也拜托你了，务必好好保护好队伍末尾。", 57, 0, true, true, 1)
                } else {
                    var reactor = "action分支2";
                    eval(reactor)(mode, type, selection, i)
                }
            }
        }
    }
}

function action分支2(mode, type, selection, i) {
    if (status <= i++) {
        cm.onScriptMessage_莫奈德卷轴风格(9400592, "“你……你愿意相信我吗？”阿尔西目光颤抖地说道。我对阿尔西说我相信他。阿尔西没有回去，在我旁边徘徊了一阵，再次走过来继续说道。那个……在卡夫塔佩……啊！……嗝……也可能不是你问的！嗯，你有问过我“巨大黑影”的事……吗？\r\n           #i4036367#\r\n#b\r\n#L0#“你知道巨大黑影的事？”( - ) #l\r\n#L1#“我没问过。”( - ) #l\r\n#L2#“你又发什么酒疯？”( - ) #l")
    } else {
        var reactor = "action分支2_" + selectionLog[1];
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支2_0(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#……我两只眼睛看得清清楚楚的。", 37, 9400592, false, true)
    } else {
        var reactor = "actionEnd";
        eval(reactor)(mode, type, selection, i)
    }
}

function action分支2_1(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#可恶……你也不相信我……", 37, 9400592, false, true, 1)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#face0#……算了……没关系，反正……本来也没人愿听我说……", 37, 9400592, true, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#……无所谓……但是！但是我真的，真的亲眼看见了。", 37, 9400592, true, true, 1)
            } else {
                var reactor = "actionEnd";
                eval(reactor)(mode, type, selection, i)
            }
        }
    }
}

function action分支2_2(mode, type, selection, i) {
    if (status <= i++) {
        cm.sendNormalTalk_Bottom("#face0#可恶……你也不相信我……", 37, 9400592, false, true, 1)
    } else {
        if (status === i++) {
            cm.sendNormalTalk_Bottom("#face0#……算了……没关系，反正……本来也没人愿听我说……", 37, 9400592, true, true, 1)
        } else {
            if (status === i++) {
                cm.sendNormalTalk_Bottom("#face0#……无所谓……但是！但是我真的，真的亲眼看见了。", 37, 9400592, true, true, 1)
            } else {
                var reactor = "actionEnd";
                eval(reactor)(mode, type, selection, i)
            }
        }
    }
}

function actionEnd(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#尽管是在黑烟和雪雾混杂，前方都看不分明的情况下……，我还是看见了！那只在雾中慢悠悠漂浮的巨大黑影！！！！", 37, 9400592, true, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#大家都不愿意相信！！！可我们也该正视现实，那样才能做好防范……", 37, 9400592, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#b……其实我在下山的时候也看见了那个黑影。可村里人根本不知道它的存在。虽然我也没一一问过所有人……", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#b我怕贸然提这事会增加村民们的恐惧，所以暂先采取观望态度。", 57, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#b不过……就像你说的，为了做好防范，必须调查一下那黑影的真相。", 57, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#……看吧……我没说谎……", 37, 9400592, true, true)
                        } else {
                            if (status === a++) {
                                cm.updateInfoQuest(64020, "chk1=1;chk2=1");
                                cm.playerMessage(-1, "去打听巨大黑影的真相。");
                                cm.setNumberForQuestInfo(64006, "Ec", 5);
                                cm.莫奈德_特效(null, [6, 0, 0, 0, 0, 0]);
                                cm.useItem(2210209, false);
                                cm.莫奈德_特效(null, [8, 0, 0, 0, 0]);
                                cm.莫奈德_特效(null, [0, 2]);
                                cm.dispose();
                                cm.setNumberForQuestInfo(64005, "duringEvent", 0)
                            }
                        }
                    }
                }
            }
        }
    }
};