package net.swordie.ms.connection;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.Unpooled;
import net.swordie.ms.util.FileTime;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;

import java.util.Arrays;

import static net.swordie.ms.util.FileTime.fromDate;

/**
 * Created on 2/18/2017.
 */
public class InPacket extends Packet {
    private ByteBuf byteBuf;
    private boolean loopback;
    /**
     * Creates a new InPacket with a given buffer.
     * @param byteBuf The buffer this InPacket has to be initialized with.
     */
    public InPacket(ByteBuf byteBuf) {
        super(byteBuf.array());
        this.byteBuf = byteBuf.copy();
    }

    /**
     * Creates a new InPacket with no data.
     */
    public InPacket(){
        this(Unpooled.buffer());
    }

    /**
     * Creates a new InPacket with given data.
     * @param data The data this InPacket has to be initialized with.
     */
    public InPacket(byte[] data) {
        this(Unpooled.copiedBuffer(data));
    }

    @Override
    public int getLength() {
        return byteBuf.readableBytes();
    }

    @Override
    public byte[] getData() {
        return byteBuf.array();
    }

    @Override
    public InPacket clone() {
        return new InPacket(byteBuf);
    }

    /**
     * Reads a single byte of the ByteBuf.
     * @return The byte that has been read.
     */
    public byte decodeByte() {
        return byteBuf.readByte();
    }

    public short decodeUByte() {
            return byteBuf.readUnsignedByte();
    }

    /**
     * Reads an <code>amount</code> of bytes from the ByteBuf.
     * @param amount The amount of bytes to read.
     * @return The bytes that have been read.
     */
    public byte[] decodeArr(int amount) {
        byte[] arr = new byte[amount];
        for(int i = 0; i < amount; i++) {
            arr[i] = byteBuf.readByte();
        }
        return arr;
    }

    /**
     * Reads an integer from the ByteBuf.
     * @return The integer that has been read.
     */
    public int decodeInt() {
        return byteBuf.readIntLE();
    }

    /**
     * Reads a short from the ByteBuf.
     * @return The short that has been read.
     */
    public short decodeShort() {
        return byteBuf.readShortLE();
    }

    /**
     * Reads a char array of a given length of this ByteBuf.
     * @param amount The length of the char array
     * @return The char array as a String
     */
    public String decodeString(int amount) {
        byte[] bytes = decodeArr(amount);
        char[] chars = new char[amount];
        for(int i = 0; i < amount; i++) {
            chars[i] = (char) bytes[i];
        }
        return String.valueOf(chars);
    }

    /**
     * Reads a String, by first reading a short, then reading a char array of that length.
     * @return The char array as a String
     */
    public String decodeString() {
        int amount = decodeShort();
        return decodeString(amount);
    }

    @Override
    public String toString() {
        return Util.readableByteArray(Arrays.copyOfRange(getData(), getData().length - getUnreadAmount(), getData().length)); // Substring after copy of range xd
    }


    /**
     * Reads and returns a long from this net.swordie.ms.connection.packet.
     * @return The long that has been read.
     */
    public long decodeLong() {
        return byteBuf.readLongLE();
    }

    public double decodeDouble() {
        return Double.longBitsToDouble(decodeLong());
    }

    public FileTime decodeFT(){
        long clientTime =  byteBuf.readLongLE();
        long serverTime = (clientTime - 116444736000000000L) / 10000L;
        FileTime fileTime = new FileTime(serverTime);
        fileTime = fromDate(fileTime.toLocalDateTime().minusHours(2));
        return fileTime;
    }
    /**
     * Reads a position (short x, short y) and returns this.
     * @return The position that has been read.
     */
    public Position decodePosition() {
        return new Position(decodeShort(), decodeShort());
    }

    /**
     * Reads a position (int x, int y) and returns this.
     * @return The position that has been read.
     */
    public Position decodePositionInt() {
        return new Position(decodeInt(), decodeInt());
    }

    /**
     * Reads a rectangle (short l, short t, short r, short b) and returns this.
     * @return The rectangle that has been read.
     */
    public Rect decodeShortRect() {
        return new Rect(decodePosition(), decodePosition());
    }

    /**
     * Reads a rectangle (int l, int t, int r, int b) and returns this.
     * @return The rectangle that has been read.
     */
    public Rect decodeIntRect() {
        return new Rect(decodePositionInt(), decodePositionInt());
    }


    /**
     * Returns the amount of bytes that are unread.
     * @return The amount of bytes that are unread.
     */
    public int getUnreadAmount() {
        return byteBuf.readableBytes();
    }

    public void release() {
        byteBuf.release();
    }

    public boolean isLoopback() {
        return loopback;
    }

    public void setLoopback(boolean loopback) {
        this.loopback = loopback;
    }

    public byte[] decodeEncryptedData() {
        int key = decodeInt();
        int size = decodeInt();
        byte[] buffer = decodeArr(size);

        byte[] resBuf = new byte[buffer.length];

        int i = 0;
        for (; i < size - (size % 4); i += 4) {
            byte[] curInt = new byte[4];
            System.arraycopy(buffer, i, curInt, 0, 4);

            int toInt = Util.toInt(curInt);
            toInt ^= key;
            toInt += 0x369F144D;
            toInt += key >>> 7;
            toInt ^= 0xAAAABBBB;

            resBuf[i] = (byte) (toInt & 0xFF);
            resBuf[i + 1] = (byte) ((toInt >>> 8) & 0xFF);
            resBuf[i + 2] = (byte) ((toInt >>> 16) & 0xFF);
            resBuf[i + 3] = (byte) ((toInt >>> 24) & 0xFF);
        }

        for (; i < size; i++) {
            byte curByte = buffer[i];
            curByte ^= key >>> 1;
            curByte += 55;
            curByte += key >>> 7;
            curByte ^= 0xAB;

            resBuf[i] = curByte;
        }

        return resBuf;
    }
}
