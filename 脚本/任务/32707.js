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
            cm.sendNormalTalk_Bottom("喂，你能听见我说话吗？\r\n\r\n你现在手里拿着的东西叫做智能手机。虽然这东西在这个世界是个稀罕物，但在我之前生活的地方却是非常常见呢。", 37, 1530000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("对了，你看见我的衣服了吗？\r\n\r\n这是校服，我之前所在的世界里，学生们都要穿这种衣服的。", 37, 1530000, true, true)
            } else {
                if (status === a++) {
                    cm.askYesNo_Bottom("怎么样，对这个新的世界是不是很感兴趣呢？\r\n#b（如果接受，则会移动到射手村衣柜落入的房子里。）#k", 37, 1530000)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那么，请到射手村衣柜落入的房子来找到我吧。\r\n\r\n#e#b通过次元之镜也可移动到那里。#n#k", 37, 1530000, false, true)
                    } else {
                        if (status === a++) {
                            cm.dispose();
                            cm.warp(330002040, 0)
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
            cm.sendNormalTalk_Bottom("呃，你就是接我电话的那个人啊？很高兴见到你。\r\n\r\n什么？我吗？我嘛……怎么说好呢，是一名从异界不小心飞过来的平凡学生。", 37, 1530000, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("喂，都能从异界飞过来，还能算是平凡？", 37, 1530020, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("……你也看到了，把我召唤到这里的罪魁祸首似乎并不怎么喜欢我。\r\n\r\n你是不是很好奇我到底是怎么飞到这里来的呢？", 37, 1530000, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那个嘛，你最好去听听把我召唤来的那个人亲口和你说。\r\n\r\n就是那个从刚才就一直嘟囔个不停的魔法师。", 37, 1530000, true, true)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(32707);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};