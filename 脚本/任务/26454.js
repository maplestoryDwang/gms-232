var status = -1;
var selectionLog = [];

function start(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return
    }(mode == 1) ? status++ : status--;
    selectionLog[status] = selection;
    var i = -1;
    if (status <= i++) {
        cm.dispose()
    } else {
        if (status == i++) {
            cm.askMenu("今天的天气正适合飞行！你来找我有事吗？\r\n#k#L0# 我想听关于智能骑宠的说明！#l \r\n#k#L1# 购买智能骑宠飞行通行证#l \r\n#k#L2# 借智能骑宠#l", 1, 9000203)
        } else {
            var reactor = "action分支" + selectionLog[1];
            eval(reactor)(mode, type, selection, i)
        }
    }
}

function action分支0(d, c, b, a) {
    if (status <= a++) {
        cm.sendNormalTalk("智能骑宠可以根据导航仪，到底你所指定的目的地。你知道它的使用方法吗？我亲自告诉你吧！", 0, 9000203, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk("#i3800529#\r\n首先乘坐智能坐骑，双击世界地图中#b你想去的地方#k之后！支付一点飞行费用。骑宠可以#b根据导航仪，自动飞到你选择的地方#k！怎么样？它是不是很聪明啊？！", 0, 9000203, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("虽然开始只能在以金银岛为首的几个地方使用，但是不用担心！我是谁啊！我是具有商业头脑的奥斌啊！你想去到更多的地方的话，只要向我购买#b飞行通行证#K，就能在更多的地方使用智能骑宠了。", 0, 9000203, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我就在这个地方出售飞行通行证，出租智能骑宠，你要常来找我啊。还有，商城中正在出售#b性能出众#k的骑宠，你有空去看看吧。", 0, 9000203, true, false)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function action分支1(e, c, b, a) {
    if (status <= a++) {
        cm.askMenu("你想购买什么通行证呢？\r\n#b\r\n#L0#冰峰雪域飞行通行证(永久) #r5000金币#b#l \r\n#L4#埃德尔斯坦(永久) #r50000金币#b#l \r\n#L2#时间静止之湖飞行通行证(永久) #r50000金币#b#l \r\n#L3#水下世界飞行通行证(永久) #r250000金币#b#l  \r\n#L5#尼哈沙漠(永久) #r500000金币#b#l \r\n#L6#武陵(永久) #r500000金币#b#l \r\n#L1# 米纳尔森林飞行通行证(永久) #r1000000金币#b#l", 0, 9000203)
    } else {
        if (status === a++) {
            cm.dispose();
            var d = cm.getNumberFromQuestInfo(26422, "license");
            cm.updateInfoQuest(26490, "license=1");
            if (selectionLog[2] == 0) {
                d |= 1 << 1;
                cm.playerMessage(-1, "购买了冰峰雪域飞行通行证。现在可以在冰峰雪域自动飞行了。");
                cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在冰峰雪域大陆通过智能骑宠飞行了！", 0, 9000203, false, false)
            } else {
                if (selectionLog[2] == 4) {
                    d |= 1 << 7;
                    cm.playerMessage(-1, "埃德尔斯坦飞行通行证。现在可以在埃德尔斯坦地区自动飞行了。");
                    cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在埃德尔斯坦地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                } else {
                    if (selectionLog[2] == 2) {
                        d |= 1 << 2;
                        cm.playerMessage(-1, "购买了时间静止之湖飞行通行证。现在可以在时间静止之湖地区自动飞行了。");
                        cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在时间静止之湖地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                    } else {
                        if (selectionLog[2] == 3) {
                            d |= 1 << 4;
                            cm.updateInfoQuest(26422, "license=150");
                            cm.playerMessage(-1, "购买了水下世界飞行通行证。现在可以在水下世界地区自动飞行了。");
                            cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在水下世界地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                        } else {
                            if (selectionLog[2] == 5) {
                                d |= 1 << 6;
                                cm.playerMessage(-1, "购买了尼哈沙漠飞行通行证。现在可以在尼哈沙漠地区自动飞行了。");
                                cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在尼哈沙漠地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                            } else {
                                if (selectionLog[2] == 6) {
                                    d |= 1 << 5;
                                    cm.playerMessage(-1, "购买了武陵飞行通行证。现在可以在武陵地区自动飞行了。");
                                    cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在武陵地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                                } else {
                                    d |= 1 << 3;
                                    cm.playerMessage(-1, "购买了米纳尔森林飞行通行证。现在可以在米纳尔森林自动飞行了。");
                                    cm.sendNormalTalk("通行证在购买后立即生效。通行证道具不会存放到背包中。现在你可以自由地在米纳尔森林地区通过智能骑宠飞行了！", 0, 9000203, false, false)
                                }
                            }
                        }
                    }
                }
            }
            cm.updateInfoQuest(26422, "license=" + d)
        }
    }
}

function action分支2(d, c, b, a) {
    if (status <= a++) {
        cm.askMenu("你想租赁什么骑宠呢？\r\n#b\r\n#L0# #i2431951#飘飘气球骑宠(2小时) #r10000金币#b#l \r\n#L1# #i2431755#飘飘气球骑宠(1天) #r100000金币#b#l \r\n#L2#查看现金骑宠#b#l", 0, 9000203)
    } else {
        if (status === a++) {
            if (selectionLog[2] == 0) {
                if (cm.getMeso() > 10000) {
                    cm.gainItem(2431951, 1);
                    cm.gainMeso(-10000);
                    cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2431951# #t2431951# 1个#k \r\n\r\n双击使用的话，就能使用2小时的气球骑宠了！感谢你的使用！", 0, 9000203, false, false)
                } else {
                    cm.sendOk("你的钱不够啊。", 9000203)
                }
            } else {
                if (selectionLog[2] == 1) {
                    if (cm.getMeso() > 100000) {
                        cm.gainItem(2431755, 1);
                        cm.gainMeso(-100000);
                        cm.sendNormalTalk("#fUI/UIWindow2.img/QuestIcon/4/0#\r\n#b#i2431755# #t2431755# 1个#k \r\n\r\n双击使用的话，就能使用1天的气球骑宠了！感谢你的使用！", 0, 9000203, false, false)
                    } else {
                        cm.sendOk("你的钱不够啊。", 9000203)
                    }
                } else {
                    cm.askYesNo("哦！你对现金骑宠也感兴趣吗？现金骑宠比我出租的骑宠更快，还具有舒适的乘坐感，以及简洁大方的设计。你要浏览下吗？", 0, 9000203)
                }
            }
        } else {
            if (status === a++) {
                if (selectionLog[2] == 0) {} else {
                    if (selectionLog[2] == 1) {} else {
                        cm.dispose();
                        cm.enter商城()
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