var status = -1;

function start() {
    action(1, 0, 0)
}

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("肉！肉！肉！", 0, 3003162, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("所有生活在陆地上的#b生物的肉#k我都喜欢！\r\n因为我是强者！#b弱肉强食的法则#k你知道吗？！", 0, 3003162, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("我刚刚尝了你三明治的肉饼的味道…好像吃到了我最喜欢的一种#b肉的味道…#k！", 0, 3003162, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你快去呲溜森林，狩猎#b普里温#k和#b愤怒普里温#k搜集#i4034946:##z4034946:##i4034947:##z4034947:##k吧！", 0, 3003162, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#b穆托#k要吃，#b我#k也要吃，应该#b各需要#k20个！快去搜集吧！", 0, 3003162, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("为什么这家伙要吃的量也要我去搜集啊…？？", 2, 3003153, true, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(34209, "");
                                    cm.npc_LeaveField("oid=1");
                                    cm.npc_LeaveField("oid=1");
                                    cm.npc_LeaveField("oid=2");
                                    cm.npc_LeaveField("oid=2");
                                    cm.npc_LeaveField("oid=3");
                                    cm.npc_LeaveField("oid=3");
                                    cm.npc_LeaveField("oid=4");
                                    cm.npc_LeaveField("oid=4");
                                    cm.npc_LeaveField("oid=5");
                                    cm.npc_LeaveField("oid=5");
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

function end(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("你这家伙真是迅速！这么快就集齐材料啦？！", 0, 3003162, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("不过，我的口味非常非常讲究，就这几种肉食满足不了我的！", 0, 3003162, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("好了！为了#b都很奇怪啊！现在够了！转转转！三明治#k的完成，以及#b填饱我的肚子#k，去搜集更多的肉吧！", 0, 3003162, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你怎么总打算制作#b你要吃#k的食物…你不要忘了，我是在为#b穆托#k准备食物！", 2, 3003153, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("都一样的啦！！别废话了，快去搜集肉吧！", 0, 3003162, true, false)
                        } else {
                            if (status === a++) {
                                cm.gainItem(4034946, -20);
                                cm.gainItem(4034947, -20);
                                cm.forceCompleteQuest(34209);
                                cm.Hidden_background("obj_01", 1, cm.isQuestFinished(34208) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_02", 1, cm.isQuestFinished(34212) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_03", 1, cm.isQuestFinished(34214) ? 1 : 0, 0, 0);
                                cm.Hidden_background("obj_04", 1, cm.isQuestFinished(34215) ? 1 : 0, 0, 0);
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};