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
            cm.sendNormalTalk("呃哈啊~#h0#！最近天气是不是有点热啊？夏天好像马上就要到了！\r\n这个时候就应该吹着空调，再来杯冰美式……", 0, 9010010, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("听说最近凯兰西亚很流行<家庭咖啡店>？在家里制作甜甜的果汁、凉爽的冰美式，和朋友一起喝个下午茶……#h0#你有兴趣吗？\r\n啊啊~~不管是谁都行~~给我一杯凉爽的~~饮料吧！那样的话，我夏天一定会送他一个超级无敌霹雳好的礼物的~~！", 0, 9010010, 1, 1)
            } else {
                if (status === a++) {
                    cm.askYesNo("很好！那我卡珊德拉就给你一个特别的任务。就是在#b凯兰西亚打造家庭咖啡店！#k \r\n活动期间，使用<地中海咖啡店>家具装饰房子，并邀请我的话，我就会带着礼物前往的！\r\n\r\n#b [活动时间] #k 2020/05/27 00:00 ~ 2020/06/23 23:59 \r\n#b [完成条件] #k <地中海咖啡店>家具选购10次\r\n#b [奖励] #k #i2670106:##t2670106:# 1个\r\n\r\n怎么样？你要为我制作凉爽的饮料吗？#b（每个账号仅限执行1次我的小屋活动。）#k ", 1, 9010010)
                } else {
                    if (status === a++) {
                        cm.forceStartQuest(501025, "");
                        cm.sendNormalTalk("我好像已经有点口渴了呢？#h0#，我会等着你的！", 0, 9010010, 0, 0)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/501025.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceStartQuest();
                cm.dispose()
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
            cm.sendNormalTalk("你已经准备就绪了吗？真了不起！要邀请我吗？", 0, 9010010, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("谢谢你！这是我答应你的礼物。我马上就会过去，你先回家打开漂亮的遮阳伞，准备一杯凉爽的茶水吧！", 0, 9010010, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(501025);
                    cm.updateInfoQuest(501025, "dir=1;cnt=10");
                    cm.gainItem(2670106, 1);
                    cm.dispose()
                }
            }
        }
    }
};