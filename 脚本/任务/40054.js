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
            cm.forceStartQuest(40054, "");
            cm.updateInfoQuest(40054, "");
            cm.dispose()
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
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/40054.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.updateInfoQuest(41832, "afrien=off;cave=enter");
            cm.gainExp(659000);
            cm.updateInfoQuest(40054, "");
            cm.forceCompleteQuest(40054);
            cm.sendNormalTalk("噢噢，这么快就回来了？这么快就完成了我的考试……果然是不简单啊……额额……", 32, 2411016, false, true);
            cm.setMirrorDungeonInfo(["mirrorD_321_0_", "mirrorD_321_1_", "mirrorD_321_2_", "mirrorD_321_3_", "map321190300"], [0, 0, 0, 0, 0], ["看似美丽，但其实栖息着凶恶怪物的米纳尔西部森林。\n\n通关次数:2\r\n最短纪录:4分 21秒", "森林支配者半人马王所支配的米纳尔东部森林。\n\n通关次数:1\r\n最短纪录:4分 29秒", "被西下的太阳染红的黄昏森林。\n\n通关次数:1\r\n最短纪录:4分11秒", "蓝飞龙在险峻的岩石之间筑巢的蓝飞龙峡谷。\n\n通关次数:1\r\n最短纪录:6分24秒", "可以见到暗黑龙王的发光洞穴"])
        } else {
            if (status === a++) {
                cm.sendNormalTalk("那么，我告诉你们怎么去找那条巨龙。这条龙在叫做#b#MDmap321190300##k的地方，要去这里的话就要向东挥90次翅膀，然后向北挥动120次翅膀……听懂了吗？", 32, 2411016, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk("怎么感觉像没听懂似的……算了，直接去找就行了。其实很好找的，使用#b传送门#k到村外去寻找#MDmap321190300#吧。", 32, 2411016, true, false);
                    cm.dispose()
                }
            }
        }
    }
};