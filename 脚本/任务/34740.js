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
            cm.sendNormalTalk("这个……？纸飞机？", 2, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("…………", 4, 3002028, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不，好像不是纸飞机……是从哪里飞来的呢？", 2, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("里面好像写着什么字。要打开看看吗？", 2, 0, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("\r\n#e尖耳守备队招募新队员！#n\r\n\r\n收到这封信之后，马上到格兰蒂斯的尖耳狐狸村来！\r\n若想马上移动到这里，就闻一下这张纸的味道。\r\n\r\n#b-玛鲁-#k", 4, 3002028, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("尖耳狐狸村？格兰蒂斯有个叫尖耳狐狸村的地方吗？", 2, 0, true, true)
                            } else {
                                if (status === a++) {
                                    cm.askYesNo("去看看折了这架纸飞机的#b玛鲁#k到底有什么事，\r\n好像也没什么坏处……要去看看吗？\r\n\r\n#b（接受时会自动移动。使用#r万神殿的叶片飞机#k，可以随时移动。)", 2, 0)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("让我闻味道，是吧？让我看看……呼呼……", 3, 0, false, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("呃！咳！味道可真难闻！！！？咳咳！！", 3, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(34740, "");
                                                cm.updateInfoQuest(34770, "20=h1;21=h0;22=h0;23=h0;24=h0;25=h0;29=h0");
                                                cm.forceStartQuest(34768, "");
                                                cm.forceCompleteQuest(34769);
                                                cm.dispose();
                                                cm.warp(940204100, 0);
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
            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
            cm.setAmbience("Pet.img/5000624/sleep", 100, 60);
            cm.sendNormalTalk_Bottom("这个孩子就是#b玛鲁#k吗？", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face16#咂咂……呼呼……", 36, 3002110, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(34740);
                    cm.gainExp(16918334);
                    cm.updateInfoQuest(34740, "exp=1");
                    cm.dispose()
                }
            }
        }
    }
};