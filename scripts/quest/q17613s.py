# [Commerci Republic] The Minister's Son

if sm.getFieldID() == 865010200:
    sm.setSpeakerID(9390201) # Mayor Berry
    sm.sendSayOkay("你去村子东边的空房子找找看吧。那里应该有个面朝大海耍帅的年轻人。他就是#b莱文·达尼尔拉#k。他是个很直爽的青年，应该和你很合得来。")
    sm.dispose()
else:
    sm.setSpeakerID(9390202) # Leon Daniella
    sm.sendSayOkay("这么重要的情报……真是谢谢你，我不会忘记您的恩惠。")
    sm.dispose()
