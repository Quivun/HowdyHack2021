import aubio
import numpy as np
import subprocess

def find_beats(file):

    command = subprocess.check_output(["aubio", "beat", file])

    temp_beats = ((command).decode("utf-8")).split("\t\n")
    beat = []
    for x in temp_beats:
        if x != "":
            beat.append(float(x))

    return beat

def find_pitches(file):
    command = subprocess.check_output(["aubio", "pitch", file])

    temp_pitches = ((command).decode("utf-8")).split("\n")
    pitches = []
    for x in temp_pitches:
        if x != "":
            time, pitch = x.split("\t")
            pitches.append([float(time), float(pitch)])

    return pitches

