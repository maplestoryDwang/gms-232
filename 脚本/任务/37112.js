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
            cm.sendNormalTalk_Bottom("#face0#那么我们可以问你几个问题吗？", 36, 3004000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我吗？", 56, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哎呀，请尽管问。", 36, 3004001, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好的，我要问的是……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.askMenu_Bottom("我要问的是……#b\r\n#L0# (询问塞妮娅的身份。)#l#b", 56, 3004032)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#face0#我是#b海上明灯#k环境组织的成员。", 36, 3004001, false, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("#face0#我在世界各处从事#b净化污染#k的工作。\r\n我觉得这份工作很有价值，并乐在其中。", 36, 3004001, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("#face0#净化？净化是什么意思？这工作可以赚钱吗？", 36, 3004002, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#就是让各处变得干净的意思，大哥……", 36, 3004014, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk_Bottom("#face0#这工作会花钱，你不会感兴趣的。", 36, 3004000, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.sendNormalTalk_Bottom("#face2#哼！！你以为我是守财奴吗？", 36, 3004002, true, true)
                                                } else {
                                                    if (status === a++) {
                                                        cm.sendNormalTalk_Bottom("#face0#大哥……你最好安静地呆在这里，不要轻举妄动……", 36, 3004014, true, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.askMenu_Bottom("我要问的是……#b\r\n#L2# (询问是否有回去的方法。)#l", 56, 3004032)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk_Bottom("#face0#逃生船的救援信号已经发送出去了，同伴们应该会带我回去的。", 36, 3004001, false, true)
                                                            } else {
                                                                if (status === a++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/scanner_stand", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#天啊？这就好像是同伴们的回答一样。他们应该很快就会到的。", 36, 3004001, true, true)
                                                                } else {
                                                                    if (status === a++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，这很难办呀……", 36, 3004002, true, true)
                                                                    } else {
                                                                        if (status === a++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#（得赶紧才行。）", 36, 3004000, true, true)
                                                                        } else {
                                                                            if (status === a++) {
                                                                                cm.askMenu_Bottom("我要问的是……#b\r\n#L1# (询问货物的种类。)#l", 56, 3004032)
                                                                            } else {
                                                                                if (status === a++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#据说这是功能强大的#b净化装置#k。\r\n据说，无论水被污染得多么严重，都能咕噜咕噜～啪！被它净化得干干净净。", 36, 3004001, false, true)
                                                                                } else {
                                                                                    if (status === a++) {
                                                                                        cm.sendNormalTalk_Bottom("咕噜咕噜～啪？", 56, 0, true, true)
                                                                                    } else {
                                                                                        if (status === a++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#肯定很贵吧？", 36, 3004002, true, true)
                                                                                        } else {
                                                                                            if (status === a++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#一次……嗯……可以吗？", 36, 3004000, true, true)
                                                                                            } else {
                                                                                                if (status === a++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#嗯……其实我对这台机器了解不多。\r\n我都是从给我买机器的人那里听说的。", 36, 3004001, true, true)
                                                                                                } else {
                                                                                                    if (status === a++) {
                                                                                                        cm.sendNormalTalk_Bottom("（你不会被骗了吧？）", 56, 0, true, true)
                                                                                                    } else {
                                                                                                        if (status === a++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#（你好像被骗了。）", 36, 3004000, true, true)
                                                                                                        } else {
                                                                                                            if (status === a++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#（你被骗了呢。）", 36, 3004014, true, true)
                                                                                                            } else {
                                                                                                                if (status === a++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face2#不是的！装置明明是真的！！", 36, 3004002, true, true)
                                                                                                                } else {
                                                                                                                    if (status === a++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face1#？？？", 36, 3004001, true, true)
                                                                                                                    } else {
                                                                                                                        if (status === a++) {
                                                                                                                            cm.askMenu_Bottom("那么，最后……#b\r\n#L0# (询问谁让飞艇坠落了。)#l", 56, 3004032)
                                                                                                                        } else {
                                                                                                                            if (status === a++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#这应该我来问吧！", 36, 3004000, false, true)
                                                                                                                            } else {
                                                                                                                                if (status === a++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#塞妮娅，你和谁结过怨吗？", 36, 3004000, true, true)
                                                                                                                                } else {
                                                                                                                                    if (status === a++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face1#嗯？什么意思……", 36, 3004001, true, true)
                                                                                                                                    } else {
                                                                                                                                        if (status === a++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#塞妮娅搭乘的飞艇坠落了，这件事怎么看都像是有人故意为之。", 36, 3004000, true, true)
                                                                                                                                        } else {
                                                                                                                                            if (status === a++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#……", 36, 3004001, true, true)
                                                                                                                                            } else {
                                                                                                                                                if (status === a++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#事实上……我被各种人都威胁过。", 36, 3004001, true, true)
                                                                                                                                                } else {
                                                                                                                                                    if (status === a++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#做这件事我虽然心怀好意…… \r\n但有些人却好像不这么看。", 36, 3004001, true, true)
                                                                                                                                                    } else {
                                                                                                                                                        if (status === a++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……", 36, 3004000, true, true)
                                                                                                                                                        } else {
                                                                                                                                                            if (status === a++) {
                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#但是……我是不会向他们低头的。\r\n总有一天，有人会理解我的，对吧？", 36, 3004001, true, true)
                                                                                                                                                            } else {
                                                                                                                                                                if (status === a++) {
                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#……会的。", 36, 3004000, true, true)
                                                                                                                                                                } else {
                                                                                                                                                                    if (status === a++) {
                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#好了，我的问题问完了。", 36, 3004000, true, true)
                                                                                                                                                                    } else {
                                                                                                                                                                        if (status === a++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#你会帮我找回来吧？", 36, 3004001, true, true)
                                                                                                                                                                        } else {
                                                                                                                                                                            if (status === a++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#当然了。", 36, 3004000, true, true)
                                                                                                                                                                            } else {
                                                                                                                                                                                if (status === a++) {
                                                                                                                                                                                    cm.curNodeEventEnd(true);
                                                                                                                                                                                    cm.setInGameDirectionMode(true, false, true);
                                                                                                                                                                                    cm.updateInfoQuest(37100, "31=h0;50=h1;32=h0;51=h1;33=h1;52=h1;dir=off;35=h1;36=h1;37=h1;47=h1;38=h0;39=h1");
                                                                                                                                                                                    cm.dispose();
                                                                                                                                                                                    cm.warp(940203205, 0)
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
            cm.sendNormalTalk_Bottom("#face0#我们来晚了一步，黑鸦。#b斗战俱乐部的马罗尼#k已经去了。", 37, 3001258, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#佩隆呢？他该不会是被暗算了吧？", 36, 3004000, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#再怎么发疯，那家伙也不会闯入别人的区域的。\r\n佩隆那家伙气呼呼地不知跑什么地方去了。", 36, 3001258, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("好不容易找回来……", 56, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(37112);
                            cm.gainExp(9487412);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};