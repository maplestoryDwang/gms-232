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
            cm.sendNormalTalk("额啊~！有救了，我这迷迷糊糊的，差点就要出大事了，又要躲着幽灵，又要看心跳数，根本是晕头转向。", 0, 2192004, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("不过也并非一无所获，#e#h0##n，你也看到了吧？\r\n#b(小声嘀咕)#k多檀智的心跳啊，那跳得可快了！\r\n得对我有多大的好感才会跳成这样呢？这事儿我从一开始就感觉特别好呢。", 0, 2192004, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("#b(多洛米好像一直热衷于心跳监视器，可多檀智的表情看上去却不太妙……)", 2, 2192004, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("毕竟是在幽灵屋，完全有可能会暂时那样的嘛？#e心跳会跳得这么快~这一定是个好的征兆！#n#b#h0##k，没看出来你还挺缩手缩脚的嘛？身为男人，就不能有所动摇，就像我这样，呵呵。", 0, 2192004, true, true)
                    } else {
                        if (status === a++) {
                            cm.askAcceptDecline("可是……毕竟……去问一问有没有事应该无妨的吧……？\r\n\r\n#b多檀智会说出什么情况吗？", 0, 2192004)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("#b(和多檀智对话。)#k", 2, 2192004, false, true)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(31370, "");
                                    cm.updateInfoQuest(31389, "ex=3");
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
            cm.sendNormalTalk("(瑟瑟发抖)", 1, 2192012, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("#b(询问多檀智是否没事。)#k", 3, 2192012, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("我，我是稍微有点吓到了，不过还好，你也不至于这么担心地看着我吧……#b(火气冲天)#k", 1, 2192012, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("啊哈哈，\r\n其实我比较喜欢旋转木马，多浪漫啊？闪烁的灯光，甜蜜的约会，自拍起来也很美的，我听说这里好像也有超美的旋转木马，嘿嘿-啊，不过这也不代表我就讨厌幽灵屋啦，你可别告诉#b多洛米#k哦……", 1, 2192012, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("哎哟喂，在幽灵屋里晕头转向地乱窜了一阵子，这手都变得脏兮兮的，我得赶紧去洗一洗了，我很快就回来哦！", 1, 2192012, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceCompleteQuest(31370);
                                cm.updateInfoQuest(31389, "ex=2");
                                cm.dispose()
                            }
                        }
                    }
                }
            }
        }
    }
};