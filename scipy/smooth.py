import numpy as np
import matplotlib.pyplot as plt
ary = np.array([1,5,2,4,6,4,7,5,9,7,20,11,40,13,8,0,10,15,17,19])
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
    new_ary = ary * 255/max(ary)
    return(new_ary)

ary1 = smooth(ary, 2)
print(ary1)
ary1_1 = map_to_255(ary1)
print(ary1_1)





    
