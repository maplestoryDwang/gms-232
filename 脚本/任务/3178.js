var status = -1;

function start(e, d, c) {
    (e == 1) ? status++ : status--;
    var b = -1;
    if (status <= b++) {
        cm.dispose()
    } else {
        if (status == b++) {
            cm.sendNext("你找到了解过去发生在这座城里的事件的人了吗？嗯？#p2161002#？他原本是国王的近卫骑士团长。他还留在这里吗……是吗，#p2161002#是怎么说的呢？他知道雷昂为什么会变成这个样子吗？")
        } else {
            if (status == b++) {
                cm.sendNextS("#b(转述从#p2161002#那里听到的话。)#k")
            } else {
                if (status == b++) {
                    cm.sendNext("没错……是的，是的。在黑色的乌云遮住天空的那一天，原本看上去很普通的士兵们突然变了，开始攻击我们。城墙倒塌，房屋全都着了火……我，我被塔里的烟雾……原来是这样啊。")
                } else {
                    if (status == b++) {
                        cm.sendNextS("#b(从#p2161001#的反应来看，#p2161002#的话好像是事实。)#k")
                    } else {
                        if (status == b++) {
                            cm.sendNext("雷昂是因为这个才会变成这样的啊。我光在这里抱怨雷昂，没想到这段时间他一直生活在悲伤和愤怒之中……我不能再让他这样下去了。")
                        } else {
                            if (status == b++) {
                                cm.sendNextS("#b你有什么办法吗？")
                            } else {
                                if (status == b++) {
                                    cm.sendNext("城里有鲁丹都不知通的国王和王妃专用的通道。本来是不应该告诉别人的……但是这次就破例一次。请你和我一起到接见室去见见他。")
                                } else {
                                    if (status == b++) {
                                        cm.askAcceptDecline("我要亲自去见见他。因为那些拥有黑暗气息的怪物，我一直不能到接见室去……不过如果你能帮我，我就应该可以过去。请一定要让我到接见室去！拜托你了！")
                                    } else {
                                        if (status == b++) {
                                            var a = cm.getQuestRecord(3178);
                                            a.setStatus(1);
                                            cm.getPlayer().updateQuest(a, true);
                                            actionFB()
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
    (d == 1) ? status++ : status--;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNext("这……是我送给雷昂的吊坠。我送他这个礼物，是希望他能成为一个好的国王。没想到他还戴在身上……他果然是个多情的人。")
        } else {
            if (status == a++) {
                cm.sendNext("虽然他已经完全变了，虽然他的所作所为可能已经不可原谅……不过我不认为已经没有希望了。我相信总有一天，雷昂会恢复成原来的样子。")
            } else {
                if (status == a++) {
                    cm.dispose();
                    cm.forceCompleteQuest()
                }
            }
        }
    }
}
var PQname = ["副本_狮子王城_秘密走廊"];
var PQLog = ["副本_狮子王城_秘密走廊"];
var startmap = 211061001;
var minLevel = [120];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var minPlayers = 1;
var maxPlayers = 6;
var moblevel = 255;
var chs = 0;

function actionFB() {
    var a = cm.getEventManager(PQname[0]);
    if (a == null) {
        cm.sendOk("配置文件不存在,请联系管理员。")
    } else {
        var b = a.getNumberProperty("state");
        if (b == 0) {
            a.startInstance(cm.getPlayer());
            a.setProperty("PQLog", PQLog[chs])
        } else {
            cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。")
        }
    }
    cm.dispose()
};