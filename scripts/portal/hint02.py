from net.swordie.ms.connection.packet import ReactorPool
from net.swordie.ms.constants import OzConstants

field = chr.getField()
r = OzConstants.F23_HINT02_RECT

reactors = field.getReactorsInRect(r)
for reactor in reactors:
    reactor.setState(1)
    field.broadcastPacket(ReactorPool.reactorChangeState(reactor, 0, 0))
