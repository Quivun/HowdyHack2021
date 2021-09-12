import aubio
import numpy as np
import subprocess

def find_beats(file):

    command = subprocess.check_output(["aubio", "beat", file])

    beats = ((command).decode("utf-8")).split("\t\n")
    out = []
    for x in beats:
        if x != "":
            out.append(float(x))

    return out