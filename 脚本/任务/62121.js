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
            cm.sendNormalTalk_Bottom("哦！看来你确实通过测试了。能再见到你真是太好了。哎……现在豫园里的人口数量剧增，食物供应却跟不上，这可如何是好。", 37, 9310536, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("你只不过是一名厨师，无需担心这个吧！你只管把菜做好就行啦！", 57, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("嗯……话虽如此……可俗话说的好，巧妇难为无米之炊。现在食材缺乏，我怎么做菜啊？来自上海外围的食材供给已经中断很久了。虽然偶尔会有一些勇士通过打猎狂暴的动物来获取食材。可那也远远不够啊……", 37, 9310536, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("你懂狩猎吗？可以的话，能不能帮我个忙？", 37, 9310536)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62121, "");
                            cm.sendNormalTalk_Bottom("我们豫园居民最喜欢的零食就是#i2010047:##t2010047#了。不过要制作#t2010047#，就需要鸡蛋和鸭蛋……用鸭蛋做的#t2010047#的味道堪称一绝！", 37, 9310536, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("#m701102000#里有很多#o9600302#。消灭那些#o9600302#可以获得#i4009358:##t4009358#。你要是能搜集来#b50个#k的话，应该就可以解决燃眉之急了。", 37, 9310536, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk_Bottom("那就拜托你了！", 37, 9310536, true, false)
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
            cm.sendNormalTalk_Bottom("哦！你这么快就带来50个#i4009358:##t4009358#了啊！", 37, 9310536, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62121);
                cm.updateInfoQuest(62121, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 3);
                cm.sendNormalTalk_Bottom("你真厉害~我看人的眼光的确不错啊！谢谢，谢谢你。狩猎辛苦了，请收下这些#i2010047:##t2010047#吧。请你在品尝之后，做个评价吧。", 37, 9310536, true, false);
                cm.gainItem(4009358, -50);
                cm.gainItem(2010047, 10);
                cm.dispose()
            }
        }
    }
};