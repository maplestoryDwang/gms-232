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
            cm.sendNormalTalk_Bottom("……你是？", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("那是谁？是你朋友吗，希纳斯小姐？", 37, 1530360, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("不是，我也是第一次见。好像是转校生吧？", 37, 1530060, true, true)
                } else {
                    if (status === a++) {
                        cm.askMenu_Bottom("……你为什么盯着我看？？\r\n#b\r\n#L0#	我们好像在哪儿见过？#l\r\n#L1#	因为你长得太漂亮了#l\r\n#L2#	因为你长得太丑了#l", 37, 1530060)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("是吗？不过不好意思，我对你没什么印象。", 37, 1530060, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("哼，这是那些平民为了和社会上层扯上关系最惯用的伎俩了。手帕的事你就别放在心上了，赶紧进学校吧，希纳斯小姐。", 37, 1530360, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那是我一直都很宝贝的手帕呢，虽然很可惜，但也没办法……", 37, 1530060, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("又不是挂在很高的地方……\r\n#b（先到树上把手帕取下来之后再继续对话吧。）#k", 57, 0, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.forceStartQuest(32713, "");
                                            cm.forceStartQuest(32757, "");
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
            cm.sendNormalTalk_Bottom("天啊，竟然那么轻易就能爬到树上去……你没受伤吧？\r\n\r\n#b（把手帕交给希纳斯。）#k", 37, 1530060, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("真了不起。你的运动神经……真是太棒了。甚至觉得你都不像是这个世界的人！", 37, 1530060, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……（被这话吓得一激灵）！", 56, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("我开玩笑呢，也至于把你吓成那样……那个，我需要付给你多少钱呢？", 37, 1530060, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("什么？你问我这话什么意思？我从小受到的教育就是，当别人帮到自己的时候，要问对方“需要付多少钱？”，并向对方支付酬金的呀。", 37, 1530060, true, true)
                        } else {
                            if (status === a++) {
                                cm.askMenu_Bottom("那个……我说的话有错吗？\r\n#b\r\n#L0#	我可不是为了得到什么酬金才这么做的#l\r\n#L1#	那就付给我手帕的原价200万韩元好了#l", 37, 1530060)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("……？我真的不付给你酬金也可以吗？", 37, 1530060, false, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk_Bottom("哎呀，都这时候了……？那个，可以的话，请存一下我的电话号码吧！我日后一定会酬谢你的。", 37, 1530060, true, true);
                                        cm.effect_Voice("Ambience.img/schoolbell", 100)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk_Bottom("#face0#谢谢啦。那我就先走了……\r\n\r\n#b（和希纳斯交换了电话号码。不知为什么脸上洋溢着愉快的表情。）#k", 37, 1530060, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.forceStartQuest(32713, "");
                                                cm.forceCompleteQuest(32713);
                                                cm.updateInfoQuest(32719, "gal=0;sms=0;add=1");
                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                cm.gainItem(4034162, -1);
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
};