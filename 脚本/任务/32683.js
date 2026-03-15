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
            cm.sendNormalTalk_Bottom("你就是我们要跟随的人啊。", 36, 2550007, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我连正规军人都不是呢，你们真的愿意听我指挥吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("国家都灭亡了，哪还有功夫管什么指挥体系啊。\r\n再说上面的人早就逃了，我们反正也无人指挥。", 36, 2550007, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("你们都不担心家人吗？", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("有家人的还会呆在这里吗？\r\n我们都是无家可归的人了。", 36, 2550007, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("……也是。", 56, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("你们应该都清楚，情况非常危险。", 56, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("就像队长你说的，如果守不住这里，那逃与不逃有什么区别呢，反正都是一死。既然如此，至少也要最后拼一把，不是吗？", 36, 2550007, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("话是这么说……", 56, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("这里的人都了解你，所以也都相信你。", 36, 2550007, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("(好像不是什么开心的事情呢。)", 56, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.forceCompleteQuest(32683);
                                                        cm.gainExp(186336);
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