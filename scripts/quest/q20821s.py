# Start of Knight's Orientation
KIMU = 1102004
sm.setSpeakerID(KIMU)

sm.sendNext("这是为了欢迎新加入的骑士团员而举行的欢迎会。嗯，在哪儿呢？我想介绍个人给你认识。修炼教官奇库在哪儿呢？这里人太多，不太容易找到……")

sm.sendSay("请看画面左上方。点击小地图UI右侧的NPC按钮，会显示该地图上的NPC名字。请点击其中的奇库。那样的话，小地图上就会用箭头显示奇库的位置。\r\n请你找到奇库，去和他打个招呼。")

sm.startQuestNoCheck(parentID)
