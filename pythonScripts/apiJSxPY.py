from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from youtubesearchpython import VideosSearch


app = Flask(__name__)
api = Api(app)
priorQueries = {}
# Return a youtube link
def video_link(Title):
    videosSearch = VideosSearch(Title, limit = 1)
    return(videosSearch.result()['result'][0]['link'])

class youtubeSearch(Resource):
    def memSaver(self):
        if (len(priorQueries) > 10):
            priorQueries.pop()
        return
    def get(self, title):
        self.memSaver()
        query = priorQueries.get(title)
        if (query):
            return {title: query},201
        priorQueries[title] = video_link(title)
        return {title: priorQueries[title]},201
    def put(self, title):
        self.memSaver()
        return

api.add_resource(youtubeSearch, '/<string:title>')
class index(Resource):
    def get(self):
        return {'index': 'default'}
api.add_resource(index, '/')

if __name__ == '__main__':
    app.run(debug=True)
