package net.swordie.ms.client;

import net.swordie.ms.Server;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.OutPacket;
import net.swordie.ms.connection.crypto.TripleDESCipher;
import net.swordie.ms.connection.netty.NettyClient;
import net.swordie.ms.connection.packet.ClientSocket;
import net.swordie.ms.connection.packet.Login;
import net.swordie.ms.connection.packet.UserLocal;
import net.swordie.ms.enums.ResolutionType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.handlers.header.InHeader;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.Channel;
import net.swordie.ms.world.World;

import java.util.*;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

/**
 * Created by Sjonnie on 2/18/2017.
 */
public class Client extends NettyClient {
    public static final int MAX_UNACKED_PINGS = 12; // 2 minutes (120 seconds)

	/*
    How2update key:
    Find CryptoPP::Init (55 8b ec 6a ff 68 ? ? ? ? 64 a1 00 00 00 00 50 51 56 a1 ? ? ? ? 33 c5 50 8d ? ? 64 a3 00 00 00 00 8b f1 89 75 f0 e8 ? ? ? ? c7 06 ? ? ? ? 8b ce)
    Put BP on that
    Check stack
     */
	private static final String TRIPLE_DES_KEY = "N3x@nGLEUH@ckEr!";

	private Char chr;
	private Lock lock;
	private Account account;
	private User user;
	private int channel;
	private byte worldId;
	private boolean authorized;
	private Channel channelInstance;
	private byte[] machineID;
	private Map<Short, Short> encryptedHeaderToNormalHeaders = new HashMap<>();
	private int oldChannel;
	private long ping;
	private long lastPingTime;
	private boolean waitingForAliveAck;
	private int unackedPings;
	private ScheduledFuture pingSender;
	private ResolutionType resolution;

	public Client(io.netty.channel.Channel channel, byte[] sendSeq, byte[] recvSeq) {
		super(channel, sendSeq, recvSeq);
		lock = new ReentrantLock(true);
	}

	public void setAccount(Account account) {
		this.account = account;
	}

	public Lock getLock() {
		return lock;
	}

	public void write(byte[] data) {
		write(new OutPacket(data));
	}

	public void sendPing() {
		lastPingTime = System.currentTimeMillis();
		waitingForAliveAck = true;
		unackedPings++;
		if (unackedPings < MAX_UNACKED_PINGS) {
			write(Login.sendAliveReq());
		} else {

			//Needs to be above remove user, cause else you can somehow stay in game when disconnected. Somehow this doesn't get ran if it's below the if getUser()
			close();

			if (getUser() != null) {
				Server.getInstance().removeUser(user);
			}
		}
	}

	public void setPing(long ping) {
		this.ping = ping;
	}

	public long getPing() {
		return ping;
	}

	public long getLastPingTime() {
		return lastPingTime;
	}

	public boolean isWaitingForAliveAck() {
		return waitingForAliveAck;
	}

	public Account getAccount() {
		return account;
	}

	public void setChannel(int channel) {
		this.channel = channel;
	}

	public int getChannel() {
		return channel;
	}

	public byte getWorldId() {
		return worldId;
	}

	public void setWorldId(byte worldId) {
		this.worldId = worldId;
	}

	public Char getChr() {
		return chr;
	}

	public void setChr(Char chr) {
		this.chr = chr;
	}

	public void setAuthorized(boolean authorized) {
		this.authorized = authorized;
	}

	public boolean isAuthorized() {
		return authorized;
	}

	public void setChannelInstance(Channel channelInstance) {
		this.channelInstance = channelInstance;
	}

	public Channel getChannelInstance() {
		return channelInstance;
	}

	public World getWorld() {
		return Server.getInstance().getWorldById(getWorldId());
	}

	public boolean hasCorrectMachineID(byte[] machineID) {
		return Arrays.equals(machineID, getMachineID());
	}

    public void setMachineID(byte[] machineID) {
        this.machineID = machineID;
    }

    public byte[] getMachineID() {
        return machineID;
    }

	public void sendOpcodeEncryption() {
		byte[] key = new byte[24];

		System.arraycopy(TRIPLE_DES_KEY.getBytes(), 0, key, 0, 16);
		System.arraycopy(key, 0, key, 16, 8);

		TripleDESCipher cipher = new TripleDESCipher(key);
		StringBuilder content = new StringBuilder();

		List<Integer> possibleNums = new ArrayList<>();
		for (int i = InHeader.BEGIN_USER.getValue(); i < 9999; i++) {
			possibleNums.add(i);
		}

		for (short header = InHeader.BEGIN_USER.getValue(); header < InHeader.NO.getValue(); header++) {
			int randNum = Util.getRandomFromCollection(possibleNums);
			possibleNums.remove((Integer) randNum);
			String num = String.format("%04d", randNum);
			encryptedHeaderToNormalHeaders.put((short) randNum, header);
			content.append(num);
		}

		var contentBytes = content.toString().getBytes();
		byte[] encryptedBuf = cipher.encrypt(contentBytes);

		write(ClientSocket.opcodeEncryption(4, encryptedBuf));
	}

	public Map<Short, Short> getEncryptedHeaderToNormalHeaders() {
		return encryptedHeaderToNormalHeaders;
	}

	public void setOldChannel(int oldChannel) {
        this.oldChannel = oldChannel;
    }

    public int getOldChannel() {
        return oldChannel;
    }

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public void close() {
		EventManager.stopTimer(pingSender);
		pingSender = null;
		super.close();
	}

	public void startPingSending() {
		pingSender = EventManager.addFixedRateEvent(this::sendPing, 0, 10000);
	}

	public void resetUnackedPings() {
		unackedPings = 0;
	}

	public ResolutionType getResolution() {
		return resolution;
	}

	public void setResolution(ResolutionType resolution) {
		this.resolution = resolution;
	}

	public void requestResolution() {
		write(UserLocal.sendClientResolution());
	}
}
