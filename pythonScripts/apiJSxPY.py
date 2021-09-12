from flask import Flask, json, jsonify, request
#from flask_restful import Resource, Api
app = Flask(__name__)
from youtubesearchpython import VideosSearch

def video_link(Title):
    videosSearch = VideosSearch(Title, limit = 1)
    return(videosSearch.result()['result'][0]['link'])






@app.route("/", methods=['GET','POST'])
def index():
    if (request.method == 'POST'):
        jsonReq = request.get_json()
        return jsonify({'Recieved':jsonReq}), 201
    else:
        return jsonify({'link':"youtube.dyayayayayayay"})

@app.route('/multi/<int:num>', methods=['GET'])
def getOutput(inpNum):
    return jsonify({'BlackBoxOutput':inpNum*20})

if __name__ == '__main__':
    app.run(debug=True)