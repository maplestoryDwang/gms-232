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
            cm.sendNormalTalk_Bottom("#face3#哈哈，这里有很多可以吃的东西↗ 哦，所以我想趁这个机会多准备一些备用粮↗", 37, 3001509, 0, 1)
        } else {
            if (status === a++) {
                cm.askAcceptDecline_Bottom("#face2#从#r河狸污水坑2#k的#o2400308#身上可以获得的#i4036351# #b#t4036351##k好像很好吃！你能帮我去搜集#b30个#k吗？", 37, 3001509)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face2#晒干之后，应该可以放着吃很久↗ 好了，路上小心↗", 37, 3001509, 0, 1)
                } else {
                    if (status === a++) {
                        cm.OnStartNavigation(402000221, 0, "", 0);
                        cm.forceStartQuest(34942, "");
                        cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/34942.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.forceCompleteQuest();
            cm.gainExp(85232);
            cm.gainItem(4036351, -30);
            cm.sendNormalTalk_Bottom("#face3#哦哦哦，这么多备用粮足够了。哦哦哦，过会儿我就分给其他人，耶~", 37, 3001509, 0, 1)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#啊……这样离开的准备就差不多完成了↗哦，哦，现在差不多完成了↗离开的准备，耶~", 37, 3001509, 0, 1)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#哦，哦，该跟你道别了。哦，哦，我要为之前的事情向你表示感谢。", 37, 3001509, 0, 1)
                } else {
                    if (status === a++) {
                        cm.dispose()
                    }
                }
            }
        }
    }
};