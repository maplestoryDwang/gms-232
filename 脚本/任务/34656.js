var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk("治疗应该结束了。现在我来教你影子商团的秘传技术。从现在起，你就是支部的正式成员了。", 0, 3001200, false, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(34656, "");
                cm.forceCompleteQuest(34656);
                cm.teachSkill(60020218, 0, -1);
                cm.updateInfoQuest(1073, "6400=10");
                cm.teachSkill(60020216, 1, 1);
                cm.teachSkill(60021217, 1, 1);
                cm.teachSkill(64001001, 1, 10);
                cm.teachSkill(64001000, 1, 10);
                cm.sendNormalTalk("这段时间以来，你作为我的弟子展现出了优秀的战斗天赋，我认为你已经足够强大了。不过，如果能学会我刚才教给你的技术，你就会变得更加强大。", 0, 3001200, true, true)
            } else {
                if (status === a++) {
                    cm.gainItem(1143053, 1);
                    cm.gainItem(1353300, 1);
                    cm.forceStartQuest(34695, "");
                    cm.forceCompleteQuest(34695);
                    cm.openUIWithOption(3, 60020216);
                    cm.changeJob(6400);
                    cm.sendNormalTalk("我传授给了你影子商团成员的基本功，即讲价和返回商团技术。快去看看吧。使用返回商团，可以随时来到商团据点。", 0, 3001200, true, true)
                } else {
                    if (status === a++) {
                        cm.openUIWithOption(3, 64001001);
                        cm.sendNormalTalk("另外，这是你最喜欢的战斗技术。根据你的喜好分配SP，发展技能树吧。每次升级均可获得SP。", 0, 3001200, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("技能栏可以使用基本快捷键(K)打开。为方便使用，可将技能放入快捷栏。", 0, 3001200, true, true)
                        } else {
                            if (status === a++) {
                                cm.openUI(2);
                                cm.sendNormalTalk("……还有，等级提高后能力值也会随之上升。点击基本快捷键(S)/选择型(C)分配能力点吧。", 0, 3001200, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("希望你以后也能够继续脚踏实地，取得更大的进步。只要你不断磨练自己，终有一天所谓强大的技术都会变成无用之物的。", 0, 3001200, true, false);
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
        if (status === a++) {
            cm.updateInfoQuest(32999, "10=h1;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;08=h0;17=h1;18=h0;19=h0");
            cm.sendNormalTalk_Bottom("呼呼，找到了。嗯？那本书是……", 56, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#这不是你的书吗？#b“植物图鉴和神秘配方”#k", 36, 2560003, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不，不是的……\r\n啊，要是被米露看见了，一定又要怪我不该随便拿出来。必须快点还回去，哈哈哈……", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(32974, "exp=1");
                        cm.sendNormalTalk_Bottom("还好身体好像没什么异常……必须去向队长报告……", 56, 0, true, true);
                        cm.dispose()
                    } else {
                        cm.dispose()
                    }
                }
            }
        }
    }
};