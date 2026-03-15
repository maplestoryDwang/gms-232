var status = -1;

function start(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.sendNormalTalk_Bottom("#face0#我们必须消灭掉一些#b影子斧木妖#k。\r\n最近它们的数量越来越多，给采集绸缎蘑菇造成了困难。", 36, 2560002, false, true)
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("#face0#哎呀，忘了把采集装备带来了。你先在这里消灭怪物，我去去就来。", 36, 2560002, true, true)
        } else {
            if (status === a++) {
                cm.forceStartQuest(32972, "");
                cm.updateInfoQuest(32999, "10=h0;01=h1;02=h0;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h1;18=h0;19=h0");
                cm.OnStartNavigation(307000200, 0, "hunt00", 0);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.curNodeEventEnd(true);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(true, false, true);
            cm.sendNormalTalk_Bottom("现在可以搜集材料了吧？", 57, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("嗯？是石香蝴蝶！这可是稀罕玩意！快追！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.inGameDirectionEvent_ForcedFlip10(2, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(1000)
                } else {
                    if (status === a++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32972);
                            cm.updateInfoQuest(32972, "exp=1");
                            cm.gainExp(2462700);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.dispose();
                            cm.warp(307000210, 0, true)
                        }
                    }
                }
            }
        }
    }
};