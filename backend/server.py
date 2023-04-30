from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api(app)

@app.route("/members")

class ML(Resource):
    def get(self):
        return {"data" : "Hello World"}
    
api.add_resource(ML,"/machine")

def members():
    return {"members": ['Member1','Member2',"Member3"]}

# set environment ctrl+shift+p then select interpreter
# Enter interpreter from path -> Find 
# select this file
# Project Adblock\ProjectAdBlock\backend\AdBlockEnv\Scripts\python.exe
# start server: python server.py

if __name__ == "__main__":
    app.run(debug=True)