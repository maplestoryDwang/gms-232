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
            cm.sendNormalTalk_Bottom("啊！你好，你叫……#h0#对吧？！很高兴又见到你了。", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("上次多亏你帮我修好了巡逻摩托，我才能顺利出警并解决了事件。\r\n啊……当时你是消灭了南京路上的#o9600310#，才搜集到轮子的吧？真是没想到……你果然很厉害啊。", 37, 9310533, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊……不知道你有没有时间？\r\n我现在正要和其他警官一起去清理南京路街道。我所说的清理可不是捡垃圾那种事情，而是去消灭南京路上的那些鬼怪。总之，那里离豫园最近，所以需要花费很多精力。", 37, 9310533, true, true)
                } else {
                    if (status === a++) {
                        cm.askYesNo_Bottom("所以，如果……如果你有时间的话，能不能和我们一起去消灭鬼怪？", 37, 9310533)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(62118, "");
                            cm.sendNormalTalk_Bottom("啊！我就知道你会帮我们。", 37, 9310533, false, true)
                        } else {
                            if (status === a++) {
                                cm.sendNormalTalk_Bottom("那就拜托你在南京路消灭#o9600310#、#o9600311#、#o9600312#各100只吧。这对#h0#你来说，应该只是小菜一碟吧？哈哈哈，那就拜托你了。", 37, 9310533, true, false)
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
            cm.sendNormalTalk_Bottom("哦！已经完事儿啦？", 37, 9310533, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(62118);
                cm.updateInfoQuest(62118, "chk=1");
                cm.addNumberForQuestInfo(62109, "yuyuanPoint", 4);
                cm.sendNormalTalk_Bottom("#h0#，你好像比我想象的还要强啊。真是太厉害了。", 37, 9310533, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("啊！你知道村子里的#e#r委托布告栏#n#k吧？我们经常会在那里登记一些简单的任务，你有时间的话，不妨帮助我们。奖励很丰厚哦。", 37, 9310533, true, true)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("那我先去忙了……辛苦你了！", 37, 9310533, true, false)
                    } else {
                        if (status === a++) {
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
};