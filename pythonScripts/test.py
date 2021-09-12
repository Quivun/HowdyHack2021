# print("anything yall wanna experiment w/, do it here")
import requests

url = "https://youtube-to-mp4.p.rapidapi.com/url=&title"

querystring = {"url":"https://www.youtube.com/watch?v=IfNB5RTxnhI","title":"Call of Duty : Modern Warfare 2 Remastered - All Weapon Reload Animations in 4 Minutes"}

headers = {
'x-rapidapi-host': "youtube-to-mp4.p.rapidapi.com",
'x-rapidapi-key': "2c3b5a4a3cmsh6d69420296cde47p14f21djsn168c7a8ffa4c"
}

response = requests.request("GET", url, headers=headers, params=querystring)

print(response.text)