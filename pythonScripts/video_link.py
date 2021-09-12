from youtubesearchpython import VideosSearch

def video_link(Title):
    videosSearch = VideosSearch(Title, limit = 1)
    return(videosSearch.result()['result'][0]['link'])


