function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.openScriptNpc()
}
var status = -1;
var selectionLog = [];

function start() {
    action(1, 0, 0)
}

function action(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("喂，停在那。", 17, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯？你有什么事？", 5, 9390223, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你带着这些交易品要去哪里？", 17, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("正如你所看到的，我准备去交易，你为什么这样？", 5, 9390223, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("是吗？…… 昨天你还跟我说要带我一起去交易的。怎么能这样偷偷地自己出发了呢？", 17, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("啊…………是…没错。很抱歉。我…那个…出了点状况，这次交易我得自己去。", 5, 9390223, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("别说谎了，你这个假货！！我们今天才第一次见面！你到底是谁？你要把达尼尔拉商团的交易品偷到哪里？", 17, 0, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.hideNpc(9390223);
                                        cm.npc_ChangeController(9390204, "oid=2358400", 465, 343, 61, 415, 515, 1, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=2358400", "summon", 0, 0);
                                        cm.sendNormalTalk("切。我居然中招了。你不必知道我是谁，要去哪里。我花钱雇佣来的佣兵们，你们快出来吧。", 5, 9390204, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("！！！我没想过要打架。只是想重新拿回交易品……", 17, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("好了，快把那个人赶走~", 5, 9390204, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.spawnMobLimit(9390808, 1, 540, 300, 100);
                                                    cm.spawnMobLimit(9390808, 1, 540, 300, 100);
                                                    cm.spawnMobLimit(9390808, 1, 540, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 640, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 640, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 640, 300, 100);
                                                    cm.spawnMobLimit(9390808, 1, 440, 300, 100);
                                                    cm.spawnMobLimit(9390808, 1, 440, 300, 100);
                                                    cm.spawnMobLimit(9390808, 1, 440, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 740, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 740, 300, 100);
                                                    cm.spawnMobLimit(9390811, 1, 740, 300, 100);
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
};