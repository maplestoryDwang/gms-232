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
            cm.forceStartQuest(58707, "appear");
            cm.sendNormalTalk_Bottom("#face1##h0#，很抱歉又要麻烦你……", 37, 9111001, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？不要客气，我很快就会搞定的。", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face1#呵呵……你自信的样子最帅了。", 37, 9111001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face1#嗯……这些话不知道能不能帮到你，\r\n我觉得要想对他人的痛苦或心情感同身受的话，最重要是亲自去聆听，去抚触他们。", 37, 9111001, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("#face1#有时候我帮天狗梳头时，就能感觉到他心里的想法。", 37, 9111001, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face1#要是能事先了解一下暗的情况就好了……", 37, 9111001, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face1#天狗，你怎么想的？", 37, 9111001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face1#嗯……", 37, 9111008, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("天狗，帮帮我呗。", 57, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face1#首先，既然你没法见到守护者，你就得制造个让你们碰面的机会。\r\n为了以防万一，你把这个带上。", 37, 9111008, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("咦？这是什么？", 57, 0, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face1#这是人类小孩喜欢的玩具。虽然妖怪和人类不同，但暗之前常常到人类村庄里玩，所以说不定他会喜欢。", 37, 9111008, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk_Bottom("啊哈……你的意思是用礼物来吸引他现身。\r\n话说这玩具哪儿来的？", 57, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face1#…………", 37, 9111008, true, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#天狗的主意还真特别。", 37, 9111001, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#…！！", 37, 9111008, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("噗嗤。总之谢谢啦，天狗，还有竹野子！", 57, 0, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.sendNormalTalk_Bottom("#face1#呵呵，要是我能跟你一起去就好了……真遗憾。\r\n你也去请教下其他妖怪嘛，肯定会有点帮助的！", 37, 9111001, true, true)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("嗯！", 57, 0, true, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.forceStartQuest(58757, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58757.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk("我们狐妖栖息的狐狸山就在妖怪森林里~你准备好了就跟我说！我可以用妖术一次性把你送到妖怪森林！", 4, 9111007, false, true)
        } else {
            if (status === a++) {
                cm.askYesNo("现在要前往狐狸山所在的妖怪森林吗？", 4, 9111007)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(58757);
                    cm.dispose();
                    cm.warp(800023002, 0, false)
                }
            }
        }
    }
};