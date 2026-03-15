var status = -1;
var quest = 30074;

function start(d, c, b) {
    (d == 1) ? status++ : status--;
    var a = -1;
    cm.dispose()
}

function stage0(d, c, b) {
    status++;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.sendNormalTalk_Bottom("欢迎光临，客人。你想买什么东西吗？告诉我的话，我可以慢慢给你介绍。", 32, 1302021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我是来买蘑菇万能疗伤药的。听说这里有卖？", 56, 1302021, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("哎呀，连你都听说了吗？是的，没错。我这里刚好有一瓶。这是非常珍贵的东西……总之，你知道这要卖多少钱吗？", 32, 1302021, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("？？？", 56, 1302021, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline_Bottom("原来的价格是20个月分期付款，每月5千金币。我感觉跟你很有缘分，所以就特别给你一个折扣，只要100，000金币就行！怎么样？你想买吗？", 32, 1302021)
                        } else {
                            if (status === a++) {
                                if (cm.getMeso() > 100000) {
                                    cm.updateInfoQuest(30074, "NpcSpeech=13020211");
                                    cm.gainItem(4034113, 1)
                                } else {
                                    cm.sendOk_Bottom("客人，你的钱不够哦。", 1302021)
                                }
                                cm.dispose()
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
            if (!cm.haveItem(4034113)) {
                cm.gainItem(4034113, 1)
            }
            cm.sendNextNoESC_Bottom("欢迎光临，客人你想买什么东西吗？告诉我的话，我可以慢慢给你介绍。", 1301000)
        } else {
            if (status === a++) {
                cm.sendNextSNoESC_Bottom("我是来买蘑菇万能疗伤药的。听说这里有卖？")
            } else {
                if (status === a++) {
                    cm.sendNextNoESC_Bottom("哎呀，连你都听说了吗？是的，没错，我这里刚好有一瓶。这是非常珍贵的东西……总之，你知道这要卖多少钱吗？", 1301000)
                } else {
                    if (status === a++) {
                        cm.sendNextSNoESC_Bottom("？？？")
                    } else {
                        if (status === a++) {
                            cm.askAcceptDeclineNoESC_Bottom("原来的价格是20个月分期付款，每月5千金币。我感觉跟你很有缘分，所以就特别给你一个折扣，只要100.000金币就行！怎么样？你想买吗？", 1301000)
                        } else {
                            if (status === a++) {
                                cm.gainMeso(-100000);
                                cm.updateInfoQuest(quest, "NpcSpeech=13020211");
                                cm.sendNextNoESC_Bottom("啊，勇士，你帮我买到药了吗！用这个药，应该就能救活父亲！", 1302001)
                            } else {
                                if (status === a++) {
                                    cm.dispose();
                                    cm.forceCompleteQuest(30074);
                                    cm.gainExp(42000);
                                    cm.gainItem(4034113, -1);
                                    cm.warp(106031003, 0, true)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};