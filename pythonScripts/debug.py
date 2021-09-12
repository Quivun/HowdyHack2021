import modify_ary
import music_analysis

twinklePitches = music_analysis.find_pitches_only("Twinkle-twinkle-Little-Star.wav")
birthdayBeats = music_analysis.find_beats("happy-birthday.wav")
birthdayPitches = music_analysis.find_pitches_only("happy-birthday.wav")

smooth_twinkle = modify_ary.smooth(twinklePitches, 2)

pulse_birthday = modify_ary.pulse(birthdayBeats, .005805, len(birthdayPitches))

print(twinklePitches[:50])
print(smooth_twinkle[:50])
print(birthdayBeats[:20])
print(pulse_birthday[300:1000])


