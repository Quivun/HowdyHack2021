import numpy as np
import matplotlib.pyplot as plt
ary = np.array([1,5,2,4,6,4,7,5,9,7,20,11,40,13,8,0,10,15,17,19])
aryPulse = np.array([1.648753, 1.970159, 2.291587, 2.612993, 2.934422, 3.23424, 3.549569, 3.864921, 4.180249, 4.82229, 5.452766, 6.098639, 6.728866, 7.359116, 8.013152, 8.643265, 9.291383, 9.922109, 10.565986, 11.196508])
print(len(ary))

def smooth(ary, brush_width):
    if (brush_width*2 > len(ary)):
        raise Exception("invalid brush_width")
    smooth_ary = np.zeros((len(ary)))
    moving_avg = -1
    smooth_ary[:brush_width] = np.average(ary[:2*brush_width])
    smooth_ary[len(ary)-2*brush_width:] = np.average(ary[len(ary)-2*brush_width:])
    for i in range(brush_width, len(ary) - brush_width):
        smooth_ary[i] = np.average(ary[i-brush_width:i+brush_width])
    return(smooth_ary)

def map_to_255(ary):
    ary = ary * 255/max(ary)
    return(ary)

def pulse(ary, sample_time, num_samples, pulse_amplitude = 200, pulse_duration = 5): #pulse size and duration optional    .005805 is sample_time
    new_ary = np.zeros(num_samples + 20)
    for t in ary:
        sample_num = int(t/(sample_time))
        for m in range(pulse_duration):
            new_ary[sample_num + m] = pulse_amplitude/(m+1)
    return(new_ary)

# ary1 = smooth(ary, 2)
# print(ary1)
# ary1_1 = map_to_255(ary1)
# print(ary1_1)


ary2 = pulse(aryPulse, .005805, 100000)




    
