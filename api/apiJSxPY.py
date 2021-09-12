from flask import Flask, json, jsonify, request
#from flask_restful import Resource, Api
app = Flask(__name__)


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