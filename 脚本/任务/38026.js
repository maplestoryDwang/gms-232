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
            cm.sendNormalTalk("格兰蒂斯、异次元、次元之门…………各种信息突然一涌而来。虽然到现在还不能理解到底是什么意思，不过结论只有一个，那就是一定有办法再回到冒险岛世界！…………而且阿琅想隐藏的应该也是这个。", 16, 0, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk("但是我必须回去。我必须亲眼确认一下。既然知道有办法回到冒险岛世界，就没有理由犹豫了。等解决了所有事情之后……到时再回来。", 16, 0, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("不过我还是很不安。她把自己的精灵送给了我，一直很关心我。我现在能做的，就是让她安心。把被称为勇敢狐狸的证物的#r#t4009228##k带过去，她应该就能放心一点了吧？", 16, 0, true, true)
                } else {
                    if (status === a++) {
                        cm.updateInfoQuest(38026, "");
                        cm.forceStartQuest(38026, "");
                        cm.dispose();
                        cm.warp(410000051, 1, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/38026.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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