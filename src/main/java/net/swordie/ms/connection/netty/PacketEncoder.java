/*
    This file is part of Desu: MapleStory v62 Server Emulator
    Copyright (C) 2014  Zygon <watchmystarz@hotmail.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
package net.swordie.ms.connection.netty;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;
import net.swordie.ms.Server;
import net.swordie.ms.client.Client;
import net.swordie.ms.connection.Packet;
import net.swordie.ms.connection.crypto.MapleCrypto;
import net.swordie.ms.handlers.header.OutHeader;
import net.swordie.ms.util.Util;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

/**
 * Implementation of a Netty encoder pattern so that encryption of MapleStory
 * packets is possible. Follows steps using the special MapleAES as well as
 * ShandaCrypto (which became non-used after v149.2 in GMS).
 *
 * @author Zygon
 */
public final class PacketEncoder extends MessageToByteEncoder<Packet> {
    private static final Logger log = LogManager.getRootLogger();

    @Override
    protected void encode(ChannelHandlerContext chc, Packet outPacket, ByteBuf bb) {
        byte[] data = outPacket.getData();
        NettyClient c = chc.channel().attr(NettyClient.CLIENT_KEY).get();
        MapleCrypto mCr = chc.channel().attr(NettyClient.CRYPTO_KEY).get();

        if (c != null) {
            if (!OutHeader.isSpamHeader(OutHeader.getOutHeaderByOp(outPacket.getHeader())) && Server.DEBUG) {
                log.debug("[Out]\t| " + outPacket);
            }
            byte[] iv = c.getSendIV();
            byte[] header = MapleCrypto.getHeader(data.length, iv);

            if (data.length >= Packet.MAX_SHORT_PACKET_SIZE) {
                var oldHeader = header;
                header = new byte[oldHeader.length + 4];
                System.arraycopy(oldHeader, 0, header, 0, oldHeader.length);

                var rawSeq = (header[0] & 0xFF) + ((header[1] & 0xFF) << 8);
                encodeIntLength(header, data.length, rawSeq);
            }

            c.acquireEncoderState();
            try {
                if (((Client) c).getChr() != null) {
                    MapleCrypto.encInit(Util.toInt(iv), data, false);
                } else {
                    mCr.crypt(data, iv);
                }
                c.setSendIV(MapleCrypto.getNewIv(iv));
            } finally {
                c.releaseEncodeState();
            }
            
            bb.writeBytes(header);
            bb.writeBytes(data);

        } else {
            log.debug("[PacketEncoder] | Plain sending " + outPacket);
            bb.writeBytes(data);
        }
        outPacket.release();
    }

    private void encodeIntLength(byte[] data, int length, int rawSeq) {
        // make dataLen LE
        int xorLen = rawSeq ^ length;
        data[4] = (byte) (xorLen & 0xFF);
        data[5] = (byte) ((xorLen >>> 8) & 0xFF);
        data[6] = (byte) ((xorLen >>> 16) & 0xFF);
        data[7] = (byte) ((xorLen >>> 24) & 0xFF);
    }
}
