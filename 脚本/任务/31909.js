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
            cm.sendNormalTalk("每天的噩梦中都能见到这样的未来，确实让人很不安。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("还是回到勇士部落去吧。\r\n#b(接受时立即移动到勇士部落。)#k", 16, 0)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(去见见战士殿堂中的武术教练吧。)#k", 17, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(31909, "");
                        cm.dispose();
                        cm.warp(102000000, 0, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/31909.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.askMenu("你来啦……嗯？想猜猜我们的噩梦的内容？好吧，那我来出几个问题。\r\n#b#L0# 好的。#l#k", 0, 1022000)
        } else {
            if (status === a++) {
                cm.askMenu("在未来的勇士部落中建造了一个巨大的东西。那是什么？\r\n#b#L0#巨大的猪猪雕像#l\r\n#L1#巨大的攻城兵器#l\r\n#L2#巨大的黑魔法师石像#l#k", 0, 1022000)
            } else {
                if (status === a++) {
                    if (b == 2) {
                        cm.askMenu("战士殿堂怎么样了？\r\n#b#L2#关闭了。#l\r\n#L0#扩大了。#l\r\n#L1#被黑魔法师的部下们占据了。#l#k", 0, 1022000)
                    } else {
                        cm.sendOk("不对，不对。噩梦里不是这样的。");
                        cm.dispose()
                    }
                } else {
                    if (status === a++) {
                        if (b == 2) {
                            cm.askMenu("我留下的子孙是男孩还是女孩？\r\n#b#L1#男孩#l\r\n#b#L0#女孩#l#k", 0, 1022000)
                        } else {
                            cm.sendOk("不对，不对。噩梦里不是这样的。");
                            cm.dispose()
                        }
                    } else {
                        if (status === a++) {
                            if (b == 0) {
                                cm.askMenu("最后一个问题……占领勇士部落，镇压我们的人是谁？\r\n#b#L2#反抗者#l\r\n#L0#黑色之翼#l\r\n#L1#军团长#l#k", 0, 1022000)
                            } else {
                                cm.sendOk("不对，不对。噩梦里不是这样的。");
                                cm.dispose()
                            }
                        } else {
                            if (status === a++) {
                                if (b == 2) {
                                    cm.sendNormalTalk("回答正确。和我们之前梦到的噩梦内容一致……那是你在穿越未来之门之后见到的梦的世界吗？", 0, 1022000, false, true)
                                } else {
                                    cm.sendOk("不对，不对。噩梦里不是这样的。");
                                    cm.dispose()
                                }
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31909, "");
                                    cm.forceCompleteQuest(31909);
                                    cm.gainExp(8259747);
                                    cm.sendNormalTalk("谢谢你。我要马上召集村民，告诉他们那不是预知之梦，而是虚假的梦，让他们放心。\r\n但是如果那个噩梦继续下去，村民们会一直不安下去。希望你能尽快从根本上解决问题。\r\n#b#e(等待赫丽娜的联系吧。)#k#n", 0, 1022000, true, false)
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
};