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
            cm.sendNormalTalk("#b他们真的是一直带着伤躺在地上等我回来吗？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fc0xff996699#对啊！你才是最强勇士，除了最强勇士之外，其他人不能变换白天和黑夜！", 4, 9400205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b唉……真是太对不起他们了。感觉自己是个罪人。\r\n因为我的缘故，他们长时间没法恢复，只能倒在地上……", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("#b有没有什么能帮他们做的呢？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("#b那个……#p9400205#，这地方的人一辈子都没法停歇，一到白天就得反反复复地战斗对吗？那不是很累吗？", 2, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#fc0xff996699#这些人很享受他们的战斗哦？", 4, 9400205, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("#b每天都打打杀杀的生活真的会开心吗？", 2, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("#fc0xff996699#唔~~你想干什么？", 4, 9400205, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("#b我打算趁着人们在庆典上玩乐时去把怪物全部清理干净。然后明天的战斗使命就选定“讨伐怪物”！那样他们就能度过安逸的一天了吧？", 2, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("#fc0xffcc6666#结果真会这样吗？", 4, 9400205, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askMenu("#b \r\n#L0#我要去外面消灭#o9402052#和#o9402053#！#l\r\n#L1#还是老实待着更好吧……？", 16, 0)
                                                } else {
                                                    if (status === a++) {
                                                        if (b == 1) {
                                                            cm.dispose();
                                                            return
                                                        }
                                                        cm.forceStartQuest(63060, "");
                                                        cm.sendNormalTalk("#b为了让人们明天过得安逸些，我得去消灭50只#o9402052#和50只#o9402053#！", 3, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("#fc0xff996699#这样做似乎可行……\r\n嗯~虽不知道人们会不会乐意，但祝你成功。\r\n夜晚时怪物们会变得更强你知道吧？多小心，#h0#！", 5, 9400205, true, false)
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63060.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("#b呼哧呼哧，累死我了。也许是因为入夜了，怪物们变得好厉害。", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#fc0xff996699#辛苦你了~~为了让你的计划成功实施，是不是该趁着怪物们还没恢复早点把太阳升起来？", 4, 9400205, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b对哦。呼哧，呼哧……赶快去把太阳升起来。", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(63060, "speak=1");
                        cm.forceCompleteQuest(63060);
                        cm.gainExp(952800);
                        cm.updateInfoQuest(63060, "speak=1;exp=1");
                        cm.dispose()
                    }
                }
            }
        }
    }
};