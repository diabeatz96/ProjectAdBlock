from flask import Flask

app = Flask(__name__)

@app.route("/members")

def members():
    return {"members": ['Member1','Member2',"Member3"]}

# set environment ctrl+shift+p then select interpreter
# Enter interpreter from path -> Find 
# select this file
# Project Adblock\ProjectAdBlock\backend\AdBlockEnv\Scripts\python.exe
# start server: python server.py

if __name__ == "__main__":
    app.run(debug=True)