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
            cm.sendNormalTalk_Bottom("全新的冒险就是一场结缘之旅，\r\n你不如先去找找那些需要帮助的村民吧？", 36, 3003658, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face7#这里应该也有需要帮助的人，\r\n不过大体上看起来，这里倒是挺安静平和的……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("射手村这里相对来说比较清净，\r\n不过冒险岛世界更宽广，事件也会更多。", 36, 3003658, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("还得应对各种隐患和威胁……\r\n啊，我觉得现在就跟你说这些可能有点早了……", 36, 3003658, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("啊，那我们就回到原来的话题……就让我来问问虎影你的意向，\r\n你愿意去见见那些需要帮忙的村民吗？", 36, 3003658)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("我知道了，稍等片刻，\r\n我会在事件委托中找到适合虎影你的事件的。", 36, 3003658, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(39545, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39545.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Bottom("最适合的委托一共有四个，“妖精学院艾利涅”、“金海滩度假村”、\r\n“列娜海峡”、“秘密森林艾洛丁”，这些地方都需要你的帮忙。", 36, 3003658, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#该不会……要花钱吧？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哈哈……我不收钱的，\r\n我不过是秉持着对冒险家的责任感工作而已。", 36, 3003658, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#因为我在之前逗留的村庄里留下了惨痛的记忆，\r\n就是以防万一才有此一问，哈哈……", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#唔……还是被狠狠摆了一道。", 36, 3001651, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("究竟要选择三个委托之中的哪一个是你的自由，\r\n如果你愿意，大可以全部接下来。", 36, 3003658, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那我就期待日后你能在冒险岛世界\r\n结识更多有缘人了，虎影。", 36, 3003658, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#这，这个家伙……", 36, 3001651, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#你这家伙……看看这里！", 36, 3001651, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#（嗯？）", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我找到#fc0xFF25f1ca#怪物的气息了，小老虎！", 36, 3001651, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face7#这么快就找到了！？", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("什么？", 36, 3003658, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face10#哈，哈哈……我的意思是我已经找到了我要走的路！\r\n你就瞧好了吧，我天才道士要大展身手了，赫丽娜！", 36, 3001674 + cm.getPlayer().getGender(), true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("你这个人倒，倒是挺有趣的呢……\r\n\r\n#r※通过画面左侧的电灯泡提示接受\r\n“怪异封印：妖精学院艾利涅之章”。#k", 36, 3003658, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.forceCompleteQuest(39545);
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
    }
};