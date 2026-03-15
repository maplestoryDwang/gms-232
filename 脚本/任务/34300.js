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
            if (cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262/30032273" && cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262" && cm.getInfoQuest(34300) != "NpcSpeech=30032251") {
                cm.sendOk("幸福啊，好幸福！", 3003225);
                cm.updateInfoQuest(34300, "NpcSpeech=30032251");
                cm.dispose()
            } else {
                if (cm.getInfoQuest(34300) == "NpcSpeech=30032251") {
                    cm.sendOk("飞舞的烟花，流淌的河水，我好开心。", 3003226);
                    cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262");
                    cm.dispose()
                } else {
                    if (cm.getInfoQuest(34300) == "NpcSpeech=30032251/30032262") {
                        cm.sendOk("吃吧，吃，哈哈哈。你和我，还有大家，一起享受这庆典吧！\r\n（#b这个地方好奇怪......所有人都带着面具。#k）", 3003227);
                        cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262/30032273");
                        cm.dispose()
                    } else {
                        cm.sendOk("你是从外面进来的吗？", 3003201)
                    }
                }
            }
        } else {
            if (status == a++) {
                cm.sendOk("?")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这里很危险…该死，已经晚了。", 4, 3003201, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34300);
                        cm.dispose();
                        cm.warp(450003710, 0, true)
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262/30032273" && cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262" && cm.getInfoQuest(34300) != "NpcSpeech=30032251") {
                cm.sendNormalTalk("幸福啊，好幸福！", 4, 3003225, false, true);
                cm.updateInfoQuest(34300, "NpcSpeech=30032251");
                cm.dispose()
            } else {
                if (cm.getInfoQuest(34300) == "NpcSpeech=30032251") {
                    cm.sendNormalTalk("飞舞的烟花，流淌的河水，我好开心。", 4, 3003226, false, true);
                    cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262");
                    cm.dispose()
                } else {
                    if (cm.getInfoQuest(34300) == "NpcSpeech=30032251/30032262") {
                        cm.sendNormalTalk("吃吧，吃，哈哈哈。你和我，还有大家，一起享受这庆典吧！\r\n（#b这个地方好奇怪…………所有人都带着面具。#k）", 4, 3003227, false, true);
                        cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262/30032273");
                        cm.dispose()
                    } else {
                        cm.sendNormalTalk("你是从外面进来的吗？", 4, 3003201, false, true)
                    }
                }
            }
        } else {
            if (status == a++) {
                cm.sendNormalTalk("？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这里很危险…该死，已经晚了。", 4, 3003201, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34300);
                        cm.dispose();
                        cm.warp(450003710, 0, true)
                    }
                }
            }
        }
    }
}

function stage1(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            if (cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262/30032273" && cm.getInfoQuest(34300) != "NpcSpeech=30032251/30032262" && cm.getInfoQuest(34300) != "NpcSpeech=30032251") {
                cm.sendNormalTalk("幸福啊，好幸福！", 4, 3003225, false, true);
                cm.updateInfoQuest(34300, "NpcSpeech=30032251");
                cm.dispose()
            } else {
                if (cm.getInfoQuest(34300) == "NpcSpeech=30032251") {
                    cm.sendNormalTalk("飞舞的烟花，流淌的河水，我好开心。", 4, 3003226, false, true);
                    cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262");
                    cm.dispose()
                } else {
                    if (cm.getInfoQuest(34300) == "NpcSpeech=30032251/30032262") {
                        cm.sendNormalTalk("吃吧，吃，哈哈哈。你和我，还有大家，一起享受这庆典吧！\r\n（#b这个地方好奇怪…………所有人都带着面具。#k）", 4, 3003227, false, true);
                        cm.updateInfoQuest(34300, "NpcSpeech=30032251/30032262/30032273");
                        cm.dispose()
                    } else {
                        cm.sendNormalTalk("你是从外面进来的吗？", 4, 3003201, false, true)
                    }
                }
            }
        } else {
            if (status == a++) {
                cm.sendNormalTalk("？", 2, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("这里很危险…该死，已经晚了。", 4, 3003201, true, true)
                } else {
                    if (status === a++) {
                        cm.forceCompleteQuest(34300);
                        cm.dispose();
                        cm.warp(450003710, 0, true)
                    }
                }
            }
        }
    }
}

function stage2(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk("？", 2, 0, true, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("这里很危险…该死，已经晚了。", 4, 3003201, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34300);
                    cm.dispose();
                    cm.warp(450003710, 0, true)
                }
            }
        }
    }
};