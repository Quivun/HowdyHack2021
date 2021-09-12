from scipy.io import wavfile
import scipy.io
import numpy as np
import pandas as pd
import sys
#np.set_printoptions(threshold = sys.maxsize)

samplerate, data = wavfile.read("ImperialMarch60.wav")
# print(f"number of channels = {data.shape[1]}") (not working bc i think this is one channel only)
length = data.shape[0] / samplerate
df = pd.DataFrame(data)
print(df)
print("samplerate:", samplerate)
print(f"length = {length}s") 

# plot data file
import matplotlib.pyplot as plt
# time = np.linspace(0., length, data.shape[0])
# plt.plot(time, data[:])
# plt.legend()
# plt.xlabel("Time [s]")
# plt.ylabel("Amplitude")
# plt.show()

# create frequency array
from scipy import signal
from scipy.fft import fftshift

# f, t, Sxx = scipy.signal.spectrogram(data, fs=1.0)

# plt.plot(t, Sxx[:])
# plt.legend()
# plt.xlabel("Time [s]")
# plt.ylabel("Frequency")
# plt.show()

# create spectrogram (idk how we can use this but here it is)

f, t, Sxx = signal.spectrogram(data, samplerate, return_onesided=False)
plt.pcolormesh(t, fftshift(f), fftshift(Sxx, axes=0), shading='gouraud')
plt.ylabel('Frequency [Hz]')
plt.xlabel('Time [sec]')
plt.show()