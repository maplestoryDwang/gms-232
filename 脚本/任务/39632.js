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
            cm.sendNormalTalk_Bottom("#face0#阿黛尔，布鲁和拉迪的调查结果对你有帮助吗？", 36, 3001952, false, true, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#嗯，让我明确了下一步该去哪里。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#这、这么快就决定了吗？", 36, 3001952, true, true, 1)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face3#我打算前往次元的另一头……冒险岛世界。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face0#在那里或许能找到知悉我过去的人。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face4#次元另一头……那我们几乎再也见不到了呢。", 36, 3001952, true, true, 1)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face5#唉……虽然很难过，但为了大局考虑，也是没办法的事！", 36, 3001952, true, true, 1)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#经过这次的事情，让我深有感触。\r\n想成为国王，我的资历还差得远了。", 36, 3001952, true, true, 1)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#所以，我决定踏上外出修炼的旅程，\r\n不借助任何人的帮助。", 36, 3001952, true, true, 1)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face2#骑士的契约到此为止……你可以自由地去你想去的地方了。\r\n你还有要做的事情，不是吗？", 36, 3001952, true, true, 1)
                                            } else {
                                                if (status === a++) {
                                                    cm.askAcceptDecline_Bottom("#face0#寻找记忆的事，布鲁和拉迪可以帮你。\r\n以他们的能耐，想打听王国外头的事情也没问题……", 36, 3001952, 1)
                                                } else {
                                                    if (status === a++) {
                                                        cm.teachSkill(150021000, 0, -1);
                                                        cm.teachSkill(150021000, 1, 1);
                                                        cm.getTopMsgFont("获得了<再次瞬移>技能。", 3, 20, 20, 0, 0);
                                                        cm.sendNormalTalk_Bottom("#face0#这是可以随时返回里斯托尼亚王国的技能！\r\n如果你在修炼过程中想念这里了，可以随时回来看看。", 36, 3001952, false, true, 1)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("#face4#之前给你的骑士之证，要好好保管哦。\r\n以后哪一天要封你做我直属骑士的话，这个依然有效。", 36, 3001952, true, true, 1)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face2#我保证，下回再见面时，我一定会比现在更优秀。\r\n非常感谢你给我的帮助，阿黛尔。", 36, 3001952, true, true, 1)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#再见，杰罗姆。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#再见，阿黛尔。", 36, 3001952, true, true, 1)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face1#咘~！", 36, 3001960, true, true, 1)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.forceCompleteQuest(39632);
                                                                                cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                                                cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
                                                                                cm.sendNormalTalk_Bottom("#face2#直到最后一刻，你都不给面子啊……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#我也希望，你能早日离梦想更近一步。\r\n但万一遇到危险时刻，记得在心里呼唤我。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#不管何时何地，我都会去找你的……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1)
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
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/39632.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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