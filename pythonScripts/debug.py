import modify_ary
import music_analysis
import json


dictionary1 = {"pitches": [],
              "smooths": [],
              "beats": [],
              "pulse":[]
            }

twinklePitches = music_analysis.find_pitches_only("Twinkle-twinkle-Little-Star.wav")
twinkleBeats = music_analysis.find_beats("Twinkle-twinkle-Little-Star.wav")
smooth_twinkle = modify_ary.smooth(twinklePitches, 2)
twinkle_pulse = modify_ary.pulse(twinkleBeats, .005805, len(twinklePitches))
birthdayBeats = music_analysis.find_beats("happy-birthday.wav")
birthdayPitches = music_analysis.find_pitches_only("happy-birthday.wav")



pulse_birthday = modify_ary.pulse(birthdayBeats, .005805, len(birthdayPitches))

# print(twinklePitches[:50])
dictionary1['pitches'] = twinklePitches[:max(len(twinklePitches), 100)]
# print(smooth_twinkle[:50])
dictionary1['smooths'] = (smooth_twinkle[:max(len(smooth_twinkle), 100)]).tolist()
# print(twinkleBeats[:20])
dictionary1['beats'] = twinkleBeats[:max(len(twinkleBeats), 100)]
# print(twinkle_pulse[300:1000])
dictionary1['pulse'] = (twinkle_pulse[300:max(len(twinkle_pulse), 1000)]).tolist()

with open("music_data.json", "w") as outfile:
    json.dump(dictionary1, outfile)

