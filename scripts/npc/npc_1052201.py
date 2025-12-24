# Office TV
# 1052201
# Blake's Office (103041001)
# Warp from Blake's Office to Kerning Square Lobby.

response = sm.sendAskYesNo("Bzz... Bzz... \r\n\r\n"
"Tonight on SuperStarzz: The Rise & Fall of Blake #b\r\n"
"(Do you want to take a peek into Blake's past?)")
if response:
    sm.warp(103041160)