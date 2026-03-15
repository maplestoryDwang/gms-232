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
            cm.sendNormalTalk_Bottom("#face0#剑斗。一位名叫赫丽娜的人送来了消息。我这就念给你听。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我是赫丽娜。我们在冒险岛灵力汇聚的武陵地区发现了疑似织田军的队伍，所以特此通知于你。", 37, 1012100, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#武陵有一位名为太上的人。关于这件事情的详细情况，你可以直接找他去问个清楚。我们这边也会尽量帮忙确认其他相关情报的。", 37, 1012100, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#能特意将如此重要的消息送来给你。看来这位赫丽娜对剑斗很是信赖嘛。对冒险岛而言，这条消息事关重大。你还是依照赫丽娜所言，直接前往武陵去探探情况吧？", 37, 9130021)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57144, "");
                            cm.sendNormalTalk_Bottom("#face0#很好。到达武陵之后，你需要找到这位名叫太上的人。可一定不要忘了人家的名字才是。我还有个任务给你。回来的时候，记得给我带两个桃子。", 37, 9130021, false, true)
                        } else {
                            if (status === a++) {
                                cm.dispose();
                                cm.warp(250000100, 1, false)
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
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            var e = cm.getQuest();
            cm.askYesNo("这个任务的依次对话脚本还没有修复哦。它的脚本位于： #b 脚本/任务/57144.js#k\r\n\r\n如果你有兴趣，欢迎一起来修复！\r\n\r\n那么现在，你要立刻开始这个任务吗？")
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
            cm.onActionBarResult(6, -1);
            cm.sendNormalTalk_Bottom("#face0#我还是第一次见到你这位客人呢。不知你来武陵有何贵干呢？", 37, 2091002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57144);
                cm.gainExp(1536020);
                cm.sendNormalTalk_Bottom("#face0#你问我有没有在这一带看到什么可疑人物？这个嘛……说来前些天我去查看蟠桃果林时，见到了一些之前从没见过的人。而且，他们的服装和你非常相似。", 37, 2091002, false, true)
            } else {
                if (status === a++) {
                    cm.askAcceptDecline_Bottom("#face0#不过当时我只顾着看桃树了，并没有仔细看他们……说不定负责管理果林的韩太守能够知道些什么呢。你不去见见韩太守吗？", 37, 2091002)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("#face0#离开武陵后，只要一路向西，就能到达蟠桃果林了。韩太守是负责管理果林的人。你一到那里应该就能见到他。", 37, 2091002, false, true)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57145, "");
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};