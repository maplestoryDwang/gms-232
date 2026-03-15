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
            cm.sendNormalTalk_Illus_II("那个光把我送到了冒险岛世界，我不是掉落在这里，而是掉在了一个很奇怪的地方，所以花了点时间才来到这里。", 9130103, 5, false, true, 9130106)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("我在来这里的途中发现了奇怪的织田军，就跟着他们。然后在#m783000000:#附近发现了进入山里面的入口。", 9130103, 5, true, true, 9130106)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("……我一下子就发现了那是比睿山。过去我在浓姬的直属部队时，就是在那里被抚养长大的。", 9130103, 5, true, true, 9130106)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus_II("那个入口原本有特殊的魔法，让人无法看见……似乎因为移动到了这边，所以能看到了。如果可以的话，我们现在就去看看吧？", 9130103, 0, 9130106)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Illus_II("你这家伙比表面上看起来要更厉害嘛？", 9130103, 5, false, true, 9130106)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Illus_II("出发前我要准备一下，你待会再和我对话吧。", 9130103, 5, true, true, 9130106)
                            } else {
                                if (status === a++) {
                                    cm.forceStartQuest(58949, "3rd");
                                    cm.forceStartQuest(58911, "");
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/58911.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.sendNormalTalk_Illus_II("根据我调查的结果，因为浓姬的咒术，接触了冒险岛世界气息的我们是无法进入比睿山的。", 9130103, 5, false, true, 9130106)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Illus_II("所以我留心观察了这里的织田军士兵，知道了存在可以使咒术无效的药水。", 9130103, 5, true, true, 9130106)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Illus_II("我抢来了那个药水，并进行了改造。如果喝下这个药水，就能变为来到冒险岛世界前的我们。但是，因为药水是改造过的，所以有些不稳定。", 9130103, 5, true, true, 9130106)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Illus_II("总之，你就收下#i2432732:##t2432732:#试试吧？", 9130103, 0, 9130106)
                    } else {
                        if (status === a++) {
                            cm.forceCompleteQuest(58911);
                            cm.sendNormalTalk_Illus_II("你确认一下背包吧。闭上眼睛，然后试试吧。", 9130103, 4, false, false, 9130106);
                            cm.gainItem(2432732, 1)
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
};