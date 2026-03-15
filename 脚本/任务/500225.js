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
            cm.sendNormalTalk("嘻嘻，这是#r红色药水#k。\r\n在#b魔量#k不足时可以喝一瓶。", 4, 9062054, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("嗯……？为什么#b魔量#k不上升？\r\n只是感觉#r更健康#k了？", 4, 9062054, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("你在干什么呢？那是#r红色药水#k……\r\n#r红色是血量#k，#b蓝色才是魔量#k……", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk("哇！你真是个#e聪明人#n！", 4, 9062054, true, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk("呵呵，是啊。我就是百事通#b#h0##k。\r\n啊……不，不是的，这都是最基本的东西。", 16, 0, true, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk("还这么#e谦虚#n！\r\n喂！你能帮帮我吗？\r\n我今天是头一次到#b冒险岛世界#k来，还有点摸不清头脑……", 4, 9062054, true, true)
                            } else {
                                if (status === a++) {
                                    cm.sendNormalTalk("我的好朋友为了让我尽快适应#b冒险岛世界#k，送了我很多#b礼物#k，但是我却不知道该怎么用……", 4, 9062054, true, true)
                                } else {
                                    if (status === a++) {
                                        cm.sendNormalTalk("如果你能帮助我#b在冒险岛世界定居下来#k，我就把朋友送的#e礼物#n送给你！你有#b时间#k吗？", 4, 9062054, true, true)
                                    } else {
                                        if (status === a++) {
                                            cm.sendNormalTalk("不……我很忙……而且我对#b冒险岛世界#k也并不是完全了解。", 16, 0, true, true)
                                        } else {
                                            if (status === a++) {
                                                cm.sendNormalTalk("没关系！\r\n我昨天想要捕捉#r花蘑菇#k，结果死了#e1120次#n！\r\n我还以为只要#b踩死#k就行，没想到它一直#b跳来跳去#k，后来才发现必须要用剑砍！哈哈！", 4, 9062054, true, true)
                                            } else {
                                                if (status === a++) {
                                                    cm.askYesNo("是的！我决定了！\r\n从现在开始，我要把你当成#b老师#k！\r\n#b老师#k，请你帮帮我！\r\n#e对了#n，这是我送给老师的礼物！\r\n\r\n#b#e<课程完成奖励>#n#k\r\n#e<1学时>#n\r\n#i1122215:# #b#t1122215:# 1个#k\r\n#e<2学时>#n\r\n#i4001832:# #b#t4001832:# 500个#k\r\n#e<3学时>#n\r\n#i2049447:# #b#t2049447:# 1个#k\r\n#e<4学时>#n\r\n#i2593001:# #b#t2593001:# 5个#k\r\n#e<5学时>#n\r\n#i2711001:# #b#t2711001:# 5个#k\r\n#e<6学时>#n\r\n#i2433604:# #b#t2433604:# 1个#k\r\n#e<7学时>#n\r\n#i2049710:# #b#t2049710:# 1个#k\r\n#e<8学时>#n\r\n#i2436782:# #b#t2436782:# 1个#k\r\n#e<9学时>#n\r\n#i4001839:# #b#t4001839:# 100个#k\r\n#e<10学时>#n\r\n#i3700486:# #b#t3700486:# 1个#k", 4, 9062054)
                                                } else {
                                                    if (status === a++) {
                                                        cm.updateInfoQuest(500238, "ask=5216748093");
                                                        cm.forceStartQuest(500225, "");
                                                        cm.forceCompleteQuest(500225);
                                                        cm.sendNormalTalk("好吧，那我就收你为#b弟子#k吧。", 16, 0, false, true)
                                                    } else {
                                                        if (status === a++) {
                                                            cm.sendNormalTalk("啊……不是的。\r\n我先来告诉你一些#b最基本的常识#k。", 16, 0, true, true)
                                                        } else {
                                                            if (status === a++) {
                                                                cm.sendNormalTalk("谢谢你！我一定会好好学习的！\r\n\r\n#r#e※注意※#n#k\r\n课程#e共分10次#n。\r\n课程从#b2019年12月4日#k开始，#b每天开放一次#k。\r\n所有课程#r每个世界只能进行1次#k。", 4, 9062054, true, false)
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
            var e = cm.getQuest();
            cm.askYesNo("这个任务的结束脚本还没有修复哦。它的脚本位于： #b /脚本/任务/#e" + e + "#n.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻完成这个任务吗？")
        } else {
            if (status == a++) {
                cm.forceCompleteQuest();
                cm.dispose()
            }
        }
    }
};