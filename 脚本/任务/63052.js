var status = -1;
var selectionLog = [];

function start(g, f, e) {
    if (status == 0 && g == 0) {
        cm.dispose();
        return
    }
    var c = cm.getPlayer().getGender() == 0 ? "哥哥" : "姐姐";
    (g == 1) ? status++ : status--;
    selectionLog[status] = e;
    var d = -1;
    if (status <= d++) {
        cm.dispose()
    } else {
        if (status == d++) {
            cm.sendNormalTalk("谢谢你给我们弄来零食！", 4, 9400224, false, true)
        } else {
            if (status === d++) {
                cm.sendNormalTalk("我们一起玩娃娃好吗？这是我最喜欢的玩具！", 4, 9400225, true, true)
            } else {
                if (status === d++) {
                    cm.sendNormalTalk("#b(孩子们就是多变，一转眼就像刚才没哭过一样兴高采烈的。) \r\n哇~真帅~！给" + c + "看看好吗~？", 2, 0, true, true)
                } else {
                    if (status === d++) {
                        cm.sendNormalTalk("#fs30##r#e嘎巴！", 2, 0, true, true)
                    } else {
                        if (status === d++) {
                            cm.sendNormalTalk("？！", 2, 0, true, true);
                            cm.effect_NormalSpeechBalloon("?!", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400225, cm.getPlayer().getId());
                            cm.effect_NormalSpeechBalloon("!!!!!", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400224, cm.getPlayer().getId())
                        } else {
                            if (status === d++) {
                                cm.setNumberForQuestInfo(63090, "lightning", 1);
                                cm.setQuestCustomData(63092, "");
                                cm.setQuestCustomData(63253, "lig");
                                cm.setQuestCustomData(63251, "destroy");
                                var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                                var b = cm.getNumberFromQuestInfo(63090, "raining") == 1;
                                if (!b) {
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                                    cm.updateInfoQuest(63095, "angle=" + (a ? 0 : -90));
                                    cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? -90 : 90, 100, 1)
                                }
                                cm.afterlandUpdateEnvironment();
                                cm.sendNormalTalk("呜哇啊啊啊！！！！！坏掉了！！！！！！！", 4, 9400225, true, true)
                            } else {
                                if (status === d++) {
                                    cm.sendNormalTalk("这什么玩具这么脆弱？！", 2, 0, true, true)
                                } else {
                                    if (status === d++) {
                                        cm.sendNormalTalk("哇啊啊！" + c + "把我的玩具弄坏了！！！", 4, 9400225, true, true)
                                    } else {
                                        if (status === d++) {
                                            cm.sendNormalTalk("孩子们，别激动！", 3, 0, true, true)
                                        } else {
                                            if (status === d++) {
                                                cm.sendNormalTalk("" + c + "马上去给你们找新玩具！稍等！", 3, 0, true, true)
                                            } else {
                                                if (status === d++) {
                                                    cm.askAcceptDecline("去外面收集新玩具吧……", 3, 0)
                                                } else {
                                                    if (status === d++) {
                                                        cm.forceStartQuest(63052, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/63052.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
            }
        }
    }
}

function end(f, e, d) {
    if (status == 0 && f == 0) {
        cm.dispose();
        return
    }(f == 1) ? status++ : status--;
    selectionLog[status] = d;
    var c = -1;
    if (status <= c++) {
        cm.dispose()
    } else {
        if (status == c++) {
            cm.sendNormalTalk("#b孩子们！我给你们弄来新玩具了！", 2, 0, false, true)
        } else {
            if (status === c++) {
                cm.sendNormalTalk("玩具？哇！真的是新玩具耶！", 5, 9400225, true, true);
                cm.gainItem(4034996, -30)
            } else {
                if (status === c++) {
                    cm.forceCompleteQuest(63052);
                    cm.gainExp(476400);
                    cm.updateInfoQuest(63052, "exp=1");
                    cm.curNodeEventEnd(true);
                    cm.setInGameDirectionMode(true, false, true);
                    cm.setNumberForQuestInfo(63090, "lightning", 0);
                    cm.setQuestCustomData(63092, "");
                    cm.setQuestCustomData(63253, "not");
                    cm.setQuestCustomData(63251, "click");
                    var a = cm.getNumberFromQuestInfo(63090, "DnN") == 0;
                    var b = cm.getNumberFromQuestInfo(63090, "raining") == 1;
                    if (!b) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_AfterLand/RotationBack", 128);
                        cm.updateInfoQuest(63095, "angle=" + (a ? 90 : 180));
                        cm.afterlandChangeMapObject("RotationBack", 0, 0, 0, 1, a ? 90 : -90, 100, 1)
                    }
                    cm.afterlandUpdateEnvironment();
                    cm.sendNormalTalk("#b(天气好像真的是根据孩子们的心情来变化的。悲伤时下雨，生气时打雷？)", 3, 0, true, true)
                } else {
                    if (status === c++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.dispose()
                    }
                }
            }
        }
    }
};